import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
const {DB,sqlite}=database(),api=client(DB);
const host=await api('login',{name:'Host'}),guest=await api('login',{name:'Guest'}),outside=await api('login',{name:'Lobby visitor'});
const a=await api('create',{...host,requestId:'request-first',rounds:2});
const retry=await api('create',{...host,requestId:'request-first',rounds:2});assert.equal(retry.code,a.code);
const b=await api('create',{...host,requestId:'request-second',rounds:2});assert.notEqual(a.code,b.code);
await api('join',{...guest,code:a.code});await api('join',{...guest,code:b.code});
const users=[host,guest];for(let i=2;i<8;i++){const u=await api('login',{name:'Player '+i});users.push(u);await api('join',{...u,code:a.code})}
await api('join',{...outside,code:a.code},409);
let lobby=await api('lounge',outside);assert.equal(lobby.rooms.length,2);assert.equal(lobby.rooms.find(r=>r.code===a.code).players,8);assert(lobby.lobby.some(p=>p.id===outside.id));assert(!lobby.lobby.some(p=>p.id===host.id));assert(!JSON.stringify(lobby).includes(host.token));
await api('launch',{...host,code:a.code,round:0,mode:'pairs6'});
await api('launch',{...host,code:b.code,round:0,mode:'sums'});
lobby=await api('lounge',host);assert.equal(lobby.myRooms.length,2);assert(lobby.rooms.every(r=>r.status==='playing'&&!r.joinable));
sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,a.code);
for(const u of users){await api('begin',{...u,code:a.code,round:1});await api('submit',{...u,code:a.code,round:1,moves:6,elapsed:5})}
const state=await api('status',{...host,code:a.code});assert.equal(state.players.length,8);assert(state.finished);assert(state.players.every(p=>p.score!==null));
await api('begin',{...host,code:b.code,round:1});const second=await api('status',{...host,code:b.code});assert(second.players.every(p=>p.score===null),'Scores stay isolated');
await api('close',{...host,code:a.code});lobby=await api('lounge',host);assert.deepEqual(lobby.myRooms.map(r=>r.code),[b.code]);
await api('leave',{...guest,code:b.code});lobby=await api('lounge',outside);assert(lobby.lobby.some(p=>p.id===guest.id));
sqlite.close();console.log('PASS eight players complete a round; concurrent hosted rooms, idempotent creation, independent scores, directory occupancy, capacity and scoped leave/close.');
