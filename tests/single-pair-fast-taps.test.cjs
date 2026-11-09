const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[];w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));const api=w.MindGardenCommercial,el=id=>w.document.getElementById(id);

const click=id=>{assert(el(id),'Missing '+id);el(id).click()};


(async()=>{try{
let queue=[];w.pt=fn=>queue.push(fn);w.beep=()=>{};w.chime=()=>{};w.say=()=>{};w.win=()=>{};
function start(level){queue=[];w.start(level);while(queue.length)queue.shift()();w.clearInterval(w.timer);return [...el('grid').children]}
for(let level=0;level<6;level++){
 const cards=start(level),a=cards[0],b=cards.find(x=>x.dataset.e!==a.dataset.e),c=cards.find(x=>x!==a&&x!==b&&x.dataset.e!==a.dataset.e&&x.dataset.e!==b.dataset.e),mate=cards.find(x=>x!==c&&x.dataset.e===c.dataset.e);
 a.click();b.click();assert(w.lock);const oldClose=queue.shift();c.click();assert(c.classList.contains('up'),'third tap accepted immediately');assert(!a.classList.contains('up'));assert(!b.classList.contains('up'));assert.equal(w.first,c);oldClose();assert(c.classList.contains('up'),'old close cannot hide new turn');mate.click();assert(c.classList.contains('ok'));assert.equal(w.found,1);
 const rest=cards.filter(x=>!x.classList.contains('ok')),x=rest[0],y=rest.find(z=>z.dataset.e!==x.dataset.e);x.click();y.click();const stale=queue.shift();w.start(level);stale();assert(w.lock,'stale callback cannot unlock new-game study');w.toHome();
 const next=start(level);next[0].click();next.find(x=>x.dataset.e!==next[0].dataset.e).click();const close=queue.shift();next[0].click();assert.equal(w.first,next[0],'tap on old wrong card becomes new first card');close();assert(next[0].classList.contains('up'));next[0].click();assert.equal(w.pairAttempts,1,'double tap same card cannot match itself');w.toHome();
}
const cards=start(0);cards[0].click();cards.find(c=>c.dataset.e!==cards[0].dataset.e).click();w.paused=true;const other=cards.find(c=>!c.classList.contains('up'));other.click();assert(!other.classList.contains('up'));w.paused=false;queue.shift()();assert(!w.lock);
assert.deepEqual(errors,[]);console.log('PASS six matching sizes: immediate third tap, stable nodes, same-card double tap, old mismatch callback isolation, new-game study lock and pause protection.');
}finally{await new Promise(r=>setImmediate(r));d.window.close()}})().catch(e=>{console.error(e);process.exitCode=1});
