/* Continuous visits: enter from an edge, pause in place, then visibly leave. */
(function(){
window.createPetLedge=function(root,assets,enabled=()=>true,crawlAsset='pets/crawl-sprites.webp',onAction=()=>{},actionAsset='pets/natural-actions.webp',options={}){
 root.innerHTML='<span class="ledge-pet cat" aria-hidden="true"><i></i></span><span class="ledge-pet dog" aria-hidden="true"><i></i></span>';
 const els=[...root.children],reduced=matchMedia('(prefers-reduced-motion: reduce)');let disposed=false,paused=false,visible=true,raf=null,lastTime=0;
 const rand=(a,b)=>a+Math.random()*(b-a),ease=window.anime?.eases?.inOutSine||((p)=>(1-Math.cos(Math.PI*p))/2);
 const states=els.map((el,i)=>({el,i,action:'away',time:0,duration:i?2:0,x:0,dir:i?-1:1,travel:0,speed:0,targetSpeed:0,age:0,stay:0,pauses:0,lastRest:'',nextAction:null,forced:null,size:140}));
 function allowed(){return !disposed&&!paused&&visible&&!document.hidden&&!reduced.matches&&enabled()}
 function set(s,a,d){options.audio?.stop('ledge-'+s.i);s.voice=null;s.action=a;s.time=0;s.duration=d;s.el.dataset.action=a;s.voice=options.audio?.perform('ledge-'+s.i,a);onAction(s.i,a);root.dataset.behaviour=states.map(v=>v.action).join(',')}
 function enter(s){s.size=Math.min(150,root.clientWidth*.32);s.dir=Math.random()<.5?1:-1;const other=states[1-s.i];if(other.action!=='away')s.dir=other.x<root.clientWidth/2?-1:1;s.x=s.dir===1?-s.size-2:root.clientWidth+2;s.speed=0;s.targetSpeed=rand(20,33);s.travel=0;s.age=0;s.stay=rand(18,32);s.pauses=0;s.exiting=false;s.el.style.width=s.el.style.height=s.size+'px';set(s,'enter',0)}
 function restChoice(s){const choices=['sit','look','groom',...(s.i?['bark','growl']:['meow','purr'])].filter(a=>a!==s.lastRest),a=s.forced||choices[Math.floor(Math.random()*choices.length)];s.forced=null;s.lastRest=a;set(s,a,({meow:1.1,bark:1.2,growl:2.6,purr:5.7})[a]||rand(a==='groom'?3:2,a==='groom'?6:4));s.pauses++}
 function leave(s){s.exiting=true;if((s.jumpRequested||Math.random()<.45)&&s.x>0&&s.x+s.size<root.clientWidth){set(s,'jump',1.7);s.jumpX=s.x;s.jumpRequested=false}else{set(s,'exit',0)}}
 function advance(s,dt){s.time+=dt;if(s.action==='away'){if(s.time>=s.duration)enter(s);return} s.age+=dt;
 const width=root.clientWidth,size=s.size,fullyInside=s.x>=0&&s.x+size<=width;
 if(['enter','crawl','exit'].includes(s.action)){
   // Smooth acceleration; the gait advances with actual distance, not a free-running timer.
   const desired=s.targetSpeed;s.speed+=(desired-s.speed)*(1-Math.exp(-dt*4));
   const other=states[1-s.i],near=other.action!=='away'&&Math.abs(other.x-s.x)<size*.92&&((s.dir===1&&other.x>s.x)||(s.dir===-1&&other.x<s.x));
   if(near&&s.action!=='exit'&&fullyInside){s.dir*=-1;s.speed=0;set(s,'brake',.7);s.nextAction='rise';return}
   const distance=s.speed*dt;s.x+=s.dir*distance;s.travel+=distance;
   if(s.action==='enter'&&fullyInside)set(s,'crawl',rand(2,5));
   else if(s.action==='crawl'&&(s.time>=s.duration||s.forced)&&fullyInside){set(s,'brake',.7);s.nextAction='rise'}
   // Crossing an edge is the only horizontal removal path.
   if(s.action!=='enter'&&(s.x+size<0||s.x>width)){set(s,'away',rand(2,6));s.exiting=false}
   else if(s.action==='crawl'&&!fullyInside&&s.age>10)set(s,'exit',0);
 }else if(s.action==='brake'){
   const distance=s.speed*(1-ease(Math.min(1,s.time/s.duration)))*dt;s.x+=s.dir*distance;s.travel+=distance;
   if(s.time>=s.duration){s.speed=0;set(s,'rise',.85)}
 }else if(s.action==='rise'&&s.time>=s.duration)restChoice(s);
 else if(['sit','look','groom','meow','purr','bark','growl'].includes(s.action)&&s.time>=s.duration){
   if(s.jumpRequested||s.age>s.stay||s.pauses>=3){set(s,'lower',.85);s.nextAction='leave'}
   else if(Math.random()<.45&&s.pauses<5)restChoice(s);
   else{set(s,'lower',.85);s.nextAction='crawl'}
 }else if(s.action==='lower'&&s.time>=s.duration){if(s.nextAction==='leave')leave(s);else set(s,'crawl',rand(3,7))}
 else if(s.action==='jump'&&s.time>=s.duration){set(s,'away',rand(3,7))}
 }
 function paint(s){const sprite=s.el.firstElementChild,size=s.size;let frame=0,rows=8,y=root.clientHeight-size*.92,flip=s.dir;
 // All disappearance occurs after the animal is geometrically outside the clipped ledge.
 if(s.action==='away'){s.el.style.transform=`translate(${-size-4}px,${root.clientHeight+size}px)`;return}
 if(['enter','crawl','brake','exit'].includes(s.action)){rows=4;frame=Math.floor(s.travel/Math.max(2,size*.045))%8+s.i*8;y=root.clientHeight-size*.78;sprite.style.backgroundImage='url("'+crawlAsset+'")'}
 else if(['meow','purr','bark','growl'].includes(s.action)){rows=4;sprite.style.backgroundImage='url("'+(options.vocalAsset||'pets/vocal-poses.webp')+'")';const t=s.voice?.active?s.voice.time:s.time;const row={meow:0,purr:1,bark:2,growl:3}[s.action];frame=row*4+(s.action==='purr'?Math.floor(t*2)%4:Math.min(3,Math.floor(t/({meow:.34,bark:.44,growl:.61}[s.action])*4)));}
 else{sprite.style.backgroundImage='url("'+actionAsset+'")';const t=s.time;
 if(s.action==='rise')frame=Math.min(3,Math.floor(ease(Math.min(1,t/s.duration))*4));
 else if(s.action==='lower')frame=3-Math.min(3,Math.floor(ease(Math.min(1,t/s.duration))*4));
 else if(s.action==='sit')frame=3;
 else if(s.action==='look')frame=[4,4,5,5,6,6,5,7][Math.floor(t*2)%8];
 else if(s.action==='groom')frame=[8,9,9,10,10,9,11][Math.floor(t*3)%7];
 else if(s.action==='jump'){
   const flight=Math.max(0,t-.35);frame=t<.18?13:t<.35?14:15;
   s.x=s.jumpX+s.dir*size*.7*flight;
   y+=-size*.65*flight+size*1.7*flight*flight;
 }
 frame+=s.i*16;
 }
 sprite.style.backgroundSize=`400% ${rows*100}%`;sprite.style.backgroundPosition=`${frame%4*100/3}% ${Math.floor(frame/4)*100/(rows-1)}%`;sprite.style.transform=`scaleX(${flip})`;
 s.el.dataset.frame=frame;s.el.dataset.x=s.x.toFixed(2);s.el.dataset.y=y.toFixed(2);s.el.style.opacity='1';s.el.style.transform=`translate(${s.x}px,${y}px)`;
 }
 function tick(now){raf=null;if(!allowed()){stop();return}const dt=Math.min(.05,lastTime?(now-lastTime)/1000:0);lastTime=now;states.forEach(s=>{advance(s,dt);paint(s)});raf=requestAnimationFrame(tick)}
 function stop(){states.forEach(s=>options.audio?.stop('ledge-'+s.i));if(raf!==null)cancelAnimationFrame(raf);raf=null;lastTime=0}
 function refresh(){root.hidden=!enabled();if(!allowed())stop();else if(raf===null)raf=requestAnimationFrame(tick)}
 function visit(action){states.forEach(s=>{if(s.action==='away'){s.duration=0}else if(['sit','look','groom','meow','purr','bark','growl'].includes(action)){s.forced=action;if(s.action==='crawl'&&s.x>=0&&s.x+s.size<=root.clientWidth){set(s,'brake',.7)}else if(['sit','look','groom','meow','purr','bark','growl'].includes(s.action)){restChoice(s)}}else if(action==='jump'){s.jumpRequested=true;if(['sit','look','groom','meow','purr','bark','growl'].includes(s.action)){s.jumpX=s.x;s.jumpRequested=false;set(s,'jump',1.7)}else{s.stay=0}}else if(action==='crawl'||action==='travel'){if(['sit','look','groom','meow','purr','bark','growl'].includes(s.action)){s.nextAction='crawl';set(s,'lower',.85)}}else{s.stay=0}});refresh()}
 const obs=typeof IntersectionObserver==='function'?new IntersectionObserver(e=>{visible=e[0].isIntersecting;refresh()}):null;obs?.observe(root);document.addEventListener('visibilitychange',refresh);reduced.addEventListener?.('change',refresh);refresh();
 return {refresh,visit,pause(value){paused=value;refresh()},destroy(){disposed=true;stop();obs?.disconnect();document.removeEventListener('visibilitychange',refresh);reduced.removeEventListener?.('change',refresh)}};
};
})();
