import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {database,client} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const {DB,sqlite}=database(),api=client(DB);
try{
 const [a,b,c,d]=await Promise.all(['Host A','Guest B','Host C','Guest D'].map(name=>api('login',{name})));
 const x=(await api('create',a)).code,y=(await api('create',c)).code;
 await api('join',{...b,code:x});await api('join',{...a,code:y},409);await api('join',{...b,code:y},409);await api('create',b,409);await api('logout',b,409);await api('leave',{...a,code:x},409);await api('close',{...b,code:x},403);
 await api('leave',{...b,code:x});await api('leave',{...b,code:x});assert((await api('status',{...b,code:x})).left);
 await api('join',{...b,code:y});await api('launch',{...c,code:y,round:0,mode:'sums'});
 sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,y);
 await api('begin',{...b,code:y,round:1});await api('begin',{...c,code:y,round:1});
 const saved=await api('submit',{...b,code:y,round:1,moves:8,elapsed:8});const score=saved.players.find(p=>p.id===b.id).score;
 await api('leave',{...b,code:y});await api('submit',{...b,code:y,round:1,moves:8,elapsed:8},403);
 let s=await api('submit',{...c,code:y,round:1,moves:8,elapsed:8});assert(s.finished);assert.equal(s.players.find(p=>p.id===b.id).score,score);assert.equal(s.players.find(p=>p.id===b.id).departed,1);
 await api('advance',{...c,code:y,round:1,mode:'sums'},400);await api('join',{...b,code:y},409);
 // Two concurrent joins can claim only one active room.
 const z=(await api('create',b)).code;
 const calls=await Promise.all([x,z].map(code=>onRequest({env:{DB},request:new Request('https://garden.test/api/room8?action=join',{method:'POST',body:JSON.stringify({...d,code})})})));
 assert.deepEqual(calls.map(r=>r.status).sort(),[200,409]);assert.equal(sqlite.prepare('SELECT COUNT(*) AS n FROM mg_active_rooms WHERE token=?').get(d.token).n,1);
 // Cancel during a round: all players released, unfinished scores skipped, submitted scores retained.
 await api('close',{...c,code:y});assert((await api('status',{...b,code:y})).left);await api('join',{...c,code:x});
 s=await api('launch',{...a,code:x,round:0,mode:'pairs6'});await api('close',{...a,code:x});assert((await api('status',{...c,code:x})).closed);assert.equal(sqlite.prepare('SELECT COUNT(*) AS n FROM mg_active_rooms WHERE code=?').get(x).n,0);assert.equal(sqlite.prepare('SELECT COUNT(*) AS n FROM mg_results WHERE code=? AND score IS NULL AND skipped=0').get(x).n,0);
 await api('create',c);await api('create',a);
 sqlite.exec(readFileSync(new URL('../migrate-v3.8.5.sql',import.meta.url),'utf8'));
 assert.equal(sqlite.prepare('SELECT score FROM mg_results WHERE code=? AND token=?').get(y,b.token).score,score);
 console.log('PASS: host-only cancellation, guest withdrawal, retained completed scores, no late submissions, one active room including racing joins, release on cancellation, repeatable migration.');
}finally{sqlite.close()}
