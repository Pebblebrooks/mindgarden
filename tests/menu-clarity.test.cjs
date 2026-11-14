const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,el=id=>w.document.getElementById(id),errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
const click=id=>{assert(el(id),'Missing '+id);el(id).click()},tick=()=>new Promise(r=>setImmediate(r));
(async()=>{await tick();
for(const lang of ['en','zh']){
 w.save.lang=lang;w.renderHome();await tick();assert(el('gardenPanelOpen'));assert(w.document.querySelector('[data-go=profile]').closest('details'));
 w.openSet();await tick();assert.equal(w.document.querySelectorAll('#box > details:not([hidden])').length,4);assert(el('settingsPlayers').closest('details').hidden);
 w.MindGardenMenus.garden();await tick();assert(!w.document.querySelector('[data-menu-group=scenery]').hidden);assert(!w.document.querySelector('[data-menu-group=media]').hidden);w.openSet();await tick();assert.equal(el('box').dataset.settingsArea,'garden');assert(w.document.querySelector('[data-menu-group=pets]'));
 w.MindGardenMenus.player();await tick();assert(!el('settingsPlayers').closest('details').hidden);assert(el('exportPlayerJSON'));
 w.openMyProgress();await tick();const tabs=w.document.querySelector('.menu-view-tabs');assert.equal(tabs.children.length,3);tabs.children[2].click();assert(w.document.querySelector('.level-progress').parentElement.hidden);tabs.children[1].click();assert(!w.document.querySelector('.level-progress').parentElement.hidden);
 w.lbView();await tick();assert(el('rankingView'));el('rankingView').querySelector('select').value='1';el('rankingView').querySelector('select').dispatchEvent(new w.Event('change'));el('lbs').value='num';el('lbs').dispatchEvent(new w.Event('change'));await tick();assert(el('rankingView'),'ranking survives redraw');
 w.save.famOk=1;w.famView();await tick();assert(w.document.querySelector('details.fam'));assert(el('fs2'));
 w.openMu();await tick();assert(el('soundPlay').hidden);assert(el('backgroundAudioToggle'));assert(el('soundFiles').closest('details'));
 w.document.getElementById('bOnline').click();await tick();assert(el('mpCode').closest('details'));assert(el('joinRoomOptions'));assert(el('createRoomOptions'));assert(el('mpLogin'));assert(el('mpClose'));
 w.MindGardenDisplay.panel();await tick();assert(w.document.querySelector('#displayWelcome').closest('details').querySelector('summary').textContent.includes('/ 6'));
}
assert.deepEqual(errors,[]);console.log('PASS bilingual settings routing, Garden and Player controls, Progress views, leaderboard redraw, family disclosure, sound, room choices and dashboard counts.');
})().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)});
