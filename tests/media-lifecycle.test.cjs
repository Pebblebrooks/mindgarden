const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('node:fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),tick=()=>new Promise(r=>setTimeout(r,10));
async function boot(kind){
 const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window;
 w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.URL.createObjectURL=()=> 'blob:test';w.URL.revokeObjectURL=()=>{};
 w.Image=class{width=400;height=300;decode(){return Promise.resolve()}};
 w.HTMLCanvasElement.prototype.getContext=()=>({drawImage(){}});w.HTMLCanvasElement.prototype.toBlob=fn=>fn(new w.Blob(['photo']));
 const data=new Map(),pending=[];
 w.indexedDB={open(){const req={};setTimeout(()=>{req.result={transaction(){const tx={objectStore(){return{get(key){const r={};setTimeout(()=>{r.result=data.get(key);r.onsuccess()},0);return r},getAll(){const r={};setTimeout(()=>{r.result=[...data.values()];r.onsuccess()},0);return r},put(value,key){pending.push({tx,apply:()=>data.set(key||value.id,value)})},delete(key){pending.push({tx,apply:()=>data.delete(key)})}}}};return tx}};req.onsuccess()},0);return req}};
 w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+'player-preferences.js','utf8'));
 w.MindGardenScenes={apply(){},scenes:[]};w.MindGardenMotion={effectiveMode:()=> 'gentle'};
 // The media modules must handle navigation independently of the rest of the dashboard.
 const dashboard=w.document.createElement('div');dashboard.id='welcomeDashboard';w.document.body.append(dashboard);
 const nav=w.document.createElement('nav');nav.id='unifiedNav';nav.innerHTML='<div class="nav-actions"><button id="navMore">Menu</button></div>';w.document.body.append(nav);
 const owner=w.eval('save.cp');if(kind==='photo')data.set(owner+':light',new w.Blob(['old']));else data.set('old',{id:'old',owner,name:'old.mp4',blob:new w.Blob(['old'])});
 w.eval(fs.readFileSync(p+(kind==='photo'?'personal-photos.js':'welcome-media.js'),'utf8'));await tick();await tick();
 return {w,dom,pending,finish(ok=true){const job=pending.shift();assert(job,'A storage write must be pending');if(ok){job.apply();job.tx.oncomplete()}else{job.tx.error=Error('Storage full');job.tx.onerror()}},data};
}
(async()=>{
 for(const kind of ['photo','video'])for(const succeeds of [true,false]){
  const a=await boot(kind),w=a.w;try{
   w.openSet();const input=w.document.querySelector(kind==='photo'?'[data-photo=light]':'#welcomeVideoFiles');
   Object.defineProperty(input,'files',{value:[new w.File(['new'],kind==='photo'?'new.jpg':'new.mp4',{type:kind==='photo'?'image/jpeg':'video/mp4'})]});
   const operation=input.onchange({target:input});await tick();w.closeOv();a.finish(succeeds);await operation;
   assert(w.document.getElementById('ov').classList.contains('hidden'),kind+' completion must not reopen Settings');
  }finally{a.dom.window.close()}
 }
 for(const kind of ['photo','video']){
  const a=await boot(kind),w=a.w;try{
   w.openSet();const button=w.document.querySelector(kind==='photo'?'[data-remove-photo]':'[data-remove-video]');assert(button);
   const operation=button.onclick();await tick();w.eval("save.pr.second=newP('Second');save.cp='second';load();save.photolight=true;save.heroLight='old';persist()");w.overlay('<h2 id="otherScreen">Another screen</h2>');a.finish();await operation;
   assert.equal(w.eval('save.photolight'),true,kind+' deletion must not change another player');assert.equal(w.eval('save.heroLight'),'old');assert(w.document.getElementById('otherScreen'));
  }finally{a.dom.window.close()}
 }
 console.log('PASS: photo/video completion and errors after Settings closes; deletion across player changes; no modal reopening or preference leakage.');
})().catch(e=>{console.error(e);process.exitCode=1});
