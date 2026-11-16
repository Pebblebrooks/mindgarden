const {JSDOM,VirtualConsole}=require('./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'))};
w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
(async()=>{for(const lang of ['en','zh']){w.save.lang=lang;w.MindGardenDashboard.refresh();await new Promise(r=>setImmediate(r));
 const icons=[...w.document.querySelectorAll('#welcomeDashboard .mg-info-button,#welcomeDashboard .mg-help-trigger')];assert.equal(icons.length,6);
 for(const b of icons){const expected=b.dataset.info||b.closest('.mg-help').querySelector('.mg-help-text').textContent;
 b.dispatchEvent(new w.MouseEvent('pointerover',{bubbles:true}));const tip=w.document.getElementById('mgInfoTooltip');assert.equal(tip.textContent,expected);assert.equal(tip.hidden,false);
 b.dispatchEvent(new w.MouseEvent('pointerout',{bubbles:true}));assert(tip.hidden);b.focus();assert(!tip.hidden);assert.equal(tip.textContent,expected);
 b.click();assert(tip.hidden);assert(w.document.getElementById('v5Information').textContent.includes(expected));w.document.getElementById('v5Information').close();assert(tip.hidden);b.blur();
 }
}
const style=w.document.createElement('style');style.textContent=fs.readFileSync(p+'v5.css','utf8');w.document.head.append(style);const b=w.document.querySelector('.mg-help-trigger');b.dispatchEvent(new w.MouseEvent('pointerover',{bubbles:true}));assert.notEqual(w.getComputedStyle(w.document.getElementById('mgInfoTooltip')).display,'none');
console.log('PASS all six welcome info icons: English/Chinese hover, focus, click, close and visible tooltip CSS.');process.exit(0)})().catch(e=>{console.error(e);process.exit(1)});
