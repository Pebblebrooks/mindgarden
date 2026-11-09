const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),errors=[];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.addEventListener('error',e=>errors.push(e.message));
w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+'garden-ui-4017.js','utf8'));
const pause=()=>new Promise(r=>setTimeout(r,35));
(async()=>{try{
 await pause();
 const fit=w.MindGardenNav.fit;
 for(const scale of [.8,1,1.4,2])for(const available of [280,350,730,980,1380,1840,2400]){
  const spec={available,brand:160*scale,compactBrand:44,main:['library','online'].map(key=>({key,width:125*scale})),tools:[{key:'welcomeCards',width:48},{key:'text',width:225*scale},...['music','language','appearance','nature','motion'].map(key=>({key,width:65*scale}))],toggle:48};
  const result=fit(spec);assert(result.required<=available,result.required+' exceeds '+available);assert(!result.hidden.includes('toggle'));
 }
 for(const lang of ['en','zh']){
  w.eval('save.lang='+JSON.stringify(lang)+';persist();load();renderHome()');await pause();
  assert(w.document.querySelector('#navMore svg[aria-hidden="true"]'));assert.equal(w.document.getElementById('navMore').textContent,'');
  assert.equal(w.document.querySelectorAll('#navTextSize').length,1);assert.equal(w.document.querySelectorAll('#menuTextSize').length,1);
  for(const action of ['home','library','online','progress','leaderboard','family','profile','settings','music','nature','motion','language','about','contact'])assert(w.document.querySelector('#navMenu [data-go="'+action+'"]'),action);
  w.document.getElementById('navMore').click();assert.equal(w.document.getElementById('navMore').getAttribute('aria-expanded'),'true');
  w.document.querySelector('.nav-preferences').open=true;const preset=w.document.querySelector('#menuTextSize select');preset.value='200';preset.dispatchEvent(new w.Event('change',{bubbles:true}));await pause();
  assert.equal(w.MindGardenTextSize.current(),2);assert.equal(w.document.querySelector('#navTextSize select').value,'200');assert(!w.document.getElementById('navMenu').classList.contains('hidden'));
  w.document.querySelector('#menuTextSize [data-text-reset]').click();assert.equal(w.MindGardenTextSize.current(),1);
  w.document.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));assert.equal(w.document.activeElement.id,'navMore');assert.equal(w.document.getElementById('navMore').getAttribute('aria-expanded'),'false');
  w.document.getElementById('navMore').click();w.document.querySelector('#navMenu [data-go="about"]').click();assert(w.document.getElementById('appInfoTitle').textContent.includes(lang==='en'?'About':'关于'));assert(w.document.querySelector('.about-version').textContent.includes(require('../package.json').version));w.document.getElementById('infoClose').click();
  w.document.getElementById('navMore').click();w.document.querySelector('#navMenu [data-go="contact"]').click();assert(w.document.getElementById('googleFeedbackLink').href.includes('TizHdrEgGxHGZV5q7'));w.document.getElementById('infoClose').click();
  w.document.getElementById('navMore').click();w.document.querySelector('#navMenu [data-mode="light"]').click();await pause();assert.equal(w.document.documentElement.dataset.theme,'light');assert.equal(w.document.activeElement.id,'navMore');
 }
 assert.deepEqual(errors,[]);console.log('PASS: fitted width budget at 28 size combinations; English/Chinese menu destinations; percentage/reset synchronization; Escape focus; About/Contact; appearance rebuilds; no duplicated controls.');
}finally{w.close()}})();
