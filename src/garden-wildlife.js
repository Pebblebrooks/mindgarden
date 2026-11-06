/* Downloaded skeletal animals + native 3D insects. Bundled locally; no CDN. */
import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),rand=(a,b)=>a+Math.random()*(b-a);
const loader=new GLTFLoader();
window.createGardenWildlife=async function(host){
 let renderer;
 try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'});}catch{return null;}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.domElement.setAttribute('aria-hidden','true');host.append(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(0,1,1,0,.1,2000);camera.position.z=1000;
 scene.add(new THREE.HemisphereLight(0xfff5df,0x627047,2.1));
 const sun=new THREE.DirectionalLight(0xfff0d3,2.5);sun.position.set(-300,600,900);scene.add(sun);
 let width=1,height=1,lawnTop=0,paused=true,mode='gentle',last=0,time=0,frame=0,disposed=false;
 const actors=[],flyers=[];
 function resize(){
  const r=host.getBoundingClientRect();width=Math.max(1,r.width);height=Math.max(1,r.height);
  const extra=host.parentElement?.querySelector('.welcome-extra')?.getBoundingClientRect();
  lawnTop=Math.max(height*.64,(extra?.bottom||r.top+height*.6)-r.top+36);
  lawnTop=Math.min(lawnTop,height-160);
  renderer.setSize(width,height,false);camera.right=width;camera.top=height;camera.updateProjectionMatrix();
  draw(0);
 }
 const observer=new ResizeObserver(resize);observer.observe(host);
 const shadowMaterial=new THREE.MeshBasicMaterial({color:0x24381c,transparent:true,opacity:.16,depthWrite:false});
 function makeShadow(){const m=new THREE.Mesh(new THREE.CircleGeometry(1,32),shadowMaterial.clone());scene.add(m);return m;}
 function change(a,name){
  const clip=a.clips[name]||a.clips.idle;if(!clip)return;
  const next=a.mixer.clipAction(clip);if(next!==a.action){next.reset().play();if(a.action){next.crossFadeFrom(a.action,.5,false);}a.action=next;}
  a.state=name;a.stateTime=0;
 }
 function choose(a){
  if(a.state==='walk'||a.state==='fly'){
   const choices=a.kind==='owl'?['idle','sit']:(a.kind==='cat'?['idle','idle_alt','eat','sit','sleep','play','roll']:['idle','idle_alt','eat','sit','sleep','play']);
   let next=choices[Math.floor(Math.random()*choices.length)];
   change(a,next==='play'?'jump':next==='roll'?'sleep':next);a.state=next;
   a.duration=next==='sleep'?rand(16,28):next==='roll'?5:next==='play'?rand(2,3.8):rand(5,12);
  }else{
   a.start={...a.pos};
   // Wander within a patch of lawn: no rail, screen-edge teleport or mirror flip.
   let x=clamp(a.pos.x+rand(-.23,.23),.06,.94),y=clamp(a.pos.y+rand(-.42,.42),.08,.94);
   if(Math.abs(x-a.pos.x)<.08)x=clamp(x+.14,.06,.94);
   a.target={x,y};a.control={x:(x+a.pos.x)/2+rand(-.07,.07),y:(y+a.pos.y)/2+rand(-.13,.13)};
   a.duration=rand(7,12)*(mode==='gentle'?1.35:1);change(a,a.kind==='owl'&&Math.random()<.7?'fly':'walk');
  }
 }
 async function animal(kind,x,y,size){
  try{
   const filename='wildlife/animal_'+kind+'.glb';
   const gltf=await loader.loadAsync(window.MindGardenAssets?.[filename]||filename);
   const model=gltf.scene,box=new THREE.Box3().setFromObject(model),h=box.max.y-box.min.y;
   const group=new THREE.Group(),tilt=new THREE.Group();group.add(tilt);const rollPivot=new THREE.Group();rollPivot.position.y=.35;tilt.add(rollPivot);rollPivot.add(model);scene.add(group);tilt.rotation.x=.12;
   model.position.y-=box.min.y;model.scale.setScalar(1/h);model.position.y=model.position.y/h-.35;
   const a={kind,group,tilt,rollPivot,model,shadow:makeShadow(),mixer:new THREE.AnimationMixer(model),clips:Object.fromEntries(gltf.animations.map(c=>[c.name,c])),pos:{x,y},size,heading:rand(-.7,.7),stateTime:0,duration:rand(3,10),state:'idle'};
   actors.push(a);change(a,kind==='fox'?'sleep':kind==='cat'?'sit':'idle');a.mixer.update(rand(.1,.5));return a;
  }catch(e){console.warn('Garden animal unavailable:',kind);return null;}
 }
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
  const f={kind,group,body,wings,phase:rand(0,20),index,size:kind==='swallow'?28:24,baseX:rand(.1,.9),baseY:rand(.1,.28)};flyers.push(f);
 }
 [0xdca536,0xf0e6cb,0x8eb6cf,0xd48c46].forEach((c,i)=>insect('butterfly',c,i));
 insect('dragonfly',0,4);insect('bee',0,5);insect('bee',0,6);
 bird('swallow',0x344953,0);bird('finch',0xa87a40,1);bird('swallow',0x53656e,2);
 const loaded=await Promise.all([animal('cat',.18,.65,46),animal('fox',.81,.40,48),animal('owl',.80,.08,28)]);
 function draw(dt){
  time+=dt;
  for(const a of actors){
   a.stateTime+=dt;if(dt&&a.stateTime>a.duration)choose(a);
   if(a.state==='walk'||a.state==='fly'){
    const t=clamp(a.stateTime/a.duration,0,1),u=t*t*(3-2*t),q=1-u;
    a.pos.x=q*q*a.start.x+2*q*u*a.control.x+u*u*a.target.x;
    a.pos.y=q*q*a.start.y+2*q*u*a.control.y+u*u*a.target.y;
    const dx=2*q*(a.control.x-a.start.x)+2*u*(a.target.x-a.control.x),dy=2*q*(a.control.y-a.start.y)+2*u*(a.target.y-a.control.y);
    const wanted=Math.atan2(dx*width,dy*(height-lawnTop)*2);let diff=Math.atan2(Math.sin(wanted-a.heading),Math.cos(wanted-a.heading));a.heading+=diff*Math.min(1,dt*3);
    // Ease the gait as the animal starts and comes to rest.
    a.mixer.timeScale=a.state==='fly'?2.7:(mode==='gentle'?.8:1)*(.25+.75*Math.sin(Math.PI*t));
   }else a.mixer.timeScale=a.state==='sleep'?.65:1;
   a.tilt.rotation.y=a.heading;
   // A tucked resting pose rolls around the body's long axis, then settles upright.
   const rollT=clamp(a.stateTime/a.duration,0,1);a.rollPivot.rotation.z=a.state==='roll'?Math.sin(Math.PI*rollT)**2*Math.PI*1.1:0;
   a.mixer.update(dt);
   const y=lawnTop+a.pos.y*(height-lawnTop-14),size=a.size*(.58+.68*a.pos.y)*Math.min(1,width/650+.35);
   const altitude=a.state==='fly'?Math.sin(Math.PI*clamp(a.stateTime/a.duration,0,1))*Math.min(160,height*.20):0;
   a.group.position.set(a.pos.x*width,height-y+altitude,20+a.pos.y*20);a.shadow.material.opacity=.16*(1-altitude/220);a.group.scale.setScalar(size);
   a.shadow.position.set(a.pos.x*width,height-y-1,19+a.pos.y*20);a.shadow.scale.set(size*.32,size*.055,1);
  }
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
  renderer.render(scene,camera);
 }
 function tick(now){
  if(disposed)return;frame=requestAnimationFrame(tick);
  if(paused){last=now;return;}const dt=Math.min((now-last)/1000,.06);last=now;draw(dt);
 }
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();paused=true;host.classList.add('wildlife-fallback');});
 renderer.domElement.addEventListener('webglcontextrestored',()=>{host.classList.remove('wildlife-fallback');api.setMode(mode,false);});
 const api={setMode(value,shouldPause){mode=value;flyers.forEach((f,i)=>f.group.visible=value==='standard'||i<4||i===7||i===9);paused=shouldPause||value==='off';host.dataset.paused=String(paused);last=performance.now();draw(0)},snapshot(){return {time,paused,actors:actors.map(a=>({kind:a.kind,state:a.state,x:a.pos.x,y:a.pos.y,size:a.group.scale.x})),flyers:flyers.length}},dispose(){disposed=true;cancelAnimationFrame(frame);observer.disconnect();renderer.dispose();scene.traverse(o=>{o.geometry?.dispose();if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose())})}};
 host.dataset.ready=String(loaded.filter(Boolean).length);resize();frame=requestAnimationFrame(tick);return api;
};
