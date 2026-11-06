import {DatabaseSync} from 'node:sqlite';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {onRequest} from '../functions/api/room8.js';
export function database(){
 const sqlite=new DatabaseSync(':memory:');sqlite.exec(readFileSync(new URL('../migrate-v3.sql',import.meta.url),'utf8'));
 const DB={
  prepare(sql){return {bind(...args){return {
   async first(){return sqlite.prepare(sql).get(...args)||null},
   async all(){return {results:sqlite.prepare(sql).all(...args)}},
   run(){const r=sqlite.prepare(sql).run(...args);return {meta:{changes:r.changes}}}
  }}}},
  async batch(statements){sqlite.exec('BEGIN');try{const out=[];for(const s of statements)out.push(s.run());sqlite.exec('COMMIT');return out}catch(e){sqlite.exec('ROLLBACK');throw e}}
 };
 return {DB,sqlite};
}
export function client(DB){return async(action,data={},status=200)=>{const res=await onRequest({env:{DB},request:new Request('https://garden.test/api/room8?action='+action,{method:'POST',body:JSON.stringify(data),headers:{'content-type':'application/json'}})});const out=await res.json();assert.equal(res.status,status,action+': '+JSON.stringify(out));return out}}
async function test(){const {DB,sqlite}=database(),api=client(DB),users=[];
 for(let i=0;i<10;i++)users.push(await api('login',{name:'Player '+i}));
 const host=users[0];const created=await Promise.all([api('create',host),api('create',host)]);assert.equal(created[0].code,created[1].code);const {code}=created[0];
 for(const u of users.slice(1)){const l=await api('lounge',u);assert.equal(l.rooms[0].code,code);await api('ack',{...u,codes:[code]})}
 let s=await api('status',{...host,code});assert.equal(s.invitations.length,9);assert(s.invitations.every(i=>i.receivedAt));assert(!JSON.stringify(s).includes(host.token));
 await api('launch',{...host,code,round:0,mode:'pairs6'},400);
 await Promise.all(users.slice(1,8).map(u=>api('join',{...u,code})));
 await Promise.all([api('join',{...users[8],code},409),api('join',{...users[9],code},409)]);await api('join',{...users[1],code});
 await api('launch',{...users[1],code,round:0,mode:'pairs6'},403);
 s=await api('launch',{...host,code,round:0,mode:'pairs6'});assert.equal(s.players.length,8);assert.equal(s.round,1);
 for(const u of users.slice(0,8)){const v=await api('status',{...u,code,seenRound:1});assert.equal(v.seed,s.seed);assert.equal(v.round,1)}
 s=await api('status',{...host,code});assert(s.players.every(p=>p.seenRound===1));
 await api('join',{...users[8],code},409);await api('join',{...users[1],code});
 sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,code);
 for(const u of users.slice(0,8))await api('submit',{...u,code,round:1,moves:6,elapsed:5});
 const totals=(await api('status',{...host,code})).players.map(p=>p.total);
 s=await api('submit',{...host,code,round:1,moves:7,elapsed:6});assert.deepEqual(s.players.map(p=>p.total),totals);assert(s.finished);
 s=await api('advance',{...host,code,round:1,mode:'sums12'});assert.equal(s.round,2);assert(s.players.every(p=>p.score===null));assert.deepEqual(s.players.map(p=>p.total),totals);
 await api('advance',{...host,code,round:1,mode:'odd'},400);await api('submit',{...host,code,round:1,moves:6,elapsed:5},409);
 sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,code);
 await api('submit',{...host,code,round:2,moves:12,elapsed:10});
 s=await api('finishRound',{...host,code,round:2});assert(s.finished);assert.equal(s.players.filter(p=>p.skipped).length,7);
 const before=s.players.map(p=>p.total);s=await api('submit',{...users[1],code,round:2,moves:12,elapsed:10});assert.deepEqual(s.players.map(p=>p.total),before);
 await api('close',{...users[1],code},403);await api('close',{...host,code});assert((await api('status',{...users[1],code})).closed);await api('join',{...users[1],code},410);
 assert.equal((await api('lounge',users[1])).rooms.length,0);
 // Same token re-login preserves identity; malformed credentials never authorize room reads.
 assert.equal((await api('login',{...host,name:'Renamed'})).id,host.id);await api('status',{token:'bad',code},401);
 // Migration can be applied twice and retains legacy tables.
 sqlite.exec(readFileSync(new URL('../migrate-v3.sql',import.meta.url),'utf8'));sqlite.close();
 console.log('PASS: 8-player cap, delivery receipts, host-only launch, launch acknowledgements, rejoin, two rounds, totals, idempotent scores, skipped results, closure, authorization and repeatable migration.');
}
if(process.argv[1]?.endsWith('room8.test.mjs'))await test();
