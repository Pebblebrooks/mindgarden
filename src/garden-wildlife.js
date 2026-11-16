/* Local photographic sprites: identical rendering with or without WebGL. */
window.createGardenWildlife=async function(host){
 const layer=document.createElement('div');layer.className='scenery-flyers';layer.setAttribute('aria-hidden','true');host.append(layer);
 const atlas=new Image();atlas.src=window.MindGardenAssets?.['wildlife-flight-atlas.png']||'wildlife-flight-atlas.png';
 let disposed=false,paused=true,mode='gentle',time=0,last=0,frame=0,width=1,height=1;
 const flyers=[];
 for(let i=0;i<6;i++){
  const bird=i<2,node=document.createElement('span'),sprite=document.createElement('i');
  node.className='scenery-flyer';sprite.className='wildlife-sprite';sprite.style.backgroundImage='url("'+atlas.src+'")';node.append(sprite);layer.append(node);
  flyers.push({node,sprite,kind:bird?'swallow':'butterfly',phase:i*7.31,frame:0,x:0,y:0,size:0,visible:false});
 }
 function draw(){
  const gentle=mode==='gentle',speed=gentle?.65:1;
  flyers.forEach((f,i)=>{
   f.visible=mode!=='off'&&(mode==='standard'||i===0||i===2||i===3);
   f.node.hidden=!f.visible;if(!f.visible)return;
   const t=time*speed+f.phase,bird=f.kind==='swallow';let x,y,scale,angle,flip=1,row,col;
   if(bird){
    // Cross entirely offscreen before starting another pass; never reverse in place.
    const duration=29+i*8,u=((t%duration)+duration)%duration/duration;
    x=-.13+1.26*u;if(i===1){x=1-x;flip=-1;}
    y=.29+i*.16+.035*Math.sin(u*Math.PI*2)+.014*Math.sin(u*Math.PI*4);
    scale=.76+.22*Math.sin(u*Math.PI);angle=flip*(5*Math.cos(u*Math.PI*2));
    const beat=time*5.2+i*.37,glide=(t%8)>3.2;
    row=glide?1:0;col=glide?Math.floor((t%3)/3*4):Math.floor(beat*4)%4;
    f.size=Math.min(72,Math.max(40,width*.051))*scale;
   }else{
    // Slow drifting arcs with smaller irregular flutters, separated from sky birds.
    const side=i%2===0?-1:1,base=side<0?.18:.82;
    x=base+.095*Math.sin(t*.23)+.026*Math.sin(t*.71);
    y=.60+(i-2)*.055+.045*Math.cos(t*.31)+.010*Math.sin(t*1.7);
    const dx=.095*.23*Math.cos(t*.23)+.026*.71*Math.cos(t*.71),dy=-.045*.31*Math.sin(t*.31)+.017*Math.cos(t*1.7);
    angle=Math.max(-28,Math.min(28,dx*600+dy*240));scale=.80+.18*Math.sin(t*.19);
    row=i%2===0?2:3;col=Math.floor(time*(6.4+i*.3)*4+i)%4;
    f.size=Math.min(43,Math.max(28,width*.031))*scale;
   }
   f.x=x*width;f.y=y*height;f.frame=row*4+col;
   f.node.style.width=f.node.style.height=f.size+'px';
   f.node.style.transform=`translate3d(${f.x-f.size/2}px,${f.y-f.size/2}px,0) rotate(${angle}deg) scaleX(${flip})`;
   f.sprite.style.backgroundPosition=`${col*100/3}% ${row*100/3}%`;
  });
 }
 function tick(now){
  frame=0;if(paused||disposed)return;
  // Cap rendering at 30fps; wing speed is independent of slower Gentle travel.
  if(!last)last=now;const elapsed=now-last;
  if(elapsed>=1000/30){time+=Math.min(elapsed/1000,.1);last=now;draw();}
  frame=requestAnimationFrame(tick);
 }
 function resize(){const r=host.getBoundingClientRect();width=Math.max(1,r.width);height=Math.max(1,r.height);draw();}
 const observer=window.ResizeObserver?new ResizeObserver(resize):null;observer?.observe(host);
 if(!observer)window.addEventListener('resize',resize);
 const api={
  setMode(value,shouldPause){mode=value;paused=!!shouldPause||value==='off';host.dataset.paused=String(paused);draw();if(paused){cancelAnimationFrame(frame);frame=0;last=0;}else if(!frame){last=0;frame=requestAnimationFrame(tick);}},
  snapshot(){return {time,paused,renderer:'sprite',loaded:atlas.complete&&atlas.naturalWidth>0,actors:[],flyers:flyers.length,spacing:flyers.map((f,i)=>({id:'flyer-'+i,x:f.x,y:f.y,r:f.size/2,visible:f.visible,frame:f.frame}))};},
  dispose(){disposed=true;cancelAnimationFrame(frame);observer?.disconnect();window.removeEventListener('resize',resize);layer.remove();}
 };
 atlas.onload=()=>{host.dataset.ready='6';resize();};atlas.onerror=()=>{host.dataset.ready='unavailable';layer.hidden=true;};
 if(atlas.complete&&atlas.naturalWidth)host.dataset.ready='6';resize();return api;
};
