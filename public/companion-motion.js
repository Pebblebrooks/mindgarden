/* Shared, bounded locomotion. Direction changes happen only at the front pose. */
(function(){
'use strict';
window.createCompanionMotion=function(sprite,options={}){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let state='idle',time=0,duration=4,position=options.start??.5,direction=options.direction||1;
 let frame=0,last=0,raf=null,disposed=false,response=0,queued=null,travel=0,species=options.species||'cat';
 const blend=document.createElement('span');blend.setAttribute('aria-hidden','true');blend.style.cssText='position:absolute;inset:0;background-size:400% 400%;background-repeat:no-repeat;pointer-events:none;opacity:0';sprite.append(blend);let previousFrame=-1,previousSpecies=species,fade=null;
 const bounds=()=>options.bounds?.()||[0,1];
 const smooth=p=>(1-Math.cos(Math.PI*Math.max(0,Math.min(1,p))))/2;
 const set=(next,seconds)=>{state=next;time=0;duration=seconds;options.onAction?.(next)};
 function allowed(){return !disposed&&!document.hidden&&!reduced.matches&&options.allowed?.()!==false}
 function paint(){
  const [lo,hi]=bounds();position=Math.max(lo,Math.min(hi,position));
  if(frame!==previousFrame&&previousFrame>=0&&species===previousSpecies&&allowed()){fade?.cancel();blend.style.backgroundImage=sprite.style.backgroundImage;blend.style.backgroundPosition=sprite.style.backgroundPosition;fade=blend.animate?.([{opacity:1},{opacity:0}],{duration:160,easing:'ease-in-out'})}previousFrame=frame;previousSpecies=species;
  sprite.style.backgroundImage='url("pets/'+(species==='dog'?'toby':'mochi')+'-consistent.webp")';
  sprite.style.backgroundSize='400% 400%';sprite.style.backgroundPosition=`${frame%4*100/3}% ${Math.floor(frame/4)*100/3}%`;
  sprite.style.transform=`scaleX(${direction})`;sprite.style.transition='none';
  sprite.dataset.motion=state;sprite.dataset.frame=frame;sprite.dataset.direction=direction===1?'right':'left';sprite.dataset.position=position.toFixed(4);
  options.position?.(position);
 }
 function depart(){const [lo,hi]=bounds();direction=position>(lo+hi)/2?-1:1;if(queued){direction=queued;queued=null}set('turn-out',1.1)}
 function advance(dt){
  time+=dt;
  if(state==='idle'){
   frame=response>0?[12,13,14,15,13,12][Math.floor(time*3)%6]:0;
   response=Math.max(0,response-dt);
   if(time>=duration&&response===0)depart();
  }else if(state==='turn-out'){
   frame=Math.min(3,Math.floor(smooth(time/duration)*4));
   if(time>=duration)set('stand',1.2);
  }else if(state==='stand'){
   frame=4+Math.min(3,Math.floor(smooth(time/duration)*4));
   if(time>=duration)set('walk',3+Math.random()*2);
  }else if(state==='walk'||state==='brake'){
   const speed=state==='brake'?1-smooth(time/duration):smooth(Math.min(1,time/.8));
   const delta=dt*.12*speed;position+=direction*delta;travel+=delta;
   frame=8+Math.floor(travel/.035)%4;
   const [lo,hi]=bounds();
   if(state==='walk'&&(time>=duration||position<=lo+.035||position>=hi-.035||response>0||queued))set('brake',.55);
   else if(state==='brake'&&time>=duration)set('sit',1.2);
  }else if(state==='sit'){
   frame=7-Math.min(3,Math.floor(smooth(time/duration)*4));
   if(time>=duration)set('turn-in',1.1);
  }else if(state==='turn-in'){
   frame=3-Math.min(3,Math.floor(smooth(time/duration)*4));
   if(time>=duration){frame=0;set('idle',response>0?5:2+Math.random()*3)}
  }
  paint();
 }
 function tick(now){raf=null;if(!allowed()){last=0;return}const dt=last?Math.min(.05,(now-last)/1000):0;last=now;advance(dt);raf=requestAnimationFrame(tick)}
 function refresh(){if(!allowed()){fade?.cancel();if(raf!==null)cancelAnimationFrame(raf);raf=null;last=0}else if(raf===null)raf=requestAnimationFrame(tick)}
 document.addEventListener('visibilitychange',refresh);reduced.addEventListener?.('change',refresh);paint();refresh();
 return {refresh,react(action){if(action==='idle')return;response=5;if(state==='idle'){time=0;duration=6}refresh()},travel(dir){queued=dir<0?-1:1;if(state==='idle')duration=time;refresh()},setSpecies(value){species=value==='dog'?'dog':'cat';frame=0;set('idle',4);response=0;queued=null;paint()},destroy(){disposed=true;refresh();blend.remove();document.removeEventListener('visibilitychange',refresh);reduced.removeEventListener?.('change',refresh)}};
};
})();
