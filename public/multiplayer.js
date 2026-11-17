/* v3.0: 2–8 players, online lobby invitations, host launch and shared rounds. */
(function(){
'use strict';
const KEY='mindGardenRoom8',SESSION='mindGardenLobby',GAME='mindGardenRound8';
const MODES=[['pairs6','Matching pairs · 6 pairs'],['pairs10','Matching pairs · 10 pairs'],['sums','Mental sums · 8 questions'],['patterns','Number patterns · 8 questions'],['odd','Odd one out · 8 questions'],['sums12','Mental sums · 12 questions'],['patterns12','Number patterns · 12 questions'],['odd12','Odd one out · 12 questions'],['bingo9','Picture bingo · host-paced']];
const EXTRA=window.MindGardenOnlineActivities;for(const activity of EXTRA?.activities||[])MODES.push([activity.id,activity.en,activity.zh]);
const $=id=>document.getElementById(id),T=(a,b)=>window.MindGardenLocale.pair(a,b);
const volatileStorage=new Map();
const read=k=>{try{return JSON.parse((volatileStorage.has(k)?volatileStorage.get(k):localStorage.getItem(k))||'null')}catch{return null}};
function store(k,v){try{localStorage.setItem(k,v);volatileStorage.delete(k)}catch{volatileStorage.set(k,v);window.reportStorageFailure?.()}}
function remove(k){try{localStorage.removeItem(k);volatileStorage.delete(k)}catch{volatileStorage.set(k,null);window.reportStorageFailure?.()}}
const storedSession=read(SESSION),validSession=storedSession&&/^[0-9a-f]{48}$/.test(storedSession.token)&&/^[0-9a-f]{16}$/.test(storedSession.id)&&typeof storedSession.name==='string';
let session=validSession&&!storedSession.offline?storedSession:null,room=null,game=null,shownRound=0,screen='',generation=0,membershipRevision=0,busy=false,pollRequest=null,loungeBusy=false,last=null,loungeRooms=[],loungeTimer=null;
const hosting=new Set(),arrivalNotices=new Map(),arrivalMembers=new Map(),arrivalReminders=new Map();let hostChimeEnabled=read('mindGardenHostChime')!==false,hostAudio=null;
const noticed=new Set();let view=null,checkpointTimer=null,mismatchTimer=null,previewTimer=null;
// Each response belongs to the screen that initiated it. Other dialogs may replace it.
function overlay(html){window.overlay(html);$('box').classList.remove('mp-playing');$('box').classList.add('mp-dialog');view=$('box').firstElementChild}
function current(gen=generation){return gen===generation&&!!view?.isConnected&&!$('ov').classList.contains('hidden')}
function clearPairTimers(){clearTimeout(mismatchTimer);clearInterval(previewTimer);mismatchTimer=previewTimer=null}
function suspend(){checkpoint();clearPairTimers();generation++;room=null;game=null;shownRound=0;screen='';last=null;view=null}
window.addEventListener('gardenPlayerChange',suspend);
function api(action,data={}){const controller=new AbortController(),deadline=setTimeout(()=>controller.abort(),25000);return fetch('/api/room8?action='+action,{method:'POST',headers:{'content-type':'application/json'},cache:'no-store',signal:controller.signal,body:JSON.stringify({...data,token:session?.token||data.token})}).then(async r=>{let j;try{j=await r.json()}catch{throw Error(T('Online service unavailable. Check the deployment.','在线服务不可用，请检查部署。'))}if(!r.ok)throw Object.assign(Error(j.error||'Connection failed'),{status:r.status});return j}).catch(e=>{if(e.name==='AbortError')throw Error(T('Connection timed out. Please retry.','连接超时，请重试。'));throw e}).finally(()=>clearTimeout(deadline))}
function error(e){const el=$('multiError');if(el)el.textContent=save.lang==='zh'&&window.tr?tr(e.message):e.message}
function name(){let n=(me().name||'').replace(/[^\p{L}\p{N} ._'-]/gu,'').slice(0,20);if(!n||/^(Player\s*\d*|玩家\s*\d*)$/i.test(n)){let tag=read('mindGardenGuestTag');if(!tag){tag=Array.from(crypto.getRandomValues(new Uint8Array(3)),x=>x.toString(16).padStart(2,'0')).join('').toUpperCase();store('mindGardenGuestTag',JSON.stringify(tag))}n='Guest '+String(parseInt(tag,16)%100).padStart(2,'0')}return n}
function invite(c=room?.code){const u=new URL(location.pathname,location.origin);u.hostname=u.hostname.replace(/^[a-f0-9]{8,}\.(?=[^.]+\.pages\.dev$)/i,'');u.searchParams.set('room',c);return u.href}
function user(n){return '<span translate="no">'+esc(n)+'</span>'}
function roomControls(s){const state=s?.host!==undefined?s:last;if(!state||state.closed||state.left)return '';return '<div class="mp-room-actions row">'+(state.host?(state.started&&!state.finished?'<button class="btn" id="mpCancelGame">'+T('Cancel game & close room','取消游戏并关闭房间')+'</button>':''):'<button class="btn" id="mpLeaveRoom">'+T('Leave room','退出此房间')+'</button>')+'</div>'}
function base(s){const state=s||last;return '<h2>'+((state?.started&&!state.finished)?esc(activityName(state.mode).split(' · ')[0]):state?.players?groupName(state):T('Play Together','一起玩'))+'</h2><p id="mpConnection" class="tip" role="status"></p>'}
const roomGameKey=c=>GAME+':'+(session?.id||'local')+':'+c;
function checkpoint(){clearTimeout(checkpointTimer);checkpointTimer=null;if(!game||!room)return;try{store(roomGameKey(room.code),JSON.stringify({code:room.code,...game,done:game.done?[...game.done]:undefined}))}catch{}}
function queueCheckpoint(){clearTimeout(checkpointTimer);checkpointTimer=setTimeout(checkpoint,80)}
function exitScreen(){
 if(last?.sessionFinished){suspend();closeOv();return}
 if(room&&last&&!last.host){const c=room.code;if(confirm(T('Leave group?','退出小组？')))action(async()=>{await api('leave',{code:c});releaseRoom(c,T('You left the group.','已退出小组。'))});return}
 const codes=room&&last?.host?[room.code]:[...hosting];if(!codes.length){suspend();closeOv();return}
 hostExitChoice(codes);
}
function hostExitChoice(codes){
 if(document.getElementById('mpHostExit'))return;
 const d=document.createElement('dialog');d.id='mpHostExit';d.className='game-ui-dialog';d.setAttribute('aria-label',T('Close your group?','关闭小组？'));
 d.innerHTML='<h2>'+T(codes.length>1?'Close your rooms?':'Close your group?',codes.length>1?'关闭所有房间？':'关闭小组？')+'</h2><div class="row"><button class="btn main" id="mpKeepHosting">'+T('Keep hosting','继续主持')+'</button><button class="btn" id="mpStopHosting">'+T(codes.length>1?'Close rooms':'Close group',codes.length>1?'关闭所有房间':'关闭小组')+'</button></div><p role="alert"></p>';
 document.body.append(d);const opener=document.activeElement;const done=()=>{d.close?.();d.remove();opener?.focus()};d.addEventListener('cancel',e=>{e.preventDefault();done()});d.showModal?d.showModal():d.setAttribute('open','');
 d.querySelector('#mpKeepHosting').onclick=()=>{done();if(room&&current())return;if(codes[0])enter(codes[0])};
 d.querySelector('#mpStopHosting').onclick=async()=>{const b=d.querySelector('#mpStopHosting');b.disabled=true;try{for(const code of codes){await api('close',{code});hosting.delete(code)}done();suspend();closeOv();lounge()}catch(e){d.querySelector('p').textContent=T('Could not close. Try again.','无法关闭，请重试。');b.disabled=false}};d.querySelector('button').focus();
}
document.addEventListener('pointerdown',()=>{if(!session||!hostChimeEnabled)return;try{const C=window.AudioContext||window.webkitAudioContext;if(C){hostAudio=hostAudio||new C();hostAudio.resume()?.catch(()=>{})}}catch{}},{passive:true});
document.addEventListener('pointerdown',()=>{if(last?.host&&last.pendingSince&&screen==='lobby'&&current()){const c=room.code;api('hostReady',{code:c}).then(state=>{if(room?.code===c&&current())accept(state)}).catch(()=>{})}},{passive:true});
function joinChime(){
 if(!hostChimeEnabled)return;
 try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const ctx=hostAudio||(hostAudio=new C());if(ctx.state!=='running')return;const osc=ctx.createOscillator(),gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);osc.frequency.value=660;gain.gain.setValueAtTime(.06,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.25);osc.start();osc.stop(ctx.currentTime+.25)}catch{}
}
function hostNotices(state){
 const mine=(state.myRooms||[]).filter(m=>m.host),rooms=state.rooms||[],active=rooms.filter(r=>mine.some(m=>m.code===r.code));
 for(const code of hosting)if(!active.some(r=>r.code===code))hosting.delete(code);
 let strip=$('mpHostNotice');if(!active.length){strip?.remove();return}
 if(!strip){strip=document.createElement('aside');strip.id='mpHostNotice';strip.setAttribute('aria-label',T('Hosting','正在主持'));}
 const pending=active.filter(r=>r.status==='lobby'&&r.pendingSince),r=pending[0]||active[0];
 for(const item of active.filter(r=>r.status==='lobby')){
  const ids=(item.members||[]).filter(p=>p.id!==session?.id).map(p=>p.id),old=arrivalMembers.get(item.code)||[];
  if(item.pendingSince&&(ids.some(id=>!old.includes(id))||arrivalNotices.get(item.code)!==item.pendingSince))joinChime();arrivalMembers.set(item.code,ids);arrivalNotices.set(item.code,item.pendingSince);
  if(item.pendingSince&&Date.now()-item.pendingSince>=30000&&arrivalReminders.get(item.code)!==item.pendingSince){arrivalReminders.set(item.code,item.pendingSince);joinChime()}
 }
 const age=r.pendingSince?Date.now()-r.pendingSince:0;
 const names=(r.members||[]).filter(p=>p.id!==session?.id).map(p=>p.name).join(', ');
 const text=pending.length?esc(names)+T(age>=30000?' · Waiting':' joined your group.',age>=30000?' · 正在等待':'加入了你的小组。'):'';
 if(!pending.length){strip.remove();return}
 const inRoom=room?.code===r.code&&current();
 const markup='<span role="status">'+text+(inRoom?'':' · <b translate="no">'+esc(r.code)+'</b>')+'</span>'+(inRoom?'':'<button class="btn sm" data-host-open="'+r.code+'">'+T('View group','查看小组')+'</button>');
 if(strip.dataset.markup!==markup){strip.innerHTML=markup;strip.dataset.markup=markup;const open=strip.querySelector('[data-host-open]');if(open)open.onclick=()=>{menu();resumeRoom(r.code)};const ready=strip.querySelector('[data-host-ready]');if(ready)ready.onclick=async()=>{ready.disabled=true;try{await api('hostReady',{code:r.code});hosting.add(r.code);lounge()}catch{ready.disabled=false;strip.querySelector('span').textContent=T('Room unavailable','房间不可用')}}}
 // A normal-flow status row reserves space instead of covering game controls.
 const target=!$('ov').classList.contains('hidden')?($('mpDirectoryBody')||$('box')):!$('mini').classList.contains('hidden')?$('mini').querySelector('.hud'):!$('game').classList.contains('hidden')?$('game').querySelector('.hud'):$('home');
 if(target&&strip.parentElement!==target)target.prepend(strip);
}

function clearInvite(){const u=new URL(location.href);u.searchParams.delete('room');history.replaceState(null,'',u.pathname+u.search+u.hash)}
async function action(fn){if(busy)return;busy=true;const gen=generation;try{await fn()}catch(e){if(current(gen))error(e)}finally{busy=false}}
async function login(){const gen=generation,owner=save.cp,profile=me(),n=($('mpName')?.value||name()).normalize('NFKC').trim().replace(/\s+/gu,' ');const invalid=window.MindGardenIdentity?.nameError(n,owner);if(invalid)throw Error(invalid);session=await api('login',{name:n,token:read(SESSION)?.token});store(SESSION,JSON.stringify(session));if(save.pr[owner]===profile){const previous=profile.name;profile.name=session.name;if(persist()===false){profile.name=previous;throw Error(T('Name could not be saved. Free device storage and retry.','无法保存名称，请释放设备存储空间后重试。'))}}if(owner===save.cp)window.MindGardenDashboard?.refresh();startLounge();return owner===save.cp&&current(gen)}
function nameControls(){return '<details class="mp-name-editor"><summary>'+T('Your name: ','你的名称：')+'<span class="mp-self-name" translate="no">'+esc(session?.name||name())+'</span> · '+T('Rename','改名')+'</summary><label class="lab">'+T('Name shown to other players','其他玩家看到的名称')+'<input id="mpRenameName" maxlength="20" value="'+esc(session?.name||name())+'"></label><button class="btn" id="mpSaveName">'+T('Save name','保存名称')+'</button><span id="mpNameStatus" role="status"></span></details>'}
async function renameOnline(n){
 n=n.normalize('NFKC').trim().replace(/\s+/gu,' ');const invalid=window.MindGardenIdentity?.nameError(n,save.cp);if(invalid)throw Error(invalid);if(!/^[\p{L}\p{N} ._'-]{1,20}$/u.test(n))throw Error(T('Use 1–20 letters or numbers.','请使用1至20个字母或数字。'));
 if(session){const previous=session,updated=await api('login',{name:n});if(session!==previous)return n;session=updated;store(SESSION,JSON.stringify(session))}
 else{const previous=read(SESSION);if(previous)store(SESSION,JSON.stringify({...previous,name:n,offline:true}))}
 return n;
}
window.MindGardenMultiplayer={flushStorage(){for(const [k,v]of volatileStorage){try{v===null?localStorage.removeItem(k):localStorage.setItem(k,v);volatileStorage.delete(k)}catch{return false}}return true},rename:renameOnline,online:()=>!!session,active:()=>!!read(KEY),history:()=>action(()=>openHistory()),exit:exitScreen};
function releaseRoom(code,notice,gen=generation,closed=false){
 membershipRevision++;hosting.delete(code);arrivalNotices.delete(code);
 loungeState={...loungeState,rooms:(loungeState.rooms||[]).filter(r=>!closed||r.code!==code).map(r=>r.code===code?{...r,joined:false}:r),myRooms:(loungeState.myRooms||[]).filter(r=>r.code!==code)};
 if(read(KEY)?.code===code)remove(KEY);if(read(GAME)?.code===code)remove(GAME);remove(roomGameKey(code));
 if(room?.code!==code)return;
 const show=current(gen);clearPairTimers();clearTimeout(checkpointTimer);checkpointTimer=null;generation++;room=null;game=null;last=null;shownRound=0;screen='';clearInvite();
 if(show)menu(notice);
}
function cancelRoom(){if(confirm(T('Close room for everyone?','为所有人关闭房间？')))action(async()=>{const c=room?.code,gen=generation;if(!c)return;await api('close',{code:c});releaseRoom(c,T('Room closed. You can join or create another room.','房间已关闭。您可以加入或创建其他房间。'),gen,true)})}
$('box').addEventListener('click',e=>{if(e.target.closest('#mpCancelGame'))cancelRoom();if(e.target.closest('#mpLeaveRoom')&&confirm(T('Leave room? Your unfinished round will stop. Other players can continue.','退出此房间？你的未完成回合将停止，其他玩家可以继续。')))action(async()=>{const c=room?.code,gen=generation;if(!c)return;await api('leave',{code:c});releaseRoom(c,T('You have left the room. Enter another room code below. Other players can continue.','您已退出房间，可在下方输入其他房间码。其他玩家可以继续。'),gen)})});
$('box').addEventListener('click',e=>{const button=e.target.closest('#mpSaveName');if(!button)return;const editor=button.closest('details'),input=$('mpRenameName'),profile=me();action(async()=>{button.disabled=true;try{const n=await window.MindGardenIdentity.rename(input.value);if(me()!==profile)return;window.MindGardenDashboard?.refresh();document.querySelectorAll('.mp-self-name').forEach(el=>el.textContent=n);if(editor.isConnected){editor.open=false;editor.querySelector('summary')?.focus()}if($('mpConnection'))$('mpConnection').textContent=T('Name saved.','名称已保存。')}finally{button.disabled=false}})});
let pendingCreate=null;
let directoryTab='rooms',directoryView='list',loungeState={rooms:[],lobby:[],myRooms:[]};
function rankingPageSize(){return 10}
function directoryTabs(selected='rooms'){return '<div class="mp-directory-tabs" role="tablist" aria-label="'+T('Lobby views','大厅视图')+'">'+[['rooms',T('Rooms','房间')],['lobby',T('Lobby','大厅')],['mine',T('My rooms','我的房间')]].map(([id,label])=>'<button class="btn" id="mpTab-'+id+'" role="tab" data-room-tab="'+id+'" aria-controls="mpDirectoryBody" aria-selected="'+(selected===id)+'" tabindex="'+(selected===id?'0':'-1')+'">'+label+'</button>').join('')+'</div>'}
function wireTabs(){document.querySelectorAll('#box [data-room-tab]').forEach(b=>{b.onclick=()=>{directoryTab=b.dataset.roomTab;directoryView='list';if(screen!=='menu')menu();else directoryContent();$('mpTab-'+directoryTab)?.focus({preventScroll:true})};b.onkeydown=e=>{const keys=['ArrowLeft','ArrowRight','Home','End'];if(!keys.includes(e.key))return;e.preventDefault();const tabs=[...document.querySelectorAll('#box [data-room-tab]')],index=tabs.indexOf(b);tabs[e.key==='Home'?0:e.key==='End'?tabs.length-1:(index+(e.key==='ArrowRight'?1:2))%3].click()}})}
function playerOptions(players){return players.map(p=>'<option translate="no" value="'+esc(p.id||p.name)+'">'+esc(p.name)+(p.host?' · '+T('Host','房主'):'')+(p.id===session?.id?' · '+T('You','你'):'')+'</option>').join('')}
function renderDirectory(){
 const list=$('mpOpenRooms');if(!list||screen!=='menu'||directoryView!=='list')return;
 const focused=document.activeElement,focus=list.contains(focused)?focused.dataset.joinRoom||focused.dataset.roomPlayers:null,wasSelect=!!focused.dataset?.roomPlayers;
 const choices=new Map([...list.querySelectorAll('select[data-room-players]')].map(el=>[el.dataset.roomPlayers,el.value])),scroll=$('mpDirectoryBody').scrollTop;
 const rooms=loungeState.rooms||[],mine=loungeState.myRooms||[];
 const items=rooms;
 const markup=items.map(r=>{
  if(directoryTab==='lobby')return '<div class="mp-person-row">'+user(r.name)+(r.online===false?'<small>'+T('Away','暂离')+'</small>':'<span>'+T('Online','在线')+'</span>')+'</div>';
  const joined=r.joined||mine.some(m=>m.code===r.code),available=r.joinable!==false&&r.players<8&&r.status!=='playing';
  return '<article class="mp-directory-room"><div class="mp-room-summary"><strong>'+user(r.host)+T('’s group','的小组')+'</strong><small>'+r.players+T(' players','位玩家')+' · '+esc(activityName(r.mode||'pairs6').split(' · ')[0])+'</small></div><button class="btn" data-join-room="'+r.code+'" data-room-member="'+joined+'"'+(!joined&&!available?' disabled':'')+'>'+(joined?T('Return','返回'):r.players>=8?T('Full','已满'):r.status==='playing'?T('Playing','游戏中'):T('Join','加入'))+'</button></article>';
 }).join('')||'<div class="mp-empty"><h3>'+T(directoryTab==='lobby'?'No players in the lobby':directoryTab==='mine'?'No joined rooms yet':'No groups yet',directoryTab==='lobby'?'大厅暂无玩家':directoryTab==='mine'?'尚未加入房间':'暂无小组')+'</h3><p>'+T('Create a group or join with a code.','创建房间或使用房间码加入。')+'</p></div>';
 if(list.dataset.markup!==markup){list.innerHTML=markup;list.dataset.markup=markup;for(const el of list.querySelectorAll('select[data-room-players]'))if([...el.options].some(o=>o.value===choices.get(el.dataset.roomPlayers)))el.value=choices.get(el.dataset.roomPlayers);$('mpDirectoryBody').scrollTop=scroll}
 document.querySelectorAll('[data-room-tab]').forEach(b=>{const active=b.dataset.roomTab===directoryTab;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1});
 $('mpDirectoryBody').setAttribute('aria-label',T('Groups','小组'));
 list.querySelectorAll('[data-join-room]').forEach(b=>b.onclick=()=>action(()=>b.dataset.roomMember==='true'?resumeRoom(b.dataset.joinRoom):join(b.dataset.joinRoom)));
 if(focus)list.querySelector((wasSelect?'[data-room-players="':'[data-join-room="')+focus+'"]')?.focus({preventScroll:true});
}
function directoryContent(){
 const body=$('mpDirectoryBody');if(!body)return;
 body.setAttribute('role','region');
 if(directoryView==='list'){body.innerHTML='<h3>'+T('Join a group','加入小组')+'</h3><div id="mpOpenRooms" class="mp-directory-list"></div>';renderDirectory();return}
 if(directoryView==='create'){chooseGame(window.MindGardenPreferredRoomMode||'pairs6',mode=>action(async()=>{const gen=generation;const r=await api('create',{groupFlow:true,mode,requestId:pendingCreate||(pendingCreate=crypto.randomUUID())});pendingCreate=null;hosting.add(r.code);claim(r.code,gen)}),()=>{directoryView='list';menu()});return}
 const title=directoryView==='create'?T('Create a room','创建房间'):directoryView==='join'?T('Join by code','使用房间码加入'):T('Lobby options','大厅选项');
 body.removeAttribute('aria-labelledby');body.setAttribute('aria-label',title);
 body.innerHTML='<div class="mp-form-heading"><button class="btn" id="mpDirectoryBack" data-menu-back hidden>‹ '+T('Back','返回')+'</button><h3>'+title+'</h3></div><div class="mp-form">'+(directoryView==='create'?roundChoices()+'<p>'+T('Up to 8 players. Choose the activity after creating your room.','最多8人。创建房间后选择活动。')+'</p><button class="btn main" id="mpCreate">'+T('Create room','创建房间')+'</button>':directoryView==='join'?'<label>'+T('Room code','房间码')+'<input id="mpCode" maxlength="6" autocapitalize="characters" spellcheck="false" autocomplete="off" placeholder="ABCDEF"></label><button class="btn main" id="mpJoin">'+T('Join room','加入房间')+'</button>':nameControls()+'<button class="btn" id="mpHistory">'+T('Saved rankings','已保存排名')+'</button><button class="btn" id="mpLogout">'+T('Go offline','退出大厅')+'</button>')+'</div>';
 $('mpDirectoryBack').onclick=()=>{directoryView='list';directoryContent();$('mpTab-'+directoryTab)?.focus()};
 if($('mpCreate'))$('mpCreate').onclick=()=>action(async()=>{const gen=generation,button=$('mpCreate');button.disabled=true;try{const r=await api('create',{rounds:Number($('mpRoundCount').value),requestId:pendingCreate||(pendingCreate=crypto.randomUUID())});pendingCreate=null;hosting.add(r.code);claim(r.code,gen)}finally{if(button.isConnected)button.disabled=false}});
 if($('mpJoin')){$('mpJoin').onclick=()=>action(async()=>{const c=$('mpCode').value.trim().toUpperCase();if(!/^[A-Z2-9]{6}$/.test(c))throw Error(T('Enter the 6-character room code.','请输入6位房间码。'));await join(c)});$('mpCode').onkeydown=e=>{if(e.key==='Enter')$('mpJoin').click()};$('mpCode').focus()}
 if($('mpHistory'))$('mpHistory').onclick=()=>action(()=>openHistory());
 if($('mpLogout'))$('mpLogout').onclick=()=>action(async()=>{const gen=generation;await api('logout');store(SESSION,JSON.stringify({...session,offline:true}));session=null;clearInterval(loungeTimer);noticed.clear();$('onlineInvitation')?.remove();if(current(gen))menu()});
}

function startLounge(){if(loungeTimer)clearInterval(loungeTimer);loungeTimer=setInterval(lounge,2500);lounge()}
async function lounge(){
 if(!session||loungeBusy||document.hidden)return;loungeBusy=true;const identity=session,revision=membershipRevision;
 try{const s=await api('lounge',{hosting:[...hosting]});if(session!==identity||revision!==membershipRevision)return;loungeRooms=s.rooms;loungeState=s;hostNotices(s);
  if(screen==='menu'&&current()){if(!s.myRooms?.length&&!s.activeRoom)remove(KEY);renderDirectory()}
  if($('mpOnlineCount'))$('mpOnlineCount').textContent=s.online+' '+T('online','在线');
  const notice=$('onlineInvitation');if(notice?.dataset.codes&&!s.rooms.some(r=>r.joinable!==false&&JSON.parse(notice.dataset.codes).includes(r.code)))notice.remove();
  const fresh=s.rooms.filter(r=>r.status!=='playing'&&r.joinable!==false&&!r.joined&&!noticed.has(r.code)&&r.code!==s.activeRoom);
  if(fresh.length){let notice=$('onlineInvitation');if(!notice){notice=document.createElement('aside');notice.id='onlineInvitation';notice.setAttribute('role','status');document.body.appendChild(notice)}
   notice.dataset.codes=JSON.stringify(fresh.map(r=>r.code));notice.inert=false;notice.innerHTML='<span>'+T('Open groups: ','可加入的小组：')+fresh.map(r=>user(r.host)).join(' · ')+'</span><small id="mpInviteTip"></small><button class="btn sm" id="mpSeeInvite">'+(s.activeRoom?T('Room options','房间选项'):T('View lobby','查看大厅'))+'</button><button class="btn sm" id="mpDismissInvite" aria-label="'+T('Dismiss','关闭')+'">×</button>';
   if(s.activeRoom)$('mpInviteTip').textContent=T('Choose a group to join.','选择要加入的小组。');
   $('mpSeeInvite').onclick=()=>{directoryTab='rooms';menu();notice.remove()};$('mpDismissInvite').onclick=e=>{e.preventDefault();for(const r of fresh)noticed.add(r.code);notice.remove()};
  }
  // Acknowledge only after invitations have been rendered on the player's device.
  if(s.rooms.length){await api('ack',{codes:s.rooms.map(r=>r.code)});s.rooms.forEach(r=>noticed.add(r.code))}
 }catch(e){if(session!==identity)return;if($('mpOnlineCount'))$('mpOnlineCount').textContent=T('Reconnecting to the lobby…','正在重新连接大厅……');if(e.status===401){session=null;remove(SESSION);clearInterval(loungeTimer);noticed.clear();
   let notice=$('onlineInvitation');if(!notice){notice=document.createElement('aside');notice.id='onlineInvitation';notice.setAttribute('role','status');document.body.appendChild(notice)}
   notice.innerHTML='<span>'+T('Reconnect to Play Together to receive room invitations.','重新连接“一起玩”以接收房间邀请。')+'</span><button class="btn sm" id="mpReconnect">'+T('Open lobby','打开大厅')+'</button>';
   $('mpReconnect').onclick=()=>{notice.remove();menu()};
  }}finally{loungeBusy=false}
}
function roomCreateHelp(notice=''){const text=(typeof notice==='string'&&notice?notice+' ':'')+T('Create a separate room with a new code and choose its number of rounds. To continue an existing room, choose Return to room.','创建独立房间，获取新房间码并选择回合数。要继续现有房间，请选择返回房间。');return window.MindGardenInfo?.html(text,T('About creating a new room','新建房间说明'))||''}
function menu(notice=''){
 window.MindGardenMenuHistory?.enter('online-lobby',()=>menu());checkpoint();clearPairTimers();generation++;room=null;game=null;shownRound=0;last=null;screen='menu';directoryView='list';
 const prefill=(new URLSearchParams(location.search).get('room')||'').toUpperCase();
 overlay('<h2>'+T('Play Together','一起玩')+'</h2><section class="mp-shell">'+''+'<div id="mpDirectoryBody" class="mp-shell-body">'+(!session?'<div class="mp-entry"><h3>'+T('Play with family and friends','与家人朋友一起玩')+'</h3><label class="lab">'+T('Your display name','显示名称')+'<input id="mpName" maxlength="20" value="'+esc(name())+'"></label><p>'+T('Your name is visible in the lobby and rooms.','大厅及房间会显示你的名称。')+'</p><button class="btn main" id="mpLogin">'+T('Enter lobby','进入大厅')+'</button></div>':'')+'</div><p id="multiError" role="alert"></p><footer class="mp-shell-footer">'+(session?'<button class="btn mp-options" id="mpOptions" aria-label="'+T('Lobby options','大厅选项')+'">⚙</button><button class="btn" id="mpJoinOpen">'+T('Join by code','使用房间码加入')+'</button><div class="mp-create-action"><button class="btn main" id="mpCreateOpen">'+T('Create group','创建小组')+'</button>'+'</div>':'')+'<button id="mpClose" class="btn mp-close-fallback">'+T('Close','关闭')+'</button></footer></section>');
 wireTabs();if(session)directoryContent();
 if($('mpLogin'))$('mpLogin').onclick=()=>action(async()=>{if(await login())menu()});
 for(const [id,target] of [['mpJoinOpen','join'],['mpCreateOpen','create'],['mpOptions','options']])if($(id))$(id).onclick=()=>{directoryView=target;$('multiError').textContent='';directoryContent()};
 if(typeof notice==='string'&&notice){const status=document.createElement('p');status.setAttribute('role','status');status.textContent=notice;$('mpDirectoryBody')?.prepend(status);if(/closed|关闭/.test(notice)){const solo=document.createElement('button');solo.className='btn';solo.textContent=T('Play solo','单人游戏');solo.onclick=()=>{suspend();closeOv();window.MindGardenDashboard?.library()};status.after(solo)}}
 $('mpClose').onclick=exitScreen;if(session)lounge();
 if(/^[A-Z2-9]{6}$/.test(prefill))action(async()=>{if(!session&&!await login())return;await join(prefill)});
}

function resumeRoom(code){clearInvite();claim(code,generation)}
function claim(code,gen){$('onlineInvitation')?.remove();noticed.add(code);membershipRevision++;store(KEY,JSON.stringify({code}));if(current(gen))enter(code)}
async function join(code){const gen=generation;try{await api('join',{code})}catch(e){
 if(e.status===410){clearInvite();if(current(gen))menu(T('Room closed. Choose another room.','房间已关闭，请选择其他房间。'));return}
 if(e.status===409&&e.message.startsWith('Host reconnecting'))throw Error(T('Host reconnecting. Try another room.','房主重新连接中，请选择其他房间。'));throw e;
 }claim(code,gen);clearInvite()}

function enter(code){checkpoint();clearPairTimers();generation++;room={code};store(KEY,JSON.stringify(room));shownRound=0;game=null;screen='loading';last=null;overlay(base()+'<p>'+T('Connecting…','正在连接……')+'</p><p id="multiError" role="alert"></p><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button>');$('mpExit').onclick=exitScreen;poll()}
function shareControls(){return '<label class="lab">'+T('Invitation link','邀请链接')+'<input id="mpVisibleLink" readonly aria-label="'+T('Invitation link','邀请链接')+'" value="'+esc(invite())+'"></label><div class="row"><button class="btn" id="mpCopy">'+T('Copy link','复制链接')+'</button><button class="btn" id="mpShare">'+T('Share','分享')+'</button><a class="btn" id="mpWhatsApp" target="_blank" rel="noopener noreferrer" href="https://wa.me/?text='+encodeURIComponent(T('Join me in Mind Garden. Room: ','来心灵花园一起玩。房间：')+room.code+'\n'+invite())+'">'+T('Invite via WhatsApp','WhatsApp 邀请')+'</a><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button></div>'}
function wireShare(){
 $('mpExit').onclick=exitScreen;$('mpVisibleLink').onclick=e=>e.target.select();
 $('mpCopy').onclick=async()=>{const gen=generation;try{await navigator.clipboard.writeText(invite());if(current(gen)&&$('multiError'))$('multiError').textContent=T('Invitation copied.','邀请已复制。')}catch{if(current(gen)){$('mpVisibleLink')?.focus();$('mpVisibleLink')?.select()}}};
 $('mpShare').onclick=async()=>{const gen=generation;try{if(navigator.share){await navigator.share({title:T('Mind Garden invitation','心灵花园邀请'),url:invite()});return}}catch(e){if(e.name==='AbortError')return}if(current(gen)){$('mpVisibleLink')?.focus();$('mpVisibleLink')?.select()}};
}

const GAME_CATEGORIES={pairs6:'memory',pairs10:'memory',sums:'numbers',sums12:'numbers',patterns:'numbers',patterns12:'numbers',times8:'numbers',gaps8:'numbers',change8:'numbers',calendar8:'numbers',words8:'words'};
function chooseGame(selected,onUse,onBack){
 const groups=new Map();for(const m of MODES){const key=m[0].replace(/12$/,'').replace(/^pairs10$/,'pairs6');if(!groups.has(key))groups.set(key,[]);groups.get(key).push(m[0])}
 const previous=screen;screen='choose';
 overlay('<h2>'+T('Choose game','选择游戏')+'</h2><section class="mp-catalog"><button id="mpChooseBack" data-menu-back hidden>'+T('Back','返回')+'</button><label class="mp-search"><span class="sr-only">'+T('Search games','搜索游戏')+'</span><input id="mpGameSearch" placeholder="'+T('Search games…','搜索游戏…')+'" type="search"></label><label>'+T('Category','类别')+'<select id="mpGameCategory"><option value="">'+T('All games','所有游戏')+'</option><option value="memory">'+T('Memory','记忆')+'</option><option value="numbers">'+T('Numbers','数字')+'</option><option value="words">'+T('Words','词语')+'</option><option value="pictures">'+T('Pictures','图片')+'</option></select></label><div class="mp-game-cards">'+[...groups].map(([key,ids])=>'<button class="btn mp-game-card" data-group-game="'+key+'" aria-pressed="'+ids.includes(selected)+'">'+esc(activityName(ids[0]).split(' · ')[0])+'</button>').join('')+'</div><p id="mpNoGames" hidden>'+T('No games found','未找到游戏')+'</p><label>'+T('Game options','游戏选项')+'<select id="mpGameVariant"></select></label><p id="multiError" role="alert"></p><footer class="mp-shell-footer"><button class="btn main" id="mpUseGame">'+T('Use this game','使用此游戏')+'</button></footer></section>');
 let chosen=[...groups].find(([,ids])=>ids.includes(selected))?.[0]||'pairs6';
 const variants=()=>{$('mpGameVariant').innerHTML=groups.get(chosen).map(id=>'<option value="'+id+'"'+(id===selected?' selected':'')+'>'+esc(activityName(id))+'</option>').join('');document.querySelectorAll('[data-group-game]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.groupGame===chosen)))};variants();
 document.querySelectorAll('[data-group-game]').forEach(b=>b.onclick=()=>{chosen=b.dataset.groupGame;variants()});
 const filter=()=>{const term=$('mpGameSearch').value.trim().toLocaleLowerCase(),category=$('mpGameCategory').value;let count=0;document.querySelectorAll('[data-group-game]').forEach(b=>{b.hidden=!b.textContent.toLocaleLowerCase().includes(term)||!!category&&(GAME_CATEGORIES[b.dataset.groupGame]||'pictures')!==category;if(!b.hidden)count++});$('mpNoGames').hidden=!!count};$('mpGameSearch').oninput=filter;$('mpGameCategory').onchange=filter;
 $('mpChooseBack').onclick=()=>{screen=previous;onBack()};$('mpUseGame').onclick=async()=>{const button=$('mpUseGame');button.disabled=true;try{await onUse($('mpGameVariant').value)}catch(e){error(e)}finally{if(button.isConnected)button.disabled=false}};
}
function groupName(s){return esc(s.players?.find(p=>p.host)?.name||session?.name||'')+T('’s group','的小组')}

function roundChoices(){return '<label class="lab">'+T('Number of rounds in your session','本次游戏的回合数')+'<select id="mpRoundCount">'+Array.from({length:20},(_,i)=>i+1).map(n=>'<option value="'+n+'"'+(n===3?' selected':'')+'>'+n+'</option>').join('')+'</select></label>'}
function modeOptions(){return MODES.map(m=>'<option value="'+m[0]+'"'+(m[0]===window.MindGardenPreferredRoomMode?' selected':'')+'>'+esc(m[0]==='bingo9'?T('Picture bingo · host-paced','图片宾果 · 房主控制节奏'):save.lang==='zh'?(m[2]||tr(m[1])):m[1])+'</option>').join('')}
function people(s){return '<ul class="mp-roster">'+s.players.filter(p=>!p.departed).map(p=>'<li data-player-id="'+esc(p.id)+'"><strong>'+user(p.name)+(p.host?' · '+T('Host','房主'):p.id===s.me?' · '+T('You','你'):'')+'</strong><span>'+(s.serverTime-p.lastSeen>=45000?T('Reconnecting','重新连接中'):!s.started?(p.ready?T('Ready','已准备'):T('Not ready','未准备')):p.skipped?T('Not finished','未完成'):p.score!==null?T('Finished','已完成'):T('Playing','游戏中'))+'</span></li>').join('')+'</ul>'}
function renderLobby(s){
 screen='lobby';overlay('<h2>'+groupName(s)+'</h2><section class="mp-shell"><div id="mpDirectoryBody" class="mp-shell-body"><div class="mp-selected-game"><h3>'+esc(activityName(s.mode||'pairs6'))+'</h3>'+(s.host?'<button class="btn" id="mpChangeGame">'+T('Change game','更换游戏')+'</button>':'')+'</div><details class="mp-share-options"><summary>'+T('Invite','邀请')+'</summary><p>'+T('Group code: ','小组码：')+'<strong translate="no">'+esc(s.code)+'</strong></p>'+shareControls()+(s.host?'<label><input type="checkbox" id="mpHostChime" '+(hostChimeEnabled?'checked':'')+'> '+T('Join sound','加入提示音')+'</label>':'')+'</details><h3 id="mpPlayerCount"></h3><div id="mpRoster"></div><p id="mpHostStatus" role="status"></p></div><p id="multiError" role="alert"></p><footer class="mp-shell-footer">'+(s.host?'<button class="btn main" id="mpLaunch">'+T('Start game','开始游戏')+'</button>':'<button class="btn main" id="mpReady">'+T('Ready','准备好了')+'</button>')+'</footer></section>');
 wireShare();if($('mpHostChime'))$('mpHostChime').onchange=e=>{hostChimeEnabled=e.target.checked;store('mindGardenHostChime',JSON.stringify(hostChimeEnabled))};
 if(s.host){$('mpChangeGame').hidden=!s.groupFlow;$('mpChangeGame').onclick=()=>chooseGame(s.mode,mode=>action(async()=>{const state=await api('configure',{...room,round:s.round,revision:s.revision,mode});screen='loading';accept(state)}),()=>renderLobby(last));$('mpLaunch').onclick=()=>action(async()=>{const button=$('mpLaunch');button.disabled=true;button.textContent=T('Starting…','正在开始…');try{accept(await api('launch',{...room,round:s.round,revision:s.revision,mode:s.mode}))}finally{if(button.isConnected)updateLobby(last)}})}
 else if(!s.groupFlow){$('mpReady').disabled=true;$('mpReady').textContent=T('Waiting for host','等待房主')}else $('mpReady').onclick=()=>action(async()=>accept(await api('ready',{...room,revision:s.revision})));
 updateLobby(s);
}
function renderRoster(s){const node=$('mpRoster');if(!node)return;const markup=people(s);if(node.dataset.markup!==markup){node.innerHTML=markup;node.dataset.markup=markup}}
function updateLobby(s){
 const players=s.players.filter(p=>!p.departed),ready=players.filter(p=>p.ready&&s.serverTime-p.lastSeen<45000).length;
 if($('mpPlayerCount'))$('mpPlayerCount').textContent=T('Players · ','玩家 · ')+players.length+'/8';renderRoster(s);
 if($('mpHostStatus'))$('mpHostStatus').textContent=players.length<2?T('Waiting for a player','等待玩家加入'):T(ready+' of '+players.length+' ready',ready+'/'+players.length+'人已准备');
 if($('mpLaunch')){$('mpLaunch').disabled=players.length<2||s.groupFlow&&ready!==players.length;$('mpLaunch').textContent=T('Start game','开始游戏')}
 const mine=players.find(p=>p.id===s.me);if($('mpReady')){$('mpReady').disabled=!s.groupFlow||!!mine?.ready;$('mpReady').textContent=!s.groupFlow||mine?.ready?T('Waiting for host','等待房主'):T('Ready','准备好了')}
}

async function poll(){if(!room||last?.sessionFinished||screen==='closed'||pollRequest?.gen===generation||document.hidden||!current())return;const gen=generation,c=room.code,ticket={gen};pollRequest=ticket;try{const s=await api('status',{...room,seenRound:shownRound});if(!current(gen)||room?.code!==c)return;accept(s);if($('mpConnection'))$('mpConnection').textContent=''}catch(e){if(current(gen)){if([401,403,404,410].includes(e.status)){room=null;game=null;screen='closed';generation++;remove(KEY);remove(GAME);if(e.status===401){session=null;remove(SESSION);clearInterval(loungeTimer);$('onlineInvitation')?.remove()}overlay('<h2>'+T('Room unavailable','房间不可用')+'</h2><p>'+esc(save.lang==='zh'&&window.tr?tr(e.message):e.message)+'</p><button class="btn" id="mpBackLobby">'+T('Back to lobby','返回大厅')+'</button>');$('mpBackLobby').onclick=menu;return}if($('mpConnection'))$('mpConnection').textContent=T('Connection interrupted. Reconnecting; your room and score are kept.','连接中断，正在重连；房间和积分已保留。');error(e)}}finally{if(pollRequest===ticket)pollRequest=null}}
function endRound(){if(confirm(T('End this round? Unfinished players receive no points.','结束本轮？未完成的玩家本轮不得分。')))action(async()=>accept(await api('finishRound',{...room,round:last.round})))}
function rankAward(rank,eligible=true){return (eligible&&rank>=1&&rank<=3?'<span class="rank-award" aria-label="'+T(['Gold','Silver','Bronze'][rank-1],['金奖','银奖','铜奖'][rank-1])+'">'+trophy(rank-1)+'</span> ':'')+rank}
function liveScores(s){const players=[...s.players].sort((a,b)=>(b.total||0)-(a.total||0));return '<h3>'+T('Room rankings','房间排名')+'</h3><p>'+T('Saved points so far; this round updates when results are submitted.','已保存的积分；本轮成绩提交后更新。')+'</p><div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('Total','总积分')+'</th></tr></thead><tbody>'+players.map(p=>'<tr><td>'+rankAward(1+players.filter(q=>(q.total||0)>(p.total||0)).length,(p.total||0)>0)+'</td><td>'+user(p.name)+'</td><td>'+(p.total||0)+'</td></tr>').join('')+'</tbody></table></div>'}
function livePanel(){
 if(!last)return;const box=$('box');box.classList.add('mp-playing');
 for(const node of box.querySelectorAll('.mp-room-code,.mp-name-editor,.mp-room-actions'))node.remove();
 for(const id of ['mpVisibleLink','mpCopy','mpShare','mpWhatsApp','mpExit']){const node=$(id);if(node){if(id==='mpExit'){node.hidden=true;continue}if(id==='mpVisibleLink')node.closest('label')?.remove();else node.remove()}}
 const tools=box.querySelector('.v4-game-tools'),heading=box.querySelector('h2');if(tools&&heading)heading.after(tools);
 const progress=document.createElement('p');progress.className='mp-round-progress';progress.textContent=T('Round ','第 ')+last.round+T('','轮');box.append(progress);
 const begin=$('mpPairPreview');if(begin&&last.groupFlow){$('mpBeginPairs').hidden=true;begin.hidden=game?.phase!=='preview'}
}
let countdownTimer=null;
function sharedCountdown(s){
 screen='countdown';clearInterval(countdownTimer);const gen=generation,code=s.code,round=s.round,ends=performance.now()+Math.max(0,s.startsAt-s.serverTime);
 overlay(base(s)+'<section class="mp-countdown"><p>'+T('Starting together','一起开始')+'</p><strong id="mpCountdown" role="status"></strong></section><p id="multiError" role="alert"></p>');
 const tick=()=>{if(!current(gen)||room?.code!==code||last?.round!==round||screen!=='countdown'){clearInterval(countdownTimer);return}const left=Math.max(0,Math.ceil((ends-performance.now())/1000));$('mpCountdown').textContent=left;if(!left){clearInterval(countdownTimer);screen='loading';accept({...last,serverTime:s.startsAt})}};countdownTimer=setInterval(tick,100);tick();
}

function accept(s){if(!current()||!room||s.code!==room.code)return;last=s;if(s.host&&!s.closed)hosting.add(s.code);if(s.players&&$('mpLiveScores'))$('mpLiveScores').innerHTML=liveScores(s);if(s.players&&s.round)rememberResult(s);if(s.left||(s.closed&&!s.sessionFinished)){releaseRoom(s.code,s.left?T('You have left the room. Enter another room code below. Other players can continue.','您已退出房间，可在下方输入其他房间码。其他玩家可以继续。'):T('Room closed. Choose another room.','房间已关闭，请选择其他房间。'),generation,!!s.closed);return}if(s.players&&$('mpRoster'))renderRoster(s);
 if(!s.started){game=null;shownRound=0;if(screen==='choose')return;if(screen!=='lobby'||$('mpDirectoryBody')?.dataset.revision!==String(s.revision)){renderLobby(s);$('mpDirectoryBody').dataset.revision=String(s.revision)}else updateLobby(s);return}
 if(s.groupFlow&&s.startsAt>s.serverTime){if(screen!=='countdown')sharedCountdown(s);return}
 const mine=s.players.find(p=>p.id===s.me);if(s.finished){if(screen==='choose')return;if(screen!=='results'||shownRound!==s.round||!!$('mpSessionFinished')!==!!s.sessionFinished)results(s);return}
 if(s.mode==='bingo9'&&!mine?.skipped){shownRound=s.round;game=null;if(s.requiresBegin&&!s.allReady)drawBingoReady(s);else drawBingoOnline(s);return}
 if(mine?.score!==null||mine?.skipped){shownRound=s.round;if(screen!=='waiting')waitingForOther(s);else updateLobby(s);return}
 if(shownRound!==s.round||!game){shownRound=s.round;screen='game';const saved=read(roomGameKey(room.code))||read(GAME);if(saved?.code===room.code&&saved.round===s.round&&saved.mode===s.mode){game=saved;if(saved.done)game.done=new Set(saved.done);game.locked=false;if(game.open?.length===2)game.open=[];if(game.submitted){finish();return}game.mode.startsWith('pairs')?draw('Find the matching picture.'):game.phase==='ready'?drawQuizReady():drawQuiz('Choose the best answer. Take your time.')}else start(s)}
}
async function beginRound(button,ready){
 if(!button||button.disabled||!room)return;button.disabled=true;button.setAttribute('aria-busy','true');
 const gen=generation,c=room.code,r=last.round;
 try{const state=await api('begin',{code:c,round:r});if(!current(gen)||room?.code!==c||last?.round!==r)return;
  if(state.closed||state.finished||state.left||state.round!==r){accept(state);return}
  last=state;ready(state);
 }catch(e){if(current(gen))error(e)}finally{if(button.isConnected){button.disabled=button.id==='mpBeginPairs'&&game?.phase!=='ready';button.removeAttribute('aria-busy')}}
}
function drawQuizReady(){
 const g=game;screen='game';checkpoint();
 overlay(base(last)+'<section class="mp-ready"><h3>'+esc(activityName(g.mode))+'</h3><p>'+T('Press Begin when you are ready. Questions stay hidden and your timer has not started.','准备好后点击开始。题目暂不显示，计时尚未开始。')+'</p><button class="btn main" id="mpBeginGame">'+T('Begin','开始')+'</button></section><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button><p id="multiError" role="alert"></p>');
 $('mpExit').onclick=exitScreen;livePanel();
 $('mpBeginGame').onclick=()=>beginRound($('mpBeginGame'),state=>{if(game!==g)return;g.started=Date.now();g.phase='playing';checkpoint();drawQuiz(T('Choose the best answer. Take your time.','选择最佳答案，不用着急。'))});
}
function drawBingoReady(s){
 const mine=s.players.find(p=>p.id===s.me),ready=!!mine.beganAt;
 if(screen==='bingo-ready'&&!!$('mpBeginGame')===!ready){updateLobby(s);return}
 screen='bingo-ready';
 overlay(base(s)+'<section class="mp-ready"><h3>'+T('Picture bingo · ready check','图片宾果 · 准备确认')+'</h3><p>'+T('Waiting for everyone to begin','等待所有玩家开始')+'</p>'+(ready?'<p>'+T('You are ready. Waiting for the other players.','您已准备好，正在等待其他玩家。')+'</p>':'<button class="btn main" id="mpBeginGame">'+T('Begin','开始')+'</button>')+'</section>'+shareControls()+'<p id="multiError" role="alert"></p>');
 wireShare();livePanel();if($('mpBeginGame'))$('mpBeginGame').onclick=()=>beginRound($('mpBeginGame'),accept);
}
let bingoViewKey='';
function drawBingoOnline(s){
 const kit=window.MindGardenNewGames,mine=s.players.find(p=>p.id===s.me),called=s.bingo?.called||1,mask=mine?.bingoMask||0;
 const key=JSON.stringify([s.code,s.round,called,s.players.map(p=>[p.id,p.bingoMask,p.score,p.skipped,p.departed])]);
 if(screen==='bingo'&&key===bingoViewKey&&$('onlineBingo'))return;
 const focused=document.activeElement,focusID=focused?.id,focusTile=focused?.getAttribute('data-room-bingo');
 bingoViewKey=key;screen='bingo';const items=kit.bingoItems(s.seed,s.round),order=shuffle(Array.from({length:9},(_,i)=>i),randomizer(s.seed^parseInt(s.me.slice(0,8),16))),marked=new Set(order.filter(i=>mask&(1<<i))),current=items[called-1],members=s.players.filter(p=>!p.departed&&!p.skipped),ready=members.filter(p=>p.bingoMask&(1<<(called-1))).length;
 overlay(base(s)+'<section id="onlineBingo" class="new-game" translate="no"><h3>'+T('Picture bingo · play together','图片宾果 · 一起玩')+'</h3><p>'+T('Mark the pictures called. Complete all 9 together. No speed bonus.','标记已叫出的图片，共同完成9张。不计速度奖励。')+'</p><div class="bingo-call" tabindex="-1" id="roomBingoCall" role="status"><span class="bingo-picture" aria-hidden="true">'+gamePicture(current[0])+'</span><strong>'+T(current[1],current[2])+'</strong><small>'+T('Call ','已叫')+called+'/9 · '+ready+'/'+members.length+T(' players marked this picture','位玩家已标记此图')+'</small></div>'+kit.bingoBoard(items,order,called,marked,'data-room-bingo')+'<p>'+marked.size+'/9 '+T('marked on your card','张已标记')+'</p><details><summary>'+T('Pictures called so far','已经叫到的图片')+'</summary><div class="bingo-called">'+items.slice(0,called).map(p=>'<span>'+p[0]+' '+T(p[1],p[2])+'</span>').join('')+'</div></details><div class="new-actions">'+(s.host?'<button class="btn main" id="roomBingoNext"'+(called>=9?' disabled':'')+'>'+T('Call next picture','叫下一张图片')+'</button>':'<p>'+T('The host will call the next picture when everyone is ready.','大家准备好后，房主会叫下一张图片。')+'</p>')+'<button class="btn" id="roomBingoSpeak"'+(!window.speechSynthesis?' disabled':'')+'>'+T('Read picture name','朗读图片名称')+'</button></div>'+(mine.score!==null?'<p role="status">'+T('Your full card and result are saved. Waiting for the other players.','您的完整卡片与成绩已保存，正在等待其他玩家。')+'</p>':'')+'</section>'+shareControls()+'<p id="multiError" role="alert"></p>');
 wireShare();livePanel();document.querySelectorAll('[data-room-bingo]').forEach(b=>b.onclick=()=>{const index=+b.dataset.roomBingo;if(index>=called){$('multiError').textContent=T('That picture has not been called yet.','这张图片还没有叫到。');return}action(async()=>accept(await api('bingoMark',{...room,round:s.round,index})))});
 if($('roomBingoNext'))$('roomBingoNext').onclick=()=>action(async()=>accept(await api('bingoCall',{...room,round:s.round,called})));
 $('roomBingoSpeak').onclick=()=>kit.readPicture(current);
 if(focusID&&$(focusID)&&!$(focusID).disabled)$(focusID).focus({preventScroll:true});else if(focusTile!==null&&focusTile!==undefined){const b=document.querySelector('[data-room-bingo="'+focusTile+'"]');(b&&!b.disabled?b:$('roomBingoCall')).focus({preventScroll:true})}
}
setInterval(poll,1500);
 function randomizer(seed){let x=(seed>>>0)||1;return()=>{x+=0x6D2B79F5;let t=x;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296}}
 function shuffle(a,rand){for(let i=a.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
 function problems(mode,rand){let qs=[];const count=mode.endsWith('12')?12:8;const baseMode=mode.replace('12','');for(let i=0;i<count;i++){
  if(baseMode==='sums'){const a=3+Math.floor(rand()*35),b=2+Math.floor(rand()*15),sub=rand()>.5,ans=sub?a-b:a+b;qs.push({title:a+(sub?' − ':' + ')+b+' = ?',answer:String(ans),options:shuffle([ans,ans+1,ans-1,ans+3].map(String),rand)})}
  else if(baseMode==='patterns'){const start=1+Math.floor(rand()*20),step=2+Math.floor(rand()*7),ans=start+step*4;qs.push({title:[0,1,2,3].map(j=>start+j*step).join(', ')+', ?',answer:String(ans),options:shuffle([ans,ans-step,ans+step,ans+2*step].map(String),rand)})}
  else{const groups=[['🍎','🍌','🍓','🍇'],['🐶','🐱','🐢','🐦'],['🚲','🚂','🚗','🚌'],['🌻','🌷','🌹','🌼']];let k=Math.floor(rand()*4),other=(k+1+Math.floor(rand()*3))%4;let choices=shuffle(groups[k].slice(0,3).concat(groups[other][Math.floor(rand()*4)]),rand);qs.push({title:'Which picture belongs to a different group?',answer:groups[other].find(e=>choices.includes(e)),options:choices})}
 }return qs}
 function start(s){const began=s.players.find(p=>p.id===s.me)?.beganAt,started=began?Date.now()-(s.serverTime-began):null;const mode=s.mode||'pairs6',rand=randomizer((s.seed^Math.imul(s.round,0x9E3779B1))>>>0);
  if(mode.startsWith('pairs')){const count=mode==='pairs10'?10:6,pool=['🌻','🍎','🐦','🐶','🌈','🚲','🌷','🍓','🐢','🎹','🏡','🦋','🍊','☕','🌹','🚂','🎨','🪁','🥕','🐞'];const values=shuffle(pool.slice(),rand).slice(0,count);game={mode,round:s.round,deck:shuffle(values.concat(values),rand),open:[],done:new Set(),moves:0,locked:false,started:null,submitted:false,saved:false,phase:began?'preview':'ready'};if(began)game.previewEndsAt=started+GAME_SETTLE_MS+pairSeconds(game)*1000;draw()}
  else {game={mode,round:s.round,questions:EXTRA?.questions(mode,s.seed,s.round)?.map(q=>({...q,title:T(...q.prompt),labels:q.labels?Object.fromEntries(Object.entries(q.labels).map(([k,v])=>[k,T(...v)])):null}))||problems(mode,rand),answers:[],index:0,moves:0,correct:0,started,phase:began?'playing':'ready',submitted:false,saved:false};if(began)drawQuiz('Choose the best answer. Take your time.');else drawQuizReady()}
  checkpoint();
 }
 function progress(s){return '<p class="tip">Round '+s.round+' · '+(MODES.find(m=>m[0]===s.mode)?.[1]||s.mode)+'</p>'}
 function pairSeconds(g){return g.mode==='pairs10'?8:5}
 function pairMessages(g){return {
  ready:T('Press Begin to see every picture for '+pairSeconds(g)+' seconds.','点击开始，所有图片将显示 '+pairSeconds(g)+' 秒。'),
  preview:T('Remember the pictures. They close automatically.','记住图片的位置。倒计时结束后会自动翻回。'),
  playing:T('Find the matching picture.','找出相同的图片。'),
  match:T('Lovely match!','配对成功！'),
  miss:T('Not a match. Try another pair.','这两张不同，再试一对。'),
  saved:T('All pairs found. Saving your result…','已找到全部配对，正在保存成绩……')
 }}
 function settlePairPreview(g){
  if(g.phase!=='preview'||Date.now()<g.previewEndsAt)return false;
  g.phase='playing';g.started=g.previewEndsAt;delete g.previewEndsAt;clearInterval(previewTimer);previewTimer=null;return true;
 }
 function normalizePairs(g){
  // Preserve ongoing V4.0.1 rounds; an unused unlimited preview becomes ready.
  if(!['ready','preview','playing'].includes(g.phase))g.phase=g.preview?'ready':'playing';
  delete g.preview;
  if(g.phase==='preview'&&!Number.isFinite(g.previewEndsAt))g.phase='ready';
  settlePairPreview(g);
 }
 function runPairClock(g){
  clearInterval(previewTimer);previewTimer=null;if(g.phase!=='preview')return;
  const tick=()=>{
   if(game!==g||screen!=='game'||!current()||!document.querySelector('.mp-board')){clearInterval(previewTimer);previewTimer=null;return}
   const ended=settlePairPreview(g);
   if(ended){updatePairs(pairMessages(g).playing);checkpoint();const board=document.querySelector('.mp-board');if(document.activeElement===board)board.querySelector('[data-tile="0"]')?.focus({preventScroll:true})}
   else updatePairControls(g);
  };
  previewTimer=setInterval(tick,100);tick();
 }
 function mountPairArtwork(board){
  for(const image of board.querySelectorAll('.game-illustration')){
   image.loading='eager';const picture=image.parentElement;
   const ready=()=>{const show=()=>{if(image.isConnected&&image.naturalWidth>0)picture.classList.add('mp-art-ready')};if(image.decode)image.decode().then(show,show);else show()};
   image.addEventListener('load',ready,{once:true});
   image.addEventListener('error',()=>picture.classList.remove('has-art','mp-art-ready'),{once:true});
   if(image.complete&&image.naturalWidth>0)ready();
  }
 }
 // Mount the card board once. Updating only its state preserves touch targets,
 // keyboard focus, scroll position and already-loaded artwork between taps.
 function draw(msg){
  screen='game';const g=game;if(!g)return;clearPairTimers();normalizePairs(g);checkpoint();const messages=pairMessages(g);
  const count=g.deck.length/2,cards=g.deck.map((x,i)=>'<button type="button" class="mp-tile" data-tile="'+i+'"><span class="mp-card-back" aria-hidden="true">❀</span><span class="mp-card-face" aria-hidden="true">'+gamePicture(x)+'</span></button>').join('');
  overlay(base({round:g.round})+'<div class="mp-pair-status"><p id="mpPairMessage" role="status"></p>'+Object.values(messages).map(text=>'<p class="mp-message-reserve" aria-hidden="true">'+esc(text)+'</p>').join('')+'</div><p id="mpPairCount"></p><div id="mpPairPreview" class="mp-pair-controls"><button type="button" class="btn main" id="mpBeginPairs">'+T('Begin','开始')+'</button><p id="mpPairPhase" aria-live="off"></p><p class="mp-phase-reserve" aria-hidden="true">'+T('Remember: 8 seconds','记忆时间：8 秒')+'</p></div><div class="mp-board" tabindex="-1" role="group" aria-label="'+T('Matching cards','配对卡片')+'" style="grid-template-columns:repeat('+(count===10?5:4)+',minmax(0,1fr))">'+cards+'</div><div class="row"><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button></div><p id="multiError" role="alert"></p>');
  $('mpExit').onclick=exitScreen;
  document.querySelector('.mp-board').onclick=e=>{const b=e.target.closest('[data-tile]');if(b)flip(Number(b.dataset.tile))};
  $('mpBeginPairs').onclick=()=>beginRound($('mpBeginPairs'),state=>{
   if(game!==g||g.phase!=='ready')return;
   // Grant the full study period after the Begin response arrives.
   g.phase='preview';g.previewEndsAt=Date.now()+GAME_SETTLE_MS+pairSeconds(g)*1000;g.started=null;
   settlePairPreview(g);checkpoint();updatePairs(messages[g.phase]);document.querySelector('.mp-board').focus({preventScroll:true});runPairClock(g);
  });
  mountPairArtwork(document.querySelector('.mp-board'));
  updatePairs(messages[g.phase]||msg||messages.playing);livePanel();runPairClock(g);
 }
 function updatePairs(msg){
  const g=game,board=document.querySelector('.mp-board');if(!g||!board)return;
  for(const button of board.querySelectorAll('[data-tile]')){
   const i=Number(button.dataset.tile),matched=g.done.has(i),face=g.phase==='preview'||matched||g.open.includes(i);
   if(button.classList.contains('revealed')!==face)button.classList.toggle('revealed',face);
   if(button.classList.contains('matched')!==matched)button.classList.toggle('matched',matched);
   const disabled=g.phase!=='playing'||matched||g.submitted;if(button.disabled!==disabled)button.disabled=disabled;
   const label=face?g.deck[i]:T('Hidden picture ','未翻开的图片 ')+(i+1);
   if(button.getAttribute('aria-label')!==label)button.setAttribute('aria-label',label);
   if(button.getAttribute('aria-pressed')!==String(face))button.setAttribute('aria-pressed',String(face));
  }
  const message=$('mpPairMessage');if(message&&message.textContent!==msg)message.textContent=msg;
  const count=$('mpPairCount'),label=T(g.done.size/2+' of '+g.deck.length/2+' pairs · '+g.moves+' turns','已找到 '+g.done.size/2+'/'+g.deck.length/2+' 对 · '+g.moves+' 次');if(count&&count.textContent!==label)count.textContent=label;
  updatePairControls(g);
 }
 function updatePairControls(g){
  const controls=$('mpPairPreview');if(!controls)return;
  if(controls.dataset.phase!==g.phase)controls.dataset.phase=g.phase;
  const begin=$('mpBeginPairs'),disabled=g.phase!=='ready';if(begin.disabled!==disabled)begin.disabled=disabled;
  const phase=$('mpPairPhase'),text=g.phase==='preview'?T('Remember: '+Math.max(0,Math.ceil((g.previewEndsAt-Date.now())/1000))+' seconds','记忆时间：'+Math.max(0,Math.ceil((g.previewEndsAt-Date.now())/1000))+' 秒'):T('Matching','配对中');if(phase.textContent!==text)phase.textContent=text;
 }
 function flip(i){
  const g=game;if(!g)return;if(settlePairPreview(g))checkpoint();if(g.phase!=='playing'||g.submitted||!Number.isInteger(i)||i<0||i>=g.deck.length||g.done.has(i))return;
  // A new card tap can dismiss an unmatched pair immediately. It is never lost
  // behind a fixed lockout or delayed until another tap.
  if(g.locked){clearTimeout(mismatchTimer);g.open=[];g.locked=false}
  if(g.open.includes(i))return;
  g.open.push(i);
  if(g.open.length<2){updatePairs(T('Find the matching picture.','找出相同的图片。'));queueCheckpoint();return}
  g.moves++;const[a,b]=g.open;
  if(g.deck[a]===g.deck[b]){
   g.done.add(a);g.done.add(b);g.open=[];
   if(g.done.size===g.deck.length){g.submitted=true;updatePairs(T('All pairs found. Saving your result…','已找到全部配对，正在保存成绩……'));finish();return}
   updatePairs(T('Lovely match!','配对成功！'));queueCheckpoint();
  }else{
   g.locked=true;updatePairs(pairMessages(g).miss);queueCheckpoint();
   mismatchTimer=setTimeout(()=>{if(game===g&&g.locked){g.open=[];g.locked=false;checkpoint();if(current())updatePairs(pairMessages(g).playing)}},950);
  }
 }
 function drawQuiz(msg){screen='game';checkpoint();const g=game;if(!g)return;if(g.feedback)return drawQuizFeedback();const q=g.questions[g.index];overlay(base({round:g.round})+'<p>'+esc(msg)+'</p><p>Question '+(g.index+1)+' of '+g.questions.length+'</p><div class="seqline">'+gamePrompt(q.title)+'</div><div class="gridm" style="--c:2">'+q.options.map((o,i)=>'<button class="big '+(isGamePicture(q.labels?.[o]||o)?'picture-answer':'txt')+'" data-answer="'+i+'">'+(isGamePicture(q.labels?.[o]||o)?gamePicture(q.labels?.[o]||o):esc(q.labels?.[o]||o))+'</button>').join('')+'</div><div class="row"><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button></div><p id="multiError" role="alert"></p>');$('mpExit').onclick=exitScreen;document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(+b.dataset.answer));livePanel()}
 function drawQuizFeedback(){const g=game;if(!g?.feedback)return;const f=g.feedback;overlay(base({round:g.round})+'<section role="status"><h3>'+T(f.good?'Correct!':'Let’s review',f.good?'正确！':'一起回顾')+'</h3><p><strong>'+T('Correct answer: ','正确答案：')+'</strong>'+esc(f.expected)+'</p><p><strong>'+T('Your answer: ','您的答案：')+'</strong>'+esc(f.chosen)+'</p></section><p>'+T('Continue when you are ready.','准备好后再继续。')+'</p><div class="row"><button class="btn main" id="mpQuizContinue">'+T(g.index+1===g.questions.length?'See results':'Next question',g.index+1===g.questions.length?'查看结果':'下一题')+'</button></div><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button><p id="multiError" role="alert"></p>');$('mpExit').onclick=exitScreen;$('mpQuizContinue').onclick=()=>{if(game!==g||!g.feedback)return;delete g.feedback;g.index++;checkpoint();if(g.index===g.questions.length){g.submitted=true;finish()}else drawQuiz(T('Choose the best answer. Take your time.','选择最佳答案，不用着急。'))};livePanel()}
 function answer(i){const g=game;if(!g||g.submitted||g.feedback||g.phase==='ready')return;const q=g.questions[g.index];if(!Number.isInteger(i)||i<0||i>=q.options.length)return;const good=q.options[i]===q.answer;(g.answers||(g.answers=[])).push(q.options[i]);g.moves+=good?1:2;if(good)g.correct++;g.feedback={good,expected:q.labels?.[q.answer]||q.answer,chosen:q.labels?.[q.options[i]]||q.options[i]};if(good)chime();else beep(300,.22,'sine');checkpoint();drawQuizFeedback()}

async function finish(){const g=game;if(!g||!room)return;checkpoint();const gen=generation,c=room.code;screen='saving';overlay(base({round:g.round})+'<p>'+T('Saving your result…','正在保存成绩……')+'</p><p id="multiError" role="alert"></p><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button>');$('mpExit').onclick=exitScreen;
 try{const s=await api('submit',{code:c,round:g.round,moves:g.moves,answers:g.answers,elapsed:Math.max(1,Math.floor((Date.now()-g.started)/1000))});if(!current(gen)||room?.code!==c)return;g.saved=true;checkpoint();accept(s)}catch(e){if(!current(gen))return;error(e);const b=document.createElement('button');b.className='btn';b.textContent=T('Retry saving','重新保存');b.onclick=()=>finish();$('multiError').after(b)}}
function waitingForOther(s){screen='waiting';overlay('<h2>'+T('Your round is complete','本轮已完成')+'</h2><p>'+T('Score saved. Waiting for players.','积分已保存，正在等待其他玩家。')+'</p><div id="mpRoster"></div>'+(s.host?'<details><summary>'+T('Options','选项')+'</summary><button class="btn" id="mpEndRound">'+T('End round','结束本轮')+'</button></details>':'')+'<p id="multiError" role="alert"></p>');renderRoster(s);if($('mpEndRound'))$('mpEndRound').onclick=endRound}
function rememberResult(s){const mine=s.players?.find(p=>p.id===s.me);if(!mine||(!mine.skipped&&(mine.score===null||mine.score===undefined))||!s.round)return;const p=me();p.multiplayerHistory=p.multiplayerHistory||[];const key=s.code+':'+s.seed+':'+s.round;if(!p.multiplayerHistory.some(r=>r.key===key)){p.multiplayerHistory.push({key,date:new Date(s.serverTime||Date.now()).toISOString(),activity:s.mode,round:s.round,score:mine.score,total:mine.total,skipped:!!mine.skipped});persist()}}
function results(s){
 rememberResult(s);screen='results';game=null;shownRound=s.round;remove(GAME);remove(roomGameKey(s.code));
 const players=[...s.players].sort((a,b)=>b.total-a.total||a.name.localeCompare(b.name));
 overlay('<h2>'+T('Round complete','本轮完成')+'</h2><div class="mp-results"><ul class="mp-score-list">'+players.map(p=>'<li><strong>'+user(p.name)+'</strong><span>'+p.total+'</span></li>').join('')+'</ul><p>'+T('Scores saved','积分已保存')+'</p><footer class="mp-result-actions">'+(s.sessionFinished?'<button class="btn main" id="mpFinalLobby">'+T('Done','完成')+'</button>':s.host?'<button class="btn main" id="mpChooseNext">'+T('Choose game','选择游戏')+'</button><div class="row"><button class="btn" id="mpReplay">'+T('Replay','重玩')+'</button><button class="btn" id="mpCloseRoom">'+T('Finish','结束')+'</button></div>':'<p>'+T('Waiting for host','等待房主')+'</p>')+'</footer></div><p id="multiError" role="alert"></p>');
 if(s.sessionFinished){membershipRevision++;if(read(KEY)?.code===s.code)remove(KEY);clearInvite();hosting.delete(s.code);$('mpFinalLobby').onclick=()=>{suspend();menu()};return}
 if(s.host){const configure=mode=>action(async()=>{const state=await api(s.groupFlow?'configure':'advance',{...room,round:s.round,revision:s.revision,mode});screen='loading';accept(state)});$('mpChooseNext').onclick=()=>chooseGame(s.mode,configure,()=>results(last));$('mpReplay').onclick=()=>configure(s.mode);$('mpCloseRoom').onclick=()=>action(async()=>accept(await api('finishSession',{...room,round:s.round})))}
}

function activityName(id){const m=MODES.find(v=>v[0]===id);return m?(save.lang==='zh'?(m[2]||window.tr?.(m[1])||m[1]):m[1]):T('Earlier activity','较早的活动')}
function historyFrame(html){overlay('<section class="online-history"><h2>'+T('Saved online rankings','已保存的在线排名')+'</h2><div class="history-body">'+html+'</div><footer class="history-actions"><button class="btn" id="historyLobby">'+T('Online lobby','在线大厅')+'</button><button class="btn" id="historyClose">'+T('Close','关闭')+'</button></footer><p id="multiError" role="alert"></p></section>');$('historyLobby').onclick=menu;$('historyClose').onclick=exitScreen}
async function openHistory(offset=0){
 window.MindGardenMenuHistory?.enter('online-history',()=>openHistory(offset));
 checkpoint();clearPairTimers();generation++;const gen=generation;room=null;game=null;last=null;screen='history';
 if(!session){historyFrame('<p>'+T('Enter the online lobby to view rooms linked to this browser’s online identity.','进入在线大厅，查看与此浏览器在线身份关联的房间。')+'</p>');return}
 historyFrame('<p>'+T('Loading your rooms…','正在加载您的房间……')+'</p>');
 const data=await api('history',{offset});if(!current(gen))return;
 historyFrame((data.rooms.length?'<div class="history-room-field"><div class="history-label"><label for="historyRoomSelect">'+T('Room','房间')+'</label>'+(window.MindGardenInfo?.html(T('Only participants can view rankings. Clearing browser data removes access.','仅参与者可查看排名。清除浏览器数据会失去访问权限。'),T('About saved rankings','已保存排名说明'))||'')+'</div><select id="historyRoomSelect">'+data.rooms.map(r=>'<option value="'+esc(r.code)+'">'+esc(r.code)+' · '+r.completed+T(' rounds','轮')+'</option>').join('')+'</select></div><button class="btn main" id="historyRoomOpen">'+T('View results','查看成绩')+'</button>':'<div class="history-label"><p>'+T('No completed games','无已完成游戏')+'</p>'+(window.MindGardenInfo?.html(T('Only participants can view rankings. Clearing browser data removes access.','仅参与者可查看排名。清除浏览器数据会失去访问权限。'),T('About saved rankings','已保存排名说明'))||'')+'</div>')+'<div class="row">'+(offset?'<button class="btn" id="historyPrevious">'+T('Previous rooms','上一页房间')+'</button>':'')+(data.nextOffset!==null?'<button class="btn" id="historyNext">'+T('More rooms','更多房间')+'</button>':'')+'</div>');
 if($('historyRoomOpen'))$('historyRoomOpen').onclick=()=>action(()=>openRoomHistory($('historyRoomSelect').value,0,offset));
 if($('historyPrevious'))$('historyPrevious').onclick=()=>action(()=>openHistory(Math.max(0,offset-20)));if($('historyNext'))$('historyNext').onclick=()=>action(()=>openHistory(data.nextOffset));
}
async function openRoomHistory(code,offset=0,roomOffset=0){
 window.MindGardenMenuHistory?.enter('online-room-history:'+code,()=>openRoomHistory(code,offset,roomOffset));const gen=generation;historyFrame('<p>'+T('Loading saved results…','正在加载已保存成绩……')+'</p>');const data=await api('rankings',{code,offset});if(!current(gen))return;
 const table=rows=>'<div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('Points','积分')+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
 let playerPage=0;
 historyFrame('<h3>'+T('Room ','房间 ')+esc(code)+'</h3><label>'+T('Round','回合')+'<select id="historyRoundSelect"><option value="total">'+T('Total','总分')+'</option>'+data.rounds.map((r,i)=>'<option value="'+i+'">'+r.round+' · '+esc(activityName(r.mode))+'</option>').join('')+'</select></label><div id="historyScores"></div><div id="historyPlayerPages" class="compact-pager"></div><div class="row">'+(offset?'<button class="btn" id="roundsPrevious">'+T('Newer rounds','较新回合')+'</button>':'')+(data.nextOffset!==null?'<button class="btn" id="roundsNext">'+T('Earlier rounds','较早回合')+'</button>':'')+'<button class="btn" id="historyRooms">'+T('Rooms','房间')+'</button></div>');
 function drawScores(){const total=$('historyRoundSelect').value==='total',rows=total?data.players:data.rounds[+$('historyRoundSelect').value].results,size=rankingPageSize(),pages=Math.max(1,Math.ceil(rows.length/size));playerPage=Math.min(playerPage,pages-1);$('historyScores').innerHTML=table(rows.slice(playerPage*size,(playerPage+1)*size).map(p=>{const rank=total?p.rank:p.score===null?null:1+rows.filter(x=>x.score!==null&&x.score>p.score).length;return '<tr><td>'+(rank||'—')+'</td><td>'+user(p.name)+'</td><td>'+(total?p.total:p.score===null?T('Not finished','未完成'):p.score)+'</td></tr>'}).join(''));$('historyPlayerPages').innerHTML=pages>1?'<button class="btn" id="historyPlayersPrev" '+(!playerPage?'disabled':'')+'>‹</button><span>'+(playerPage+1)+' / '+pages+'</span><button class="btn" id="historyPlayersNext" '+(playerPage+1>=pages?'disabled':'')+'>›</button>':'';if($('historyPlayersPrev'))$('historyPlayersPrev').onclick=()=>{playerPage--;drawScores()};if($('historyPlayersNext'))$('historyPlayersNext').onclick=()=>{playerPage++;drawScores()};}
 $('historyRoundSelect').onchange=()=>{playerPage=0;drawScores()};drawScores();
 $('historyRooms').onclick=()=>action(()=>openHistory(roomOffset));if($('roundsPrevious'))$('roundsPrevious').onclick=()=>action(()=>openRoomHistory(code,Math.max(0,offset-20),roomOffset));if($('roundsNext'))$('roundsNext').onclick=()=>action(()=>openRoomHistory(code,data.nextOffset,roomOffset));
}
window.MindGardenOnlineHistory=()=>action(()=>openHistory());
const localLeaderboard=window.lbView;window.lbView=function(...args){localLeaderboard(...args);const tabs=document.createElement('div');tabs.className='ranking-tabs';tabs.innerHTML='<button class="btn" type="button" aria-pressed="true">'+(window.MindGardenAccount?.connected?T('Account players','账户玩家'):T('On this device','此设备'))+'</button><button class="btn" type="button" id="leaderboardOnline">'+T('Online room rankings','在线房间排名')+'</button>';$('box').querySelector('h2')?.after(tabs);$('leaderboardOnline').onclick=()=>action(()=>openHistory())};

window.addEventListener('resize',()=>{if(screen==='menu')renderDirectory();else if(screen==='lobby'&&last)renderRoster(last)});
window.addEventListener('pagehide',checkpoint);
function refreshOnline(){if(current()&&game?.phase==='preview')runPairClock(game);poll();lounge()}
window.addEventListener('focus',refreshOnline);document.addEventListener('visibilitychange',()=>{if(document.hidden)checkpoint();else refreshOnline()});
$('bOnline').onclick=menu;
if(session)startLounge();
if(/^[A-Z2-9]{6}$/i.test(new URLSearchParams(location.search).get('room')||''))setTimeout(menu,350);
})();
