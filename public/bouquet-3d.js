/* A lightweight 3D arrangement projected into SVG; works without WebGL. */
(function(){
'use strict';let controller,angle=.3;
const NS='http://www.w3.org/2000/svg',T=(a,b)=>save.lang==='zh'?b:a;
function project(p,a){const c=Math.cos(a),s=Math.sin(a),x=p.x*c+p.z*s,z=p.z*c-p.x*s,y=p.y*.987-z*.16,depth=z*.987+p.y*.16,k=600/(600-depth);return {x:150+x*k,y:222-y*k,z:depth,k}}
function attach(bed,points,type){
 controller?.dispose();bed?.querySelector('.bouquet-controls')?.remove();const svg=bed?.querySelector('svg');if(!svg)return;svg.classList.add('bouquet-3d');svg.setAttribute('aria-label',T('Rotating bouquet, ','旋转花束，')+points+'/60');
 const defs=svg.querySelector('defs')?.outerHTML||'',stages=gstage(points);let frame=0,last=0,visible=true,disposed=false;
 const plants=[];for(let i=0;i<5;i++){const t=i*2.399;plants.push({x:Math.cos(t)*61,z:Math.sin(t)*44,y:104+(i%3)*18,green:true,i})}
 for(let i=0;i<12;i++){if(stages[i]<2)continue;const t=i*2.399+.6,r=40+(i%3)*17;plants.push({x:Math.cos(t)*r,z:Math.sin(t)*r*.7,y:130+(i%4)*15,stage:stages[i],kind:type==='mixed'?FLK[i%6]:type,i})}
 function path(points,fill,stroke,width){const p=points.map(v=>project(v,angle));return '<path d="'+p.map((v,i)=>(i?'L':'M')+v.x.toFixed(2)+' '+v.y.toFixed(2)).join(' ')+(fill!=='none'?'Z':'')+'" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+width+'" stroke-linecap="round" stroke-linejoin="round"/>'}
 function draw(){
  const parts=[];
  for(const p of plants){
   const tip={x:p.x,y:p.y,z:p.z},at=t=>({x:p.x*t*t,y:p.y*t,z:p.z*t*t});
   let html=path(Array.from({length:12},(_,i)=>at(i/11)),'none',p.i%2?'#709b7b':'#4f8065',2.5);
   for(let j=0;j<(p.green?3:2);j++){const base=at(.57+j*.14),side=(p.i+j)%2?1:-1,w=16,leaf=[base,{x:base.x+side*w*.2,y:base.y+15,z:base.z+6},{x:base.x+side*w,y:base.y+26,z:base.z+side*9},{x:base.x+side*w*1.15,y:base.y+9,z:base.z+2},base];const lp=leaf.map(v=>project(v,angle));html+='<path d="M'+lp[0].x+' '+lp[0].y+' Q'+lp[1].x+' '+lp[1].y+' '+lp[2].x+' '+lp[2].y+' Q'+lp[3].x+' '+lp[3].y+' '+lp[0].x+' '+lp[0].y+'Z" fill="'+(p.i%2?'#9ebf8e':'#7ca88c')+'"/>'}
   if(!p.green){const q=project(tip,angle),u=project({...tip,x:tip.x+1},angle),v=project({...tip,y:tip.y-1},angle),matrix=[u.x-q.x,u.y-q.y,v.x-q.x,v.y-q.y,q.x,q.y].map(n=>n.toFixed(4)).join(' ');html+='<g transform="matrix('+matrix+')" opacity="'+(.82+.18*Math.cos(angle)).toFixed(3)+'">'+(p.stage>=4?head(p.kind,0,0,p.stage===4?.75:1.05):'<ellipse cx="0" cy="-2" rx="6" ry="10" fill="#d99aa9"/>')+'</g>'}
   parts.push({z:project({...tip,y:p.y*.55},angle).z,html});
  }
  parts.sort((a,b)=>a.z-b.z);
  const ribbon=[{x:-13,y:8,z:4},{x:13,y:8,z:4},{x:11,y:0,z:4},{x:-11,y:0,z:4}],bow=[{x:0,y:3,z:8},{x:-20,y:15,z:10},{x:-25,y:5,z:8},{x:-15,y:0,z:7},{x:0,y:3,z:8},{x:20,y:15,z:10},{x:25,y:5,z:8},{x:15,y:0,z:7},{x:0,y:3,z:8}];
  svg.innerHTML=defs+'<circle cx="150" cy="135" r="118" fill="url(#bouquetGlow)"/><ellipse cx="150" cy="244" rx="46" ry="5" fill="#143e3520"/>'+parts.map(p=>p.html).join('')+path(ribbon,'#d7ad84','none',0)+path(bow,'none','#d6af84',3)+path([{x:-2,y:1,z:8},{x:-13,y:-19,z:9}],'none','#cba37e',3)+path([{x:3,y:1,z:8},{x:13,y:-17,z:9}],'none','#cba37e',3);svg.dataset.angle=angle.toFixed(4);
 }
 const controls=document.createElement('div');controls.className='bouquet-controls';controls.innerHTML='<button class="btn" type="button" data-bouquet-turn="-1" aria-label="'+T('Turn bouquet left','向左转动花束')+'">↶</button><button class="btn" type="button" id="bouquetRotate"></button><button class="btn" type="button" data-bouquet-turn="1" aria-label="'+T('Turn bouquet right','向右转动花束')+'">↷</button>';svg.after(controls);
 const button=controls.querySelector('#bouquetRotate'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const allowed=()=>window.MindGardenMotion.effectiveMode()!=='off';
 function sync(){button.disabled=!allowed();const label=!allowed()?T('Rotation off','旋转已关闭'):save.bouquetRotation===false?T('Rotate bouquet','旋转花束'):T('Pause rotation','暂停旋转');button.textContent=allowed()&&save.bouquetRotation!==false?'||':'▶';button.setAttribute('aria-label',label);button.title=label;button.setAttribute('aria-pressed',String(allowed()&&save.bouquetRotation!==false));svg.dataset.paused=String(!allowed()||save.bouquetRotation===false)}
 button.onclick=()=>{save.bouquetRotation=save.bouquetRotation===false;persist();sync()};controls.querySelectorAll('[data-bouquet-turn]').forEach(b=>b.onclick=()=>{angle+=Number(b.dataset.bouquetTurn)*Math.PI/6;draw()});
 function tick(now){if(disposed)return;frame=requestAnimationFrame(tick);const dt=Math.min((now-last)/1000,.1);if(now-last<33)return;last=now;if(!document.hidden&&document.getElementById('ov').classList.contains('hidden')&&!document.getElementById('home').classList.contains('hidden')&&visible&&allowed()&&save.bouquetRotation!==false){angle=(angle+dt*Math.PI*2/(window.MindGardenMotion.effectiveMode()==='gentle'?36:24))%(Math.PI*2);draw()}}
 const observer=new MutationObserver(sync);observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-motion','data-still']});let intersection;if(window.IntersectionObserver){intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting});intersection.observe(bed)}reduced.addEventListener?.('change',sync);draw();sync();frame=requestAnimationFrame(tick);
 controller={dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();intersection?.disconnect();reduced.removeEventListener?.('change',sync)}};
}
window.MindGardenBouquet={attach,project};const bed=document.getElementById('livingGarden');if(bed)attach(bed,Math.min(60,me().gr||0),me().fl||'mixed');
})();
