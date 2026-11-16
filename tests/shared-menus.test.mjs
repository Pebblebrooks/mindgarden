import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const require=createRequire(import.meta.url),{JSDOM,VirtualConsole}=require('./test-dom.cjs');
const root=new URL('../public/',import.meta.url),read=f=>readFileSync(new URL(f,root),'utf8'),html=read('index.html'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const wait=async()=>{for(let i=0;i<12;i++)await new Promise(r=>setImmediate(r))};
for(const lang of ['en','zh']){
 const {DB,sqlite}=database(),api=client(DB),user=await api('login',{name:'Test Host'}),guest=await api('login',{name:'Test guest'});
 const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,errors=[],intervals=new Map(),el=id=>w.document.getElementById(id);
 const click=async id=>{assert(el(id),'Missing '+id);el(id).click();await wait()};
 try{
 w.localStorage.setItem('gardenMatch',JSON.stringify({lang}));w.localStorage.setItem('mindGardenLobby',JSON.stringify(user));
 w.setInterval=(fn,ms)=>{intervals.set(ms,fn);return ms};w.clearInterval=ms=>intervals.delete(ms);w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.confirm=()=>true;
 w.fetch=async(url,options)=>String(url).includes('/api/room8')?onRequest({env:{DB},request:new Request(new URL(url,w.location.href),options)}):new Response(JSON.stringify({error:'Sign in'}),{status:401});
 w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(read(bundle));await wait();
 // Shared collection page, all selected games, reversible removal, independent settings.
 w.MindGardenPersonal.myGames();await wait();for(const id of ['seq','story','recall','diff'])w.MindGardenPersonal.selectGame(id,true);w.MindGardenDashboard.myGames();await wait();
 assert.equal(el('gameCards').querySelectorAll('[data-game]').length,7);assert(el('ov').classList.contains('hidden'));assert(!el('personalPages'));assert(el('personalUndo').hidden);
 const games=JSON.stringify(w.MindGardenPersonal.config().games),logs=JSON.stringify(w.me().log);el('gameCards').querySelector('[data-save-game="story"]').click();await wait();assert.equal(w.MindGardenPersonal.config().games.length,6);await click('personalUndo');assert.equal(JSON.stringify(w.MindGardenPersonal.config().games),games);assert.equal(JSON.stringify(w.me().log),logs);
 el('gameCards').querySelector('[data-game="num"]').click();await wait();assert.equal(el('personalStart').closest('.catalogue-footer')?.className,'catalogue-footer','Opening settings must not reparent the page footer');await click('menuExit');
 const original=w.save.cp;w.save.pr.other=w.newP('Another player');w.save.cp='other';w.load();w.MindGardenPersonal.myGames();assert.equal(w.MindGardenPersonal.config().games.length,3);w.save.cp=original;w.load();w.MindGardenPersonal.myGames();assert.equal(w.MindGardenPersonal.config().games.length,7);
 // Shipped bundle and actual in-memory room API, including menu decorators.
 await click('bOnline');assert(el('mpDirectoryBody'));await click('mpJoinOpen');el('mpCode').value='X';await click('mpJoin');assert(el('multiError').textContent);assert(el('mpCode').closest('.mp-shell'),'Legacy menu grouping must leave the new shell intact');
 await click('mpCreateOpen');el('mpRoundCount').value='1';await click('mpCreate');await intervals.get(1500)();await wait();
 const code=JSON.parse(w.localStorage.getItem('mindGardenRoom8')).code;assert(el('mpLaunch').disabled);assert.equal(el('mpRosterSelect').options.length,1);assert(el('mpRosterSelect').options[0].textContent.includes('Test Host'),'Player names must not be translated');
 await api('join',{...guest,code});await intervals.get(1500)();await wait();assert.equal(el('mpRosterSelect').options.length,2);assert(!el('mpLaunch').disabled);
 el('mpRosterSelect').value=guest.id;el('mpRosterSelect').dispatchEvent(new w.Event('change'));await intervals.get(1500)();assert.equal(el('mpRosterSelect').value,guest.id);
 await click('mpRoomsBack');await intervals.get(2500)();await wait();assert(el('mpOpenRooms').querySelector('[data-room-players="'+code+'"]'));
 const select=el('mpOpenRooms').querySelector('select');select.value=guest.id;await intervals.get(2500)();assert.equal(el('mpOpenRooms').querySelector('select').value,guest.id);
 await click('mpTab-lobby');assert.equal(el('mpTab-lobby').getAttribute('aria-selected'),'true');el('mpTab-lobby').dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowRight',bubbles:true}));await wait();assert.equal(el('mpTab-mine').getAttribute('aria-selected'),'true');
 // Complete a real round, then open the saved rankings page affected by shared sizing helpers.
 await api('launch',{...user,code,round:0,mode:'pairs6'});sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-6000,code);
 for(const member of [user,guest]){await api('begin',{...member,code,round:1});await api('submit',{...member,code,round:1,moves:6,elapsed:5})}
 await click('mpOptions');await click('mpHistory');await click('historyRoomOpen');assert(el('historyScores').textContent.includes('Test Host'));assert(el('historyScores').textContent.includes('Test guest'));el('historyRoundSelect').value='0';el('historyRoundSelect').dispatchEvent(new w.Event('change'));assert.equal(el('historyScores').querySelectorAll('tbody tr').length,2);assert.deepEqual(errors,[]);
 console.log('PASS shared menus '+lang+': 7-game collection, undo, profile isolation, settings footer, validated join, room creation, polling-safe player dropdowns, keyboard tabs and saved round rankings.');
 }finally{dom.window.close();sqlite.close()}
}
