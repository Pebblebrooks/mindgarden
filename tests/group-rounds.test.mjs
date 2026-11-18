// v6.3.1 (D-11): the host may plan a number of rounds; none means keep playing.
import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
const {DB,sqlite}=database(),api=client(DB);
let n=0;const make=async(host,extra={})=>(await api('create',{...host,groupFlow:true,mode:'sums',requestId:'rounds-test-'+(++n),...extra})).code;
const play=async(host,guest,code)=>{let s=await api('status',{...host,code});await api('ready',{...guest,code,revision:s.revision});
 s=await api('launch',{...host,code,round:s.round,revision:s.revision,mode:'sums'});await api('finishRound',{...host,code,round:s.round});
 s=await api('status',{...host,code});return api('configure',{...host,code,round:s.round,revision:s.revision,mode:'sums'})};
try{
 const host=await api('login',{name:'Alexander'}),boris=await api('login',{name:'Boris'});
 // Default: keep playing, no plan.
 const open=await make(host);await api('join',{...boris,code:open});
 assert.equal((await api('status',{...host,code:open})).plannedRounds,null);
 for(let i=0;i<3;i++)await play(host,boris,open);
 assert.equal((await api('status',{...host,code:open})).round,3);
 // Planned: 2 rounds, then the third start is refused until more are added.
 const two=await make(host,{plannedRounds:2});await api('join',{...boris,code:two});
 assert.equal((await api('status',{...boris,code:two})).plannedRounds,2);
 await play(host,boris,two);await play(host,boris,two);
 let s=await api('status',{...host,code:two});await api('ready',{...boris,code:two,revision:s.revision});
 await api('launch',{...host,code:two,round:s.round,revision:s.revision,mode:'sums'},409);
 // Only the host changes it, and not below rounds already played.
 await api('rounds',{...boris,code:two,plannedRounds:5},403);
 await api('rounds',{...host,code:two,plannedRounds:1},409);
 await api('rounds',{...host,code:two,plannedRounds:21},400);
 s=await api('rounds',{...host,code:two,plannedRounds:4});assert.equal(s.plannedRounds,4);
 s=await api('launch',{...host,code:two,round:s.round,revision:s.revision,mode:'sums'});assert.equal(s.round,3);
 // Clearing the plan means keep playing.
 s=await api('rounds',{...host,code:two,plannedRounds:null});assert.equal(s.plannedRounds,null);
 // Invalid plan on create is refused.
 await api('create',{...host,groupFlow:true,mode:'sums',requestId:'rounds-test-bad',plannedRounds:0},400);
 console.log('PASS keep playing by default, planned rounds enforced at start, host-only change, not below rounds played, clear to keep playing.');
}finally{sqlite.close()}
