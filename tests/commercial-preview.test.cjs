const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[];w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));const api=w.MindGardenCommercial,el=id=>w.document.getElementById(id);

const click=id=>{assert(el(id),'Missing '+id);el(id).click()};
try{
let logBefore=w.eval('me().log.length');
for(const lang of ['en','zh']){w.eval(`save.lang='${lang}'`);for(const id of ['hawker','trail','album','sounds','teamgarden','melody'])for(let level=1;level<=3;level++){
 api.start(id,level,2);if(id==='album')click('cgDemo');const g=api.current;let guard=0;
 while(!g.finished&&guard++<20){
  if(id==='hawker'||id==='trail'){click('cgRecall');for(const i of g.sequence)w.document.querySelector('[data-cg-item="'+i+'"]').click()}
  if(id==='album'){click('cgRecall');[...w.document.querySelectorAll('[data-cg-answer]')].find(b=>b.dataset.cgAnswer===g.target.label).click()}
  if(id==='sounds')w.document.querySelector('[data-cg-answer="'+g.soundIndex+'"]').click();
  if(id==='teamgarden'){click('cgReady');w.document.querySelector('[data-cg-answer="'+g.teamAnswer+'"]').click()}
  if(id==='melody')for(const n of g.sequence)w.document.querySelector('[data-cg-note="'+n+'"]').click();
  assert(g.answered);click('cgNext');
 }
 assert(g.finished,id);assert.equal(g.correct,g.total,id);assert.equal(w.eval('me().log.length'),++logBefore);assert.equal(w.me().log.at(-1).level,level);assert.equal(w.me().log.at(-1).shared,id==='teamgarden');click('cgExit');assert.equal(api.current,null);
}}
api.start('hawker',1);click('cgRecall');click('bPause2');assert(api.current.paused);assert(!el('cgLeave'));click('cgResume');click('bMn');assert(el('cgLeave'));click('cgResume');click('cgSkip');assert.equal(api.current.round,1);assert.equal(api.current.correct,0);click('cgRecall');click('cgAgainStudy');click('cgRecall');for(const n of api.current.sequence)w.document.querySelector('[data-cg-item="'+n+'"]').click();assert.equal(api.current.correct,0,'Hint removes credit');click('bMn');click('cgLeave');assert.equal(api.current,null);
const e=w.MindGardenEveryday;e.start('today',1,{country:'Singapore',zone:'Asia/Singapore',style:'choices'});click('bMn');assert(el('edLeave'));click('edResume');click('bPause2');assert(!el('edLeave'));click('edResume');click('edSkip');assert.equal(e.current.index,0);click('edNext');assert.equal(e.current.index,1);assert.equal(e.current.correct,0);assert(el('edNext').hidden);click('edHint');assert(!el('edNext').hidden);click('edNext');assert.equal(e.current.index,2);
w.toHome();w.MindGardenDashboard.library();w.document.querySelector('#gameCategory').value='studio';w.document.querySelector('#gameCategory').dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(w.document.querySelectorAll('#gameCards [data-game]').length,6);
assert.deepEqual(errors,[]);console.log('PASS six prototypes × three levels × two languages, completion, level-specific practice scores, distinct menu/pause, immediate skip, hint credit, exit cleanup, six preview cards');
}finally{setImmediate(()=>d.window.close())}
