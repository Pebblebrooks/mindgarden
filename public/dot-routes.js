/* Numbered routes: generate from a valid path, never randomise unsolved checkpoints. */
(function(){
'use strict';
const adjacent=(a,b,n)=>Math.abs(a%n-b%n)+Math.abs(Math.floor(a/n)-Math.floor(b/n))===1;
function parameters(rank=1,range='balanced'){
 rank=Math.max(1,Math.min(15,Math.round(rank)));const gentle=range==='gentle',hard=range==='challenging';
 const n=gentle?(rank<10?4:5):hard?(rank<7?5:6):rank<7?4:rank<13?5:6;
 return {rank,range,n,fill:rank>=4||hard,checkpoints:Math.min(n*n-1,(gentle?3:hard?5:4)+Math.floor((rank-1)/2)),mix:12+rank*7+(hard?70:0),length:rank<4&&!hard?Math.min(n*n,5+rank*3):n*n};
}
function generate(rank,range,random=Math.random){
 const cfg=parameters(rank,range),{n}=cfg;let best=null,bestScore=-Infinity;
 for(let attempt=0;attempt<16;attempt++){
 let route=[];for(let y=0;y<n;y++)for(let x=0;x<n;x++)route.push(y*n+(y%2?n-1-x:x));
 for(let k=0;k<cfg.mix;k++){if(random()<.5)route.reverse();const end=route.at(-1),choices=route.slice(0,-2).map((v,i)=>({v,i})).filter(o=>adjacent(o.v,end,n));if(choices.length){const at=choices[Math.floor(random()*choices.length)].i;route=route.slice(0,at+1).concat(route.slice(at+1).reverse());}}
 route=route.slice(0,cfg.length);const count=Math.min(cfg.checkpoints,route.length),indices=Array.from({length:count},(_,i)=>Math.round(i*(route.length-1)/(count-1))),checkpoints=indices.map(i=>route[i]);
 const turns=route.slice(2).filter((v,i)=>v-route[i+1]!==route[i+1]-route[i]).length;
 const detour=indices.slice(1).reduce((sum,idx,j)=>{const a=route[indices[j]],b=route[idx];return sum+(idx-indices[j])-Math.abs(a%n-b%n)-Math.abs(Math.floor(a/n)-Math.floor(b/n));},0);
 const score=turns+detour*(range==='challenging'?3:1),target=cfg.rank*(range==='gentle'?.6:1.5),quality=-Math.abs(score-target);
 if(!best||quality>bestScore){best={...cfg,solution:route,checkpoints,path:[],hints:0,turns,detour};bestScore=quality;}
 }return best;
}
function move(g,cell){
 if(!Number.isInteger(cell)||cell<0||cell>=g.n*g.n)return 'outside';
 const next=g.checkpoints.filter(x=>g.path.includes(x)).length;
 if(!g.path.length&&cell!==g.checkpoints[0])return 'start';
 if(g.path.includes(cell))return 'used';
 if(g.path.length&&!adjacent(g.path.at(-1),cell,g.n))return 'adjacent';
 if(g.checkpoints.includes(cell)&&g.checkpoints.indexOf(cell)!==next)return 'order';
 if(g.fill&&cell===g.checkpoints.at(-1)&&g.path.length!==g.n*g.n-1)return 'fill';
 g.path.push(cell);return complete(g)?'complete':'ok';
}
const complete=g=>g.path.at(-1)===g.checkpoints.at(-1)&&(!g.fill||g.path.length===g.n*g.n);
// Search valid continuations, with a bound to keep hints responsive on small devices.
function hint(g){
 if(complete(g))return {done:true};const prefix=g.path;let aligned=0;while(aligned<prefix.length&&prefix[aligned]===g.solution[aligned])aligned++;
 if(aligned===prefix.length)return {cell:g.solution[prefix.length]};
 let budget=40000,answer=null;const path=prefix.slice(),used=new Set(path);function visit(){if(--budget<0)return false;const next=g.checkpoints.filter(x=>used.has(x)).length,last=path.at(-1);if(last===g.checkpoints.at(-1)){if(!g.fill||used.size===g.n*g.n){answer=path.slice();return true;}return false;}
 for(const cell of [last-g.n,last+1,last+g.n,last-1]){if(cell<0||cell>=g.n*g.n||used.has(cell)||!adjacent(last,cell,g.n))continue;const cp=g.checkpoints.indexOf(cell);if(cp>=0&&cp!==next)continue;if(g.fill&&cell===g.checkpoints.at(-1)&&used.size!==g.n*g.n-1)continue;path.push(cell);used.add(cell);if(visit())return true;used.delete(cell);path.pop();if(budget<0)break;}return false;}
 visit();if(answer)return {cell:answer[prefix.length]};return {undo:prefix.length-aligned,limited:budget<0};
}
window.MindGardenDotRoutes={parameters,generate,move,complete,hint,adjacent};
})();
