import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
const {DB,sqlite}=database(),api=client(DB);
try{
 const host=await api('login',{name:'Alexander'}),guest=await api('login',{name:'Boris'}),late=await api('login',{name:'Terri'});
 const {code}=await api('create',{...host,groupFlow:true,mode:'pairs6',requestId:'group-flow-1'});
 await api('join',{...guest,code});let state=await api('status',{...host,code});assert(state.groupFlow);assert.equal(state.mode,'pairs6');
 const args=()=>({...host,code,round:state.round,revision:state.revision,mode:state.mode});
 await api('launch',args(),409);await api('ready',{...guest,code,revision:state.revision});
 state=await api('configure',{...args(),mode:'pairs10'});assert(!state.players.find(p=>p.id===guest.id).ready);
 await api('ready',{...guest,code,revision:1},409);await api('configure',{...guest,code,round:0,revision:state.revision,mode:'pairs6'},403);
 await api('ready',{...guest,code,revision:state.revision});await api('join',{...late,code});await api('launch',args(),409);
 await api('ready',{...late,code,revision:state.revision});state=await api('launch',args());assert(state.started);assert.equal(state.round,1);assert(state.startsAt>state.serverTime);assert(state.players.every(p=>p.beganAt===state.startsAt));
 await api('submit',{...guest,code,round:1,moves:10,elapsed:1},409);
 sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,code);
 for(const u of [host,guest,late])state=await api('submit',{...u,code,round:1,moves:10,elapsed:5});assert(state.finished);assert(!state.sessionFinished);
 state=await api('configure',{...args(),mode:'times8'});assert(!state.started);assert(!state.finished);assert.equal(state.players.filter(p=>p.ready).length,1);assert.equal(state.players.length,3);
 for(const u of [guest,late])await api('ready',{...u,code,revision:state.revision});state=await api('launch',args());assert.equal(state.round,2);
 await api('configure',{...args(),mode:'pairs6'},409);
 state=await api('finishRound',{...host,code,round:2});assert(state.finished);state=await api('finishSession',{...host,code,round:2});assert(state.sessionFinished);
 assert.equal((await api('history',host)).rooms[0].code,code);
 const eight=[host,guest,late];for(let i=3;i<8;i++)eight.push(await api('login',{name:'Player '+i}));
 for(const mode of ['pairs6','pairs10','sums','sums12','patterns','patterns12','odd','odd12','bingo9','times8','gaps8','change8','calendar8','shapes8','picture8','words8','groups8']){
  const made=await api('create',{...host,groupFlow:true,mode,requestId:'all-modes-'+mode});const c=made.code;
  for(const u of eight.slice(1)){await api('join',{...u,code:c});await api('ready',{...u,code:c,revision:(await api('status',{...u,code:c})).revision})}
  const lobby=await api('status',{...host,code:c});const playing=await api('launch',{...host,code:c,round:0,mode,revision:lobby.revision});assert.equal(playing.players.length,8);assert(playing.players.every(p=>p.beganAt===playing.startsAt));
  if(mode==='bingo9'){await api('bingoCall',{...host,code:c,round:1,called:1},409);sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-1000,c);assert.equal((await api('bingoCall',{...host,code:c,round:1,called:1})).bingo.called,2)}
  await api('close',{...host,code:c});
 }
 console.log('PASS all 17 group variants with eight players, including Bingo countdown guard.');
 console.log('PASS group readiness, stale revisions, permission checks, late joins, shared start, early submission guard, replay setup, retained players/results and finish.');
}finally{sqlite.close()}
