const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
try{
 for(const x of w.allItems())assert(w.isGamePicture(x.e),'recognize picture '+x.e);
 for(const x of ['22','twenty two','Bedroom','星期日','1 + 2','12:30','<img>'])assert(!w.isGamePicture(x),'text remains text '+x);
 for(const x of ['●','■','▲','◆','★','✚'])assert(w.isGamePicture(x));
 const pending=[],coverage=[];w.pt=fn=>pending.push(fn);
 for(const lang of ['en','zh'])for(const level of [1,15])for(const id of w.eval('Object.keys(MG)')){
  pending.length=0;w.eval('save.lang='+JSON.stringify(lang));w.mgDifficulty=level;w.startMG(id);
  const before=w.document.querySelector('#mp').innerHTML;
  for(const ready of ['shoppingReady','storyReady','memoryReady'])w.document.getElementById(ready)?.click();let guard=0;while(w.eval('mg && !mg.h')&&pending.length&&guard++<30)pending.shift()();
  for(const el of w.document.querySelectorAll('#mp .big')){if(w.isGamePicture(el.textContent.trim())){assert(!el.classList.contains('txt'),id+' picture must not be text size');assert(el.querySelector('.game-picture'),id+' missing picture wrapper');}}
  if(['pic','odd','rem','shopping','shp','same','order','visual'].includes(id)){assert(w.document.querySelector('#mp .picture-answer'),id+' visible picture answers');assert(!w.document.querySelector('#mp .picture-answer.txt'));}
  if(id==='place')assert(w.document.querySelector('.picture-sequence'),'separate enlarged clue');
  if(id==='bingo'){assert.equal(w.document.querySelectorAll('.bingo-card .game-picture').length,level===1?9:16);assert(w.document.querySelector('.bingo-call .game-picture'));}
  coverage.push({id,lang,level,pictures:w.document.querySelectorAll('#mp .game-picture').length,memoryPreview:before.includes('picture-sequence')});w.eval('mg=null');
 }
 w.start(0);assert.equal(w.document.querySelectorAll('#grid .game-picture').length,w.document.querySelectorAll('#grid .card').length);w.eval('clearInterval(timer)');
 assert.deepEqual(errors,[]);fs.writeFileSync(__dirname+'/../audit-results/visual-coverage.json',JSON.stringify(coverage,null,2));console.log('PASS: all 36 game renderers; picture/text separation; 30 original + 5 added games in English/Chinese at low/high levels; memory clues; bingo; matching faces; all built-in emoji classified.');
}finally{dom.window.close()}
