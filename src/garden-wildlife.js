/* Flying birds and butterflies only. Bundled locally; no CDN. */
import * as THREE from 'three';
import {placeSolids} from './wildlife-spacing.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),rand=(a,b)=>a+Math.random()*(b-a);
window.createGardenWildlife=async function(host){
 let renderer;
 try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{return null;}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.domElement.setAttribute('aria-hidden','true');host.append(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(0,1,1,0,.1,2000);camera.position.z=1000;
 scene.add(new THREE.HemisphereLight(0xfff5df,0x627047,2.1));
 const sun=new THREE.DirectionalLight(0xfff0d3,2.5);sun.position.set(-300,600,900);scene.add(sun);
 let width=1,height=1,lawnTop=0,paused=true,mode='gentle',last=0,time=0,frame=0,disposed=false;
 const flyers=[];let spacing=[];const previousPositions=new Map();const boundsBox=new THREE.Box3();const boundsSize=new THREE.Vector3();const boundsCenter=new THREE.Vector3();
 function resize(){
  const r=host.getBoundingClientRect();width=Math.max(1,r.width);height=Math.max(1,r.height);
  const extra=host.parentElement?.querySelector('.welcome-extra')?.getBoundingClientRect();
  lawnTop=Math.max(height*.64,(extra?.bottom||r.top+height*.6)-r.top+36);
  lawnTop=Math.min(lawnTop,height-160);
  renderer.setSize(width,height,false);camera.right=width;camera.top=height;camera.updateProjectionMatrix();
  draw(0);
 }
 const observer=new ResizeObserver(resize);observer.observe(host);
 // Small curved surfaces, lit in 3D, articulate independently of flight paths.
 function ellipsoid(color,x,y,z,sx,sy,sz,parent){const mesh=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),new THREE.MeshStandardMaterial({color,roughness:.7}));mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);parent.add(mesh);return mesh;}
 function insect(kind,color,index){
  const group=new THREE.Group(),body=new THREE.Group();group.add(body);scene.add(group);
  const wings=[];
  ellipsoid(kind==='bee'?0xd3a32f:0x343a31,0,0,0,.075,.28,.07,body);
  ellipsoid(0x292d24,0,.26,0,.085,.09,.08,body);
  for(let side of [-1,1]){
   const wing=new THREE.Group();body.add(wing);wings.push({wing,side});
   if(kind==='dragonfly'){
    for(let d of [-1,1])ellipsoid(0xc3e9df,side*.44,d*.11,0,.43,.065,.018,wing);
   }else if(kind==='bee')ellipsoid(0xe0f1e8,side*.24,.05,0,.23,.18,.018,wing);
   else{
    ellipsoid(0x34312b,side*.27,.16,0,.29,.32,.025,wing);
    ellipsoid(color,side*.27,.16,.02,.25,.28,.025,wing);
    ellipsoid(color,side*.22,-.2,0,.21,.21,.025,wing);
    for(let k=0;k<4;k++)ellipsoid(0xffedb0,side*(.24+.12*Math.sin(k)),.05+k*.065,.05,.025,.025,.012,wing);
   }
  }
  const f={kind,group,body,wings,phase:rand(0,20),index,size:kind==='dragonfly'?15:kind==='bee'?9:rand(12,19),baseX:rand(.06,.94),baseY:rand(.64,.94)};flyers.push(f);
 }
 function bird(kind,color,index){
  const group=new THREE.Group(),body=new THREE.Group();group.add(body);scene.add(group);
  ellipsoid(color,0,0,0,.17,.11,.39,body);ellipsoid(color,0,.10,.31,.12,.12,.13,body);
  ellipsoid(0xd8a848,0,.08,.46,.055,.035,.09,body);
  ellipsoid(0xf6edcf,0,-.045,.09,.145,.075,.23,body);
  const wings=[];
  for(let side of [-1,1]){
   const wing=new THREE.Group();wing.position.set(side*.1,0,0);body.add(wing);wings.push({wing,side});
   ellipsoid(color,side*.30,0,-.05,.34,.026,.18,wing);
   ellipsoid(color,side*.58,0,-.18,.28,.018,.08,wing);
   ellipsoid(color,side*.07,-.015,-.43,.055,.025,.23,body);
  }
  const f={kind,group,body,wings,phase:rand(0,20),index,size:kind==='swallow'?28:24,baseX:rand(.1,.9),baseY:.11+index*.085};flyers.push(f);
 }
 [0xdca536,0xf0e6cb,0x8eb6cf,0xd48c46].forEach((c,i)=>insect('butterfly',c,i));
 bird('swallow',0x344953,0);bird('finch',0xa87a40,1);bird('swallow',0x53656e,2);
 function draw(dt){
  time+=dt;
  for(const f of flyers){
   const t=time+f.phase,birdy=f.kind==='swallow'||f.kind==='finch';
   // Continuous looping flight, with banking, depth and occasional gliding. No teleports.
   let x,y,depth;
   if(birdy){
    const orbit=t*.12+f.index*2.1;x=.5+.55*Math.sin(orbit);y=f.baseY+.055*Math.cos(orbit*1.7);depth=.55+.25*(Math.cos(orbit)+1);
    f.body.rotation.y=Math.atan2(Math.cos(orbit),-.28*Math.sin(orbit));f.body.rotation.z=-.18*Math.sin(orbit);
   }else{
    x=f.baseX+.08*Math.sin(t*.24+f.index)+.025*Math.sin(t*.67);y=f.baseY+.045*Math.cos(t*.33)+.012*Math.sin(t*1.2);depth=.65+.3*(Math.sin(t*.19)+1);
    f.body.rotation.z=.22*Math.cos(t*.67);f.body.rotation.y=.3*Math.sin(t*.24);
   }
   const size=f.size*depth;f.group.position.set(x*width,height*(1-y),60);f.group.scale.setScalar(size);
   const hz=birdy?(f.kind==='swallow'?6.5:8):f.kind==='butterfly'?8:f.kind==='dragonfly'?22:30;
   const glide=birdy&&Math.sin(t*.8)>.76;
   for(const {wing,side} of f.wings){if(birdy)wing.rotation.z=side*(glide?.12:Math.sin(t*Math.PI*2*hz)*.75);else wing.rotation.y=side*(.2+Math.sin(t*Math.PI*2*hz)*1.0);}
  }
  const dark=document.documentElement.dataset.theme==='dark'||(!['dark','light'].includes(document.documentElement.dataset.theme)&&matchMedia('(prefers-color-scheme:dark)').matches);
  sun.color.setHex(dark?0xffae71:0xfff0d3);sun.intensity=dark?1.7:2.5;
  scene.updateMatrixWorld(true);
  const solidObjects=flyers.filter((f,i)=>mode==='standard'||[0,1,4,5].includes(i)).map(f=>({id:'flyer-'+f.kind+'-'+f.index,group:f.group}));
  const desired=solidObjects.map(o=>{o.group.visible=true;boundsBox.setFromObject(o.group,true);boundsBox.getSize(boundsSize);boundsBox.getCenter(boundsCenter);const radius=Math.hypot(boundsSize.x,boundsSize.y)/2+3;return {...o,x:boundsCenter.x,y:boundsCenter.y,r:radius,previous:previousPositions.get(o.id),maxStep:dt*(o.actor?45:55)}});
  spacing=placeSolids(desired,width,height);
  for(const item of spacing){const original=desired.find(o=>o.id===item.id),dx=item.x-original.x,dy=item.y-original.y;item.group.visible=item.visible;previousPositions.set(item.id,{x:item.x,y:item.y,visible:item.visible});if(!item.visible)continue;item.group.position.x+=dx;item.group.position.y+=dy;
  }
  renderer.render(scene,camera);
 }
 function tick(now){
  if(disposed)return;frame=requestAnimationFrame(tick);
  if(paused){last=now;return;}const dt=Math.min((now-last)/1000,.06);last=now;draw(dt);
 }
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();paused=true;host.classList.add('wildlife-fallback');});
 renderer.domElement.addEventListener('webglcontextrestored',()=>{host.classList.remove('wildlife-fallback');api.setMode(mode,false);});
 const api={setMode(value,shouldPause){mode=value;flyers.forEach((f,i)=>f.group.visible=value==='standard'||[0,1,4,5,7,9].includes(i));paused=shouldPause||value==='off';host.dataset.paused=String(paused);last=performance.now();draw(0)},snapshot(){return {time,paused,actors:[],flyers:flyers.length,spacing:spacing.map(o=>({id:o.id,x:o.x,y:o.y,r:o.r,visible:o.visible}))}},dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();renderer.dispose();scene.traverse(o=>{o.geometry?.dispose();if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose())})}};
 host.dataset.ready=String(flyers.length);resize();frame=requestAnimationFrame(tick);return api;
};
