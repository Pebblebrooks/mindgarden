import {generateRegistrationOptions,verifyRegistrationResponse,generateAuthenticationOptions,verifyAuthenticationResponse} from './webauthn-server.js';
const enc=new TextEncoder(),flowCookie='__Host-mg_passkey';
const q=(db,sql,...args)=>db.prepare(sql).bind(...args);
const base64=bytes=>btoa(String.fromCharCode(...bytes));
const unbase64=text=>Uint8Array.from(atob(text),x=>x.charCodeAt(0));
const fromURL=text=>unbase64(text.replace(/-/g,'+').replace(/_/g,'/'));
export async function passkeysAvailable(db){return !!await q(db,"SELECT name FROM sqlite_master WHERE type='table' AND name='mg_account_passkeys'").first()&&!!await q(db,"SELECT name FROM sqlite_master WHERE type='table' AND name='mg_passkey_challenges'").first()}
export async function passkeyAction(ctx){
 const {request,db,action,b,now,account,tokenHash,fail,reply,limit,digest,random,checkPassword,issueSession}=ctx;
 if(!await passkeysAvailable(db))fail('Device sign-in is not available yet. Use your password.',503,'PASSKEY_SETUP');
 const origin=new URL(request.url).origin,rpID=new URL(origin).hostname;
 if(new URL(origin).protocol!=='https:')fail('Device sign-in needs HTTPS.',400,'PASSKEY_SETUP');
 await limit(db,'passkey-ip:'+(request.headers.get('CF-Connecting-IP')||'unknown'),30,600000,now);
 await q(db,'DELETE FROM mg_passkey_challenges WHERE expires_at<?',now).run();
 const auth=action.startsWith('passkey-signin-');
 if(!auth&&!account)fail('Sign in first to set up device sign-in.',401,'SIGNIN');
 if(action==='passkey-list'){
  const rows=await q(db,'SELECT id,created_at FROM mg_account_passkeys WHERE account_id=? AND rp_id=? ORDER BY created_at',account.id,rpID).all();return reply({passkeys:rows.results});
 }
 if(action==='passkey-remove'){
  await checkPassword(account,b.password);
  await q(db,'DELETE FROM mg_account_passkeys WHERE id=? AND account_id=? AND rp_id=?',String(b.id||''),account.id,rpID).run();return reply({ok:true});
 }
 if(action==='passkey-register-options'||action==='passkey-signin-options'){
  let options,binding,secret;
  if(auth){
   secret=random();binding=await digest(secret);options=await generateAuthenticationOptions({rpID,userVerification:'required',allowCredentials:[]});
  }else{
   await checkPassword(account,b.password);
   const rows=(await q(db,'SELECT id,transports FROM mg_account_passkeys WHERE account_id=? AND rp_id=?',account.id,rpID).all()).results;
   if(rows.length>=10)fail('Remove an old device sign-in before adding another.',400,'PASSKEY_LIMIT');
   binding=tokenHash;options=await generateRegistrationOptions({rpName:'Mind Garden',rpID,userName:account.username,userID:enc.encode(account.id),attestationType:'none',supportedAlgorithmIDs:[-7,-257],authenticatorSelection:{residentKey:'required',userVerification:'required',authenticatorAttachment:'platform'},excludeCredentials:rows.map(r=>({id:r.id,transports:JSON.parse(r.transports)}))});
  }
  const id=random();await q(db,'INSERT INTO mg_passkey_challenges VALUES(?,?,?,?,?,?,?)',id,auth?'signin':'register',account?.id||null,binding,options.challenge,origin,now+300000).run();
  return reply({id,options},200,auth?`${flowCookie}=${secret}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=300`:undefined);
 }
 if(action!=='passkey-register-verify'&&action!=='passkey-signin-verify')fail('Unknown device sign-in action.');
 if(typeof b.id!=='string'||!/^[0-9a-f]{64}$/.test(b.id)||!b.response||typeof b.response.id!=='string'||b.response.id.length>2048)fail('Device sign-in could not be verified. Try again.',400,'PASSKEY_VERIFY');
 const flow=request.headers.get('Cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(flowCookie+'='))?.slice(flowCookie.length+1)||'';
 const binding=auth?await digest(flow):tokenHash;
 // Consume before cryptographic verification. Replays and concurrent submissions cannot reuse a challenge.
 const challenge=await q(db,'DELETE FROM mg_passkey_challenges WHERE id=? AND kind=? AND binding=? AND origin=? AND expires_at>? RETURNING *',b.id,auth?'signin':'register',binding,origin,now).first();
 if(!challenge||(!auth&&challenge.account_id!==account.id))fail('Device sign-in expired. Try again.',400,'PASSKEY_VERIFY');
 const expected={expectedChallenge:challenge.challenge,expectedOrigin:origin,expectedRPID:rpID,requireUserVerification:true};
 let verified;
 if(!auth){
  try{verified=await verifyRegistrationResponse({response:b.response,...expected})}catch{fail('Device sign-in could not be verified. Try again.',400,'PASSKEY_VERIFY')}
  if(!verified.verified||!verified.registrationInfo)fail('Device verification is required.',400,'PASSKEY_VERIFY');
  const c=verified.registrationInfo.credential;
  try{await q(db,'INSERT INTO mg_account_passkeys VALUES(?,?,?,?,?,?,?)',c.id,account.id,rpID,base64(c.publicKey),c.counter,JSON.stringify(c.transports||[]),now).run()}catch{fail('This passkey is already registered. Use it to sign in.',409,'PASSKEY_VERIFY')}
  return reply({ok:true});
 }
 const saved=await q(db,'SELECT p.*,a.username FROM mg_account_passkeys p JOIN mg_accounts a ON a.id=p.account_id WHERE p.id=? AND p.rp_id=?',b.response.id,rpID).first();
 if(!saved)fail('Device sign-in could not be verified. Use your password.',401,'PASSKEY_VERIFY');
 try{
  if(!b.response.response?.userHandle||new TextDecoder().decode(fromURL(b.response.response.userHandle))!==saved.account_id)throw Error('Wrong account');
  verified=await verifyAuthenticationResponse({response:b.response,...expected,credential:{id:saved.id,publicKey:unbase64(saved.public_key),counter:saved.counter,transports:JSON.parse(saved.transports)}});
 }catch{fail('Device sign-in could not be verified. Use your password.',401,'PASSKEY_VERIFY')}
 if(!verified.verified)fail('Device verification is required.',401,'PASSKEY_VERIFY');
 const updated=await q(db,'UPDATE mg_account_passkeys SET counter=? WHERE id=? AND counter=?',verified.authenticationInfo.newCounter,saved.id,saved.counter).run();
 if(updated.meta.changes!==1)fail('Device sign-in changed. Please try again.',401,'PASSKEY_VERIFY');
 const result=await issueSession({id:saved.account_id,username:saved.username});result.headers.append('Set-Cookie',`${flowCookie}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`);return result;
}
