import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const require=createRequire(import.meta.url),{JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom');
const {DB,sqlite}=database(),api=client(DB),clients=[],errors=[];
const root=new URL('../public/',import.meta.url),read=f=>readFileSync(new URL(f,root),'utf8'),html=read('index.html'),tick=()=>new Promise(r=>setTimeout(r,20));
async function boot(user){
 const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()});clients.push(dom);const w=dom.window;
 let now=Date.now();w.Date.now=()=>now;const intervals=new Map();w.setInterval=(fn,ms)=>{intervals.set(ms,fn);return ms};w.clearInterval=ms=>intervals.delete(ms);w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.confirm=()=>true;
 w.addEventListener('error',e=>errors.push(e.error?.stack||e.message));w.localStorage.setItem('mindGardenLobby',JSON.stringify(user));const gates=new Map();
 w.fetch=async(url,options)=>{const action=new URL(url,w.location.href).searchParams.get('action'),gate=gates.get(action);if(gate){gates.delete(action);await gate.promise;if(gate.response)return gate.response}return onRequest({env:{DB},request:new Request(new URL(url,w.location.href),options)})};
 w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);for(const f of ['artwork.js','player-preferences.js','online-activities.js','multiplayer.js'])w.eval(read(f));await tick();w.document.getElementById('bOnline').click();await tick();
 const by=id=>w.document.getElementById(id),click=id=>{assert(by(id),id+' exists');by(id).click()};
 return {w,by,click,intervals,user,stored:key=>JSON.parse(w.localStorage.getItem(key)||'null'),advance:ms=>now+=ms,async poll(){await intervals.get(1500)();await tick()},async join(code){by('mpCode').value=code;click('mpJoin');await tick()},hold(action,response){let release;gates.set(action,{response,promise:new Promise(r=>release=r)});return release}};
}
const response=data=>new Response(JSON.stringify(data),{status:200,headers:{'content-type':'application/json'}}),tiles=a=>[...a.w.document.querySelectorAll('[data-tile]')];
try{
 const h1=await api('login',{name:'First host'}),h2=await api('login',{name:'Second host'}),guest=await api('login',{name:'Guest'});
 const first=await api('create',h1),second=await api('create',h2),a=await boot(guest);await a.join(first.code);
 await api('launch',{...h1,code:first.code,round:0,mode:'pairs6'});await a.poll();assert.equal(a.stored('mindGardenRound8').phase,'ready');
 // A preview is a deadline, not an interval counter: returning must not replay it.
 a.click('mpBeginPairs');await tick();const deadline=a.stored('mindGardenRound8').previewEndsAt;a.advance(2000);a.click('mpExit');a.click('bOnline');await tick();a.click('mpResume');await tick();
 assert.equal(a.stored('mindGardenRound8').previewEndsAt,deadline);assert.equal(a.stored('mindGardenRound8').phase,'preview');
 a.click('mpExit');a.advance(5000);a.click('bOnline');await tick();a.click('mpResume');await tick();
 assert.equal(a.stored('mindGardenRound8').phase,'playing');assert.equal(a.stored('mindGardenRound8').started,deadline);assert(tiles(a).every(b=>!b.disabled&&!b.classList.contains('revealed')));
 // Delayed/failed artwork retains a text picture; loaded artwork becomes ready.
 const stylesheet=a.w.document.createElement('style');stylesheet.textContent=read('v4.css');a.w.document.head.appendChild(stylesheet);
 const image=a.w.document.querySelector('.mp-card-face .game-illustration'),picture=image.parentElement,style=element=>a.w.getComputedStyle(element);assert(!picture.classList.contains('mp-art-ready'));assert(picture.querySelector('.picture-text').textContent);assert.equal(style(picture.querySelector('.picture-text')).opacity,'1','A pending illustration keeps its fallback visible');assert.equal(style(image).opacity,'0');
 Object.defineProperty(image,'naturalWidth',{value:144});image.dispatchEvent(new a.w.Event('load'));await tick();assert(picture.classList.contains('mp-art-ready'));assert.equal(style(image).opacity,'1');assert.equal(style(picture.querySelector('.picture-text')).opacity,'0');
 image.dispatchEvent(new a.w.Event('error'));assert(!picture.classList.contains('has-art'));assert(picture.querySelector('.picture-text').textContent);assert.equal(style(picture.querySelector('.picture-text')).opacity,'1','A failed illustration restores its fallback without a tap');
 // Leave with an older status response and an older lobby response still in flight.
 const oldState=await api('status',{...guest,code:first.code}),oldLounge=await api('lounge',guest);
 const releaseStatus=a.hold('status',response(oldState)),pendingStatus=a.intervals.get(1500)();await tick();
 const releaseLounge=a.hold('lounge',response(oldLounge)),pendingLounge=a.intervals.get(2500)();await tick();
 a.click('mpLeaveRoom');await tick();assert(a.by('mpCode'),'Leaving immediately exposes another room-code input');assert(a.by('mpLobbyStatus').textContent.includes('left'));assert.equal(a.stored('mindGardenRoom8'),null);assert.equal(a.stored('mindGardenRound8'),null);
 assert.equal((await api('lounge',guest)).activeRoom,null);assert.equal((await api('status',{...h1,code:first.code})).closed,undefined);
 await a.join(second.code);assert(a.w.document.querySelector('.mp-room-code').textContent.includes(second.code),'New room can render while the previous status request is pending');
 releaseStatus();releaseLounge();await Promise.all([pendingStatus,pendingLounge]);await tick();assert.equal(a.stored('mindGardenRoom8').code,second.code);assert(a.w.document.querySelector('.mp-room-code').textContent.includes(second.code));
 // Leaving a waiting room also releases membership, and joining a launched new room is rejected.
 a.click('mpLeaveRoom');await tick();assert.equal(a.stored('mindGardenRoom8'),null);await a.join(first.code);assert(a.by('multiError').textContent.includes('launched'));assert(a.by('mpCode'));
 await a.join(second.code);assert.equal((await api('lounge',guest)).activeRoom,second.code);
 // Hosts close their room before joining elsewhere; other participants retain history.
 const host=await boot(h1);host.click('mpResume');await tick();host.click('mpCancelGame');await tick();assert(host.by('mpCode'));assert.equal(host.stored('mindGardenRoom8'),null);
 await host.join(second.code);assert.equal((await api('lounge',h1)).activeRoom,second.code);assert(sqlite.prepare('SELECT * FROM mg_results WHERE code=? AND token=?').get(first.code,guest.token).skipped);
 assert.deepEqual(errors,[]);console.log('PASS: preview resumes without extension, expiry closes without input, artwork load/error fallback, leave-and-join during delayed polls, stale lobby response ignored, host close-and-join, departed result retained.');
}finally{clients.forEach(d=>d.window.close());sqlite.close()}
