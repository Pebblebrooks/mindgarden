import {roomRequestGuard,boundedJSON} from '../../shared/request-guard.js';
// Mind Garden v2.2: private, two-player, multi-round friendly rooms (Cloudflare Pages + D1).
const J=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}});
const goodName=s=>typeof s==='string'&&s.trim().length>=1&&s.trim().length<=20&&/^[\p{L}\p{N} ._'-]+$/u.test(s.trim());
const codeOK=s=>typeof s==='string'&&/^[A-Z2-9]{6}$/.test(s);
const tokenOK=s=>typeof s==='string'&&/^[0-9a-f]{32}$/.test(s);
const token=()=>Array.from(crypto.getRandomValues(new Uint8Array(16)),x=>x.toString(16).padStart(2,'0')).join('');
const ABC='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const roomCode=()=>Array.from(crypto.getRandomValues(new Uint8Array(6)),x=>ABC[x%ABC.length]).join('');
const MODES={pairs6:{label:'Matching pairs · 6 pairs',count:6},pairs10:{label:'Matching pairs · 10 pairs',count:10},sums:{label:'Friendly mental sums · 8 questions',count:8},patterns:{label:'Number patterns · 8 questions',count:8},odd:{label:'Odd one out · 8 questions',count:8},sums12:{label:'Mental sums · 12 questions',count:12},patterns12:{label:'Number patterns · 12 questions',count:12},odd12:{label:'Odd one out · 12 questions',count:12}};
async function find(DB,code){return DB.prepare('SELECT * FROM rooms WHERE code=?').bind(code).first()}
const role=(r,t)=>r.host_token===t?'host':r.guest_token===t?'guest':null;
const view=(r,who)=>({code:r.code,role:who,host:r.host_name,guest:r.guest_name||null,seed:r.seed,started:!!r.started_at,round:r.round_number||1,mode:r.game_type||'pairs6',hostDone:r.host_score!==null,guestDone:r.guest_score!==null,hostScore:r.host_score,guestScore:r.guest_score,hostMoves:r.host_moves,guestMoves:r.guest_moves,hostElapsed:r.host_elapsed,guestElapsed:r.guest_elapsed,hostTotal:r.host_total||0,guestTotal:r.guest_total||0,finished:r.host_score!==null&&r.guest_score!==null});
export async function onRequest({request,env}){
 if(!env.DB)return J({error:'Database binding DB is not configured.'},503);
 try{
  const u=new URL(request.url),action=u.searchParams.get('action')==='health'?'health':request.method==='GET'?'status':u.searchParams.get('action');
  if(!['GET','POST'].includes(request.method))return J({error:'Method not allowed'},405);
  const blocked=await roomRequestGuard(request,env.DB,action);if(blocked)return blocked;
  const b=request.method==='POST'?await boundedJSON(request):Object.fromEntries(u.searchParams);
  if(action==='health'){const cols=await env.DB.prepare('PRAGMA table_info(rooms)').all();const found=new Set((cols.results||[]).map(x=>x.name));const required=['round_number','game_type','host_total','guest_total'];return J({ok:required.every(x=>found.has(x)),database:'connected',missingColumns:required.filter(x=>!found.has(x))})}
  if(action==='create'){
   if(!goodName(b.name))return J({error:'Enter a name (1–20 letters/numbers).'},400);
   const name=b.name.trim(),t=token(),seed=crypto.getRandomValues(new Uint32Array(1))[0];
   for(let i=0;i<5;i++){
    const code=roomCode();
    try{await env.DB.prepare('INSERT INTO rooms(code,host_name,host_token,seed,created_at,round_number,game_type) VALUES(?,?,?,?,?,1,?)').bind(code,name,t,seed,Date.now(),'pairs6').run();return J({code,token:t,role:'host'})}catch(e){if(!String(e).includes('UNIQUE'))throw e}
   }
   return J({error:'Unable to create room. Please retry.'},503);
  }
  if(!codeOK(b.code))return J({error:'Enter a valid six-character room code.'},400);
  let r=await find(env.DB,b.code);
  if(!r)return J({error:'Room not found.'},404);
  if(Date.now()-r.created_at>24*3600*1000)return J({error:'This room has expired (24 hours). Create a new one.'},410);
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
  if(action==='advance'){
   if(who!=='host')return J({error:'Only the host can choose the next activity.'},403);
   if(!r.started_at||r.host_score===null||r.guest_score===null)return J({error:'Both players must finish before starting another activity.'},409);
   if(!Object.hasOwn(MODES,b.mode))return J({error:'Choose an available activity.'},400);
   if(Number(b.round)!==(r.round_number||1))return J({error:'Room advanced already. Refresh its status.'},409);
   const q=await env.DB.prepare('UPDATE rooms SET round_number=round_number+1,game_type=?,host_score=NULL,guest_score=NULL,host_moves=NULL,guest_moves=NULL,host_elapsed=NULL,guest_elapsed=NULL WHERE code=? AND round_number=? AND host_score IS NOT NULL AND guest_score IS NOT NULL').bind(b.mode,b.code,r.round_number).run();
   if(q.meta.changes!==1)return J({error:'Room already advanced; try again.'},409);
   r=await find(env.DB,b.code);return J(view(r,who));
  }
  if(action==='submit'){
   if(!r.started_at)return J({error:'Waiting for second player.'},409);
   if(Number(b.round)!==(r.round_number||1))return J({error:'Round has changed; reopen the room.'},409);
   if(r[`${who}_score`]!==null)return J(view(r,who));
   const mode=MODES[r.game_type||'pairs6'];
   const moves=Number(b.moves),elapsed=Number(b.elapsed);
   const min=mode.count;
   if(!Number.isInteger(moves)||moves<min||moves>1000||!Number.isInteger(elapsed)||elapsed<0||elapsed>3600)return J({error:'Invalid game result.'},400);
   if(Date.now()-r.started_at<2000)return J({error:'Game result submitted too soon.'},409);
   // Scores are friendly, browser-reported achievements; do not treat as clinical metrics.
   const score=Math.max(0,Math.round(3000-moves*40-Math.min(900,elapsed)*3));
   const q=await env.DB.prepare(`UPDATE rooms SET ${who}_score=?,${who}_moves=?,${who}_elapsed=?,${who}_total=COALESCE(${who}_total,0)+? WHERE code=? AND round_number=? AND ${who}_score IS NULL`).bind(score,moves,elapsed,score,b.code,r.round_number).run();
   if(q.meta.changes!==1)return J({error:'Result changed; refresh the room.'},409);
   r=await find(env.DB,b.code);return J(view(r,who));
  }
  return J({error:'Unknown action.'},404);
 }catch(e){
  if(e.status===413)return J({error:e.message},413);
  const message=String(e&&e.message||e);
  if(/no such column|has no column named|table rooms has no column/i.test(message))return J({error:'The multiplayer database schema is outdated. Open the D1 Console and apply only the missing columns from migrate-v2.2.sql.'},500);
  if(/no such table/i.test(message))return J({error:'Multiplayer tables are missing. Run schema.sql in the D1 Console.'},500);
  return J({error:'Multiplayer request failed on the server. Check Pages Functions logs for the underlying error.'},500);
 }
}
