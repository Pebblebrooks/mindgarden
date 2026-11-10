const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),errors=[];
const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.addEventListener('error',e=>errors.push(e.message));
w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+'garden-ui-4023.js','utf8'));
(async()=>{try{
await new Promise(r=>setTimeout(r,20));
for(const id of ['homeAnimationToggle','homeNatureToggle','heroPrevious','heroNext'])assert(w.document.getElementById(id),id);
assert.equal(w.document.querySelectorAll('#gardenLife .drifting-leaf').length,0);
w.document.getElementById('homeAnimationToggle').click();assert(w.document.getElementById('gardenLife').hidden);w.document.getElementById('homeAnimationToggle').click();assert(!w.document.getElementById('gardenLife').hidden);
const caption=w.document.getElementById('heroMediaCaption').textContent;w.document.getElementById('heroNext').click();assert.notEqual(w.document.getElementById('heroMediaCaption').textContent,caption);w.document.getElementById('heroPrevious').click();assert.equal(w.document.getElementById('heroMediaCaption').textContent,caption);
w.openSet();assert(w.document.getElementById('welcomeVideoFiles'));assert.equal(w.document.querySelectorAll('.scene-choice').length,16);assert(w.document.querySelector('[data-photo="light"]'));assert(w.document.getElementById('appReleaseInfo').textContent.includes(require('../package.json').version));
for(const img of w.document.querySelectorAll('.scene-choice img'))assert.equal(img.getAttribute('height'),'90');
w.closeOv();w.document.getElementById('navMore').click();assert.equal(w.document.getElementById('navMore').getAttribute('aria-expanded'),'true');w.document.querySelector('#navMenu [data-go=settings]').click();assert.equal(w.document.getElementById('navMore').getAttribute('aria-expanded'),'false');assert.equal(w.document.getElementById('navMore').getAttribute('aria-label'),'Open menu');w.closeOv();
w.eval("save.lang='zh';persist();load()");w.openSet();assert(w.document.querySelector('.video-settings legend').textContent.includes('视频'));assert(w.document.getElementById('heroNext').getAttribute('aria-label').includes('视频'));assert.equal(errors.length,0,errors.join('\n'));
console.log('PASS: shipped bundle boots, animation hide/show, both arrows, sixteen bounded thumbnails, photo/video inputs, menu accessibility state, Chinese controls.');
}finally{d.window.close()}})();
