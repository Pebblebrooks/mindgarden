import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
const {DB,sqlite}=database(),api=client(DB);
try{
 const h=await api('login',{name:'Host'}),g=await api('login',{name:'Guest'}),v=await api('login',{name:'Visitor'});
 const make=async()=> (await api('create',{...h,requestId:crypto.randomUUID()})).code;
 const age=(code,column,ms)=>sqlite.prepare(`UPDATE mg_room_availability SET ${column}=? WHERE code=?`).run(Date.now()-ms,code);
 const code=await make();await api('join',{...g,code});
 let s=await api('status',{...h,code});assert(s.pendingSince);const pending=s.pendingSince;
 s=await api('status',{...h,code});assert.equal(s.pendingSince,pending,'Polling never acknowledges arrivals');
 await api('hostReady',{...g,code},403);await api('hostReady',{...h,code});
 s=await api('status',{...g,code});assert.equal(s.pendingSince,null);assert(s.acknowledgedAt);
 await api('join',{...v,code});assert((await api('status',{...h,code})).pendingSince,'New arrival needs acknowledgement');
 age(code,'pending_since',121000);s=await api('lounge',{...h,hosting:[code]});assert(!s.rooms.some(r=>r.code===code),'Heartbeat cannot revive an expired pending arrival');
 assert.equal((await api('status',{...g,code})).closeReason,'host_unavailable');await api('join',{...v,code},410);
 assert.equal(sqlite.prepare('SELECT COUNT(*) AS n FROM mg_room_memberships WHERE code=?').get(code).n,0);
 const away=await make();age(away,'host_seen',46000);
 s=await api('lounge',g);assert.equal(s.rooms.find(r=>r.code===away).joinable,false);
 await api('join',{...g,code:away},409);
 await api('lounge',{...g,hosting:[away]});assert.equal((await api('lounge',g)).rooms.find(r=>r.code===away).hostAvailable,false,'Guests cannot renew host presence');
 await api('lounge',{...h,hosting:[away]});await api('join',{...g,code:away});
 await api('leave',{...g,code:away});assert.equal((await api('status',{...h,code:away})).pendingSince,null);
 age(away,'host_seen',121000);await api('status',{...h,code:away});assert.equal((await api('status',{...h,code:away})).closed,true,'Late host cannot revive expired room');
 const playing=await make();await api('join',{...g,code:playing});await api('launch',{...h,code:playing,round:0,mode:'pairs6'});
 age(playing,'host_seen',121000);age(playing,'pending_since',121000);
 assert.equal((await api('status',{...g,code:playing})).status,'playing','Waiting-room timeout never cancels active games');
 const x=await make(),y=await make();age(x,'host_seen',121000);s=await api('lounge',{...h,hosting:[y]});assert(!s.rooms.some(r=>r.code===x));assert(s.rooms.some(r=>r.code===y));
 console.log('PASS host presence, acknowledgement, expiry, stale links, authorization, reconnect, independent rooms and active-game preservation.');
}finally{sqlite.close()}
