const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=fs.readFileSync(p+'garden-ui-4011.js','utf8');
function boot(lang){const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.localStorage.setItem('gardenMatch',JSON.stringify({lang}));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(bundle);return d}
for(const lang of ['en','zh']){const d=boot(lang),w=d.window,errors=[],pending=[];w.addEventListener('error',e=>errors.push(e.message));w.pt=fn=>pending.push(fn);
 try{
  const ids=w.eval('Object.keys(MG)').filter(k=>!w.MindGardenNewGames.has(k)&&!w.MindGardenActivities.has(k)),click=id=>{const b=w.document.getElementById(id);assert(b,id);b.click()};
  const snapshots={};
  for(let level=1;level<=15;level++)for(const id of ids){
   pending.length=0;w.mgDifficulty=level;w.startMG(id);
   for(const ready of ['shoppingReady','storyReady','memoryReady'])if(w.document.getElementById(ready))click(ready);
   let guard=0;while(!w.eval('mg.h')&&pending.length&&guard++<30)pending.shift()();
   assert(w.document.getElementById('mp').children.length,id+' at '+level);
   const buttons=[...w.document.querySelectorAll('#mp [data-a]')];assert(buttons.length,id+' answers at '+level);
   const answer=w.eval('mg.ans');if(answer!==null&&answer!==undefined){assert(buttons.some(b=>b.dataset.a===String(answer)),id+' correct choice at '+level);assert.equal(new Set(buttons.map(b=>b.dataset.a)).size,buttons.length,id+' unique choices');}
   if(id==='num'){for(const b of buttons){assert(/^[-+]?\d+(?:\.\d+)?$/.test(b.textContent),'numeric display');assert.equal(b.getAttribute('translate'),'no')}assert(w.document.querySelector('.seqline[translate=no]'));}
   if([1,15].includes(level))snapshots[id+level]={choices:buttons.length,text:w.document.getElementById('mp').textContent,load:w.eval('mg.n'),items:w.document.querySelectorAll('#mp .big.st.sm').length};
   w.eval('mg=null');
  }
  for(const id of ['seq','miss'])assert(snapshots[id+15].load>snapshots[id+1].load,id+' memory load');
  for(const id of ['find','diff','visual','rem','pic','wm','sort'])assert(snapshots[id+15].choices>snapshots[id+1].choices,id+' more alternatives/content');
  assert(snapshots.count15.items>snapshots.count1.items,'count more items');
  const easy=new Set(),hard=new Set();for(let seed=1;seed<=300;seed++){const r=w.MindGardenNewGames.rules.random(seed),a=w.MindGardenDifficulty.pattern(1,r),b=w.MindGardenDifficulty.pattern(15,r);easy.add(a.family);hard.add(b.family);for(const q of [a,b]){assert(q.shown.every(Number.isFinite));assert(Number.isFinite(q.answer));assert(q.shown.length>=5);if(q.family==='weighted-fibonacci'){const all=[...q.shown,q.answer];for(let i=2;i<all.length;i++)assert.equal(all[i],all[i-1]+2*all[i-2]);}if(q.family==='interleaved-geometric'){const all=[...q.shown,q.answer];for(let i=3;i<all.length;i+=2)assert.equal(all[i],2*all[i-2]);for(let i=4;i<all.length;i+=2)assert.equal(all[i]-all[i-2],all[i-2]-all[i-4]);}if(q.family==='alternating-growing'){const all=[...q.shown,q.answer];for(let i=1;i<all.length;i++)assert.equal(all[i]-all[i-1],(i%2?all[1]-all[0]:all[2]-all[1])*Math.ceil(i/2));}if(q.family==='fibonacci'){const all=[...q.shown,q.answer];for(let i=2;i<all.length;i++)assert.equal(all[i],all[i-1]+all[i-2]);}if(q.family==='interleaved'){const all=[...q.shown,q.answer];for(let i=4;i<all.length;i++)assert.equal(all[i]-all[i-2],all[i-2]-all[i-4]);}}}assert.equal(easy.size,1);assert(hard.size>=5);
  const plan=w.MindGardenPractice.select({log:[...Array.from({length:5},()=>({g:'num',r:0})),...Array.from({length:5},()=>({g:'num',r:1})),{g:'sum',r:.2},{g:'pic',r:.4},{g:'wm',r:.6},{g:'find',r:NaN},{g:'money',r:2}]},['num','sum','pic','wm','find','money'],'2026-11-06');assert.deepEqual(Array.from(plan,x=>x.type),['sum','pic','wm']);assert.equal(plan[0].samples,1);
  const noHistory=w.MindGardenPractice.select({log:[]},ids,'2026-11-06');assert.equal(new Set(noHistory.map(x=>x.type)).size,3);assert(noHistory.every(x=>x.samples===0));
  w.eval("save.lang='en';me().log=[{d:'2026-11-01',g:'num',r:.1,s:20},{d:'2026-11-01',g:'pairs',r:.2,s:20},{d:'2026-11-01',g:'jigsaw',r:.3,s:20}]");w.toHome();w.MindGardenDashboard.home();click('dashStart');assert.deepEqual(Array.from(w.MindGardenDaily.plan,x=>x.type),['num','pairs','jigsaw']);
  click('dailyGo');w.eval('mg.r=mg.R;mg.ok=mg.R;nextR()');click('dailyNext');click('dailyGo');assert(!w.document.getElementById('game').classList.contains('hidden'));w.eval('clearInterval(timer);end(true)');click('dailyNext');click('dailyGo');const g=w.MindGardenNewGames.current;
  click('bMn');click('newKeep');assert.equal(w.MindGardenDaily.plan.length,3,'keep playing preserves journey');
  while(!g.finished){const i=g.cells.findIndex((v,i)=>v!==i),j=g.cells.indexOf(i);w.document.querySelector('[data-piece="'+j+'"]').click();w.document.querySelector('[data-piece="'+i+'"]').click()}
  assert(w.document.getElementById('dailyHome'));click('dailyHome');assert.equal(w.MindGardenDaily.plan.length,0);assert.equal(w.eval('me().log.at(-1).level'),1);
  const backup=w.MindGardenExport.backup(),restored=w.MindGardenExport.validated(JSON.stringify(backup));assert.equal(restored.log.at(-1).level,1);
  assert.equal(w.document.querySelector('meta[name="mind-garden-feedback"]').content,'https://forms.gle/TizHdrEgGxHGZV5q7');assert.deepEqual(errors,[]);
 }finally{d.window.close()}
}
console.log('PASS: 30 games at all 15 levels in English/Chinese; valid unique answers; numeric protection; stronger pattern families and memory loads; last-five weakest selection; mixed daily completion; cancel/keep; level-aware backups and new form link.');
