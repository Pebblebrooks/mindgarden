const currentUiTag=JSON.parse(require('fs').readFileSync(__dirname+'/../package.json','utf8')).version.replaceAll('.','');
const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8');
const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;require('./dom-lifecycle.cjs')(w);w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+`garden-ui-${currentUiTag}.js`,'utf8'));const el=id=>w.document.getElementById(id);let queue=[],checks=0,issues=[];w.pt=fn=>queue.push(fn);w.beep=()=>{};w.chime=()=>{};const flush=()=>new Promise(r=>setTimeout(r,5));
function strings(host){const out=[],walk=w.document.createTreeWalker(host,w.NodeFilter.SHOW_TEXT);let n;while(n=walk.nextNode()){if(n.parentElement.closest('[translate=no]:not(html),script,style,.sr,.hidden,[hidden]'))continue;if(n.textContent.trim())out.push(n.textContent.trim())}return out}
async function audit(label){for(const lang of ['zh','en']){if(w.save.lang!==lang)w.MindGardenLanguage.toggle();await flush();const hosts=[el('mini'),el('game'),el('ov')].filter(x=>!x.classList.contains('hidden'));const text=hosts.flatMap(strings),bad=text.filter(t=>lang==='zh'?/[a-zA-Z]{3}/.test(t):/[\u3400-\u9fff]/.test(t));if(bad.length){const issue={label,lang,bad:[...new Set(bad)]};issues.push(issue);console.log('ISSUE '+JSON.stringify(issue))}checks++}}
function drain(){let count=0;while(queue.length&&count++<100)queue.shift()();assert(count<100)}
async function pause(label){el('bPause2').click();await audit(label+' pause');const b=el('box').querySelector('button[id$="Resume"],#rs2,#ngResume,#gaResume,#cgResume,#edResume');if(b)b.click();else w.closeOv()}
(async()=>{try{
for(const initial of ['en','zh'])for(const id of w.eval('Object.keys(MG)').filter(id=>!w.MindGardenActivities.has(id)&&!w.MindGardenNewGames.has(id)&&!w.MindGardenEveryday.has(id))){
 for(const outcome of ['wrong','correct']){w.toHome();queue=[];if(w.save.lang!==initial)w.MindGardenLanguage.toggle();w.mgSessionLength=1;w.startMG(id);await audit(id+' ready '+initial);await pause(id);for(const ready of ['memoryBegin','shoppingReady','memoryReady','storyReady'])el(ready)?.click();drain();await audit(id+' answering');
 const g=w.mg; if(id==='seq'){const wanted=[...g.reviewExpected];for(const value of wanted){const bs=[...el('mp').querySelectorAll('[data-a]')],b=bs.find(b=>(b.getAttribute('aria-label')||b.textContent.trim())===value);(outcome==='wrong'?bs.find(x=>x!==b):b)?.click();if(g.reviewed)break}}
 else if(id==='story'){for(let j=0;j<10&&!g.reviewed;j++){const bs=[...el('mp').querySelectorAll('[data-a]')];(bs.find(b=>outcome==='correct'?b.dataset.a===String(g.ans):b.dataset.a!==String(g.ans))||bs[0])?.click();await flush();el('storyNextDetail')?.click();}}
 else {const bs=[...el('mp').querySelectorAll('[data-a]')];(bs.find(b=>outcome==='correct'?b.dataset.a===String(g.ans):b.dataset.a!==String(g.ans))||bs[0])?.click()}
 await audit(id+' '+outcome+' feedback');if(el('roundContinue'))el('roundContinue').click();else if(!g.reviewed){w.res(outcome==='correct',outcome==='correct'?'Well done!':'Try again');el('roundContinue')?.click()}await audit(id+' results');
 }
}
console.log(JSON.stringify({checks,issues},null,2));assert.deepEqual(issues,[],'Every inspected game stage must use the selected language');}finally{w.toHome();w.close()}})().catch(e=>{console.error(e);process.exitCode=1});
