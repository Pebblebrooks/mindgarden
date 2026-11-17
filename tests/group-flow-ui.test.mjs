import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const require=createRequire(import.meta.url),{JSDOM,VirtualConsole}=require('./test-dom.cjs');
const {DB,sqlite}=database(),api=client(DB),read=f=>readFileSync(new URL('../public/'+f,import.meta.url),'utf8'),html=read('index.html'),tick=()=>new Promise(r=>setTimeout(r,25));
const clients=[];
async function boot(name){
 const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()});clients.push(dom);const w=dom.window,intervals=new Map(),errors=[];w.addEventListener('error',e=>errors.push(e.message));
 w.setInterval=(fn,ms)=>{intervals.set(ms,fn);return ms};w.clearInterval=ms=>intervals.delete(ms);w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.confirm=()=>true;
 const user=await api('login',{name});w.localStorage.setItem('mindGardenLobby',JSON.stringify(user));w.fetch=(url,options)=>onRequest({env:{DB},request:new Request(new URL(url,w.location.href),options)});
 w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);for(const f of process.env.GROUP_FULL_BUNDLE?[html.match(/src="(garden-ui-\d+\.js)"/)[1]]:['language-catalog.js','language-runtime.js','online-activities.js','player-preferences.js','identity.js','info-help.js','multiplayer.js'])w.eval(read(f));await tick();w.document.getElementById('bOnline').click();await tick();
 return {w,user,intervals,errors,$:id=>w.document.getElementById(id),click(id){assert(this.$(id),'Missing '+id);this.$(id).click()},async poll(){await intervals.get(1500)();await tick()}};
}
try{
 const host=await boot('Alexander');host.click('mpCreateOpen');assert.equal(host.w.document.querySelectorAll('[data-group-game]').length,13);host.$('mpGameSearch').value='pairs';host.$('mpGameSearch').dispatchEvent(new host.w.Event('input'));assert.equal(host.w.document.querySelectorAll('[data-group-game]:not([hidden])').length,1);host.click('mpUseGame');await tick();await host.poll();
 const code=JSON.parse(host.w.localStorage.getItem('mindGardenRoom8')).code;
 assert(host.$('box').textContent.includes('Alexander’s group'));assert(!host.$('mpRosterSelect'));assert(!host.$('mpTab-mine'));assert(host.$('mpLaunch').disabled);
 const guest=await boot('Boris');guest.click('mpJoinOpen');guest.$('mpCode').value=code;guest.click('mpJoin');await tick();await guest.poll();await host.poll();
 await host.intervals.get(2500)();assert(host.$('mpHostNotice').textContent.includes('Boris'));assert(!host.$('mpHostNotice').textContent.includes('I’m here'));
 guest.click('mpReady');await tick();await host.poll();assert.equal(host.$('mpLaunch').disabled,false);assert(host.$('mpRoster').textContent.includes('Boris'));
 host.w.MindGardenMultiplayer.exit();assert(host.$('mpHostExit'));host.click('mpKeepHosting');assert(!host.$('mpHostExit'));assert(!host.$('ov').classList.contains('hidden'));assert(host.$('mpLaunch'));assert.equal(JSON.parse(host.w.localStorage.getItem('mindGardenRoom8')).code,code);
 host.click('mpChangeGame');host.w.document.querySelector('[data-group-game="times8"]').click();host.click('mpUseGame');await tick();await guest.poll();await host.poll();assert(!guest.$('mpReady').disabled);assert(host.$('mpLaunch').disabled);
 guest.click('mpReady');await tick();await host.poll();host.click('mpLaunch');await tick();assert(host.$('mpCountdown'));await guest.poll();assert(guest.$('mpCountdown'));
 // Server elapsed countdown, then both clients show the same quiz without Begin.
 sqlite.prepare('UPDATE mg_group_flow SET start_at=? WHERE code=?').run(Date.now()-1,code);await host.poll();await guest.poll();assert(host.w.document.querySelector('[data-answer]'));assert(guest.w.document.querySelector('[data-answer]'));assert(!host.$('mpBeginGame'));assert.equal(host.w.document.querySelector('.seqline').textContent,guest.w.document.querySelector('.seqline').textContent);
 await api('finishRound',{...host.user,code,round:1});await host.poll();await guest.poll();assert(host.$('mpChooseNext'));assert(host.$('mpReplay'));host.click('mpCloseRoom');await tick();await guest.poll();assert(host.$('mpFinalLobby'));assert(guest.$('mpFinalLobby'));assert.equal(host.w.MindGardenMultiplayer.active(),false);assert.equal(guest.w.MindGardenMultiplayer.active(),false);assert.deepEqual(host.errors,[]);assert.deepEqual(guest.errors,[]);
 console.log('PASS catalogue/search, named arrivals, visible readiness, Keep hosting preservation, changed-game readiness reset and shared quiz start.');
}finally{clients.forEach(c=>c.window.close());sqlite.close()}
