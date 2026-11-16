const {JSDOM}=require('./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
(async()=>{
 const d=new JSDOM('<div id="host"></div>',{runScripts:'outside-only'}),w=d.window,host=w.document.getElementById('host');
 let callback,id=0,cancelled=0;w.requestAnimationFrame=fn=>(callback=fn,++id);w.cancelAnimationFrame=()=>{cancelled++;callback=null};
 host.getBoundingClientRect=()=>({width:1000,height:700});w.document.documentElement.dataset.gardenScene='test';w.MindGardenScenes={scenes:[{id:'test',sky:[.2,.8,.05,.25]}]};
 w.eval(fs.readFileSync(__dirname+'/../src/garden-wildlife.js','utf8'));
 const engine=await w.createGardenWildlife(host),advance=n=>{for(let i=0;i<n;i++){const fn=callback;if(fn)fn(i*40+40)}};
 engine.setMode('gentle',false);advance(40);const a=engine.snapshot();assert.equal(a.spacing.filter(f=>f.visible).length,5);assert.equal(a.renderer,'sprite');assert(a.time>0);assert.equal(host.textContent,'');
 const bframes=a.spacing.map(f=>f.frame);advance(50);const b=engine.snapshot();assert(b.spacing.some((f,i)=>f.frame!==bframes[i]));assert(b.spacing.some((f,i)=>Math.abs(f.x-a.spacing[i].x)>1));
 engine.setMode('standard',false);assert.equal(engine.snapshot().spacing.filter(f=>f.visible).length,9);
 engine.setMode('standard',true);const paused=engine.snapshot();advance(30);assert.deepEqual(engine.snapshot(),paused);assert.equal(callback,null);assert(cancelled>0);
 engine.setMode('off',false);assert(engine.snapshot().spacing.every(f=>!f.visible));assert.equal(engine.snapshot().paused,true);
 engine.setMode('gentle',false);advance(10);assert(engine.snapshot().time>=paused.time);engine.dispose();assert.equal(host.childElementCount,0);assert.equal(callback,null);d.window.close();
 console.log('PASS: photographic sprite path needs no WebGL; frame and travel progression; Gentle 5/Standard 9; pause cancels frames; Off hides all; disposal cleans up.');
})().catch(e=>{console.error(e);process.exitCode=1});
