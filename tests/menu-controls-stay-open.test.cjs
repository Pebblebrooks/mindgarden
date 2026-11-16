const {JSDOM,VirtualConsole}=require('./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'))};
w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));

const tick=()=>new Promise(r=>setImmediate(r));
(async()=>{
 await tick();
 for(const lang of ['en','zh']){
 w.save.lang=lang;w.MindGardenDashboard.refresh();await tick();
 const doc=w.document;
 doc.getElementById('navMore').click();
 doc.querySelector('.nav-preferences').open=true;
 for(const action of ['nature','motion','nature','motion']){
  const button=doc.querySelector('#navMenu [data-go="'+action+'"]');
  const before=button.getAttribute('aria-pressed');
  button.click();await tick();
  assert(!doc.getElementById('navMenu').classList.contains('hidden'),action+' keeps menu open');
  assert(doc.querySelector('.nav-preferences').open);
  assert.notEqual(doc.querySelector('#navMenu [data-go="'+action+'"]').getAttribute('aria-pressed'),before);
 }
 for(const mode of ['dark','light']){
  doc.querySelector('#navMenu [data-mode="'+mode+'"]').click();await tick();
  assert(!doc.getElementById('navMenu').classList.contains('hidden'));
  assert(doc.querySelector('.nav-preferences').open);assert.equal(w.save.mode,mode);
 }
 doc.querySelector('#menuTextSize [data-text-step="1"]').click();await tick();
 assert(!doc.getElementById('navMenu').classList.contains('hidden'));
 doc.querySelector('#navMenu [data-go="library"]').click();await tick();
 assert(doc.getElementById('navMenu').classList.contains('hidden'));
 assert(!doc.getElementById('gameLibrary').classList.contains('hidden'));
 w.MindGardenDashboard.home();await tick();
 doc.getElementById('navMore').click();doc.body.click();
 assert(doc.getElementById('navMenu').classList.contains('hidden'));
 doc.getElementById('navMore').click();doc.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));
 assert(doc.getElementById('navMenu').classList.contains('hidden'));
 }
 console.log('PASS bilingual menu switches, display, text size, navigation, outside click and Escape');process.exit(0);
})().catch(e=>{console.error(e);process.exit(1)});
