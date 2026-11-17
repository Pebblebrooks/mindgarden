import {createRequire} from 'node:module';
import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {database} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const require=createRequire(import.meta.url),{JSDOM}=require('./test-dom.cjs');
const {DB,sqlite}=database(),clients=[],errors=[];
const root=new URL('../public/',import.meta.url),get=f=>readFileSync(new URL(f,root),'utf8'),pause=ms=>new Promise(r=>setTimeout(r,ms));
async function settle(w){w.dispatchEvent(new w.Event('focus'));await pause(90)}
async function boot(name,lang){
 const html=get('index.html'),dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test/',runScripts:'outside-only',pretendToBeVisual:true});clients.push(dom);
 const w=dom.window;w.chimes=0;w.AudioContext=class{state='running';currentTime=0;destination={};resume(){return Promise.resolve()}createOscillator(){return {frequency:{},connect(){},start(){w.chimes++},stop(){}}}createGain(){return {connect(){},gain:{setValueAtTime(){},exponentialRampToValueAtTime(){}}}}};w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.confirm=()=>true;w.addEventListener('error',e=>errors.push(e.error?.stack||e.message));w.AbortController=globalThis.AbortController;
 w.fetch=(url,opts)=>onRequest({env:{DB},request:new Request(new URL(url,'https://garden.test'),opts)});w.localStorage.setItem('gardenMatch',JSON.stringify({lang}));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);
 for(const f of ['language-catalog.js','language-runtime.js','upgrade.js','online-activities.js','multiplayer.js','i18n.js','dashboard.js','ambient.js','identity.js','info-help.js','account-sync.js','menu-simplify.js','menu-navigation.js'])w.eval(get(f));
 w.document.getElementById('bOnline').click();w.document.getElementById('mpName').value=name;w.document.getElementById('mpLogin').click();await pause(80);return w;
}
function snapshot(w,file){if(!process.env.MG_ROOM_SNAPSHOTS)return;const clone=w.document.documentElement.cloneNode(true);clone.querySelectorAll('script').forEach(n=>n.remove());const style=w.document.createElement('style');style.textContent=get('index.html').match(/<style>([\s\S]*?)<\/style>/)[1];clone.querySelector('head').prepend(style);writeFileSync(process.env.MG_ROOM_SNAPSHOTS+'/'+file,'<!doctype html>'+clone.outerHTML+(file.startsWith('exit')?'<script>const d=document.getElementById("mpHostExit");d.removeAttribute("open");d.showModal()</script>':''))}
try{
 for(const lang of ['en','zh']){
  const h=await boot('Host '+lang,lang),g=await boot('Guest '+lang,lang),$=id=>h.document.getElementById(id);
  $('mpCreateOpen').click();$('mpCreate').click();await pause(100);const code=h.document.querySelector('.mp-room-code').textContent;
  await settle(g);g.document.querySelector('[data-join-room="'+code+'"]').click();await pause(100);await settle(h);
  assert($('mpHostNotice'));assert(h.document.querySelector('[data-host-ready]'));
  const link=new URL($('mpWhatsApp').href);assert.equal(link.hostname,'wa.me');assert(link.searchParams.get('text').includes(code));assert(link.searchParams.get('text').includes('https://garden.test/?room='+code));
  assert.equal($('mpWhatsApp').target,'_blank');assert($('mpWhatsApp').rel.includes('noopener'));
  snapshot(h,'host-'+lang+'.html');snapshot(g,'guest-'+lang+'.html');
  assert.equal(h.chimes,1);await settle(h);assert.equal(h.chimes,1,'Repeated polls do not repeat join sound');
  const clock=h.Date.now;h.Date.now=()=>clock()+31000;await settle(h);assert.equal(h.chimes,2,'One reminder after 30 seconds');assert($('mpHostNotice').textContent.includes(lang==='en'?'Players waiting':'玩家正在等待'));await settle(h);assert.equal(h.chimes,2);h.Date.now=clock;
  $('mpHostChime').checked=false;$('mpHostChime').dispatchEvent(new h.Event('change'));assert.equal(h.localStorage.getItem('mindGardenHostChime'),'false');

  h.document.querySelector('[data-host-ready]').click();await pause(100);await settle(g);assert.equal(g.document.getElementById('mpHostStatus').textContent,lang==='en'?'Host is here':'房主已就绪');
  $('menuExit').click();assert($('mpHostExit'));snapshot(h,'exit-'+lang+'.html');$('mpKeepHosting').click();await pause(100);assert(!$('mpHostExit'));assert($('ov').classList.contains('hidden'));
  await settle(h);assert($('mpHostNotice'),'Hosting indicator remains after Keep hosting');
  // Host may leave silently. Guest sees reconnecting, then closure and solo alternative.
  sqlite.prepare('UPDATE mg_room_availability SET host_seen=? WHERE code=?').run(Date.now()-46000,code);await settle(g);assert.equal(g.document.getElementById('mpHostStatus').textContent,lang==='en'?'Host reconnecting…':'房主重新连接中……');
  sqlite.prepare('UPDATE mg_room_availability SET host_seen=? WHERE code=?').run(Date.now()-121000,code);await settle(g);assert(g.document.getElementById('mpJoinOpen'));assert(g.document.getElementById('mpDirectoryBody').textContent.includes(lang==='en'?'Room closed':'房间已关闭'));assert(g.document.getElementById('mpDirectoryBody').textContent.includes(lang==='en'?'Play solo':'单人游戏'));
  snapshot(g,'closed-'+lang+'.html');
  g.document.getElementById('mpJoinOpen').click();g.document.getElementById('mpCode').value=code;g.document.getElementById('mpJoin').click();await pause(100);assert(g.document.getElementById('mpDirectoryBody').textContent.includes(lang==='en'?'Room closed':'房间已关闭'),'Expired invitation gives a localized alternative');

  // Explicit host closure through the shared Close control.
  h.document.getElementById('bOnline').click();await settle(h);$('mpCreateOpen').click();$('mpCreate').click();await pause(100);await settle(h);$('menuExit').click();$('mpStopHosting').click();await pause(100);assert(!$('mpHostExit'));assert($('ov').classList.contains('hidden'));
  h.close();g.close();
 }
 assert.deepEqual(errors,[]);console.log('PASS bilingual host alerts, acknowledgement, Keep hosting/Close room, reconnect/expiry, solo exit and WhatsApp link.');
}finally{clients.forEach(d=>d.window.close());sqlite.close()}
