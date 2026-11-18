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
 // Invite-only: a stranger online sees no groups, only how to start or join.
 const host=await boot('Alexander');host.click('mpCreateOpen');host.click('mpUseGame');await tick();await host.poll();
 const code=JSON.parse(host.w.localStorage.getItem('mindGardenRoom8')).code;
 const stranger=await boot('Stranger');await stranger.intervals.get(2500)();await tick();
 // D-03 screen 1: a first visit explains Play Together and offers Start or Join; there is no lobby or rooms list.
 assert(stranger.$('mpDirectoryBody').textContent.includes('How it works'));assert(stranger.$('mpCreateOpen')&&stranger.$('mpJoinOpen'));assert(!stranger.$('mpLogin'));assert(stranger.$('mpShellFooter').textContent.includes('Playing as Stranger'));assert(!stranger.$('box').textContent.includes('Alexander'));assert(!stranger.$('onlineInvitation'));
 assert(host.$('mpHostStatus').textContent.includes('Waiting for someone to join'));
 // D-03 screen 4: a host alone sees the invite open with the code and WhatsApp first.
 assert(!host.$('mpInvite').hidden);assert.equal(host.w.document.querySelector('.mp-big-code').textContent,code);assert(host.$('mpWhatsApp').href.includes(code));assert(host.$('mpInviteMore').hidden);
 // Guests can join while the host is briefly away; the host is named and the wait is explained.
 const guest=await boot('Boris'),terri=await boot('Terri');
 for(const g of [guest,terri]){g.click('mpJoinOpen');g.$('mpCode').value=code;g.$('mpCode').dispatchEvent(new g.w.Event('input'));g.click('mpJoin');await tick();await g.poll()}
 await host.poll();assert(host.$('mpHostStatus').textContent.includes('Waiting for Boris, Terri to tap Ready'));
 // D-03 screen 5: once people join, the invite folds into "Invite more" and players show status chips.
 assert(host.$('mpInvite').hidden);assert(!host.$('mpInviteMore').hidden);assert(!host.$('mpCodeLine').hidden);host.click('mpInviteMore');assert(!host.$('mpInvite').hidden);host.click('mpInviteMore');assert(host.$('mpInvite').hidden);
 assert(host.w.document.querySelector('.mp-roster .mp-chip-wait'));
 // D-03 screen 6: guests see the group, the game and how to play before tapping Ready.
 assert(guest.$('mpDirectoryBody').textContent.includes('How to play'));assert(guest.$('mpDirectoryBody').textContent.includes('find the matching pairs'));assert(guest.$('mpReady').textContent.includes('I’m ready'));
 assert(guest.$('mpLeaveGroup'),'guest has a visible Leave group button');
 sqlite.prepare('UPDATE mg_room_availability SET host_seen=? WHERE code=?').run(Date.now()-120000,code);await guest.poll();
 assert(!guest.$('mpAwayNote').hidden);assert(guest.$('mpAwayNote').textContent.includes('Alexander is away'));assert(/closes in about \d+ min/.test(guest.$('mpAwayNote').textContent));
 await host.poll();await guest.poll();assert(guest.$('mpAwayNote').hidden,'note clears when the host returns');
 // Host removes Terri; Terri is told why. Start then follows the present, ready guests.
 assert(host.w.document.querySelector('[data-remove-player]'),'host sees Remove');assert(!guest.w.document.querySelector('[data-remove-player]'),'guests never see Remove');
 host.w.document.querySelector('[data-remove-player="'+terri.user.id+'"]').click();await tick();await tick();await terri.poll();
 assert(terri.$('box').textContent.includes('The host removed you from the group'));
 guest.click('mpReady');await tick();assert(guest.$('mpReady').disabled&&guest.$('mpReady').textContent.includes('You’re ready'));await host.poll();assert.equal(host.$('mpLaunch').disabled,false);assert(host.$('mpHostStatus').textContent.includes('Everyone is ready'));
 assert(guest.$('mpHostStatus').textContent.includes('Waiting for Alexander to start'));
 // Lost host after the game: guest sees results, the away note and Leave; then the automatic close message.
 host.click('mpLaunch');await tick();await tick();
 // D-03 screen 7: the shared countdown names the first step and the fairness rule.
 assert(host.$('mpCountdown'));assert(host.$('box').textContent.includes('Remember the cards'));assert(host.$('box').textContent.includes('same start time'));
 sqlite.prepare('UPDATE mg_group_flow SET start_at=? WHERE code=?').run(Date.now()-1,code);
 await api('finishRound',{...host.user,code,round:1});await guest.poll();
 assert(guest.$('box').textContent.includes('Waiting for Alexander to choose the next game'));assert(guest.$('mpLeaveGroup'));
 // D-03 screen 8: results name the round, show round and total columns and rename the host actions.
 assert(guest.$('box').textContent.includes('Round 1 complete'));assert(guest.w.document.querySelector('.mp-score-table th:nth-child(3)').textContent==='Round');
 await host.poll();assert(host.$('mpChooseNext').textContent.includes('Choose another game'));assert(host.$('mpReplay').textContent.includes('Play again'));assert(host.$('mpCloseRoom').textContent.includes('End group'));
 sqlite.prepare('UPDATE mg_room_availability SET host_seen=? WHERE code=?').run(Date.now()-120000,code);await guest.poll();assert(!guest.$('mpAwayNote').hidden);
 sqlite.prepare('UPDATE mg_room_availability SET host_seen=? WHERE code=?').run(Date.now()-601000,code);await guest.poll();
 assert(guest.$('box').textContent.includes('host was away for 10 minutes'),'automatic close is explained');
 for(const c of [host,guest,terri,stranger])assert.deepEqual(c.errors,[]);
 console.log('PASS redesigned home, invite, waiting rooms, countdown and results; invite-only directory, named waiting status, host-away note, Remove with reason, Leave on waiting/results, explained automatic close.');
}finally{clients.forEach(c=>c.window.close());sqlite.close()}
