const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('node:fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=fs.readFileSync(p+'garden-ui-4016.js','utf8');
function boot(reduced,stored){
 const d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window,errors=[],listeners=new Set();
 const media={matches:reduced,addEventListener:(event,fn)=>listeners.add(fn),removeEventListener:(event,fn)=>listeners.delete(fn)};
 w.matchMedia=q=>/prefers-reduced-motion/.test(q)?media:{matches:false,addEventListener(){},removeEventListener(){}};w.scrollTo=()=>{};
 w.addEventListener('error',e=>errors.push(e.message));if(stored)w.localStorage.setItem('gardenMatch',stored);
 w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(bundle);
 return {w,close:()=>d.window.close(),errors,change:value=>{media.matches=value;for(const fn of listeners)fn({matches:value})}};
}
(async()=>{
for(const reduced of [false,true]){
 let a=boot(reduced),w=a.w;try{
 const toggle=()=>w.document.getElementById('homeAnimationToggle'),motion=()=>w.document.documentElement.dataset.motion;
 assert.equal(toggle().getAttribute('aria-pressed'),String(!reduced));assert.equal(motion(),reduced?'off':'gentle');
 // A real click must change effective state even when the device requests reduced motion.
 toggle().click();assert.equal(toggle().getAttribute('aria-pressed'),String(reduced));assert.equal(w.document.getElementById('gardenLife').hidden,!reduced);
 if(!reduced)toggle().click();await Promise.resolve();assert.equal(motion(),'gentle');assert.equal(toggle().disabled,false);assert.equal(w.document.documentElement.dataset.still,'0');assert.equal(w.document.getElementById('bouquetRotate').disabled,false);
 a.change(false);a.change(true);assert.equal(motion(),'gentle');
 const stored=w.localStorage.getItem('gardenMatch');a.close();a=boot(true,stored);w=a.w;assert.equal(w.MindGardenMotion.effectiveMode(),'gentle');assert.equal(w.document.getElementById('homeAnimationToggle').getAttribute('aria-pressed'),'true');
 w.openSet();w.document.querySelector('[data-motion-mode=off]').click();assert.equal(w.document.getElementById('homeAnimationToggle').getAttribute('aria-pressed'),'false');w.closeOv();
 w.eval("save.motionPrevious='off'");w.document.getElementById('homeAnimationToggle').click();assert.equal(w.MindGardenMotion.effectiveMode(),'gentle');
 w.MindGardenMotion.setMode('standard');w.document.getElementById('homeAnimationToggle').click();w.document.getElementById('homeAnimationToggle').click();assert.equal(w.MindGardenMotion.effectiveMode(),'standard');
 assert.equal(w.document.querySelectorAll('#unifiedNav .nav-items [data-go=home], #unifiedNav .nav-actions [data-go=settings]').length,0);
 assert(w.document.querySelector('#navMenu [data-go=settings]'));assert(w.document.querySelector('.nav-brand[data-go=home]'));assert(w.document.getElementById('navTextSize'));
 const about=w.document.querySelector('#navMenu [data-go=about]'),contact=w.document.querySelector('#navMenu [data-go=contact]');about.click();assert(w.document.querySelector('.about-version').textContent.includes('v'+require('../package.json').version));assert(w.document.getElementById('aboutUserGuide'));assert.equal(w.document.querySelectorAll('.about-guide details').length,7);assert(w.document.querySelector('.about-guide details').open);
 w.document.querySelector('[data-about-target=aboutSetup]').click();assert(w.document.getElementById('aboutSetup').open);assert.equal(w.document.activeElement,w.document.querySelector('#aboutSetup>summary'));
 w.document.querySelector('[data-about-target=aboutFAQ]').click();assert(w.document.getElementById('aboutFAQ').open);
 w.document.querySelector('[data-about-target=aboutPrivacy]').click();assert(w.document.getElementById('aboutPrivacy').open);
 w.document.querySelector('#aboutPrivacy [data-about-action=settings]').click();assert(w.document.getElementById('exportPlayerJSON'));assert(w.document.getElementById('importPlayerJSON'));w.closeOv();about.click();
 w.document.querySelector('#aboutSetup [data-about-action=players]').click();assert(w.document.getElementById('profileRename'));w.closeOv();about.click();
 w.document.querySelector('#aboutFAQ [data-about-action=contact]').click();assert(w.document.getElementById('googleFeedbackFrame'));w.closeOv();about.click();
 w.document.querySelector('meta[name=mind-garden-release]').content='v3.8.6';w.document.getElementById('infoDone').click();assert.equal(w.document.activeElement.id,'navMore');about.click();assert(w.document.querySelector('.about-version').textContent.includes('v3.8.6'));assert.equal(w.MindGardenExport.backup().appVersion,'3.8.6');
 w.document.querySelector('.app-info').dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));assert(w.document.getElementById('ov').classList.contains('hidden'));
 contact.click();assert.equal(w.document.getElementById('feedbackPending'),null);assert.equal(w.document.getElementById('googleFeedbackLink').href,'https://forms.gle/TizHdrEgGxHGZV5q7');const embedded=w.document.getElementById('googleFeedbackFrame');assert(embedded.src.startsWith('https://docs.google.com/forms/'));assert.equal(new URL(embedded.src).searchParams.get('embedded'),'true');assert(embedded.title);w.closeOv();
 const meta=w.document.querySelector('meta[name=mind-garden-feedback]');meta.content='https://docs.google.com/forms/d/e/test/viewform';contact.click();const link=w.document.getElementById('googleFeedbackLink');assert.equal(link.getAttribute('href'),meta.content);assert.equal(link.target,'_blank');assert(link.rel.includes('noopener'));w.closeOv();
 meta.content='javascript:alert(1)';w.document.querySelector('meta[name=mind-garden-feedback-embed]').content='https://example.com/forms/';contact.click();assert.equal(w.document.getElementById('googleFeedbackLink'),null);assert.equal(w.document.getElementById('googleFeedbackFrame'),null);assert(w.document.getElementById('feedbackPending'));w.closeOv();
 w.eval("save.lang='zh';persist();load()");w.document.querySelector('#navMenu [data-go=about]').click();assert(w.document.getElementById('appInfoTitle').textContent.includes('关于'));assert(w.document.querySelector('#aboutSetup>summary').textContent.includes('首次使用'));assert(w.document.querySelector('#aboutFAQ>summary').textContent.includes('常见问题'));assert(w.document.querySelector('#aboutPrivacy>summary').textContent.includes('隐私'));assert.equal(a.errors.length,0,a.errors.join('\n'));
 }finally{a.close()}
}
const a=boot(true);try{a.change(false);assert.equal(a.w.MindGardenMotion.effectiveMode(),'gentle');a.change(true);assert.equal(a.w.MindGardenMotion.effectiveMode(),'off')}finally{a.close()}
console.log('PASS: device motion defaults, explicit On/Off overrides, persistence, system changes, Settings/welcome/bouquet sync, legacy off recovery, streamlined navigation, dynamic version, About focus/close, bilingual guide, embedded Google form, safe Contact URLs, Chinese labels.');

})().catch(error=>{console.error(error);process.exitCode=1});
