import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const require=createRequire(import.meta.url),{JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom');
const {DB,sqlite}=database(),api=client(DB),root=new URL('../public/',import.meta.url),read=f=>readFileSync(new URL(f,root),'utf8'),html=read('index.html'),tick=()=>new Promise(r=>setTimeout(r,15));
const clients=[];
async function boot(){
 const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window;clients.push(dom);
 const intervals=new Map();w.setInterval=(fn,ms)=>{intervals.set(ms,fn);return ms};w.clearInterval=ms=>intervals.delete(ms);w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.confirm=()=>true;
 const user=await api('login',{name:'Tester'});w.localStorage.setItem('mindGardenLobby',JSON.stringify(user));let gate;
 w.fetch=async(url,options)=>{const action=new URL(url,w.location.href).searchParams.get('action');if(gate?.action===action){const current=gate;gate=null;await current.promise;if(current.response)return current.response}return onRequest({env:{DB},request:new Request(new URL(url,w.location.href),options)})};
 w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(read('player-preferences.js'));w.eval(read('multiplayer.js'));await tick();w.document.getElementById('bOnline').click();await tick();
 return {w,user,intervals,click:id=>w.document.getElementById(id).click(),hold(action,response){let release;gate={action,response,promise:new Promise(r=>release=r)};return release}};
}
try{
 for(const action of ['create','join']){
  const a=await boot();if(action==='join'){const host=await api('login',{name:'Other host'}),r=await api('create',host);a.w.document.getElementById('mpCode').value=r.code}
  const release=a.hold(action);a.click(action==='create'?'mpCreate':'mpJoin');await tick();a.click('mpClose');release();await tick();
  assert(a.w.document.getElementById('ov').classList.contains('hidden'),'Late '+action+' must not reopen a closed lobby');
  assert(a.w.localStorage.getItem('mindGardenRoom8'),'Successful membership remains resumable');
 }
 {
  const a=await boot();a.click('mpCreate');await tick();const code=JSON.parse(a.w.localStorage.getItem('mindGardenRoom8')).code;
  sqlite.prepare('UPDATE mg_rooms SET created_at=? WHERE code=?').run(Date.now()-86400001,code);await a.intervals.get(1500)();
  assert(a.w.document.getElementById('mpBackLobby'),'Expired room needs an exit to the lobby');assert.equal(a.w.localStorage.getItem('mindGardenRoom8'),null);
  const before=a.w.document.getElementById('box').innerHTML;await a.intervals.get(1500)();assert.equal(a.w.document.getElementById('box').innerHTML,before,'Expired room must stop retrying');
 }
 {
  const a=await boot();a.click('mpCreate');await tick();const code=JSON.parse(a.w.localStorage.getItem('mindGardenRoom8')).code;
  const guest=await api('login',{name:'Other player'});await api('join',{...guest,code});a.w.overlay('<h2 id="otherScreen">Settings</h2>');await api('launch',{...a.user,code,round:0,mode:'sums'});await a.intervals.get(1500)();
  assert(a.w.document.getElementById('otherScreen'),'Background polling must not replace another screen');
 }
 {
  const a=await boot();const release=a.hold('lounge',new Response(JSON.stringify({rooms:[{code:'ABCDEF',host:'Another host',players:1}],online:1,activeRoom:null}),{status:200}));
  const polling=a.intervals.get(2500)();await tick();a.click('mpLogout');await tick();release();await polling;
  assert.equal(a.w.document.getElementById('onlineInvitation'),null,'Old invitations must not return after going offline');assert.equal(a.w.MindGardenMultiplayer.online(),false);
 }
 {
  const a=await boot();a.click('mpCreate');await tick();let reject;a.w.navigator.clipboard={writeText:()=>new Promise((_,r)=>reject=r)};
  const copying=a.w.document.getElementById('mpCopy').onclick();a.click('mpExit');a.w.overlay('<h2 id="otherScreen">Settings</h2>');reject(Error('Permission denied'));await copying;assert(a.w.document.getElementById('otherScreen'));
 }
 {
  const a=await boot();const first=a.w.eval('save.cp');a.w.document.querySelector('.mp-name-editor').open=true;a.w.document.getElementById('mpRenameName').value='Renamed first';const release=a.hold('login');a.click('mpSaveName');await tick();
  a.w.eval("save.pr.second=newP('Second');save.cp='second';load()");a.w.overlay('<h2 id="otherScreen">Second player</h2><span class="mp-self-name">Second</span>');release();await tick();
  assert.equal(a.w.eval('me().name'),'Second');assert.equal(a.w.document.querySelector('.mp-self-name').textContent,'Second');assert.equal(a.w.eval('save.pr')[first].name,'Renamed first');
 }
 console.log('PASS: late join/create responses, expired rooms, navigation during polling, logout during invitation delivery and clipboard failure after closure and player switching during renaming.');
}finally{clients.forEach(d=>d.window.close());sqlite.close()}
