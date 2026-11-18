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
 w.setInterval=(fn,ms)=>{intervals.set(ms,fn);return ms};w.clearInterval=ms=>intervals.delete(ms);w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.confirm=m=>{(w.__confirms||(w.__confirms=[])).push(m);return true};
 const user=await api('login',{name});w.localStorage.setItem('mindGardenLobby',JSON.stringify(user));w.fetch=(url,options)=>onRequest({env:{DB},request:new Request(new URL(url,w.location.href),options)});
 w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);for(const f of process.env.GROUP_FULL_BUNDLE?[html.match(/src="(garden-ui-\d+\.js)"/)[1]]:['language-catalog.js','language-runtime.js','online-activities.js','player-preferences.js','identity.js','info-help.js','multiplayer.js'])w.eval(read(f));await tick();w.document.getElementById('bOnline').click();await tick();
 return {w,user,intervals,errors,$:id=>w.document.getElementById(id),click(id){assert(this.$(id),'Missing '+id);this.$(id).click()},async poll(){await intervals.get(1500)();await tick()}};
}
try{
 // D-04: the host chooses who can join after picking the game; private is selected by default.
 const host=await boot('Alexander');host.click('mpCreateOpen');host.click('mpUseGame');
 assert.equal(host.w.document.querySelector('[data-visibility="private"]').getAttribute('aria-checked'),'true');
 host.w.document.querySelector('[data-visibility="public"]').click();host.click('mpCreateGroup');await tick();await host.poll();
 const code=JSON.parse(host.w.localStorage.getItem('mindGardenRoom8')).code;
 assert(host.$('mpVisibilityText').textContent.includes('Anyone using Mind Garden'));assert.equal(host.$('mpVisibilityToggle').textContent,'Make private');
 // Someone else sees it under Open groups (host name, game, count) and joins after one confirmation.
 const mei=await boot('Mei Ling');await mei.intervals.get(2500)();await tick();
 const join=mei.w.document.querySelector('[data-open-join="'+code+'"]');assert(join,'open group listed');
 assert(mei.$('mpDirectoryBody').textContent.includes('Alexander’s group'));assert(mei.$('mpDirectoryBody').textContent.includes('1 of 8 players'));
 join.click();await tick();await tick();assert(mei.w.__confirms.at(-1).includes('Other players will see your name, Mei Ling'));await mei.poll();
 assert(mei.$('box').textContent.includes('You are in'),'joined the waiting room');
 // The host can make it private again; then nobody new sees it.
 host.click('mpVisibilityToggle');await tick();await tick();await host.poll();assert(host.$('mpVisibilityText').textContent.includes('Only people you invite'));
 const kow=await boot('Ah Kow');await kow.intervals.get(2500)();await tick();assert(!kow.w.document.querySelector('[data-open-join]'));
 // Round control: Start warns before leaving out someone who is away; the countdown says which round starts.
 const boris=await boot('Boris');boris.click('mpJoinOpen');boris.$('mpCode').value=code;boris.$('mpCode').dispatchEvent(new boris.w.Event('input'));boris.click('mpJoin');await tick();await boris.poll();
 mei.click('mpReady');await tick();
 sqlite.prepare('UPDATE mg_sessions SET last_seen=? WHERE token=?').run(Date.now()-60000,boris.user.token);await host.poll();
 assert(host.$('mpHostStatus').textContent.includes('Boris is away'));host.click('mpLaunch');await tick();await tick();
 assert(host.w.__confirms.at(-1).includes('Boris is away. Start without them?'));
 assert(host.$('box').textContent.includes('Round 1 is starting'));
 for(const c of [host,mei,kow,boris])assert.deepEqual(c.errors,[]);
 console.log('PASS who-can-join step (private default), open-group listing and join confirmation, host privacy switch, start-without warning, round-starting countdown.');
}finally{clients.forEach(c=>c.window.close());sqlite.close()}
