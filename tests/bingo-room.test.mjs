import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {database,client} from './room8.test.mjs';
const {DB,sqlite}=database(),api=client(DB),users=[];
try{
 for(let i=0;i<8;i++)users.push(await api('login',{name:'Bingo '+i}));const host=users[0],guest=users[1],{code}=await api('create',host);
 for(const u of users.slice(1))await api('join',{...u,code});let s=await api('launch',{...host,code,round:0,mode:'bingo9'});assert.equal(s.bingo.called,1);
 await api('bingoCall',{...host,code,round:1,called:1},409);for(const u of users)await api('begin',{...u,code,round:1});
 await api('bingoCall',{...guest,code,round:1,called:1},403);await api('bingoMark',{...guest,code,round:1,index:1},400);await api('bingoMark',{...guest,code,round:1,index:-1},400);await api('submit',{...host,code,round:1,moves:9,elapsed:10},400);
 await api('bingoMark',{...guest,code,round:1,index:0});await api('bingoMark',{...guest,code,round:1,index:0});assert.equal((await api('status',{...guest,code})).players.find(p=>p.id===guest.id).bingoMask,1);
 await api('leave',{...users[7],code});await api('bingoMark',{...users[7],code,round:1,index:0},403);
 for(let i=0;i<9;i++){if(i){s=await api('bingoCall',{...host,code,round:1,called:i});assert.equal(s.bingo.called,i+1);await api('bingoCall',{...host,code,round:1,called:i},409)}for(const u of users.slice(0,7))await api('bingoMark',{...u,code,round:1,index:i})}
 s=await api('status',{...host,code});assert(s.finished);assert(s.players.filter(p=>!p.departed).every(p=>p.score===900&&p.bingoMask===511));const total=s.players.find(p=>p.id===host.id).total;await api('bingoMark',{...host,code,round:1,index:8});assert.equal((await api('status',{...host,code})).players.find(p=>p.id===host.id).total,total);
 sqlite.exec(readFileSync(new URL('../migrate-v3.8.5.sql',import.meta.url),'utf8'));s=await api('advance',{...host,code,round:1,mode:'bingo9'});assert.equal(s.bingo.called,1);assert(s.players.filter(p=>!p.departed).every(p=>p.bingoMask===0));await api('bingoMark',{...guest,code,round:1,index:0},409);await api('finishRound',{...host,code,round:2});await api('bingoMark',{...guest,code,round:2,index:0},409);await api('close',{...host,code});assert((await api('status',{...guest,code})).closed);
 console.log('PASS: 8-player bingo; host-only calls; no future/fake marks; repeat-safe calls and scores; refresh state; leave/cancel; next-round reset; retained results; repeatable migration.');
}finally{sqlite.close()}
