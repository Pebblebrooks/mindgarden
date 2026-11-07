/* Personal practice is based on retained results, never on another player's data. */
(function(){
'use strict';
function select(profile,available,date){
 const known=new Set(available),byGame=new Map();
 for(const [index,r]of (profile.log||[]).entries()){
  if(!known.has(r.g)||typeof r.r!=='number'||!Number.isFinite(r.r)||r.r<0||r.r>1)continue;
  const rows=byGame.get(r.g)||[];rows.push({rate:r.r,index});if(rows.length>5)rows.shift();byGame.set(r.g,rows);
 }
 const ranked=[...byGame].map(([type,rows])=>({type,average:rows.reduce((sum,r)=>sum+r.rate,0)/rows.length,samples:rows.length,last:rows.at(-1).index})).sort((a,b)=>a.average-b.average||a.last-b.last||a.type.localeCompare(b.type));
 const plan=ranked.slice(0,3),used=new Set(plan.map(x=>x.type));
 const stamp=Date.parse(date+'T12:00:00Z'),offset=Number.isFinite(stamp)?Math.floor(stamp/86400000)%available.length:0;
 for(let i=0;plan.length<3&&i<available.length;i++){const type=available[(offset+i)%available.length];if(!used.has(type)){used.add(type);plan.push({type,average:null,samples:0,last:-1})}}
 return plan;
}
window.MindGardenPractice={select};
})();
