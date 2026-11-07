import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {database} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const require=createRequire(import.meta.url),{JSDOM}=require(process.env.MG_JSDOM||'jsdom');
const {DB,sqlite}=database(),clients=[],errors=[];
const root=new URL('../public/',import.meta.url),get=f=>readFileSync(new URL(f,root),'utf8'),pause=ms=>new Promise(r=>setTimeout(r,ms));
async function boot(lang){
 const html=get('index.html'),dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test/',runScripts:'outside-only',pretendToBeVisual:true});clients.push(dom);const w=dom.window;
 w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.confirm=()=>true;w.addEventListener('error',e=>errors.push(e.error?.stack||e.message));
 let requests=0;w.fetch=(url,opts)=>{requests++;return onRequest({env:{DB},request:new Request(new URL(url,'https://garden.test'),opts)})};w.requests=()=>requests;
 w.localStorage.setItem('gardenMatch',JSON.stringify({lang}));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
 for(const f of ['artwork.js','upgrade.js','online-activities.js','multiplayer.js','i18n.js','dashboard.js'])w.eval(f==='multiplayer.js'&&process.env.MG_MP_SOURCE?readFileSync(process.env.MG_MP_SOURCE,'utf8'):get(f));
 w.document.getElementById('bOnline').click();w.document.getElementById('mpName').value=lang;w.document.getElementById('mpLogin').click();await pause(30);return w;
}
const q=(w,s)=>w.document.querySelector(s),tiles=w=>[...w.document.querySelectorAll('[data-tile]')],stored=w=>JSON.parse(w.localStorage.getItem('mindGardenRound8'));
try{
 const host=await boot('en'),guest=await boot('zh');q(host,'#mpCreate').click();await pause(50);const code=q(host,'.mp-room-code strong').textContent;q(guest,'#mpCode').value=code;q(guest,'#mpJoin').click();await pause(1700);
 for(const mode of ['pairs6','pairs10']){
  q(host,'#mpMode').value=mode;q(host,mode==='pairs6'?'#mpLaunch':'#mpNext').click();await pause(1700);
  for(const w of [host,guest]){
   const buttons=tiles(w),count=mode==='pairs6'?12:20;assert.equal(buttons.length,count);
   assert(q(w,'#mpBeginPairs'),'A study preview must exist before matching');assert(buttons.every(b=>b.disabled&&b.classList.contains('revealed')),'Every card is shown during preview');
   assert.equal(q(w,'.mp-board').querySelectorAll('.game-illustration').length,count,'All artwork is mounted before play');
   const previewStart=stored(w).started;await pause(5);q(w,'#mpBeginPairs').click();assert(stored(w).started>previewStart,'Study time is excluded from elapsed time');assert.equal(stored(w).preview,false);assert(buttons.every(b=>!b.disabled&&!b.classList.contains('revealed')));
   const deck=stored(w).deck,a=0,b=deck.findIndex(x=>x!==deck[a]),c=deck.findIndex((x,i)=>i!==a&&i!==b),calls=w.requests(),board=q(w,'.mp-board');
   buttons[a].focus();buttons[a].querySelector('.mp-card-back').click();assert(buttons[a].classList.contains('revealed'));assert.equal(q(w,'[data-tile="0"]'),buttons[0],'A flip retains the same touch target');assert.equal(w.document.activeElement,buttons[a],'Focus is preserved');assert.equal(q(w,'.mp-board'),board);
   buttons[b].click();assert(buttons[b].classList.contains('revealed'));assert(!buttons[c].disabled,'A mismatch does not disable the next target');buttons[c].click();assert(buttons[c].classList.contains('revealed'),'The next card opens on its first tap');assert(!buttons[a].classList.contains('revealed'));assert(!buttons[b].classList.contains('revealed'));assert.equal(w.requests(),calls,'Card flips do not require a network request');
   // Closing immediately must flush the deferred save; reconnect must not restart preview.
   q(w,'#mpExit').click();assert.deepEqual(stored(w).open,[c]);q(w,'#bOnline').click();q(w,'#mpResume').click();await pause(80);assert(q(w,'#mpPairPreview').hidden);assert(q(w,'[data-tile="'+c+'"]').classList.contains('revealed'));
   // Complete through real DOM controls and the real SQL API.
   sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,code);
   const buddy=deck.findIndex((x,i)=>i!==c&&x===deck[c]);q(w,'[data-tile="'+buddy+'"]').click();const complete=new Set([c,buddy]);
   for(let i=0;i<deck.length;i++)if(!complete.has(i)){const j=deck.findIndex((x,k)=>k!==i&&!complete.has(k)&&x===deck[i]);q(w,'[data-tile="'+i+'"]').click();q(w,'[data-tile="'+j+'"]').click();complete.add(i);complete.add(j)}
   await pause(80);assert.equal(sqlite.prepare('SELECT count(*) AS n FROM mg_results WHERE code=? AND round=? AND token=?').get(code,mode==='pairs6'?1:2,JSON.parse(w.localStorage.getItem('mindGardenLobby')).token).n,1,'The completed result is saved in SQL');
  }
  await pause(1700);for(const w of [host,guest])assert.equal(q(w,'.mp-table tbody').children.length,2);
 }
 assert.equal(sqlite.prepare('SELECT count(*) AS n FROM mg_results WHERE code=?').get(code).n,4);assert.deepEqual(errors,[]);
 console.log('PASS: both online matching sizes, EN/ZH preview, timer excludes study, stable card nodes/focus, single-tap mismatch continuation without network, immediate-exit checkpoint, resume and four persisted results.');
}finally{clients.forEach(d=>d.window.close());sqlite.close()}
