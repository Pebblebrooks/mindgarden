const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1],d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
const el=id=>w.document.getElementById(id);
(async()=>{try{
 w.MindGardenDashboard.library();w.document.querySelector('[data-game="pairs"]').click();
 const standard=el('box').querySelector('[data-pair-mode="0"]'),timed=el('box').querySelector('[data-pair-mode="1"]');assert(standard);assert.equal(standard.getAttribute('aria-pressed'),'true');timed.click();assert.equal(w.save.timed,1);assert.equal(timed.getAttribute('aria-pressed'),'true');standard.click();assert.equal(w.save.timed,0);
 let tick,ends=[];w.pt=()=>{};w.setInterval=fn=>{tick=fn;return 991};w.clearInterval=()=>{};w.end=ok=>ends.push(ok);
 w.start(0);w.run();w.left=.1;tick();assert(w.left<0);assert.equal(ends.length,0,'Standard must not end at the old countdown deadline');assert(el('tb').parentElement.hidden);assert.equal(el('hTime').textContent,'At your pace');
 w.paused=true;const left=w.left;tick();assert.equal(w.left,left);
 w.save.timed=1;w.start(0);w.run();w.left=.1;tick();assert.deepEqual(ends,[false]);assert.equal(el('tb').parentElement.hidden,false);
 console.log('PASS explicit Standard/Timed selection, persisted state, no untimed deadline, preserved pause and timed expiry.');
}finally{w.toHome();await new Promise(r=>setTimeout(r,10));d.window.close()}})().catch(e=>{console.error(e);process.exitCode=1});
