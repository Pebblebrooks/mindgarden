const {JSDOM,VirtualConsole}=require('./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
const root=__dirname+'/../public/',html=fs.readFileSync(root+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,''),{url:'https://v5.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,$=id=>w.document.getElementById(id),errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.fetch=async()=>({ok:false,status:503,json:async()=>({error:'Offline test'})});
w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'))};
w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(root+bundle,'utf8'));
const wait=async()=>{for(let i=0;i<8;i++)await new Promise(r=>setImmediate(r))};
(async()=>{
await wait();
for(const lang of ['en','zh']){
require('./test-dom.cjs').chooseLanguage(w,lang);
w.MindGardenPersonal.myGames();await wait();assert(w.document.querySelector('#personalSelected .game-art'));assert(!w.document.querySelector('#personalSelected').textContent.includes('Play / settings'));
for(const id of ['pairs',...w.eval('Object.keys(MG)')]){w.MindGardenPersonal.setup(id,1,'all');await wait();const instruction=w.document.querySelector('.v5-ready-instruction');if(instruction){const texts=[...$('box').querySelectorAll('p')].filter(p=>!p.closest('.v5-game-options')).map(p=>p.textContent.trim());assert.equal(texts.filter(t=>t===instruction.textContent.trim()).length,1,id+' description repeats');}w.closeOv();}
w.MindGardenPersonal.setup('place',1,'all');$('startExtra').click();await wait();w.document.querySelector('#mini [data-game-settings]').click();await wait();const change=w.document.querySelector('.change-level');assert(change&&!change.querySelector('svg'));change.click();await wait();assert(w.document.querySelector('.game-exit-dialog'));w.document.querySelector('.game-exit-dialog button').click();await wait();assert(w.MindGardenPersonal.session);assert(!$('mini').classList.contains('hidden'));w.toHome();w.closeOv();
}
assert.deepEqual(errors,[]);dom.window.close();console.log('PASS consistency: both languages, all game preparation descriptions, shared My Games artwork, Change level cancellation preserves play.');
})().catch(e=>{console.error(e);dom.window.close();process.exitCode=1});
