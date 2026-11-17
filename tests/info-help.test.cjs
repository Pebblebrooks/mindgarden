const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[];w.matchMedia=q=>({matches:q==='(hover:hover)',addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));const api=w.MindGardenCommercial,el=id=>w.document.getElementById(id);

const click=id=>{assert(el(id),'Missing '+id);el(id).click()};


w.HTMLDialogElement.prototype.showModal=function(){this.open=true};
w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'))};
(async()=>{try{
 w.openMyProgress();const b=el('box').querySelector('.mg-info-button');assert(b);const text=b.dataset.info;assert(text);
 assert(!el('v5Information'));b.focus();assert.equal(el('mgInfoTooltip').textContent,text);assert(!el('mgInfoTooltip').hidden);
 b.click();assert(el('v5Information').open);assert.equal(el('v5Information').querySelector('p').textContent,text);assert(el('mgInfoTooltip').hidden);
 el('v5Information').querySelector('button').click();assert(!el('v5Information'));assert.equal(w.document.activeElement,b);assert.equal(b.getAttribute('aria-expanded'),'false');
 b.dispatchEvent(new w.Event('pointerover',{bubbles:true}));assert(!el('mgInfoTooltip').hidden);w.dispatchEvent(new w.Event('resize'));assert(el('mgInfoTooltip').hidden);
 assert.deepEqual(errors,[]);console.log('PASS current information dialog, hover/focus text, close, focus restoration and resize dismissal.');
}finally{d.window.close()}})().catch(e=>{console.error(e);process.exitCode=1});
