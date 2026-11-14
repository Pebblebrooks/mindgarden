import {passkeyAction,passkeysAvailable} from '../lib/passkey-actions.js';
// Account-scoped profile snapshots. Multiplayer device tokens never authorize this API.
const COOKIE='__Host-mg_account',MAX=4*1024*1024,TTL=30*86400000;
const enc=new TextEncoder(),hex=b=>Array.from(new Uint8Array(b),x=>x.toString(16).padStart(2,'0')).join('');
const random=()=>hex(crypto.getRandomValues(new Uint8Array(32)));
const q=(db,sql,...args)=>db.prepare(sql).bind(...args);
const fail=(message,status=400,code='INVALID')=>{throw Object.assign(new Error(message),{status,code})};
const digest=async x=>hex(await crypto.subtle.digest('SHA-256',enc.encode(x)));
async function passwordHash(password,salt,pepper){
 const material=await crypto.subtle.importKey('raw',enc.encode(password+'\0'+pepper),'PBKDF2',false,['deriveBits']);
 return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:enc.encode(salt),iterations:100000,hash:'SHA-512'},material,512));
}
function equal(a,b){if(a.length!==b.length)return false;let n=0;for(let i=0;i<a.length;i++)n|=a.charCodeAt(i)^b.charCodeAt(i);return n===0}
function reply(data,status=200,cookie){const headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'};if(cookie)headers['Set-Cookie']=cookie;return new Response(JSON.stringify(data),{status,headers})}
const cookie=(token,age)=>`${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${age}`;
async function body(request){const reader=request.body?.getReader();if(!reader)fail('A JSON body is required.');const chunks=[];let n=0;while(true){const {done,value}=await reader.read();if(done)break;n+=value.length;if(n>MAX){await reader.cancel();fail('Profile backup exceeds 4 MB. Export your local backup before continuing.',413,'SIZE')}chunks.push(value)}const bytes=new Uint8Array(n);let i=0;for(const c of chunks){bytes.set(c,i);i+=c.length}let b;try{b=JSON.parse(new TextDecoder().decode(bytes))}catch{fail('Invalid JSON.')}if(!b||typeof b!=='object'||Array.isArray(b))fail('Invalid request.');return b}
async function pack(document){const bytes=new Uint8Array(await new Response(new Blob([JSON.stringify(document)]).stream().pipeThrough(new CompressionStream('gzip'))).arrayBuffer());let raw='';for(let i=0;i<bytes.length;i+=8192)raw+=String.fromCharCode(...bytes.subarray(i,i+8192));const stored='gzip:'+btoa(raw);if(stored.length>1800000)fail('Compressed profile storage is full. Export your local backup before continuing.',413,'SIZE');return stored}
async function unpack(stored){if(!stored.startsWith('gzip:'))return JSON.parse(stored);const bytes=Uint8Array.from(atob(stored.slice(5)),x=>x.charCodeAt(0));return JSON.parse(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'))).text())}
function cleanDocument(data){
 if(!data||data.schemaVersion!==1||!data.profiles||Array.isArray(data.profiles)||typeof data.profiles!=='object')fail('Invalid player backup.');
 const entries=Object.entries(data.profiles);if(entries.length>100)fail('An account supports up to 100 players.');
 function safe(value,depth=0){if(depth>18)fail('Profile nesting is too deep.');if(value===null||typeof value==='boolean')return;if(typeof value==='number'){if(!Number.isFinite(value))fail('Invalid number.');return}if(typeof value==='string'){if(/[<>]/.test(value))fail('Profile text must not contain HTML.');if(value.length>100000)fail('Profile field is too large.');return}if(typeof value!=='object')fail('Invalid profile field.');for(const [key,v]of Object.entries(value)){if(['__proto__','constructor','prototype'].includes(key))fail('Invalid profile key.');safe(v,depth+1)}}
 safe(data);
 for(const [id,p]of entries){if(!/^[a-zA-Z0-9_-]{1,100}$/.test(id)||!p||Array.isArray(p)||typeof p.name!=='string'||!p.name.trim()||p.name.length>60||!Array.isArray(p.log)||!p.stars||typeof p.stars!=='object')fail('Invalid player profile.');if(p.av&&!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(p.av))fail('Invalid player image.');}
 return {schemaVersion:1,profiles:data.profiles};
}
async function limit(db,key,max,span,now){const bucket=await digest(key+':'+Math.floor(now/span));await q(db,'INSERT INTO mg_account_limits(bucket,attempts,expires_at) VALUES(?,1,?) ON CONFLICT(bucket) DO UPDATE SET attempts=attempts+1',bucket,now+span).run();const row=await q(db,'SELECT attempts FROM mg_account_limits WHERE bucket=?',bucket).first();if(row.attempts>max)fail('Too many attempts. Please try again later.',429,'RATE');}
export async function onRequest({request,env}){
 if(!env.DB||typeof env.MG_ACCOUNT_PEPPER!=='string'||env.MG_ACCOUNT_PEPPER.length<32)return reply({error:'Account saving is not configured yet.',code:'SETUP'},503);
 const db=env.DB,now=Date.now();
 try{
  if(request.method!=='POST')fail('POST required.',405);
  if(request.headers.get('Origin')!==new URL(request.url).origin||!request.headers.get('Content-Type')?.startsWith('application/json'))fail('Request origin rejected.',403,'ORIGIN');
  const action=new URL(request.url).searchParams.get('action'),b=await body(request);
  async function issueSession(user){const t=random();await q(db,'INSERT INTO mg_account_sessions VALUES(?,?,?)',await digest(t),user.id,now+TTL).run();return reply({account:user},200,cookie(t,TTL/1000))}
  async function checkPassword(user,password){await limit(db,'reauth:'+user.id,10,600000,now);if(typeof password!=='string'||password.length>128)fail('Enter your current password.',401,'REAUTH');const row=await q(db,'SELECT * FROM mg_accounts WHERE username=?',user.username).first();if(!row||!equal(await passwordHash(password,row.salt,env.MG_ACCOUNT_PEPPER),row.password_hash))fail('Enter your current account password to continue.',401,'REAUTH')}
  const pk={request,db,action,b,now,fail,reply,limit,digest,random,checkPassword,issueSession};
  if(action==='passkey-status')return reply({available:await passkeysAvailable(db)});
  if(action==='passkey-signin-options'||action==='passkey-signin-verify')return await passkeyAction(pk);
  if(['signup','signin','recover'].includes(action)){
   const username=String(b.username||'').trim().toLowerCase(),password=b.password;
   if(!/^[a-z0-9][a-z0-9_.-]{2,39}$/.test(username))fail('Use an account name of 3–40 letters, numbers, dots, dashes or underscores.');
   if(typeof password!=='string'||password.length<(action==='signin'?1:10)||password.length>128)fail('Use a password of 10–128 characters.');
   const ip=request.headers.get('CF-Connecting-IP')||'unknown';
   await limit(db,'auth-ip:'+ip,30,600000,now);await limit(db,'auth-name:'+username,10,600000,now);
   let account=await q(db,'SELECT * FROM mg_accounts WHERE username=?',username).first(),recovery;
   if(action==='signup'){
    if(env.MG_ACCOUNT_SIGNUP!=='enabled')fail('New account registration is not enabled.',403,'REGISTRATION');
    await limit(db,'register:'+ip,4,3600000,now);
    if(account)fail('That account name is unavailable.',409);
    const id=random(),salt=random();recovery=b.generateRecovery===false?undefined:random();const hash=await passwordHash(password,salt,env.MG_ACCOUNT_PEPPER);
    try{await db.batch([q(db,'INSERT INTO mg_accounts VALUES(?,?,?,?,?,?)',id,username,salt,hash,await digest(recovery||random()),now),q(db,'INSERT INTO mg_account_profiles(account_id,updated_at) VALUES(?,?)',id,now)])}catch(e){if(String(e).includes('UNIQUE'))fail('That account name is unavailable.',409);throw e}account={id,username};
   }else if(action==='recover'){
    if(!account||typeof b.recovery!=='string'||!equal(await digest(b.recovery.trim()),account.recovery_hash))fail('Account name or recovery key is incorrect.',401,'CREDENTIALS');
    const salt=random();recovery=random();await db.batch([q(db,'UPDATE mg_accounts SET salt=?,password_hash=?,recovery_hash=? WHERE id=?',salt,await passwordHash(password,salt,env.MG_ACCOUNT_PEPPER),await digest(recovery),account.id),q(db,'DELETE FROM mg_account_sessions WHERE account_id=?',account.id),...(await passkeysAvailable(db)?[q(db,'DELETE FROM mg_account_passkeys WHERE account_id=?',account.id),q(db,'DELETE FROM mg_passkey_challenges WHERE account_id=?',account.id)]:[])]);
   }else{
    const hash=await passwordHash(password,account?.salt||'invalid-account-salt',env.MG_ACCOUNT_PEPPER);
    if(!account||!equal(hash,account.password_hash))fail('Account name or password is incorrect.',401,'CREDENTIALS');
   }
   const token=random();await q(db,'INSERT INTO mg_account_sessions VALUES(?,?,?)',await digest(token),account.id,now+TTL).run();
   await q(db,'DELETE FROM mg_account_sessions WHERE expires_at<?',now).run();await q(db,'DELETE FROM mg_account_limits WHERE expires_at<?',now).run();
   return reply({account:{id:account.id,username},...(recovery?{recovery}: {})},200,cookie(token,TTL/1000));
  }
  const token=request.headers.get('Cookie')?.split(';').map(s=>s.trim()).find(s=>s.startsWith(COOKIE+'='))?.slice(COOKIE.length+1)||'';
  if(!/^[0-9a-f]{64}$/.test(token))fail('Sign in to your account.',401,'SIGNIN');
  const tokenHash=await digest(token),account=await q(db,'SELECT a.id,a.username FROM mg_accounts a JOIN mg_account_sessions s ON s.account_id=a.id WHERE s.token_hash=? AND s.expires_at>?',tokenHash,now).first();
  if(!account)fail('Your session has expired. Sign in again.',401,'SIGNIN');
  if(action==='signout'){await q(db,'DELETE FROM mg_account_sessions WHERE token_hash=?',tokenHash).run();return reply({ok:true},200,cookie('',0))}
  await limit(db,'account:'+account.id,120,60000,now);
  if(action==='verify-owner'){await checkPassword(account,b.password);return reply({ok:true})}
  if(action.startsWith('passkey-'))return await passkeyAction({...pk,account,tokenHash});
  if(action==='recovery-key'){
   if(typeof b.password!=='string'||b.password.length>128)fail('Enter your current password.');
   await limit(db,'recovery-key:'+account.id,10,600000,now);
   const credentials=await q(db,'SELECT * FROM mg_accounts WHERE username=?',account.username).first();
   if(!equal(await passwordHash(b.password,credentials.salt,env.MG_ACCOUNT_PEPPER),credentials.password_hash))fail('Account name or password is incorrect.',401,'CREDENTIALS');
   const recovery=random();await q(db,'UPDATE mg_accounts SET recovery_hash=? WHERE id=?',await digest(recovery),account.id).run();
   return reply({recovery});
  }
  if(action==='save'){
   if(!Number.isSafeInteger(b.revision)||b.revision<0)fail('A saved revision is required.');const document=await pack(cleanDocument(b.document));
   const result=await q(db,'UPDATE mg_account_profiles SET document=?,revision=revision+1,updated_at=? WHERE account_id=? AND revision=?',document,now,account.id,b.revision).run();
   if(result.meta.changes!==1)fail('Another device saved newer changes. Review the conflict before saving.',409,'CONFLICT');
   return reply({revision:b.revision+1,updatedAt:now});
  }
  if(['state','export'].includes(action)){
   const row=await q(db,'SELECT document,revision,updated_at FROM mg_account_profiles WHERE account_id=?',account.id).first();
   return reply({account,revision:row.revision,updatedAt:row.updated_at,document:await unpack(row.document),...(action==='export'?{format:'mind-garden-account-backup',exportedAt:new Date(now).toISOString()}: {})});
  }
  fail('Unknown account action.');
 }catch(e){if(e.status)return reply({error:e.message,code:e.code},e.status);return reply({error:'Account storage is unavailable. Your local changes are retained.',code:'STORAGE'},503)}
}
