// v6.1 group presence: fixes for the review findings 1-3, host Remove and invite-only joining.
import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
const {DB,sqlite}=database(),api=client(DB);
const ago=ms=>Date.now()-ms;
const setHostSeen=(code,ms)=>sqlite.prepare('UPDATE mg_room_availability SET host_seen=? WHERE code=?').run(ago(ms),code);
const setLastSeen=(user,ms)=>sqlite.prepare('UPDATE mg_sessions SET last_seen=? WHERE token=?').run(ago(ms),user.token);
let n=0;const make=async(host,mode='pairs6')=>(await api('create',{...host,groupFlow:true,mode,requestId:'presence-'+(++n)})).code;
try{
 const host=await api('login',{name:'Alexander'}),boris=await api('login',{name:'Boris'}),terri=await api('login',{name:'Terri'}),stranger=await api('login',{name:'Stranger'});

 // Fix 1: a host watching the waiting screen keeps the group open without tapping.
 let code=await make(host);await api('join',{...boris,code});
 sqlite.prepare('UPDATE mg_room_availability SET pending_since=? WHERE code=?').run(ago(121000),code);
 let s=await api('status',{...host,code});assert(!s.closed,'host polling the waiting group must keep it open');assert(s.pendingSince,'the named arrival notice stays until the host taps');
 sqlite.prepare('UPDATE mg_room_availability SET pending_since=? WHERE code=?').run(ago(3600000),code);assert(!(await api('status',{...boris,code})).closed,'an old unacknowledged arrival never closes the group');
 // A host who is briefly away (e.g. sending the WhatsApp invite) does not block joins.
 setHostSeen(code,90000);await api('join',{...terri,code});
 s=await api('status',{...terri,code});assert(!s.closed);assert.equal(s.hostAvailable,false,'guests see that the host is away');assert(s.expiresAt>Date.now(),'guests see when the group would close');
 await api('close',{...host,code});

 // Fix 2: a guest who goes quiet no longer blocks Start, and sits out that round.
 code=await make(host);for(const u of [boris,terri])await api('join',{...u,code});
 s=await api('status',{...host,code});for(const u of [boris,terri])await api('ready',{...u,code,revision:s.revision});
 setLastSeen(terri,46000);
 s=await api('launch',{...host,code,round:0,revision:s.revision,mode:'pairs6'});
 assert.equal(s.round,1);assert(s.players.find(p=>p.name==='Terri').skipped,'away guest sits out the round');assert(!s.players.find(p=>p.name==='Boris').skipped);
 sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(ago(5000),code);
 for(const u of [host,boris])s=await api('submit',{...u,code,round:1,moves:10,elapsed:5});
 assert(s.finished,'round finishes without waiting for the away guest');
 // A present guest who has not tapped Ready still blocks Start.
 s=await api('configure',{...host,code,round:1,revision:s.revision,mode:'pairs6'});
 await api('launch',{...host,code,round:1,revision:s.revision,mode:'pairs6'},409);
 // At least one present Ready guest is required.
 setLastSeen(boris,46000);setLastSeen(terri,46000);
 await api('launch',{...host,code,round:1,revision:s.revision,mode:'pairs6'},409);
 await api('close',{...host,code});

 // Host Remove: only before start, only the host, guest is told they were removed.
 code=await make(host);for(const u of [boris,terri])await api('join',{...u,code});
 await api('remove',{...boris,code,player:terri.id},403);
 await api('remove',{...host,code,player:host.id},409);
 s=await api('remove',{...host,code,player:terri.id});assert(s.players.find(p=>p.name==='Terri').departed);
 s=await api('status',{...terri,code});assert(s.left&&s.removed,'removed guest is told why');
 assert.equal((await api('lounge',terri)).rooms.length,0);
 await api('join',{...terri,code});s=await api('status',{...terri,code});assert(!s.left,'a removed guest may rejoin with the code');
 await api('close',{...host,code});

 // Fix 3: a host who disappears after a round no longer leaves guests waiting indefinitely.
 code=await make(host);await api('join',{...boris,code});
 s=await api('status',{...host,code});await api('ready',{...boris,code,revision:s.revision});
 s=await api('launch',{...host,code,round:0,revision:s.revision,mode:'pairs6'});
 sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(ago(5000),code);
 for(const u of [host,boris])s=await api('submit',{...u,code,round:1,moves:10,elapsed:5});
 setHostSeen(code,120000);s=await api('status',{...boris,code});assert(s.finished&&!s.closed);assert.equal(s.hostAvailable,false,'guest results show the host is away');
 setHostSeen(code,601000);s=await api('status',{...boris,code});
 assert(s.closed,'group closes after the host is away for 10 minutes');assert.equal(s.closeReason,'host_unavailable');
 const saved=await api('rankings',{...boris,code});assert.equal(saved.players.filter(p=>p.completed).length,2,'scores are kept after the automatic close');

 // Invite-only: the code still works for someone the host shares it with.
 code=await make(host);assert.equal((await api('lounge',stranger)).rooms.length,0);await api('join',{...stranger,code});
 assert.equal((await api('lounge',stranger)).rooms[0].host,'Alexander');
 console.log('PASS on-screen host keeps group, joins while host away, away guests sit out, host Remove, lost-host closure with saved scores, invite-only joining.');
}finally{sqlite.close()}
