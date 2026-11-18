// v6.3 (D-04): private by default; open groups listed quietly with host name, game and count only.
import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
const {DB,sqlite}=database(),api=client(DB);
let n=0;const make=async(host,visibility)=>(await api('create',{...host,groupFlow:true,mode:'sums',requestId:'public-test-'+(++n),...(visibility?{visibility}:{})})).code;
try{
 const host=await api('login',{name:'Alexander'}),boris=await api('login',{name:'Boris'}),mei=await api('login',{name:'Mei Ling'});
 // Private by default: nobody else sees it.
 const priv=await make(host);assert.equal((await api('status',{...host,code:priv})).visibility,'private');
 assert.equal((await api('lounge',mei)).openGroups.length,0);
 // Public: listed with host, game and player count only.
 const pub=await make(host,'public');await api('join',{...boris,code:pub});
 let l=await api('lounge',mei);assert.equal(l.openGroups.length,1);
 assert.deepEqual(Object.keys(l.openGroups[0]).sort(),['code','host','mode','players']);
 assert.equal(l.openGroups[0].host,'Alexander');assert.equal(l.openGroups[0].players,2);assert(!JSON.stringify(l).includes('Boris'),'member names stay private');
 // Members do not see their own group under Open groups.
 assert.equal((await api('lounge',boris)).openGroups.length,0);
 // Hidden while the host is away.
 sqlite.prepare('UPDATE mg_room_availability SET host_seen=? WHERE code=?').run(Date.now()-60000,pub);
 assert.equal((await api('lounge',mei)).openGroups.length,0);await api('status',{...host,code:pub});
 assert.equal((await api('lounge',mei)).openGroups.length,1);
 // Only the host can change it, only before the game starts.
 await api('visibility',{...boris,code:pub,visibility:'private'},403);
 let s=await api('visibility',{...host,code:pub,visibility:'private'});assert.equal(s.visibility,'private');
 assert.equal((await api('lounge',mei)).openGroups.length,0);
 s=await api('visibility',{...host,code:pub,visibility:'public'});assert.equal(s.visibility,'public');
 // Joining from the list works like a code; then it is your group, not an open one.
 await api('join',{...mei,code:pub});l=await api('lounge',mei);assert.equal(l.openGroups.length,0);assert.equal(l.rooms[0].code,pub);
 // Hidden once the game starts, and the setting is locked.
 const stranger=await api('login',{name:'Ah Kow'});
 s=await api('status',{...host,code:pub});for(const u of [boris,mei])await api('ready',{...u,code:pub,revision:s.revision});
 await api('launch',{...host,code:pub,round:0,revision:s.revision,mode:'sums'});
 assert.equal((await api('lounge',stranger)).openGroups.length,0);
 await api('visibility',{...host,code:pub,visibility:'private'},409);
 // Hidden when full.
 const full=await make(host,'public');for(let i=0;i<7;i++){const u=await api('login',{name:'Guest '+i});await api('join',{...u,code:full})}
 assert(!(await api('lounge',stranger)).openGroups.some(g=>g.code===full));
 console.log('PASS private default, open-group listing (host, game, count only), host-only switch before start, hidden when away, started or full.');
}finally{sqlite.close()}
