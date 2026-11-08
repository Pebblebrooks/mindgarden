/* Screen-space safety envelopes: ground and flight sprites share solid space. */
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export function segmentDistance(p,a,b){const dx=b.x-a.x,dy=b.y-a.y,t=clamp(((p.x-a.x)*dx+(p.y-a.y)*dy)/(dx*dx+dy*dy||1),0,1);return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy)}
export function placeSolids(items,width,height){
 const placed=[],old=items.filter(x=>x.previous&&x.previous.visible!==false).map(x=>({id:x.id,...x.previous,r:x.r}));
 for(const item of items){
  const r=item.r,pad=4,fit=r*2+pad*2<width&&r*2+pad*2<height;
  if(!fit){placed.push({...item,visible:false});continue}
  const bound=p=>({x:clamp(p.x,r+pad,width-r-pad),y:clamp(p.y,r+pad,height-r-pad)});
  const goal=bound(item),prior=item.previous?.visible!==false?item.previous:null;
  const origin=prior?bound(prior):goal;
  const blockers=placed.filter(x=>x.visible).concat(old.filter(x=>x.id!==item.id&&!placed.some(p=>p.id===x.id)));
  const free=p=>blockers.every(b=>Math.hypot(p.x-b.x,p.y-b.y)>=r+b.r+pad);
  const validOrigin=free(origin);
  const clear=p=>free(p)&&(!validOrigin||blockers.every(b=>segmentDistance(b,origin,p)>=r+b.r+pad));
  const length=Math.hypot(goal.x-origin.x,goal.y-origin.y),step=item.maxStep??length;
  const desired=length>step?{x:origin.x+(goal.x-origin.x)*step/length,y:origin.y+(goal.y-origin.y)*step/length}:goal;
  let best=clear(desired)?desired:null;
  if(!best&&validOrigin){
   // Bend the next short step around an obstacle, or wait rather than intersect.
   const angle=Math.atan2(goal.y-origin.y,goal.x-origin.x);
   for(const offset of [.45,-.45,.9,-.9,1.35,-1.35]){const p=bound({x:origin.x+Math.cos(angle+offset)*Math.min(step,length),y:origin.y+Math.sin(angle+offset)*Math.min(step,length)});if(clear(p)){best=p;break}}
   best=best||origin;
  }
  if(!best){
   // Initial layout / changed viewport: nearest safe location. Hide only if packed.
   const candidates=[goal];for(let ring=1;ring<=24;ring++)for(let j=0;j<16;j++){const angle=j*Math.PI/8;candidates.push(bound({x:goal.x+Math.cos(angle)*ring*12,y:goal.y+Math.sin(angle)*ring*12}))}
   best=candidates.find(free);
  }
  placed.push({...item,...(best||goal),visible:!!best});
 }
 return placed;
}
