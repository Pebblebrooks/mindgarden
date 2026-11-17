const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,el=id=>w.document.getElementById(id),errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));

const tick=()=>new Promise(r=>setImmediate(r)),wait=async()=>{for(let i=0;i<4;i++)await tick()},click=id=>{assert(el(id),'Missing '+id);el(id).click();if(id==='menuBack'){assert(!w.document.querySelector('dialog.game-ui-dialog'),'Back from a saved result must not ask to discard gameplay')}};
(async()=>{const api=w.MindGardenPersonal;w.beep=w.chime=w.say=()=>{};
for(const lang of ['en','zh'])for(const context of ['all','my']){
 w.save.lang=lang;api.setup('num',2,context,true);w.mg.ok=w.mg.R;w.mdone();await wait();
 const history=JSON.stringify(w.me().log),growth=w.me().gr;
 assert.deepEqual([...el('personalResult').querySelector('.result-primary').children].map(n=>n.id),['personalReplay','personalNext']);
 assert.equal(el('personalNext').getAttribute('aria-label'),lang==='en'?'Next level':'下一关');assert(!el('personalEasier'));assert(!el('personalNextGame'));assert(!el('menuBack'));assert(el('menuExit'));
 assert(!el('personalRest'));assert(!el('personalResult').querySelector('details'));for(const icon of ['personalChangeSettings','personalHome']){assert(el(icon).querySelector('svg'));assert(el(icon).textContent.trim());assert(el(icon).getAttribute('aria-label'));}
 click('personalChangeSettings');await wait();assert(el('personalEasier'));assert(el('menuBack'));assert(el('personalResultOptions'));assert(!el('personalResult'));
 click('menuBack');await wait();assert(el('personalResult'));assert(!el('menuBack'));assert.equal(JSON.stringify(w.me().log),history);assert.equal(w.me().gr,growth);

 click('personalChangeSettings');await wait();el('box').dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true}));await wait();assert(!el('personalResult'));assert(!el('personalResultOptions')||el('ov').classList.contains('hidden'));assert.equal(JSON.stringify(w.me().log),history);if(context==='my')assert(el('personalStart'));else assert(!el('gameLibrary').classList.contains('hidden'));
 w.closeOv();w.toHome();
}
api.setup('num',api.settings('num').count,'all',true);w.mdone();await wait();assert(!el('personalNext'));assert(el('personalReturn').classList.contains('main'));assert(!el('personalReplay').classList.contains('main'));assert(el('personalReturn').textContent.includes('完成')||el('personalReturn').textContent.includes('Done'));click('menuExit');await wait();assert(el('ov').classList.contains('hidden'));
api.setup('num',1);click('personalPractice');const before=JSON.stringify(w.me());w.mdone();await wait();assert(!el('personalNext'));click('personalChangeSettings');await wait();click('menuBack');await wait();assert.equal(JSON.stringify(w.me()),before);assert(el('personalResult'));assert.deepEqual(errors,[]);console.log('PASS result header/footer, bilingual options/back/break/close, final level, practice and no duplicate scoring.');process.exit(0);
})().catch(e=>{console.error(e);process.exit(1)});
