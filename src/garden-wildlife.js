/* Local photographic sprites: identical rendering with or without WebGL. */
window.createGardenWildlife=async function(host){
 const layer=document.createElement('div');layer.className='scenery-flyers';layer.setAttribute('aria-hidden','true');host.append(layer);
 const atlas=new Image();atlas.src=window.MindGardenAssets?.['wildlife-flight-atlas.png']||'wildlife-flight-atlas.png';
 let disposed=false,paused=true,mode='gentle',time=0,last=0,frame=0,width=1,height=1;
 const flyers=[];
 for(let i=0;i<9;i++){
  const bird=i<2||i>=6,node=document.createElement('span'),sprite=document.createElement('i');
  node.className='scenery-flyer';sprite.className='wildlife-sprite';sprite.style.backgroundImage='url("'+atlas.src+'")';node.append(sprite);layer.append(node);
  flyers.push({node,sprite,kind:bird?'swallow':'butterfly',distant:i>=6,phase:i*7.31,frame:0,x:0,y:0,size:0,visible:false});
 }
 // Clear-sky bounds are authored against the source image, then projected using
 // the same centred cover crop as the background. Never infer sky from viewport height.
 function skyBounds(){
  const id=document.documentElement.dataset.gardenScene,scene=window.MindGardenScenes?.scenes.find(s=>s.id===id);
  if(!scene?.sky||host.closest('.has-welcome-video'))return null;
  const [left,right,top,bottom]=scene.sky,ratio=scene.aspect||16/9,h=Math.max(height,width/ratio),w=h*ratio;
  const x=(width-w)/2,y=(height-h)/2;
  const bounds={left:Math.max(0,x+left*w),right:Math.min(width,x+right*w),top:Math.max(0,y+top*h),bottom:Math.min(height,y+bottom*h)};
  return bounds.right-bounds.left>30&&bounds.bottom-bounds.top>12?bounds:null;
 }
 function draw(){
  const gentle=mode==='gentle',speed=gentle?.65:1,sky=skyBounds();
  flyers.forEach((f,i)=>{
   const bird=f.kind==='swallow';
   f.visible=mode!=='off'&&(mode==='standard'||[0,2,3,6,7].includes(i))&&(!bird||!!sky);
   f.node.hidden=!f.visible;if(!f.visible)return;
   const t=time*speed+f.phase;let x,y,scale,angle,flip=1,row,col;
   if(bird){
    const duration=(f.distant?50:29)+i*3,u=((t%duration)+duration)%duration/duration;
    const sw=sky.right-sky.left,sh=sky.bottom-sky.top;
    f.size=Math.min(f.distant?19:54,Math.max(f.distant?9:26,width*(f.distant?.014:.043)),sh*.38,sw*.12);
    const pad=f.size*.75+2,travel=i%2?1-u:u;flip=i%2?-1:1;
    x=(sky.left+pad+(sw-2*pad)*travel)/width;
    y=(sky.top+pad+(sh-2*pad)*(.25+(i%3)*.22+.08*Math.sin(u*Math.PI*2)))/height;
    angle=flip*4*Math.cos(u*Math.PI*2);
    // Fade out well before roof/vegetation boundaries; restart only while invisible.
    f.node.style.opacity=String(Math.min(1,u/.12,(1-u)/.12)*(f.distant?.56:.88));
    const beat=time*5.2+i*.37,glide=(t%8)>3.2;
    row=glide?1:0;col=glide?Math.floor((t%3)/3*4):Math.floor(beat*4)%4;
   }else{
    // Slow drifting arcs with smaller irregular flutters, separated from sky birds.
    const side=i%2===0?-1:1,base=side<0?.18:.82;
    x=base+.095*Math.sin(t*.23)+.026*Math.sin(t*.71);
    y=.60+(i-2)*.055+.045*Math.cos(t*.31)+.010*Math.sin(t*1.7);
    const dx=.095*.23*Math.cos(t*.23)+.026*.71*Math.cos(t*.71),dy=-.045*.31*Math.sin(t*.31)+.017*Math.cos(t*1.7);
    angle=Math.max(-28,Math.min(28,dx*600+dy*240));scale=.80+.18*Math.sin(t*.19);
    row=i%2===0?2:3;col=Math.floor(time*(6.4+i*.3)*4+i)%4;
    f.size=Math.min(43,Math.max(28,width*.031))*scale;
    f.node.style.opacity='1';
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
  snapshot(){return {time,paused,renderer:'sprite',loaded:atlas.complete&&atlas.naturalWidth>0,actors:[],flyers:flyers.length,sky:skyBounds(),spacing:flyers.map((f,i)=>({id:'flyer-'+i,kind:f.kind,distant:f.distant,x:f.x,y:f.y,r:f.size/2,visible:f.visible,frame:f.frame}))};},
  dispose(){disposed=true;cancelAnimationFrame(frame);observer?.disconnect();window.removeEventListener('resize',resize);window.removeEventListener('gardenSceneChange',resize);layer.remove();}
 };
 window.addEventListener('gardenSceneChange',resize);
 atlas.onload=()=>{host.dataset.ready='9';resize();};atlas.onerror=()=>{host.dataset.ready='unavailable';layer.hidden=true;};
 if(atlas.complete&&atlas.naturalWidth)host.dataset.ready='9';resize();return api;
};
