// Isolate difficulty batches so a long DOM simulation cannot exhaust one heap.
if(!process.env.MG_AUDIT_LEVEL){const {spawnSync}=require('node:child_process');for(let level=1;level<=15;level++){const r=spawnSync(process.execPath,[__filename],{env:{...process.env,MG_AUDIT_LEVEL:String(level)},stdio:'inherit'});if(r.status!==0)process.exit(r.status||1)}process.exit(0)}
const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[];w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));const api=w.MindGardenCommercial,el=id=>w.document.getElementById(id);

const click=id=>{assert(el(id),'Missing '+id);el(id).click()};


(async()=>{try{
let pending=[],sessions=0,rounds=0;w.pt=fn=>pending.push(fn);w.beep=()=>{};w.chime=()=>{};w.say=()=>{};w.win=()=>{};
const ids=Object.keys(w.MG).filter(k=>!w.MindGardenNewGames.has(k)&&!w.MindGardenActivities.has(k));
for(const lang of ['en','zh'])for(const mode of ['light','dark'])for(let level=Number(process.env.MG_AUDIT_LEVEL||1);level<=Number(process.env.MG_AUDIT_LEVEL||15);level++)for(const id of ids){
 w.save.lang=lang;w.save.mode=mode;w.mgDifficulty=level;pending=[];w.startMG(id);const g=w.mg;assert(g&&g.t===id,id);const seen=new Set();
 for(let round=0;round<g.R;round++){
  for(const ready of ['shoppingReady','storyReady','memoryReady','memoryBegin'])if(el(ready))el(ready).click();
  let count=0;while(pending.length&&count++<80)pending.shift()();assert(g.h,`${id} L${level} answer handler`);assert(el('mmsg').textContent.trim());
  let buttons=[...el('mp').querySelectorAll('[data-a]')];assert(buttons.length,id);
  if(id==='seq'){for(const name of g.reviewExpected){const b=buttons.find(b=>b.getAttribute('aria-label')===name);assert(b);b.click()}}
  else if(id==='story'){while(!g.reviewed){const b=el('mp').querySelector('[data-a="'+String(g.ans).replaceAll('"','\\"')+'"]');assert(b);b.click();click('storyNextDetail')}}
  else if(id==='wrd'){
   const icon=el('mp').querySelector('.one .picture-text')?.textContent,word=w.allItems().find(x=>x.e===icon)?.n.toUpperCase();assert(word,id+' word');
   for(const c of word){const b=buttons.find(b=>!b.disabled&&b.textContent===c);assert(b,c);b.click()}
  }else{assert(g.ans!=null,`${id} answer missing`);const b=buttons.find(b=>b.dataset.a===String(g.ans));assert(b,`${id} L${level} correct option`);b.click()}
  assert(g.reviewed,`${id} result`);assert(el('roundContinue'),id);assert.equal(g.r,round+1,id+' no auto advance');assert.equal(g.hist.at(-1),true,`${id} L${level} correct scored`);rounds++;el('roundContinue').click();
 }
 const row=w.me().log.at(-1);assert.equal(row.g,id);assert.equal(row.level,level);assert.equal(row.r,1);sessions++;w.toHome();
 if(sessions%10===0){console.log('Completed',sessions,'sessions',rounds,'rounds');await new Promise(r=>setImmediate(r))}
}
// Difficulty chart must not mix levels or profiles, nor invent levels for legacy rows.
w.me().log=[{g:'sum',level:1,r:.25,d:'2026-11-08',s:20},{g:'sum',level:2,r:1,d:'2026-11-09',s:30},{g:'sum',r:.5,d:'2026-11-07',s:20}];w.save.lang='en';w.openMyProgress();assert(el('progressGame'));assert.equal(el('progressLevel').options.length,3);assert(el('levelScoreChart').textContent.includes('25%'));el('progressLevel').value='2';el('progressLevel').dispatchEvent(new w.Event('change'));assert(el('levelScoreChart').textContent.includes('100%'));assert(!el('levelScoreChart').textContent.includes('25%'));el('progressLevel').value='unknown';el('progressLevel').dispatchEvent(new w.Event('change'));assert(el('levelScoreChart').textContent.includes('50%'));assert.equal(w.MindGardenLevelScores.rows({log:[]},'sum','2').length,0);
assert.deepEqual(errors,[]);console.log(`PASS ${sessions} full original-game sessions, ${rounds} correct rounds, selected levels × EN/ZH × light/dark state; persistent review, level-scored records, isolated level chart. DOM simulation does not verify rendered layout or physical-device audio.`);
}finally{await new Promise(r=>setImmediate(r));d.window.close()}})().catch(e=>{console.error(e);process.exitCode=1});
