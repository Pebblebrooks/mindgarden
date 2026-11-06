// Eight-player rooms and in-app invitation delivery. Sessions are device identities, not accounts.
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const fail=(message,status=400)=>{throw Object.assign(new Error(message),{status})};
const modes={bingo9:9,pairs6:6,pairs10:10,sums:8,patterns:8,odd:8,sums12:12,patterns12:12,odd12:12};
const random=n=>Array.from(crypto.getRandomValues(new Uint8Array(n)),x=>x.toString(16).padStart(2,'0')).join('');
const code=()=>Array.from(crypto.getRandomValues(new Uint8Array(6)),x=>'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[x%32]).join('');
const query=(db,sql,...args)=>db.prepare(sql).bind(...args);
const one=(db,sql,...args)=>query(db,sql,...args).first();
const active=async(db,token)=>one(db,"SELECT a.code,r.host_token FROM mg_active_rooms a JOIN mg_rooms r ON r.code=a.code WHERE a.token=? AND r.status!='closed'",token);
const activeError=()=>fail('Leave your current room, or cancel it if you are the host, before joining or creating another.',409);
const all=async(db,sql,...args)=>(await query(db,sql,...args).all()).results;
export async function onRequest({request,env}){
 if(!env.DB)return json({error:'Online play is not configured.',errorCode:'SETUP'},503);
 const db=env.DB,now=Date.now();
 try{
  if(request.method!=='POST')return json({error:'POST required.'},405);
  const a=new URL(request.url).searchParams.get('action'),b=await request.json();
  if(a==='login'){
   const name=String(b.name||'').trim();
   if(!/^[\p{L}\p{N} ._'-]{1,20}$/u.test(name))fail('Enter a name (1–20 letters/numbers).');
   let session=typeof b.token==='string'?await one(db,'SELECT * FROM mg_sessions WHERE token=?',b.token):null;
   if(session){await query(db,'UPDATE mg_sessions SET name=?,last_seen=? WHERE token=?',name,now,b.token).run();return json({token:b.token,id:session.id,name})}
   const token=random(24),id=random(8);
   await query(db,'INSERT INTO mg_sessions VALUES(?,?,?,?,?)',token,id,name,now,now).run();
   return json({token,id,name});
  }
  if(typeof b.token!=='string'||! /^[0-9a-f]{48}$/.test(b.token))fail('Sign in to the online lobby first.',401);
  const session=await one(db,'SELECT * FROM mg_sessions WHERE token=?',b.token);
  if(!session)fail('Sign in to the online lobby first.',401);
  await query(db,'UPDATE mg_sessions SET last_seen=? WHERE token=?',now,b.token).run();
  await query(db,"UPDATE mg_rooms SET status='closed',closed_at=? WHERE status!='closed' AND created_at<=?",now,now-86400000).run();
  if(a==='logout'){if(await active(db,b.token))activeError();await query(db,'UPDATE mg_sessions SET last_seen=0 WHERE token=?',b.token).run();return json({ok:true})}
  if(a==='lounge'){
   const rooms=await all(db,`SELECT r.code,s.name AS host,r.created_at,
    (SELECT COUNT(*) FROM mg_active_rooms m WHERE m.code=r.code) AS players
    FROM mg_rooms r JOIN mg_sessions s ON s.token=r.host_token
    WHERE r.status='lobby' AND r.created_at>? AND s.last_seen>? ORDER BY r.created_at DESC LIMIT 30`,now-86400000,now-60000);
   // Include new arrivals in delivery tracking, without silently joining them.
   if(rooms.length)await db.batch(rooms.map(r=>query(db,'INSERT OR IGNORE INTO mg_invites(code,token) VALUES(?,?)',r.code,b.token)));
   return json({rooms,activeRoom:(await active(db,b.token))?.code||null,online:(await one(db,'SELECT COUNT(*) AS n FROM mg_sessions WHERE last_seen>?',now-45000)).n});
  }
  if(a==='ack'){
   const codes=Array.isArray(b.codes)?b.codes.slice(0,30):[];
   if(codes.length)await db.batch(codes.filter(c=>typeof c==='string').map(c=>query(db,'UPDATE mg_invites SET received_at=COALESCE(received_at,?) WHERE code=? AND token=?',now,c,b.token)));
   return json({ok:true});
  }
  if(a==='create'){
   const current=await active(db,b.token);if(current){if(current.host_token===b.token)return json({code:current.code});activeError()}
   await query(db,"UPDATE mg_rooms SET status='closed',closed_at=? WHERE host_token=? AND status!='closed' AND created_at<=?",now,b.token,now-86400000).run();
   // One open room per host prevents duplicate room creation after double taps/retries.
   const existing=await one(db,"SELECT code FROM mg_rooms WHERE host_token=? AND status!='closed' AND created_at>? ORDER BY created_at DESC LIMIT 1",b.token,now-86400000);
   if(existing)return json({code:existing.code});
   for(let i=0;i<5;i++){
    const c=code();
    try{await db.batch([
     query(db,'INSERT INTO mg_rooms(code,host_token,created_at,seed) VALUES(?,?,?,?)',c,b.token,now,crypto.getRandomValues(new Uint32Array(1))[0]),
     query(db,'INSERT INTO mg_active_rooms(token,code) VALUES(?,?)',b.token,c),
     query(db,'INSERT INTO mg_members(code,token,joined_at) VALUES(?,?,?)',c,b.token,now),
     query(db,'INSERT INTO mg_invites(code,token) SELECT ?,token FROM mg_sessions WHERE last_seen>? AND token!=?',c,now-45000,b.token)
    ]);return json({code:c})}catch(e){if(String(e).includes('mg_active_rooms.token')){const claimed=await active(db,b.token);if(claimed?.host_token===b.token)return json({code:claimed.code});activeError()}if(!String(e).includes('UNIQUE'))throw e;const won=await one(db,"SELECT code FROM mg_rooms WHERE host_token=? AND status!='closed'",b.token);if(won)return json({code:won.code})}
   }fail('Unable to create room. Please retry.',503);
  }
  const c=String(b.code||'').toUpperCase();if(!/^[A-Z2-9]{6}$/.test(c))fail('Enter a valid six-character room code.');
  let room=await one(db,'SELECT * FROM mg_rooms WHERE code=?',c);
  if(!room)fail('Room not found.',404);
  if(now-room.created_at>86400000)fail('This room has expired (24 hours). Create a new one.',410);
  if(a==='join'){
   if(room.status==='closed')fail('The host closed this room.',410);
   const current=await active(db,b.token);if(current&&current.code!==c)activeError();
   const member=await one(db,'SELECT token FROM mg_members WHERE code=? AND token=?',c,b.token);
   const left=await one(db,'SELECT token FROM mg_departures WHERE code=? AND token=?',c,b.token);
   if(member&&!left&&current?.code===c)return json({code:c});
   if(room.status!=='lobby')fail('This room has launched. Join another room.',409);
   if((await one(db,'SELECT COUNT(*) AS n FROM mg_active_rooms WHERE code=?',c)).n>=8)fail('This room already has eight players.',409);
   await db.batch([
    query(db,'INSERT INTO mg_active_rooms(token,code) VALUES(?,?)',b.token,c),
    query(db,'INSERT OR IGNORE INTO mg_members(code,token,joined_at) VALUES(?,?,?)',c,b.token,now),
    query(db,'DELETE FROM mg_departures WHERE code=? AND token=?',c,b.token)
   ]);
   return json({code:c});
  }
  if(!await one(db,'SELECT token FROM mg_members WHERE code=? AND token=?',c,b.token))fail('Join this room first.',403);
  const host=room.host_token===b.token;
  if(a==='leave'){
   if(host)fail('The host must cancel the room for everyone before leaving.',409);
   await db.batch([query(db,'INSERT OR IGNORE INTO mg_departures(code,token,left_at) VALUES(?,?,?)',c,b.token,now),query(db,'UPDATE mg_results SET skipped=1 WHERE code=? AND token=? AND score IS NULL',c,b.token),query(db,'DELETE FROM mg_active_rooms WHERE token=? AND code=?',b.token,c)]);return json({code:c,left:true});
  }
  if(await one(db,'SELECT token FROM mg_departures WHERE code=? AND token=?',c,b.token)){if(a==='status')return json({code:c,left:true});fail('You have left this room.',403)}
  if(['launch','advance','close','finishRound','bingoCall'].includes(a)&&!host)fail('Only the host can do this.',403);
  if(a==='close'){await query(db,"UPDATE mg_rooms SET status='closed',closed_at=? WHERE code=?",now,c).run();return json({closed:true})}
  if(room.status==='closed')return json({code:c,closed:true});
  if(a==='launch'||a==='advance'){
   if(!Object.hasOwn(modes,b.mode))fail('Choose an available activity.');
   const count=(await one(db,'SELECT COUNT(*) AS n FROM mg_active_rooms WHERE code=?',c)).n;
   if(count<2)fail('At least two players must join before launch.');
   const pending=(await one(db,'SELECT COUNT(*) AS n FROM mg_results WHERE code=? AND round=? AND score IS NULL AND skipped=0',c,room.round)).n;
   if(a==='advance'&&pending)fail('Wait for everyone, or end the current round.');
   if(a==='launch'&&room.status!=='lobby')fail('This room has already launched.',409);
   if(a==='advance'&&room.status!=='playing')fail('Launch the room first.',409);
   const r=await query(db,"UPDATE mg_rooms SET status='playing',round=round+1,mode=?,started_at=? WHERE code=? AND round=? AND status=?",b.mode,now,c,Number(b.round),a==='launch'?'lobby':'playing').run();
   if(r.meta.changes!==1)fail('Room advanced already. Refresh its status.',409);
   if(b.mode==='bingo9')await query(db,'INSERT OR IGNORE INTO mg_bingo_rounds(code,round) VALUES(?,?)',c,room.round+1).run();
  }else if(a==='bingoCall'||a==='bingoMark'){
   if(room.status!=='playing'||room.mode!=='bingo9'||Number(b.round)!==room.round)fail('Bingo round has changed; reopen the room.',409);
   const result=await one(db,'SELECT score,skipped FROM mg_results WHERE code=? AND round=? AND token=?',c,room.round,b.token);
   if(!result||result.skipped)fail('Your participation in this round has ended.',409);
   const round=await one(db,'SELECT called FROM mg_bingo_rounds WHERE code=? AND round=?',c,room.round);
   if(!round)fail('Bingo is starting. Try again.',409);
   if(a==='bingoCall'){
    if(!Number.isInteger(b.called)||b.called!==round.called||round.called>=9)fail('The call has changed, or all pictures have been called.',409);
    const r=await query(db,`UPDATE mg_bingo_rounds SET called=called+1 WHERE code=? AND round=? AND called=? AND called<9
     AND EXISTS(SELECT 1 FROM mg_rooms WHERE code=? AND round=? AND status='playing')`,c,room.round,b.called,c,room.round).run();
    if(r.meta.changes!==1)fail('The call has changed. Refresh the room.',409);
   }else{
    if(!Number.isInteger(b.index)||b.index<0||b.index>=round.called)fail('That picture has not been called.');
    await query(db,`INSERT INTO mg_bingo_marks(code,round,token,mask) VALUES(?,?,?,?)
     ON CONFLICT(code,round,token) DO UPDATE SET mask=mask|excluded.mask`,c,room.round,b.token,1<<b.index).run();
    const marked=await one(db,'SELECT mask FROM mg_bingo_marks WHERE code=? AND round=? AND token=?',c,room.round,b.token);
    if(marked.mask===511)await query(db,`UPDATE mg_results SET score=900,moves=9,elapsed=?
     WHERE code=? AND round=? AND token=? AND score IS NULL AND skipped=0`,Math.max(1,Math.round((now-room.started_at)/1000)),c,room.round,b.token).run();
   }
  }else if(a==='finishRound'){
   if(Number(b.round)!==room.round)fail('Round has changed; reopen the room.',409);
   await query(db,'UPDATE mg_results SET skipped=1 WHERE code=? AND round=? AND score IS NULL',c,room.round).run();
  }else if(a==='submit'){
   if(room.mode==='bingo9')fail('Mark the called bingo pictures to complete this round.');
   if(room.status!=='playing'||Number(b.round)!==room.round)fail('Round has changed; reopen the room.',409);
   const moves=Number(b.moves),elapsed=Number(b.elapsed),min=modes[room.mode];
   if(!Number.isInteger(moves)||moves<min||moves>1000||!Number.isInteger(elapsed)||elapsed<1||elapsed>86400)fail('Invalid game result.');
   if(now-room.started_at<1500)fail('Game result submitted too soon.',409);
   const score=Math.max(0,Math.round(3000-moves*40-Math.min(900,elapsed)*3));
   // Compare-and-set makes retries idempotent and prevents late submissions after host closure.
   await query(db,'UPDATE mg_results SET score=?,moves=?,elapsed=? WHERE code=? AND round=? AND token=? AND score IS NULL AND skipped=0',score,moves,elapsed,c,room.round,b.token).run();
  }else if(a!=='status')fail('Unknown action.',404);
  room=await one(db,'SELECT * FROM mg_rooms WHERE code=?',c);
  if(Number(b.seenRound)===room.round)await query(db,'UPDATE mg_members SET seen_round=? WHERE code=? AND token=?',room.round,c,b.token).run();
  const players=await all(db,`SELECT s.id,s.name,s.last_seen AS lastSeen,m.seen_round AS seenRound,
   CASE WHEN m.token=r.host_token THEN 1 ELSE 0 END AS host,
   q.score,q.moves,q.elapsed,q.skipped,COALESCE(bm.mask,0) AS bingoMask,
   CASE WHEN EXISTS(SELECT 1 FROM mg_departures d WHERE d.code=m.code AND d.token=m.token) THEN 1 ELSE 0 END AS departed,
   (SELECT COALESCE(SUM(score),0) FROM mg_results t WHERE t.code=m.code AND t.token=m.token) AS total
   FROM mg_members m JOIN mg_sessions s ON s.token=m.token JOIN mg_rooms r ON r.code=m.code
   LEFT JOIN mg_results q ON q.code=m.code AND q.token=m.token AND q.round=r.round
   LEFT JOIN mg_bingo_marks bm ON bm.code=m.code AND bm.token=m.token AND bm.round=r.round
   WHERE m.code=? ORDER BY m.joined_at,s.id`,c);
  const invitations=host?await all(db,`SELECT s.id,s.name,i.received_at AS receivedAt,s.last_seen AS lastSeen FROM mg_invites i JOIN mg_sessions s ON s.token=i.token WHERE i.code=? AND i.token!=?`,c,b.token):[];
  const bingo=room.mode==='bingo9'?await one(db,'SELECT called FROM mg_bingo_rounds WHERE code=? AND round=?',c,room.round):null;
  return json({bingo,code:c,round:room.round,mode:room.mode,seed:room.seed,status:room.status,started:room.status==='playing',host,me:session.id,players,invitations,serverTime:now,
   finished:room.round>0&&players.every(p=>p.departed||p.score!==null||p.skipped===1)});
 }catch(e){
  let msg=String(e.message||e),status=e.status||500;
  if(msg.includes('mg_active_rooms.token')){msg='Leave your current room, or cancel it if you are the host, before joining or creating another.';status=409}
  else if(msg.includes('ROOM_FULL')){msg='This room already has eight players.';status=409}
  else if(msg.includes('ROOM_STARTED')){msg='This room has launched. Join another room.';status=409}
  else if(/no such table/.test(msg)){msg='Run migrate-v3.sql and migrate-v3.8.5.sql in the D1 Console before using these room controls.';status=503}
  else if(!e.status&&status===500)msg='Online request failed. Please retry.';
  return json({error:msg},status);
 }
}
