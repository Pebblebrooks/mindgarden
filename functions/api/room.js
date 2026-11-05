// Two-player invitation rooms. Scores are for friendly play, not prize-bearing rankings.
const J = (data,status=200) => new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}});
const goodName=s=>typeof s==='string'&&s.trim().length>=1&&s.trim().length<=20&&/^[\p{L}\p{N} ._'-]+$/u.test(s.trim());
const codeOK=s=>typeof s==='string'&&/^[A-Z2-9]{6}$/.test(s);
const tokenOK=s=>typeof s==='string'&&/^[0-9a-f]{32}$/.test(s);
const token=()=>Array.from(crypto.getRandomValues(new Uint8Array(16)),x=>x.toString(16).padStart(2,'0')).join('');
const ABC='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const roomCode=()=>Array.from(crypto.getRandomValues(new Uint8Array(6)),x=>ABC[x%ABC.length]).join('');
async function find(DB,code){return DB.prepare('SELECT * FROM rooms WHERE code=?').bind(code).first()}
const role=(room,t)=>room.host_token===t?'host':room.guest_token===t?'guest':null;
const view=(r,who)=>({code:r.code,role:who,host:r.host_name,guest:r.guest_name||null,seed:r.seed,started:!!r.started_at,hostDone:r.host_score!==null,guestDone:r.guest_score!==null,hostScore:r.host_score,guestScore:r.guest_score,hostMoves:r.host_moves,guestMoves:r.guest_moves,hostElapsed:r.host_elapsed,guestElapsed:r.guest_elapsed,finished:r.host_score!==null&&r.guest_score!==null});
export async function onRequest({request,env}){
 if(!env.DB)return J({error:'Database binding DB is not configured.'},503);
 try{
  const u=new URL(request.url);const action=request.method==='GET'?'status':u.searchParams.get('action');
  if(request.method!=='GET'&&request.method!=='POST')return J({error:'Method not allowed'},405);
  const b=request.method==='POST'?await request.json():Object.fromEntries(u.searchParams);
  if(action==='create'){
   if(!goodName(b.name))return J({error:'Enter a name (1–20 letters/numbers).'},400);
   const name=b.name.trim(),t=token(),seed=crypto.getRandomValues(new Uint32Array(1))[0];
   for(let i=0;i<5;i++){
    const code=roomCode();
    try{await env.DB.prepare('INSERT INTO rooms(code,host_name,host_token,seed,created_at) VALUES(?,?,?,?,?)').bind(code,name,t,seed,Date.now()).run();return J({code,token:t,role:'host'})}catch(e){if(!String(e).includes('UNIQUE'))throw e}
   }
   return J({error:'Unable to create room. Please retry.'},503);
  }
  if(!codeOK(b.code))return J({error:'Enter a valid six-character room code.'},400);
  let r=await find(env.DB,b.code);
  if(!r)return J({error:'Room not found.'},404);
  if(Date.now()-r.created_at>24*3600*1000)return J({error:'This invitation has expired. Create a new room.'},410);
  if(action==='join'){
   if(!goodName(b.name))return J({error:'Enter a name (1–20 letters/numbers).'},400);
   if(r.guest_token)return J({error:'This room already has two players.'},409);
   const t=token();
   const result=await env.DB.prepare('UPDATE rooms SET guest_name=?,guest_token=?,started_at=? WHERE code=? AND guest_token IS NULL').bind(b.name.trim(),t,Date.now(),b.code).run();
   if(result.meta.changes!==1)return J({error:'Another player joined first.'},409);
   return J({code:b.code,token:t,role:'guest'});
  }
  if(!tokenOK(b.token))return J({error:'A player session is required.'},401);
  const who=role(r,b.token);
  if(!who)return J({error:'Your player session is invalid.'},403);
  if(action==='status')return J(view(r,who));
  if(action==='submit'){
   if(!r.started_at)return J({error:'Waiting for second player.'},409);
   if(r[`${who}_score`]!==null)return J(view(r,who));
   const moves=Number(b.moves),elapsed=Number(b.elapsed);
   if(!Number.isInteger(moves)||moves<6||moves>1000||!Number.isInteger(elapsed)||elapsed<0||elapsed>3600)return J({error:'Invalid game result.'},400);
   // Server verifies a minimum duration and that at least six moves were made.
   // The browser still reports moves; this is NOT a tamper-proof ranking system.
   const minimum=Math.floor((Date.now()-r.started_at)/1000);
   if(minimum<2)return J({error:'Game result submitted too soon.'},409);
   const score=Math.max(0,Math.round(3000-moves*40-Math.min(900,elapsed)*3));
   await env.DB.prepare(`UPDATE rooms SET ${who}_score=?,${who}_moves=?,${who}_elapsed=? WHERE code=? AND ${who}_score IS NULL`).bind(score,moves,elapsed,b.code).run();
   r=await find(env.DB,b.code);return J(view(r,who));
  }
  return J({error:'Unknown action.'},404);
 }catch(e){return J({error:'Request could not be processed.'},500)}
}
