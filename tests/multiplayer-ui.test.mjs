import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {database} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const require=createRequire(import.meta.url);
const {JSDOM}=require(process.env.MG_JSDOM||'jsdom');
const {DB,sqlite}=database(),clients=[];
const root=new URL('../public/',import.meta.url),get=f=>readFileSync(new URL(f,root),'utf8'),pause=ms=>new Promise(r=>setTimeout(r,ms));
const errors=[];
async function boot(i){const html=get('index.html'),dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test/',runScripts:'outside-only',pretendToBeVisual:true});clients.push(dom);const w=dom.window;w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.confirm=()=>true;w.addEventListener('error',e=>errors.push(e.error?.stack||e.message));w.fetch=(url,opts)=>onRequest({env:{DB},request:new Request(new URL(url,'https://garden.test'),opts)});w.localStorage.setItem('gardenMatch',JSON.stringify({lang:i%2?'zh':'en'}));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);for(const f of ['language-catalog.js','language-runtime.js','upgrade.js','online-activities.js','multiplayer.js','i18n.js','dashboard.js','wildlife.js','ambient.js','identity.js'])w.eval(get(f));w.document.getElementById('bOnline').click();w.document.getElementById('mpName').value='Tester '+i;w.document.getElementById('mpLogin').click();await pause(25);assert(w.document.getElementById('mpCreate'));return w;}
try{
 const ws=[];for(let i=0;i<8;i++)ws.push(await boot(i));
 const host=ws[0];host.document.getElementById('mpCreate').click();await pause(50);assert(host.document.getElementById('mpLaunch').disabled);
 await pause(2700);
 const code=host.document.querySelector('.mp-room-code strong').textContent;
 for(const w of ws.slice(1)){assert(w.document.getElementById('onlineInvitation').textContent.includes(code));const button=w.document.querySelector('[data-join-room="'+code+'"]');assert(button);button.click();await pause(25)}
 await pause(1700);assert(host.document.getElementById('mpPlayerCount').textContent.startsWith('8/8'));assert(host.document.getElementById('mpDelivery').textContent.includes('7/7'));
 // Rename while joined: identity and membership must remain stable across devices.
 const tokenBefore=JSON.parse(ws[1].localStorage.getItem('mindGardenLobby')).token;
 ws[1].document.querySelector('.mp-name-editor').open=true;ws[1].document.getElementById('mpRenameName').value='Garden Friend';ws[1].document.getElementById('mpSaveName').click();await pause(1700);
 assert.equal(ws[1].document.querySelector('.mp-name-editor').open,false);assert.equal(JSON.parse(ws[1].localStorage.getItem('mindGardenLobby')).token,tokenBefore);
 assert(host.document.getElementById('mpRoster').textContent.includes('Garden Friend'));
 assert.equal(ws[1].eval('me().name'),'Garden Friend');
 host.document.getElementById('mpMode').value='sums';host.document.getElementById('mpLaunch').click();await pause(1700);
 for(const w of ws){assert(!w.document.querySelector('[data-answer]'));w.document.getElementById('mpBeginGame').click();await pause(25);assert(w.document.querySelector('[data-answer]'));assert(w.document.querySelector('.mp-room-code').textContent.includes(code))}
 const question=ws[2].document.querySelector('.seqline').textContent;
 ws[2].document.getElementById('mpExit').click();ws[2].document.getElementById('bOnline').click();ws[2].document.getElementById('mpResume').click();await pause(100);assert.equal(ws[2].document.querySelector('.seqline').textContent,question);
 // Solve all eight identical challenges through actual DOM buttons and the real SQL API.
 sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,code);
 for(const w of ws){for(let q=0;q<8;q++){const title=w.document.querySelector('.seqline').textContent;const match=title.match(/(\d+) ([+−]) (\d+)/);assert(match,title);const expected=match[2]==='+'?+match[1]+ +match[3]:+match[1]- +match[3];const answer=[...w.document.querySelectorAll('[data-answer]')].find(b=>Number(b.textContent)===expected);answer.click();await pause(10);assert(w.document.getElementById('mpQuizContinue'));w.document.getElementById('mpQuizContinue').click();await pause(10)}}
 await pause(1700);for(const w of ws)assert.equal(w.document.querySelectorAll('.mp-table tbody tr').length,8);
 for(const w of ws){assert.equal(w.eval('me().multiplayerHistory.length'),1);assert(w.eval('me().multiplayerHistory[0].score')>0)}
 host.document.getElementById('mpMode').value='pairs10';host.document.getElementById('mpNext').click();await pause(1700);for(const w of ws)assert.equal(w.document.querySelectorAll('[data-tile]').length,20);
 host.document.getElementById('mpEndRound').click();await pause(1700);for(const w of ws)assert.equal(w.document.querySelectorAll('.mp-table tbody tr').length,8);
 host.document.getElementById('mpCloseRoom').click();await pause(1700);for(const w of ws){assert(w.document.getElementById('mpSessionFinished'),'Finishing shows final scores');w.document.getElementById('mpFinalLobby').click();assert(w.document.getElementById('mpCode'));assert.equal(w.localStorage.getItem('mindGardenRoom8'),null)}
 // Exercise withdrawal and host cancellation while a new round is live.
 host.document.getElementById('mpCreate').click();await pause(60);
 const secondCode=host.document.querySelector('.mp-room-code strong').textContent;
 for(const w of ws.slice(1,3)){w.document.getElementById('mpCode').value=secondCode;w.document.getElementById('mpJoin').click();await pause(60)}
 await pause(1700);host.document.getElementById('mpMode').value='sums';host.document.getElementById('mpLaunch').click();await pause(1700);
 assert(host.document.getElementById('mpCancelGame'));assert(!ws[1].document.getElementById('mpCancelGame'));ws[1].document.getElementById('mpLeaveRoom').click();await pause(80);assert(ws[1].document.getElementById('mpCode'));assert.equal(ws[1].localStorage.getItem('mindGardenRoom8'),null);
 host.document.getElementById('mpCancelGame').click();await pause(1700);assert(ws[2].document.getElementById('mpCode'));assert.equal(host.localStorage.getItem('mindGardenRoom8'),null);
 host.document.getElementById('mpClose').click();await pause(25);host.MindGardenDashboard.home();await pause(25);
 assert.equal(host.document.querySelectorAll('#gardenLife .wildlife-poster').length,3);assert(host.document.getElementById('gardenLife').classList.contains('wildlife-fallback'));
 host.openSet();await pause(20);assert(host.document.getElementById('settingsRename'));assert(host.document.getElementById('settingsPlayers'));assert(host.document.getElementById('settingsFamily'));
 host.document.getElementById('settingsRename').click();host.document.getElementById('gardenName').value='Ethan';host.document.getElementById('gardenNameSave').click();await pause(50);assert.equal(host.eval('me().name'),'Ethan');host.closeOv();host.document.getElementById('bOnline').click();host.document.getElementById('mpLogout').click();await pause(50);assert.equal(host.eval('me().name'),'Ethan');assert.equal(host.document.getElementById('mpName').value,'Ethan');host.closeOv();host.openSet();await pause(20);host.document.querySelector('[data-motion-mode=off]').click();await pause(20);assert.equal(host.document.documentElement.dataset.motion,'off');
 assert.deepEqual(errors,[]);console.log('PASS: 8 independent English/Chinese clients receive codes; receipts 7/7; host launches all; reconnect restores question; all submit via UI; 8-player leaderboard; second round; host ends round; close; GIF fallback and motion controls.');
}finally{clients.forEach(d=>d.window.close());sqlite.close()}
