import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {database,client} from './room8.test.mjs';
const {DB,sqlite}=database(),api=client(DB);
try{
 const h=await api('login',{name:'Host'}),g=await api('login',{name:'Guest'}),o=await api('login',{name:'Other host'});
 for(const rounds of [0,21,1.5,null,'3'])await api('create',{...h,rounds},400);
 const {code}=await api('create',{...h,rounds:2});await api('join',{...g,code});
 let s=await api('status',{...h,code});assert.equal(s.totalRounds,2);assert.equal(s.started,false);
 s=await api('launch',{...h,code,round:0,mode:'sums'});assert(s.requiresBegin);assert(!s.allReady);assert(s.players.every(p=>p.beganAt===null));
 await api('submit',{...h,code,round:1,moves:8,elapsed:3},409);
 await api('finishSession',{...g,code,round:1},403);await api('finishSession',{...h,code,round:1},409);
 await api('begin',{...h,code,round:0},409);
 s=await api('begin',{...h,code,round:1});const began=s.players.find(p=>p.id===h.id).beganAt;assert(began);assert(!s.allReady);
 s=await api('begin',{...h,code,round:1});assert.equal(s.players.find(p=>p.id===h.id).beganAt,began,'Retry never restarts timing');
 s=await api('begin',{...g,code,round:1});assert(s.allReady);
 sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,code);
 await api('submit',{...h,code,round:1,moves:8,elapsed:3});s=await api('submit',{...g,code,round:1,moves:8,elapsed:3});assert(s.finished);assert(!s.sessionFinished);
 s=await api('advance',{...h,code,round:1,mode:'bingo9'});assert.equal(s.round,2);assert(!s.allReady);assert(s.players.every(p=>p.beganAt===null));
 await api('bingoCall',{...h,code,round:2,called:1},409);await api('begin',{...h,code,round:2});await api('bingoMark',{...h,code,round:2,index:0},409);
 await api('begin',{...g,code,round:2});for(let i=0;i<9;i++){if(i)await api('bingoCall',{...h,code,round:2,called:i});await api('bingoMark',{...h,code,round:2,index:i});s=await api('bingoMark',{...g,code,round:2,index:i})}
 assert(s.sessionFinished&&s.closed&&s.finished);assert.equal(s.round,2);assert(s.players.every(p=>p.total>900));
 assert.equal(sqlite.prepare('SELECT count(*) n FROM mg_active_rooms WHERE code=?').get(code).n,0);
 assert((await api('status',{...h,code})).sessionFinished);assert((await api('status',{...g,code})).sessionFinished);
 assert((await api('advance',{...h,code,round:2,mode:'sums'})).closed);assert.equal(sqlite.prepare('SELECT round FROM mg_rooms WHERE code=?').get(code).round,2);
 assert.equal((await api('rankings',{...g,code})).rounds.length,2);assert.equal((await api('lounge',h)).activeRoom,null);
 // Finish session is a host-only normal completion, distinct from cancel.
 const second=await api('create',{...h,rounds:20});await api('join',{...g,code:second.code});await api('launch',{...h,code:second.code,round:0,mode:'pairs6'});
 await api('finishRound',{...h,code:second.code,round:1});s=await api('finishSession',{...h,code:second.code,round:1});assert(s.sessionFinished);assert.equal(s.totalRounds,20);
 assert((await api('finishSession',{...h,code:second.code,round:1})).sessionFinished,'Finish is retry-safe');
 // Open invitations remain visible to players who already have another room.
 const a=await api('create',h);await api('join',{...g,code:a.code});await api('launch',{...h,code:a.code,round:0,mode:'patterns'});
 const b=await api('create',o);const lounge=await api('lounge',g);assert.equal(lounge.activeRoom,a.code);assert(lounge.rooms.some(r=>r.code===b.code));
 await api('logout',g,409);await api('join',{...g,code:b.code},409);await api('leave',{...g,code:a.code});await api('join',{...g,code:b.code});
 await api('close',{...h,code:a.code});assert.equal(sqlite.prepare('SELECT end_reason FROM mg_room_sessions WHERE code=?').get(a.code).end_reason,'cancelled');
 await api('logout',h);assert.equal(sqlite.prepare('SELECT last_seen FROM mg_sessions WHERE token=?').get(h.token).last_seen,0);
 // Migration can run again without modifying limits, starts or completed scores.
 const counts=sqlite.prepare('SELECT COUNT(*) n FROM mg_results').get().n;sqlite.exec(readFileSync(new URL('../migrate-v4.0.3.sql',import.meta.url),'utf8'));assert.equal(sqlite.prepare('SELECT COUNT(*) n FROM mg_results').get().n,counts);
 // Old, already-open rooms remain resumable and can be finished normally.
 await api('leave',{...g,code:b.code});await api('close',{...o,code:b.code});const legacy=await api('create',h);sqlite.prepare('DELETE FROM mg_room_sessions WHERE code=?').run(legacy.code);await api('join',{...g,code:legacy.code});await api('launch',{...h,code:legacy.code,round:0,mode:'sums'});await api('finishRound',{...h,code:legacy.code,round:1});assert((await api('finishSession',{...h,code:legacy.code,round:1})).sessionFinished);
 sqlite.exec('DROP TABLE mg_round_starts');const missing=await api('begin',{...o,code:b.code,round:1});assert(missing.closed);
 const bad=await api('status',{...h,code:legacy.code},503);assert(bad.error.includes('migrate-v4.0.3.sql'));
 console.log('PASS: bounded sessions, first/each-round Begin, retry-safe timing, bingo readiness barrier, automatic final completion, early finish versus cancel, release/history retention, in-room invitations, leave/join, offline, legacy room compatibility, repeatable migration and setup errors.');
}finally{sqlite.close()}
