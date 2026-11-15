const {JSDOM,VirtualConsole}=require('./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
const root=__dirname+'/../public/',html=fs.readFileSync(root+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,''),{url:'https://v5.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,$=id=>w.document.getElementById(id),errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.fetch=async()=>({ok:false,status:503,json:async()=>({error:'Offline test'})});
w.HTMLDialogElement.prototype.showModal=function(){this.open=true};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'))};
w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(root+bundle,'utf8'));
const wait=async()=>{for(let i=0;i<8;i++)await new Promise(r=>setImmediate(r))};
(async()=>{
await wait();
w.MindGardenMenus.garden();await wait();
let animation=w.document.querySelectorAll('[data-menu-group="pets"]');assert.equal(animation.length,1);assert.equal(animation[0].querySelectorAll('.motion-options button').length,3,'Animation choices must not disappear');
w.closeOv();const active=w.save.cp;w.save.pr.auditOther=w.newP('Audit other');w.save.pr.auditOther.log=[{g:'num',s:10}];w.openPl();await wait();
assert(!$('playersManagement'));assert.equal(w.document.querySelectorAll('.player-card-actions .player-remove').length,Object.keys(w.save.pr).length);
const remove=()=>w.document.querySelector('[data-x="auditOther"]').click();remove();await wait();assert($('box').textContent.includes('Audit other'));$('deletePlayerConfirm').click();await wait();assert(w.save.pr.auditOther,'Wrong name must not delete');$('deletePlayerCancel').click();await wait();assert(w.save.pr.auditOther);
remove();await wait();$('deletePlayerName').value='Audit other';$('deletePlayerConfirm').click();await wait();assert(!w.save.pr.auditOther);assert.equal(w.save.cp,active,'Deleting another card must preserve selected player');
assert.equal(w.document.querySelectorAll('.player-card-actions .player-remove').length,1,'Sole player has a delete control');
w.closeOv();w.MindGardenAccount.panel('signin');await wait();assert(!$('box').textContent.includes('Open your saved players.'));let eye=w.document.querySelector('.secret-toggle');assert(eye.querySelector('svg'));let input=w.document.querySelector('input[type="password"]');assert(input);eye.click();assert.equal(input.type,'text');eye.click();assert.equal(input.type,'password');
let info=w.document.querySelector('#box .mg-info-button');assert(info);info.click();await wait();assert($('v5Information'));assert.equal(info.getAttribute('aria-expanded'),'true');$('v5Information').querySelector('button').click();await wait();assert(!$('v5Information'));assert.equal(info.getAttribute('aria-expanded'),'false');
w.closeOv();for(const lang of ['en','zh']){w.save.lang=lang;w.MindGardenDashboard.refresh();w.document.querySelector('#navMenu [data-go="about"]').click();await wait();assert(w.document.querySelector('.about-version'));assert(w.document.querySelector('.about-artwork br'));assert(w.document.querySelector('.about-copyright'));w.closeOv()}
assert.deepEqual(errors,[]);console.log('PASS v502: Animation modes, per-card deletion and cancellation, preserved selected profile, password visibility, information dialog and bilingual About structure.');dom.window.close();
})().catch(e=>{console.error(e);dom.window.close();process.exitCode=1});
