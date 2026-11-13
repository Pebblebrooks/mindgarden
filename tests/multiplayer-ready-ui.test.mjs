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
 w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);for(const f of ['language-catalog.js','language-runtime.js','artwork.js','player-preferences.js','online-activities.js','multiplayer.js'])w.eval(read(f));await tick();w.document.getElementById('bOnline').click();await tick();
 const by=id=>w.document.getElementById(id),click=id=>{assert(by(id),id+' exists');by(id).click()};
 return {w,by,click,intervals,user,stored:key=>JSON.parse(w.localStorage.getItem(key)||'null'),advance:ms=>now+=ms,async poll(){await intervals.get(1500)();await tick()},async join(code){by('mpCode').value=code;click('mpJoin');await tick()},hold(action,response){let release;gates.set(action,{response,promise:new Promise(r=>release=r)});return release}};
}
const response=data=>new Response(JSON.stringify(data),{status:200,headers:{'content-type':'application/json'}}),tiles=a=>[...a.w.document.querySelectorAll('[data-tile]')];
try{
 const h=await api('login',{name:'Ready host'}),g=await api('login',{name:'Ready guest'}),o=await api('login',{name:'Invitation host'});
 const host=await boot(h),guest=await boot(g);host.by('mpRoundCount').value='1';host.click('mpCreate');await tick();
 const code=host.stored('mindGardenRoom8').code;await guest.join(code);await host.poll();
 assert.equal((await api('status',{...h,code})).totalRounds,1);
 host.by('mpMode').value='sums';host.click('mpLaunch');await tick();await guest.poll();
 for(const a of [host,guest]){assert(a.by('mpBeginGame'));assert.equal(a.w.document.querySelector('[data-answer]'),null);assert.equal(a.stored('mindGardenRound8').started,null)}
 // An invitation in a current room explains the leave rule and returns to the existing controls.
 const other=await api('create',o);await guest.intervals.get(2500)();await tick();assert(guest.by('onlineInvitation').textContent.includes(other.code));assert(guest.by('mpInviteTip').textContent.includes('Leave your current room'));guest.click('mpSeeInvite');assert(guest.by('mpBeginGame'));assert.equal(guest.w.document.activeElement.id,'mpLeaveRoom');assert.equal(guest.stored('mindGardenRoom8').code,code);
 // A failed Begin must leave questions hidden and permit a normal retry.
 const release=guest.hold('begin',new Response(JSON.stringify({error:'Temporary test connection failure'}),{status:503}));guest.click('mpBeginGame');assert(guest.by('mpBeginGame').disabled);release();await tick();assert(!guest.by('mpBeginGame').disabled);assert(!guest.w.document.querySelector('[data-answer]'));
 guest.advance(120000);guest.click('mpBeginGame');await tick();assert.equal(guest.stored('mindGardenRound8').started,guest.w.Date.now());assert(guest.w.document.querySelector('[data-answer]'));assert(host.by('mpBeginGame'),'An absent host does not start when another player begins');
 const first=guest.w.document.querySelector('.seqline').textContent,started=guest.stored('mindGardenRound8').started;guest.click('mpExit');guest.click('bOnline');await tick();guest.click('mpResume');await tick();assert.equal(guest.w.document.querySelector('.seqline').textContent,first);assert.equal(guest.stored('mindGardenRound8').started,started);
 host.click('mpBeginGame');await tick();sqlite.prepare('UPDATE mg_rooms SET started_at=? WHERE code=?').run(Date.now()-5000,code);
 for(const a of [guest,host]){for(let i=0;i<8;i++){const game=a.stored('mindGardenRound8'),q=game.questions[i];a.w.document.querySelector('[data-answer="'+q.options.indexOf(q.answer)+'"]').click();await tick();assert(a.by('mpQuizContinue'));assert.equal(a.stored('mindGardenRound8').index,i);a.click('mpQuizContinue');await tick()}}
 await guest.poll();await host.poll();for(const a of [guest,host]){assert(a.by('mpSessionFinished'));assert(!a.by('mpNext'));assert.equal(a.stored('mindGardenRoom8'),null);assert.equal(a.w.document.querySelectorAll('.mp-table tbody tr').length,2);a.click('mpFinalLobby');assert(a.by('mpCode'))}
 // A pending Begin cannot reopen or overwrite a different room after departure.
 await guest.join(other.code);await api('launch',{...o,code:other.code,round:0,mode:'sums'});await guest.poll();
 const finishBegin=guest.hold('begin');guest.click('mpBeginGame');await tick();guest.click('mpLeaveRoom');await tick();assert(guest.by('mpCode'));finishBegin();await tick();assert(guest.by('mpCode'));assert(!guest.w.document.querySelector('[data-answer]'));
 guest.click('mpLogout');await tick();assert(!guest.w.MindGardenMultiplayer.online());assert.equal(guest.by('onlineInvitation'),null);
 assert.deepEqual(errors,[]);console.log('PASS: one-round UI setup, hidden questions/timer until Begin, failed Begin retry, independent readiness, resume without reset, in-room invitation guidance, final rankings/released memberships, late Begin after leave, offline notices cleared.');
}finally{clients.forEach(d=>d.window.close());sqlite.close()}
