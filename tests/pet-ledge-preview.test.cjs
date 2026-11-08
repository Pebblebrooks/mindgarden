const {JSDOM}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
for(const width of [340,640]){
 const d=new JSDOM('<div id="ledge"></div>',{runScripts:'outside-only',pretendToBeVisual:true}),w=d.window;
 w.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){}});
 let raf,id=0,seed=1234;w.Math.random=()=>((seed=(seed*16807)%2147483647)/2147483647);
 w.requestAnimationFrame=f=>{raf=f;return ++id};w.cancelAnimationFrame=()=>{raf=null};
 const el=w.document.getElementById('ledge');Object.defineProperty(el,'clientWidth',{value:width});Object.defineProperty(el,'clientHeight',{value:165});
 w.eval(fs.readFileSync('public/vendor/anime-4.2.2.min.js','utf8'));w.eval(fs.readFileSync('public/pet-ledge.js','utf8'));
 const c=w.createPetLedge(el,[],()=>true,'crawl',()=>{},'actions');const actions=new Set(),frames=new Set();let prev=[null,null],exits=0;
 for(let t=0;t<240000;t+=40){raf(t);[...el.children].forEach((e,i)=>{
   const a=e.dataset.action,x=Number(e.dataset.x),y=Number(e.dataset.y);actions.add(a);if(a==='crawl')frames.add(e.dataset.frame);
   if(prev[i]&&a==='away'&&prev[i].a!=='away'){assert(['exit','crawl','jump'].includes(prev[i].a));if(prev[i].a!=='jump')assert(prev[i].x<3||prev[i].x>width-3);else assert(prev[i].y>165);exits++}
   if(prev[i]&&a&&prev[i].a&&a!=='away'&&prev[i].a!=='away')assert(Math.abs(x-prev[i].x)<20,'no teleport within visit');
   if(['sit','look','groom'].includes(a)&&prev[i]?.a===a)assert.equal(x,prev[i].x,'rest stays in place');
   assert.notEqual(e.style.opacity,'0','no visible fade');prev[i]={a,x,y};
 })}
 for(const a of ['crawl','rise','sit','look','groom','lower','exit','jump'])assert(actions.has(a),a+' seen');assert(frames.size>=8);assert(exits>=3);
 const before=el.innerHTML;c.pause(true);assert.equal(raf,null);assert.equal(el.innerHTML,before);assert.equal(el.hidden,false);c.pause(false);assert(raf);c.destroy();assert.equal(raf,null);d.window.close();
 console.log('PASS '+width+'px: continuous positions, complete gait, sitting/grooming/head turns, offscreen exits only, pause freezes');
}
