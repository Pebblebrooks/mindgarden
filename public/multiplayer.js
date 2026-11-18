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
const SERVER_WORDS={'Choose 1 to 20 rounds.':['Choose 1 to 20 rounds.','请选择 1 到 20 轮。'],'That is fewer rounds than you have already played.':['That is fewer rounds than you have already played.','这比已经玩过的轮数还少。'],'This room has launched. Join another room.':['This group has already started a game. Ask the host to tell you when the next one begins.','这个小组已经开始游戏。请主持人在下一局开始时通知你。'],'This room already has eight players.':['This group already has eight players.','这个小组已有八位玩家。'],'Enter a valid six-character room code.':['Enter the 6-character group code.','请输入6位小组码。'],'Join this room first.':['Join this group first.','请先加入这个小组。'],'Only room participants can view its saved rankings.':['Only people in this group can see its rankings.','只有小组成员可以查看排名。'],'Room not found.':['No group has that code. Check the code and try again.','没有这个小组码的小组。请检查后重试。'],'You have left this room.':['You have left this group.','你已退出这个小组。'],'Only the host can do this.':['Only the host can do this.','只有主持人可以这样做。']};
function error(e){const el=$('multiError');if(!el)return;const played=/^All (\d+) rounds are played/.exec(e.message||'');if(played){el.textContent=T(e.message,'已经玩完全部 '+played[1]+' 轮。请增加轮数或结束小组。');return}const words=SERVER_WORDS[e.message];el.textContent=words?T(words[0],words[1]):save.lang==='zh'&&window.tr?tr(e.message):e.message}
function name(){let n=(me().name||'').replace(/[^\p{L}\p{N} ._'-]/gu,'').slice(0,20);if(!n||/^(Player\s*\d*|玩家\s*\d*)$/i.test(n)){let tag=read('mindGardenGuestTag');if(!tag){tag=Array.from(crypto.getRandomValues(new Uint8Array(3)),x=>x.toString(16).padStart(2,'0')).join('').toUpperCase();store('mindGardenGuestTag',JSON.stringify(tag))}n='Guest '+String(parseInt(tag,16)%100).padStart(2,'0')}return n}
function invite(c=room?.code){const u=new URL(location.pathname,location.origin);u.hostname=u.hostname.replace(/^[a-f0-9]{8,}\.(?=[^.]+\.pages\.dev$)/i,'');u.searchParams.set('room',c);return u.href}
const ICONS={search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',plus:'<path d="M12 5v14M5 12h14"/>',key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/>',chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.8A8 8 0 1 1 21 12z"/>',copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',share:'<path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/>',exit:'<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 16l-4-4 4-4M6 12h10"/>',grid:'<rect x="4" y="4" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1"/>',replay:'<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4h4"/>',trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.4 3.4-5.5 6.5-5.5s5.7 2.1 6.5 5.5"/><circle cx="17" cy="9" r="2.8"/><path d="M16.5 14.6c2.6.3 4.3 2.2 5 5.4"/>'};
function svg(name,size=22){return '<svg class="mp-icon" aria-hidden="true" width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+ICONS[name]+'</svg>'}
function chip(text,kind){return '<span class="mp-chip mp-chip-'+kind+'">'+text+'</span>'}
function joinNames(list){const n=list.map(p=>p.name);if(save.lang==='zh')return n.length>1?n.slice(0,-1).join('、')+'和'+n[n.length-1]:n[0]||'';return n.length>2?n.slice(0,-1).join(', ')+' and '+n[n.length-1]:n.join(' and ')}
function gameKind(mode){return (mode||'pairs6').startsWith('pairs')?'pairs':mode==='bingo9'?'bingo':'quiz'}
function studySeconds(mode){return mode==='pairs10'?8:5}
function howToPlay(mode){const k=gameKind(mode),n=studySeconds(mode);return k==='pairs'?T('You will see all the cards for '+n+' seconds. Then find the matching pairs. Fewer turns and less time score more.','开始时会显示所有卡片 '+n+' 秒，然后找出相同的配对。翻牌次数越少、用时越短，得分越高。'):k==='bingo'?T('The host calls pictures one at a time. Mark each one on your card. Everyone who completes the card gets the same score.','主持人逐一叫出图片，请在卡片上标记。完成卡片的人得分相同。'):T('Answer each question at your own pace. Fewer mistakes and less time score more.','按自己的节奏回答每道题。错误越少、用时越短，得分越高。')}
function firstStep(mode){const k=gameKind(mode),n=studySeconds(mode);return k==='pairs'?[T('Remember the cards.','记住卡片。'),T('They turn over after '+n+' seconds.',n+' 秒后会翻回去。')]:k==='bingo'?[T('Find the first picture.','找到第一张图片。'),T('The host calls each picture.','主持人逐一叫出图片。')]:[T('The first question is coming.','第一道题即将出现。'),T('Take your time with each one.','每道题都可以慢慢做。')]}
function fairNote(mode){return gameKind(mode)==='pairs'?T('Same cards, same start, for everyone.','每个人的卡片和开始时间都相同。'):T('Same questions, same start, for everyone.','每个人的题目和开始时间都相同。')}
function playerCount(n){return n===1?T('1 player','1位玩家'):n+T(' players','位玩家')}
function user(n){return '<span translate="no">'+esc(n)+'</span>'}
function roomControls(s){const state=s?.host!==undefined?s:last;if(!state||state.closed||state.left)return '';return '<div class="mp-room-actions row">'+(state.host?(state.started&&!state.finished?'<button class="btn" id="mpCancelGame">'+T('Cancel game and close group','取消游戏并关闭小组')+'</button>':''):'<button class="btn" id="mpLeaveRoom">'+T('Leave group','退出小组')+'</button>')+'</div>'}
function base(s){const state={...last,...s};return '<h2>'+((state?.started&&!state.finished)?esc(activityName(state.mode).split(' · ')[0]):state?.players?groupName(state):T('Play Together','一起玩'))+'</h2><p id="mpConnection" class="tip" role="status"></p>'}
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
 d.innerHTML='<h2>'+T(codes.length>1?'Close your groups?':'Close your group?',codes.length>1?'关闭你的所有小组？':'关闭小组？')+'</h2><div class="row"><button class="btn main" id="mpKeepHosting">'+T('Keep hosting','继续主持')+'</button><button class="btn" id="mpStopHosting">'+T(codes.length>1?'Close groups':'Close group',codes.length>1?'关闭所有小组':'关闭小组')+'</button></div><p role="alert"></p>';
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
 const rooms=state.rooms||[],active=rooms.filter(r=>r.hosting);
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
 const names=joinNames((r.members||[]).filter(p=>p.id!==session?.id));
 const text=pending.length?esc(names)+T(' joined your group.','加入了你的小组。'):'';
 if(!pending.length){strip.remove();return}
 const inRoom=room?.code===r.code&&current();
 const markup=svg('users',20)+'<span role="status">'+text+(inRoom?'':' · <b translate="no">'+esc(r.code)+'</b>')+'</span>'+(inRoom?'':'<button class="btn sm" data-host-open="'+r.code+'">'+T('View group','查看小组')+'</button>');
 if(strip.dataset.markup!==markup){strip.innerHTML=markup;strip.dataset.markup=markup;const open=strip.querySelector('[data-host-open]');if(open)open.onclick=()=>{menu();resumeRoom(r.code)}}
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
function cancelRoom(){if(confirm(T('Close the group for everyone?','为所有人关闭小组？')))action(async()=>{const c=room?.code,gen=generation;if(!c)return;await api('close',{code:c});releaseRoom(c,T('The group is closed. You can start or join another group.','小组已关闭。你可以开始或加入其他小组。'),gen,true)})}
$('box').addEventListener('click',e=>{if(e.target.closest('#mpCancelGame'))cancelRoom();if(e.target.closest('#mpLeaveRoom')&&confirm(T('Leave the group? Your unfinished round will stop. The others can keep playing.','退出小组？你未完成的回合会停止，其他人可以继续。')))action(async()=>{const c=room?.code,gen=generation;if(!c)return;await api('leave',{code:c});releaseRoom(c,T('You left the group. The others can keep playing.','你已退出小组，其他人可以继续。'),gen)})});
$('box').addEventListener('click',e=>{
 if(e.target.closest('#mpLeaveGroup')){exitScreen();return}
 const remove=e.target.closest('[data-remove-player]');if(!remove||!room||!last?.host)return;
 const target=last.players.find(p=>p.id===remove.dataset.removePlayer);if(!target||!confirm(T('Remove '+target.name+' from the group?','将 '+target.name+' 移出小组？')))return;
 action(async()=>{remove.disabled=true;accept(await api('remove',{...room,player:target.id}))});
});
$('box').addEventListener('click',e=>{const button=e.target.closest('#mpSaveName');if(!button)return;const editor=button.closest('details'),input=$('mpRenameName'),profile=me();action(async()=>{button.disabled=true;try{const n=await window.MindGardenIdentity.rename(input.value);if(me()!==profile)return;window.MindGardenDashboard?.refresh();document.querySelectorAll('.mp-self-name').forEach(el=>el.textContent=n);if(editor.isConnected){editor.open=false;editor.querySelector('summary')?.focus()}if($('mpConnection'))$('mpConnection').textContent=T('Name saved.','名称已保存。')}finally{button.disabled=false}})});
let pendingCreate=null,inviteOpen=null;
let directoryView='list',loungeState={rooms:[],lobby:[],myRooms:[]};
function rankingPageSize(){return 10}
let menuNotice='';
function pathButtons(){const openCreate=()=>{menuNotice='';directoryView='create';$('multiError').textContent='';directoryContent()};$('mpCreateOpen')&&($('mpCreateOpen').onclick=()=>session?openCreate():action(async()=>{if(await login())openCreate()}));$('mpJoinOpen')&&($('mpJoinOpen').onclick=()=>{menuNotice='';directoryView='join';$('multiError').textContent='';directoryContent()});$('mpPlaySolo')&&($('mpPlaySolo').onclick=()=>{suspend();closeOv();window.MindGardenDashboard?.library()})}
// D-03 screens 1-2: Play Together itself is where people start or join; there is no separate lobby.
function renderDirectory(){
 const body=$('mpDirectoryBody');if(!body||screen!=='menu'||directoryView!=='list')return;
 const rooms=session?(loungeState.rooms||[]):[],has=rooms.length>0,open=session?(loungeState.openGroups||[]):[],state=String(has)+'|'+menuNotice+'|'+open.map(g=>g.code+g.players).join(',');
 if(body.dataset.home!==state){
  body.dataset.home=state;
  const notice=menuNotice?'<p class="mp-notice" role="status">'+esc(menuNotice)+'</p>'+(/closed|关闭/.test(menuNotice)?'<button class="btn" id="mpPlaySolo">'+T('Play solo','单人游戏')+'</button>':''):'';
  body.innerHTML=notice+(has?'<h3>'+T('Your groups','你的小组')+'</h3><div id="mpOpenRooms" class="mp-directory-list"></div><hr class="mp-divider"><h3>'+T('Start or join another group','开始或加入其他小组')+'</h3><div class="mp-two"><button class="btn" id="mpCreateOpen">'+svg('plus')+'<span>'+T('Start a group','开始小组')+'</span></button><button class="btn" id="mpJoinOpen">'+svg('key')+'<span>'+T('Join with a code','用小组码加入')+'</span></button></div><p class="mp-privacy">'+T('Only people you invite can see or join your group.','只有你邀请的人才能看到或加入你的小组。')+'</p>'
   +openGroupsSection(open):'<p class="mp-intro">'+T('Play the same game at the same time with family and friends, each on your own phone or computer.','与家人朋友同时玩同一个游戏，每人使用自己的手机或电脑。')+'</p><div class="mp-paths"><section class="mp-card mp-path"><h3>'+svg('plus',26)+'<span>'+T('Start a group','开始小组')+'</span></h3><p>'+T('You choose the game, then invite people with a code or a WhatsApp message.','你来选择游戏，然后用小组码或WhatsApp消息邀请别人。')+'</p><button class="btn main" id="mpCreateOpen">'+T('Start a group','开始小组')+'</button></section><section class="mp-card mp-path"><h3>'+svg('key',26)+'<span>'+T('Join a group','加入小组')+'</span></h3><p>'+T('Someone sent you a code or a link? Enter the code here.','有人发给你小组码或链接？在这里输入小组码。')+'</p><button class="btn" id="mpJoinOpen">'+T('Join with a code','用小组码加入')+'</button></section></div><section class="mp-card mp-howto mp-plain"><h3>'+T('How it works','怎么玩')+'</h3><ol><li>'+T('Start a group, or join one with its code.','开始一个小组，或用小组码加入。')+'</li><li>'+T('Everyone taps Ready. The host taps Start.','每个人点击“准备好了”，主持人点击“开始”。')+'</li><li>'+T('You all play together, then see the scores.','大家一起玩，然后查看成绩。')+'</li></ol></section>'+openGroupsSection(open));
  pathButtons();wireOpenGroups();
 }
 const list=$('mpOpenRooms');if(!list)return;
 const focused=document.activeElement,focus=list.contains(focused)?focused.dataset.joinRoom:null;
 const markup=rooms.map(r=>{
  const state=r.status==='playing'?T('Game in progress','游戏进行中'):T('Waiting to start','等待开始'),away=!r.hosting&&r.hostAvailable===false?' · '+T('Host away','主持人暂离'):'';
  return '<article class="mp-card mp-directory-room"><div class="mp-room-summary"><h4>'+user(r.host)+T('’s group','的小组')+'</h4><p>'+T('Host: ','主持人：')+user(r.host)+' · '+playerCount(r.players)+'</p><p>'+esc(activityName(r.mode||'pairs6').split(' · ')[0])+' · '+state+away+'</p></div>'+chip(r.hosting?T('You are the host','你是主持人'):T('You are in this group','你在这个小组中'),'ready')+'<button class="btn main" data-join-room="'+r.code+'" data-room-member="true">'+T('Open group','打开小组')+'</button></article>';
 }).join('');
 if(list.dataset.markup!==markup){list.innerHTML=markup;list.dataset.markup=markup}
 $('mpDirectoryBody').setAttribute('aria-label',T('Play Together','一起玩'));
 list.querySelectorAll('[data-join-room]').forEach(b=>b.onclick=()=>action(()=>resumeRoom(b.dataset.joinRoom)));
 if(focus)list.querySelector('[data-join-room="'+focus+'"]')?.focus({preventScroll:true});
}
function modeKey(mode){return (mode||'pairs6').replace(/12$/,'').replace(/^pairs10$/,'pairs6')}
// v6.3 (D-04): open groups are listed quietly here, never pushed to people.
function openGroupsSection(open){
 if(!open.length)return '';
 return '<section class="mp-open-groups" aria-labelledby="mpOpenTitle"><h3 id="mpOpenTitle">'+svg('globe')+'<span>'+T('Open groups','公开小组')+'</span></h3><p class="mp-privacy">'+T('Groups anyone can join. They start soon.','任何人都可以加入的小组，即将开始。')+'</p><div class="mp-directory-list">'+open.map(g=>'<article class="mp-card mp-open-room"><div class="mp-open-head"><span class="mp-open-art" aria-hidden="true">'+gameArt(modeKey(g.mode))+'</span><div><h4>'+user(g.host)+T('’s group','的小组')+'</h4><p>'+esc(activityName(g.mode).split(' · ')[0])+' · '+T(g.players+' of 8 players',g.players+'/8 位玩家')+'</p></div></div><button class="btn" data-open-join="'+esc(g.code)+'" data-open-host="'+esc(g.host)+'">'+T('Join','加入')+'</button></article>').join('')+'</div></section>';
}
function wireOpenGroups(){document.querySelectorAll('[data-open-join]').forEach(b=>b.onclick=()=>{const who=session?.name||name();if(!confirm(T('Join '+b.dataset.openHost+'’s group? Other players will see your name, '+who+'.','加入'+b.dataset.openHost+'的小组？其他玩家会看到你的名称：'+who+'。')))return;action(async()=>{if(!session&&!await login())return;await join(b.dataset.openJoin)})})}
let newVisibility='private',newRounds=null;
// v6.3.1 (D-11): planned rounds. null means keep playing until the host ends the group.
const ROUND_CHOICES=[1,3,5,null];
function roundsName(n){return n==null?T('Keep playing','一直玩'):n===1?T('1 round','1 轮'):T(n+' rounds',n+' 轮')}
function roundLabel(s,r=s.round){return s.plannedRounds?T('Round '+r+' of '+s.plannedRounds,'第 '+r+' 轮，共 '+s.plannedRounds+' 轮'):T('Round '+r,'第 '+r+' 轮')}
function roundChips(value,attr,minRound=0){const list=ROUND_CHOICES.includes(value)?ROUND_CHOICES:[...ROUND_CHOICES.slice(0,-1),value,null].sort((a,b)=>a==null?1:b==null?-1:a-b);return list.map(n=>'<button type="button" class="mp-round-chip" role="radio" '+attr+'="'+(n??'keep')+'" aria-checked="'+(n===value)+'"'+(n!=null&&n<=minRound?' disabled':'')+'>'+roundsName(n)+'</button>').join('')}
function chipValue(b,attr){const v=b.getAttribute(attr);return v==='keep'?null:Number(v)}
function whoCanJoin(mode,back){
 screen='visibility';
 const choice=(value,ic,title,desc)=>'<button type="button" class="mp-choice" role="radio" aria-checked="'+(newVisibility===value)+'" data-visibility="'+value+'"><span class="mp-radio" aria-hidden="true"></span><span class="mp-choice-text"><strong>'+svg(ic)+'<span>'+title+'</span></strong><span>'+desc+'</span></span></button>';
 overlay('<h2>'+T('Start a group','开始小组')+'</h2><section class="mp-shell mp-room"><button id="mpVisibilityBack" data-menu-back hidden>'+T('Back','返回')+'</button><div class="mp-shell-body"><section class="mp-card mp-game-summary"><div class="mp-open-head"><span class="mp-open-art" aria-hidden="true">'+gameArt(modeKey(mode))+'</span><div><small>'+T('Game','游戏')+'</small><strong>'+esc(activityName(mode))+'</strong></div></div></section><h3 id="mpWhoTitle">'+T('Who can join?','谁可以加入？')+'</h3><div class="mp-choices" role="radiogroup" aria-labelledby="mpWhoTitle">'+choice('private','lock',T('Only people I invite','只有我邀请的人'),T('They join with your code or link. Nobody else can see the group.','他们用你的小组码或链接加入，其他人看不到这个小组。'))+choice('public','globe',T('Anyone using Mind Garden','任何心灵花园用户'),T('The group is listed under Open groups until the game starts. Only your name and the game are shown.','游戏开始前，小组会显示在“公开小组”中，只显示你的名称和游戏。'))+'</div><p class="mp-privacy">'+T('You can change this later in Invite.','之后可以在“邀请”中更改。')+'</p><h3 id="mpRoundsTitle">'+T('How many rounds?','玩几轮？')+'</h3><div class="mp-round-chips" role="radiogroup" aria-labelledby="mpRoundsTitle">'+roundChips(newRounds,'data-new-rounds')+'</div><p class="mp-privacy">'+T('Keep playing means you decide when to stop. You can change this in the group.','“一直玩”表示由你决定何时结束。之后可以在小组中更改。')+'</p></div><p id="multiError" role="alert"></p><footer class="mp-shell-footer mp-stack"><button class="btn main" id="mpCreateGroup">'+T('Create group','创建小组')+'</button></footer></section>');
 document.querySelectorAll('[data-visibility]').forEach(b=>b.onclick=()=>{newVisibility=b.dataset.visibility;document.querySelectorAll('[data-visibility]').forEach(x=>x.setAttribute('aria-checked',String(x===b)))});
 document.querySelectorAll('[data-new-rounds]').forEach(b=>b.onclick=()=>{newRounds=chipValue(b,'data-new-rounds');document.querySelectorAll('[data-new-rounds]').forEach(x=>x.setAttribute('aria-checked',String(x===b)))});
 $('mpVisibilityBack').onclick=()=>back(mode);
 $('mpCreateGroup').onclick=()=>action(async()=>{const gen=generation,button=$('mpCreateGroup');button.disabled=true;try{const r=await api('create',{groupFlow:true,mode,visibility:newVisibility,plannedRounds:newRounds,requestId:pendingCreate||(pendingCreate=crypto.randomUUID())});pendingCreate=null;newVisibility='private';newRounds=null;hosting.add(r.code);inviteOpen=null;claim(r.code,gen)}finally{if(button.isConnected)button.disabled=false}});
}
function identityFooter(){return '<div class="mp-identity"><span>'+T('Playing as ','当前玩家：')+'<b class="mp-self-name" translate="no">'+esc(session?.name||name())+'</b></span><button class="btn sm" id="mpChangeName">'+svg('edit',16)+'<span>'+T('Change name','更改名称')+'</span></button>'+(session?'<button class="btn sm mp-options" id="mpOptions" aria-label="'+T('More options','更多选项')+'">⚙</button>':'')+'</div>'}
function directoryContent(){
 const body=$('mpDirectoryBody'),foot=$('mpShellFooter');if(!body)return;
 body.setAttribute('role','region');
 if(directoryView==='list'){body.dataset.home='';body.removeAttribute('aria-labelledby');renderDirectory();foot.innerHTML=identityFooter();$('mpChangeName').onclick=()=>{menuNotice='';directoryView='name';directoryContent()};if($('mpOptions'))$('mpOptions').onclick=()=>{menuNotice='';directoryView='options';directoryContent()};return}
 if(directoryView==='create'){const pick=preferred=>chooseGame(preferred,mode=>whoCanJoin(mode,pick),()=>{directoryView='list';menu()});pick(window.MindGardenPreferredRoomMode||'pairs6');return}
 const title=directoryView==='join'?T('Join a group','加入小组'):directoryView==='name'?T('Change name','更改名称'):T('More options','更多选项');
 body.setAttribute('aria-label',title);delete body.dataset.home;
 const heading='<div class="mp-form-heading"><button class="btn" id="mpDirectoryBack" data-menu-back hidden>‹ '+T('Back','返回')+'</button><h3>'+title+'</h3></div>';
 if(directoryView==='join'){
  body.innerHTML=heading+'<div class="mp-form mp-join"><label class="mp-code-label" for="mpCode">'+T('Group code','小组码')+'</label><input id="mpCode" class="mp-code-input" maxlength="6" autocapitalize="characters" spellcheck="false" autocomplete="off" placeholder="K7P2QM" aria-describedby="mpCodeHint"><p id="mpCodeHint">'+T('The code has 6 letters and numbers, like K7P2QM. Ask the host to read it out, or tap the link they sent you. The link joins automatically.','小组码由6个字母和数字组成，例如 K7P2QM。可请主持人读出，或点击对方发来的链接，链接会自动加入。')+'</p><div class="mp-card mp-note">'+svg('info')+'<p>'+T('You will join as ','你将以 ')+'<b translate="no">'+esc(session?.name||name())+'</b>'+T('. Other players see this name.',' 的名称加入，其他玩家会看到这个名称。')+'</p></div></div>';
  foot.innerHTML='<button class="btn main" id="mpJoin" disabled>'+T('Join group','加入小组')+'</button>';
  const input=$('mpCode'),valid=()=>/^[A-Z2-9]{6}$/.test(input.value);
  input.oninput=()=>{const v=input.value.toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,6);if(v!==input.value)input.value=v;$('mpJoin').disabled=!valid()};
  $('mpJoin').onclick=()=>action(async()=>{const c=input.value.trim().toUpperCase();if(!/^[A-Z2-9]{6}$/.test(c))throw Error(T('Enter the 6-character group code.','请输入6位小组码。'));if(!session&&!await login())return;await join(c)});
  input.onkeydown=e=>{if(e.key==='Enter')$('mpJoin').click()};input.focus();
 }else if(directoryView==='name'){
  body.innerHTML=heading+'<div class="mp-form">'+nameControls()+'</div>';body.querySelector('.mp-name-editor').open=true;foot.innerHTML='';$('mpRenameName').focus();
 }else{
  body.innerHTML=heading+'<div class="mp-form">'+nameControls()+'<button class="btn" id="mpHistory">'+T('Saved rankings','已保存排名')+'</button><button class="btn" id="mpLogout">'+T('Go offline','离线')+'</button></div>';foot.innerHTML='';
 }
 $('mpDirectoryBack').onclick=()=>{directoryView='list';directoryContent();$('mpCreateOpen')?.focus()};
 if($('mpHistory'))$('mpHistory').onclick=()=>action(()=>openHistory());
 if($('mpLogout'))$('mpLogout').onclick=()=>action(async()=>{const gen=generation;await api('logout');store(SESSION,JSON.stringify({...session,offline:true}));session=null;clearInterval(loungeTimer);noticed.clear();$('onlineInvitation')?.remove();if(current(gen))menu()});
}

function startLounge(){if(loungeTimer)clearInterval(loungeTimer);loungeTimer=setInterval(lounge,2500);lounge()}
async function lounge(){
 if(!session||loungeBusy||document.hidden)return;loungeBusy=true;const identity=session,revision=membershipRevision;
 try{const s=await api('lounge');if(session!==identity||revision!==membershipRevision)return;loungeRooms=s.rooms;loungeState=s;hostNotices(s);
  if(screen==='menu'&&current()){if(!s.myRooms?.length&&!s.activeRoom)remove(KEY);renderDirectory()}
  // v6.1 invite-only: the lounge lists only your own groups; nothing is broadcast to other players.
  $('onlineInvitation')?.dataset.codes&&$('onlineInvitation').remove();
 }catch(e){if(session!==identity)return;if($('mpOnlineCount'))$('mpOnlineCount').textContent=T('Reconnecting…','正在重新连接……');if(e.status===401){session=null;remove(SESSION);clearInterval(loungeTimer);noticed.clear();
   let notice=$('onlineInvitation');if(!notice){notice=document.createElement('aside');notice.id='onlineInvitation';notice.setAttribute('role','status');document.body.appendChild(notice)}
   notice.innerHTML='<span>'+T('Reconnect to Play Together to see your groups.','重新连接“一起玩”以查看你的小组。')+'</span><button class="btn sm" id="mpReconnect">'+T('Open Play Together','打开一起玩')+'</button>';
   $('mpReconnect').onclick=()=>{notice.remove();menu()};
  }}finally{loungeBusy=false}
}
function menu(notice=''){
 window.MindGardenMenuHistory?.enter('online-lobby',()=>menu());checkpoint();clearPairTimers();generation++;room=null;game=null;shownRound=0;last=null;screen='menu';directoryView='list';menuNotice=typeof notice==='string'?notice:'';
 const prefill=(new URLSearchParams(location.search).get('room')||'').toUpperCase();
 overlay('<h2>'+T('Play Together','一起玩')+'</h2><section class="mp-shell mp-home"><div id="mpDirectoryBody" class="mp-shell-body"></div><p id="multiError" role="alert"></p><footer class="mp-shell-footer" id="mpShellFooter"></footer><button id="mpClose" class="btn mp-close-fallback">'+T('Close','关闭')+'</button></section>');
 directoryContent();
 $('mpClose').onclick=exitScreen;if(session)lounge();
 else if(!read(SESSION)?.offline&&!/^[A-Z2-9]{6}$/.test(prefill)){const gen=generation;login().then(ok=>{if(ok&&current(gen)&&screen==='menu'&&directoryView==='list')directoryContent()}).catch(()=>{})}
 if(/^[A-Z2-9]{6}$/.test(prefill))action(async()=>{if(!session&&!await login())return;await join(prefill)});
}

function resumeRoom(code){clearInvite();claim(code,generation)}
function claim(code,gen){$('onlineInvitation')?.remove();noticed.add(code);membershipRevision++;store(KEY,JSON.stringify({code}));if(current(gen))enter(code)}
async function join(code){const gen=generation;try{await api('join',{code})}catch(e){
 if(e.status===410){clearInvite();if(current(gen))menu(T('This group has closed.','这个小组已关闭。'));return}
 if(e.status===409&&e.message.startsWith('Host reconnecting'))throw Error(T('The host is reconnecting. Please try again shortly.','主持人正在重新连接，请稍后再试。'));throw e;
 }claim(code,gen);clearInvite()}

function enter(code){inviteOpen=null;checkpoint();clearPairTimers();generation++;room={code};store(KEY,JSON.stringify(room));shownRound=0;game=null;screen='loading';last=null;overlay(base()+'<p>'+T('Connecting…','正在连接……')+'</p><p id="multiError" role="alert"></p><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button>');$('mpExit').onclick=exitScreen;poll()}
function shareControls(){return '<label class="lab">'+T('Invitation link','邀请链接')+'<input id="mpVisibleLink" readonly aria-label="'+T('Invitation link','邀请链接')+'" value="'+esc(invite())+'"></label><div class="row"><button class="btn" id="mpCopy">'+T('Copy link','复制链接')+'</button><button class="btn" id="mpShare">'+T('Share','分享')+'</button><a class="btn" id="mpWhatsApp" target="_blank" rel="noopener noreferrer" href="https://wa.me/?text='+encodeURIComponent(T('Join my Mind Garden group. Code: ','来加入我的心灵花园小组。小组码：')+room.code+'\n'+invite())+'">'+T('Invite via WhatsApp','WhatsApp 邀请')+'</a><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button></div>'}
function wireShare(){
 if($('mpExit'))$('mpExit').onclick=exitScreen;if($('mpVisibleLink'))$('mpVisibleLink').onclick=e=>e.target.select();
 const reveal=()=>{const l=$('mpVisibleLink');if(!l)return;l.closest('details')?.setAttribute('open','');l.focus();l.select()};
 if($('mpCopy'))$('mpCopy').onclick=async()=>{const gen=generation;try{await navigator.clipboard.writeText(invite());if(current(gen)&&$('multiError'))$('multiError').textContent=T('Invitation link copied.','邀请链接已复制。')}catch{if(current(gen))reveal()}};
 if($('mpShare'))$('mpShare').onclick=async()=>{const gen=generation;try{if(navigator.share){await navigator.share({title:T('Mind Garden invitation','心灵花园邀请'),text:T('Join my Mind Garden group. Code: ','来加入我的心灵花园小组。小组码：')+room.code,url:invite()});return}}catch(e){if(e.name==='AbortError')return}if(current(gen))reveal()};
}

const GAME_CATEGORIES={pairs6:'memory',pairs10:'memory',sums:'numbers',sums12:'numbers',patterns:'numbers',patterns12:'numbers',times8:'numbers',gaps8:'numbers',change8:'numbers',calendar8:'numbers',words8:'words'};
// v6.3: group games reuse the solo All Games pictures (VIS-06) so the same game looks the same everywhere.
const SOLO_GAME={pairs6:'pairs',sums:'sum',patterns:'num',odd:'odd',bingo9:'bingo',times8:'tbl',gaps8:'add',change8:'money',calendar8:'calendar',shapes8:'shp',picture8:'pic',words8:'wm',groups8:'same'};
function gameArt(key){const id=SOLO_GAME[key],icon=id==='pairs'?'🌺':(typeof MG!=='undefined'?MG[id]?.ic:null);return icon&&window.gamePicture?gamePicture(icon):svg('grid',40)}
function gameAbout(key){const id=SOLO_GAME[key],m=typeof MG!=='undefined'?MG[id]:null,desc=id==='pairs'?T('Find the matching picture cards.','找出相同的图片卡。'):m?.d?(save.lang==='zh'&&window.tr?tr(m.d):m.d):'';return (desc?desc+' ':'')+howToPlay(key)}
function variantLabel(id){const parts=activityName(id).split(' · ');return parts[1]||parts[0]}
function chooseGame(selected,onUse,onBack){
 const groups=new Map();for(const m of MODES){const key=m[0].replace(/12$/,'').replace(/^pairs10$/,'pairs6');if(!groups.has(key))groups.set(key,[]);groups.get(key).push(m[0])}
 const previous=screen;screen='choose';
 const tiles=[...groups].map(([key,ids])=>{const name=esc(activityName(ids[0]).split(' · ')[0]);return '<div class="mp-tile-wrap" data-group-game="'+key+'" data-name="'+name.toLocaleLowerCase()+'" role="listitem"><button type="button" class="mp-game-tile" data-tile-key="'+key+'" aria-pressed="'+ids.includes(selected)+'"><span class="mp-tile-check" aria-hidden="true">'+svg('check',18)+'</span><span class="mp-tile-art" aria-hidden="true">'+gameArt(key)+'</span><span class="mp-tile-name">'+name+'</span></button><span class="mp-tile-info">'+(window.MindGardenInfo?.html(gameAbout(key),T('About ','关于')+name)||'')+'</span></div>'}).join('');
 overlay('<h2>'+T('Choose game','选择游戏')+'</h2><section class="mp-catalog mp-shell"><button id="mpChooseBack" data-menu-back hidden>'+T('Back','返回')+'</button><div class="mp-catalog-tools"><label class="mp-search"><span class="sr-only">'+T('Search games','搜索游戏')+'</span><input id="mpGameSearch" placeholder="'+T('Search games','搜索游戏')+'" type="search" autocomplete="off"><span class="mp-search-icon" aria-hidden="true">'+svg('search')+'</span></label><label class="mp-category"><span class="sr-only">'+T('Category','类别')+'</span><select id="mpGameCategory"><option value="">'+T('All games','所有游戏')+'</option><option value="memory">'+T('Memory','记忆')+'</option><option value="numbers">'+T('Numbers','数字')+'</option><option value="words">'+T('Words','词语')+'</option><option value="pictures">'+T('Pictures','图片')+'</option></select></label></div><div class="mp-catalog-body" id="mpCatalogBody"><div class="mp-game-cards" role="list">'+tiles+'</div><div id="mpNoGames" class="mp-no-games" hidden><p class="keep-centre"><strong id="mpNoGamesText"></strong></p><p class="keep-centre">'+T('Try another word, or show all games.','试试其他词语，或显示所有游戏。')+'</p><button type="button" class="btn" id="mpClearSearch">'+svg('x',18)+'<span>'+T('Clear search','清除搜索')+'</span></button></div></div><div class="mp-variant"><p id="mpVariantLabel" class="keep-centre"></p><div class="mp-two" id="mpVariantButtons" role="radiogroup"></div><select id="mpGameVariant" hidden aria-hidden="true" tabindex="-1"></select></div><p id="multiError" role="alert"></p><footer class="mp-shell-footer mp-stack"><button class="btn main" id="mpUseGame">'+T('Use this game','使用此游戏')+'</button></footer></section>');
 let chosen=[...groups].find(([,ids])=>ids.includes(selected))?.[0]||'pairs6';
 const variants=()=>{const ids=groups.get(chosen),current=ids.includes($('mpGameVariant').value)?$('mpGameVariant').value:ids.includes(selected)?selected:ids[0];
  $('mpGameVariant').innerHTML=ids.map(id=>'<option value="'+id+'"'+(id===current?' selected':'')+'>'+esc(activityName(id))+'</option>').join('');
  $('mpVariantLabel').textContent=activityName(ids[0]).split(' · ')[0]+(ids.length>1?'':' · '+variantLabel(ids[0]));
  $('mpVariantButtons').innerHTML=ids.length>1?ids.map(id=>'<button type="button" class="btn'+(id===current?' main':'')+'" role="radio" aria-checked="'+(id===current)+'" data-variant="'+id+'">'+(id===current?svg('check',18):'')+'<span>'+esc(variantLabel(id))+'</span></button>').join(''):'';
  $('mpVariantButtons').hidden=ids.length<2;
  document.querySelectorAll('[data-tile-key]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tileKey===chosen)));
  document.querySelectorAll('[data-variant]').forEach(b=>b.onclick=()=>{$('mpGameVariant').value=b.dataset.variant;variants()});
 };variants();
 document.querySelectorAll('[data-tile-key]').forEach(b=>b.onclick=()=>{chosen=b.dataset.tileKey;$('mpGameVariant').value='';variants()});
 const filter=()=>{const term=$('mpGameSearch').value.trim().toLocaleLowerCase(),category=$('mpGameCategory').value;let count=0;document.querySelectorAll('[data-group-game]').forEach(b=>{b.hidden=!b.dataset.name.includes(term)||!!category&&(GAME_CATEGORIES[b.dataset.groupGame]||'pictures')!==category;if(!b.hidden)count++});$('mpNoGames').hidden=!!count;$('mpNoGamesText').textContent=term?T('No games match “'+$('mpGameSearch').value.trim()+'”.','没有符合“'+$('mpGameSearch').value.trim()+'”的游戏。'):T('No games in this category.','此类别暂无游戏。')};
 $('mpGameSearch').oninput=filter;$('mpGameCategory').onchange=filter;$('mpClearSearch').onclick=()=>{$('mpGameSearch').value='';$('mpGameCategory').value='';filter();$('mpGameSearch').focus()};
 $('mpChooseBack').onclick=()=>{screen=previous;onBack()};$('mpUseGame').onclick=async()=>{const button=$('mpUseGame');button.disabled=true;try{await onUse($('mpGameVariant').value)}catch(e){error(e)}finally{if(button.isConnected)button.disabled=false}};
}
function groupName(s){return esc(s.players?.find(p=>p.host)?.name||session?.name||'')+T('’s group','的小组')}

const isAway=(s,p)=>s.serverTime-p.lastSeen>=45000;
function people(s){return '<ul class="mp-roster">'+s.players.filter(p=>!p.departed).map(p=>{
 const status=isAway(s,p)?chip(T('Away','暂离'),'away'):!s.started?(p.ready?chip(svg('check',16)+T('Ready','已准备'),'ready'):chip(T('Not ready yet','尚未准备'),'wait')):p.skipped?chip(T('Sitting out','本轮未参加'),'away'):p.score!==null?chip(svg('check',16)+T('Finished','已完成'),'ready'):chip(T('Playing','游戏中'),'wait');
 return '<li data-player-id="'+esc(p.id)+'"><span class="mp-player-name"><strong>'+user(p.name)+'</strong>'+(p.host?'<small> · '+T('Host','主持人')+'</small>':'')+(p.id===s.me?'<small> · '+T('You','你')+'</small>':'')+'</span>'+status+(s.host&&!s.started&&!p.host?'<button class="btn sm mp-remove" data-remove-player="'+esc(p.id)+'" aria-label="'+T('Remove ','移除 ')+esc(p.name)+'">'+T('Remove','移除')+'</button>':'')+'</li>'}).join('')+'</ul>'}
function hostName(s){return s.players?.find(p=>p.host)?.name||''}
// GROUP-04: a missing host is always explained, with the time left and a way to leave.
function awayNote(s){const el=$('mpAwayNote');if(!el)return;const text=!s.host&&s.hostAvailable===false&&!s.closed&&s.expiresAt?T(hostName(s)+' is away. If they do not come back, the group closes in about '+Math.max(1,Math.ceil((s.expiresAt-s.serverTime)/60000))+' min. Your scores are kept.',hostName(s)+'暂时离开。如未返回，小组约 '+Math.max(1,Math.ceil((s.expiresAt-s.serverTime)/60000))+' 分钟后关闭，积分会保留。'):'';if(el.textContent!==text)el.textContent=text;el.hidden=!text}
function leaveButton(s){return s.host?'':'<button class="btn mp-ghost" id="mpLeaveGroup">'+svg('exit')+'<span>'+T('Leave group','退出小组')+'</span></button>'}
function inviteCard(s){return '<section id="mpInvite" class="mp-card mp-invite"><h3>'+T('Invite people','邀请别人')+'</h3><p>'+T('Share this code. People type it in Play Together, or tap the link.','分享这个小组码。对方可在“一起玩”中输入，或点击链接加入。')+'</p><p class="mp-big-code" translate="no" aria-label="'+T('Group code ','小组码 ')+esc(s.code.split('').join(' '))+'">'+esc(s.code)+'</p><a class="btn main" id="mpWhatsApp" target="_blank" rel="noopener noreferrer" href="https://wa.me/?text='+encodeURIComponent(T('Join my Mind Garden group. Code: ','来加入我的心灵花园小组。小组码：')+s.code+'\n'+invite(s.code))+'">'+svg('chat')+'<span>'+T('Send on WhatsApp','用WhatsApp发送')+'</span></a><div class="mp-two"><button class="btn" id="mpCopy">'+svg('copy')+'<span>'+T('Copy link','复制链接')+'</span></button><button class="btn" id="mpShare">'+svg('share')+'<span>'+T('Share','分享')+'</span></button></div><details class="mp-link-details"><summary>'+T('Show the link','显示链接')+'</summary><label class="lab">'+T('Invitation link','邀请链接')+'<input id="mpVisibleLink" readonly value="'+esc(invite(s.code))+'"></label></details><div class="mp-visibility"><p id="mpVisibilityText"></p><button type="button" class="btn sm" id="mpVisibilityToggle"></button></div><label class="mp-check"><input type="checkbox" id="mpHostChime" '+(hostChimeEnabled?'checked':'')+'> '+T('Play a sound when someone joins or a round starts','有人加入或回合开始时播放提示音')+'</label></section>'}
function renderLobby(s){
 screen='lobby';const game=esc(activityName(s.mode||'pairs6'));
 const top=s.host?'<section class="mp-card mp-game-summary"><div><small>'+T('Game','游戏')+'</small><strong>'+game+'</strong><small id="mpCodeLine">'+T('Code ','小组码 ')+'<b translate="no">'+esc(s.code)+'</b></small></div><div class="mp-summary-actions"><button class="btn sm" id="mpChangeGame">'+T('Change','更换')+'</button><button class="btn sm" id="mpInviteMore" aria-controls="mpInvite">'+T('Invite more','邀请更多人')+'</button></div></section><section class="mp-card mp-rounds"><h3 id="mpRoundsHead">'+T('Rounds','轮数')+'</h3><div id="mpRounds" class="mp-round-chips" role="radiogroup" aria-labelledby="mpRoundsHead"></div></section>'+inviteCard(s)
  :'<section class="mp-card mp-game-summary"><div><small>'+T('You are in','你在')+'</small><strong>'+groupName(s)+'</strong><small>'+T('Game: ','游戏：')+game+'</small><small id="mpGuestRounds"></small></div></section><section class="mp-card mp-howto mp-plain"><h3>'+T('How to play','怎么玩')+'</h3><p>'+howToPlay(s.mode)+'</p></section>';
 overlay('<h2>'+groupName(s)+'</h2><section class="mp-shell mp-room"><div id="mpDirectoryBody" class="mp-shell-body">'+top+'<h3 id="mpPlayerCount"></h3><div id="mpRoster"></div></div><div class="mp-lobby-status"><p id="mpHostStatus" role="status"></p><p id="mpAwayNote" class="mp-away-note" role="status" hidden></p></div><p id="multiError" role="alert"></p><footer class="mp-shell-footer mp-stack">'+(s.host?'<button class="btn main" id="mpLaunch">'+T('Start game','开始游戏')+'</button>':'<button class="btn main" id="mpReady"></button><button class="btn mp-ghost" id="mpLeaveGroup">'+svg('exit')+'<span>'+T('Leave group','退出小组')+'</span></button>')+'</footer><button class="btn" id="mpExit" data-menu-back hidden>'+T('Back to garden','返回花园')+'</button></section>');
 wireShare();if($('mpHostChime'))$('mpHostChime').onchange=e=>{hostChimeEnabled=e.target.checked;store('mindGardenHostChime',JSON.stringify(hostChimeEnabled))};
 if($('mpVisibilityToggle'))$('mpVisibilityToggle').onclick=()=>action(async()=>{const next=last?.visibility==='public'?'private':'public';$('mpVisibilityToggle').disabled=true;try{accept(await api('visibility',{...room,visibility:next}))}finally{if($('mpVisibilityToggle'))$('mpVisibilityToggle').disabled=false}});
 if($('mpInviteMore'))$('mpInviteMore').onclick=()=>{inviteOpen=$('mpInvite').hidden;updateLobby(last);if(inviteOpen)$('mpInvite').scrollIntoView?.({block:'nearest'})};
 if(s.host){$('mpChangeGame').hidden=!s.groupFlow;$('mpChangeGame').onclick=()=>chooseGame(s.mode,mode=>action(async()=>{const state=await api('configure',{...room,round:s.round,revision:s.revision,mode});screen='loading';accept(state)}),()=>renderLobby(last));$('mpLaunch').onclick=()=>{const away=(last?.players||[]).filter(p=>!p.host&&!p.departed&&isAway(last,p));if(away.length&&!confirm(T(joinNames(away)+(away.length>1?' are':' is')+' away. Start without '+(away.length>1?'them':'them')+'?',joinNames(away)+' 暂时离开。不等他们，现在开始吗？')))return;startGame(s)};
 const startGame=s=>action(async()=>{const button=$('mpLaunch');button.disabled=true;button.textContent=T('Starting…','正在开始…');try{accept(await api('launch',{...room,round:last.round,revision:last.revision,mode:last.mode}))}finally{if(button.isConnected)updateLobby(last)}})}
 else if(s.groupFlow)$('mpReady').onclick=()=>action(async()=>accept(await api('ready',{...room,revision:s.revision})));
 updateLobby(s);
}
function renderRoster(s){const node=$('mpRoster');if(!node)return;const markup=people(s);if(node.dataset.markup!==markup){node.innerHTML=markup;node.dataset.markup=markup}}
function names(list){return list.map(p=>p.name).join(', ')}
const awaySeen=new Map(),backNotes=new Map();
function backNote(s){const was=awaySeen.get(s.code)||new Set(),now=new Set(s.players.filter(p=>!p.host&&!p.departed&&isAway(s,p)).map(p=>p.id)),back=s.players.filter(p=>was.has(p.id)&&!now.has(p.id)&&!p.departed);awaySeen.set(s.code,now);if(back.length)backNotes.set(s.code,{text:T(joinNames(back)+(back.length>1?' are':' is')+' back.',joinNames(back)+' 回来了。'),until:Date.now()+15000});const n=backNotes.get(s.code);return n&&n.until>Date.now()?n.text+' ':''}
function updateLobby(s){
 const players=s.players.filter(p=>!p.departed),guests=players.filter(p=>!p.host),present=guests.filter(p=>!isAway(s,p)),notReady=present.filter(p=>!p.ready),away=guests.filter(p=>isAway(s,p)),canStart=s.groupFlow?present.length>0&&!notReady.length:players.length>1;
 if($('mpPlayerCount'))$('mpPlayerCount').textContent=T('Players · '+players.length+' of 8','玩家 · '+players.length+'/8');renderRoster(s);
 if(s.host&&$('mpInvite')){const open=inviteOpen??!guests.length;$('mpInvite').hidden=!open;$('mpCodeLine').hidden=open;const more=$('mpInviteMore');more.hidden=!guests.length;more.setAttribute('aria-expanded',String(open));const label=open?T('Hide invite','收起邀请'):T('Invite more','邀请更多人');if(more.textContent!==label)more.textContent=label}
 const mine=players.find(p=>p.id===s.me);let status;
 const back=s.host?backNote(s):'';
 if(s.host)status=back+(!guests.length?T('Waiting for someone to join.','等待有人加入。'):notReady.length?T('Waiting for '+names(notReady)+' to tap Ready.','等待 '+names(notReady)+' 点击“准备好了”。'):!present.length?T('Everyone is away. Waiting for them to come back.','所有人暂时离开，等待他们返回。'):T('Everyone is ready. Tap Start game.','大家都准备好了，请点击“开始游戏”。')+(away.length?' '+T(names(away)+' is away and will sit out this round.',names(away)+' 暂时离开，本轮不参加。'):''));
 else status=mine?.ready?T('You are ready. Waiting for '+hostName(s)+' to start.','你已准备好，等待 '+hostName(s)+' 开始。'):T('Tap I’m ready when you are ready to play.','准备好后请点击“我准备好了”。');
 if($('mpHostStatus')&&$('mpHostStatus').textContent!==status)$('mpHostStatus').textContent=status;
 if($('mpLaunch')){$('mpLaunch').disabled=!canStart;$('mpLaunch').textContent=T('Start game','开始游戏')}
 if($('mpReady')){const done=!s.groupFlow||!!mine?.ready;$('mpReady').disabled=done;const label=svg('check')+'<span>'+(done?T('You’re ready','你已准备好'):T('I’m ready','我准备好了'))+'</span>';if($('mpReady').dataset.label!==label){$('mpReady').innerHTML=label;$('mpReady').dataset.label=label}}
 if($('mpVisibilityText')){const pub=s.visibility==='public',text=pub?T('Anyone using Mind Garden can see and join this group until the game starts.','游戏开始前，任何心灵花园用户都能看到并加入这个小组。'):T('Only people you invite can join.','只有你邀请的人才能加入。'),label=pub?T('Make private','设为私人'):T('Open to everyone','向所有人开放');if($('mpVisibilityText').textContent!==text)$('mpVisibilityText').textContent=text;if($('mpVisibilityToggle').textContent!==label)$('mpVisibilityToggle').textContent=label}
 if($('mpRounds')){const html=roundChips(s.plannedRounds??null,'data-rounds',s.round);if($('mpRounds').dataset.html!==html){$('mpRounds').innerHTML=html;$('mpRounds').dataset.html=html;$('mpRounds').querySelectorAll('[data-rounds]').forEach(b=>b.onclick=()=>{if(b.getAttribute('aria-checked')==='true')return;const v=chipValue(b,'data-rounds');action(async()=>{b.disabled=true;accept(await api('rounds',{...room,plannedRounds:v}))})})}}
 if($('mpGuestRounds')){const text=s.plannedRounds?T(roundsName(s.plannedRounds)+(s.round?' · next is round '+(s.round+1):''),roundsName(s.plannedRounds)+(s.round?' · 下一轮是第 '+(s.round+1)+' 轮':'')):T('Rounds: the host decides when to stop','轮数：由主持人决定何时结束');if($('mpGuestRounds').textContent!==text)$('mpGuestRounds').textContent=text}
 awayNote(s);
}

async function poll(){if(!room||last?.sessionFinished||screen==='closed'||pollRequest?.gen===generation||document.hidden||!current())return;const gen=generation,c=room.code,ticket={gen};pollRequest=ticket;try{const s=await api('status',{...room,seenRound:shownRound});if(!current(gen)||room?.code!==c)return;accept(s);if($('mpConnection'))$('mpConnection').textContent=''}catch(e){if(current(gen)){if([401,403,404,410].includes(e.status)){room=null;game=null;screen='closed';generation++;remove(KEY);remove(GAME);if(e.status===401){session=null;remove(SESSION);clearInterval(loungeTimer);$('onlineInvitation')?.remove()}overlay('<h2>'+T('Group unavailable','小组不可用')+'</h2><p>'+esc(save.lang==='zh'&&window.tr?tr(e.message):e.message)+'</p><button class="btn" id="mpBackLobby">'+T('Back to Play Together','返回一起玩')+'</button>');$('mpBackLobby').onclick=menu;return}if($('mpConnection'))$('mpConnection').textContent=T('Connection interrupted. Reconnecting; your group and score are kept.','连接中断，正在重连；小组和积分已保留。');error(e)}}finally{if(pollRequest===ticket)pollRequest=null}}
function endRound(){if(confirm(T('End this round? Unfinished players receive no points.','结束本轮？未完成的玩家本轮不得分。')))action(async()=>accept(await api('finishRound',{...room,round:last.round})))}
function rankAward(rank,eligible=true){return (eligible&&rank>=1&&rank<=3?'<span class="rank-award" aria-label="'+T(['Gold','Silver','Bronze'][rank-1],['金奖','银奖','铜奖'][rank-1])+'">'+trophy(rank-1)+'</span> ':'')+rank}
function liveScores(s){const players=[...s.players].sort((a,b)=>(b.total||0)-(a.total||0));return '<h3>'+T('Group rankings','小组排名')+'</h3><p>'+T('Saved points so far; this round updates when results are submitted.','已保存的积分；本轮成绩提交后更新。')+'</p><div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('Total','总积分')+'</th></tr></thead><tbody>'+players.map(p=>'<tr><td>'+rankAward(1+players.filter(q=>(q.total||0)>(p.total||0)).length,(p.total||0)>0)+'</td><td>'+user(p.name)+'</td><td>'+(p.total||0)+'</td></tr>').join('')+'</tbody></table></div>'}
function livePanel(){
 if(!last)return;const box=$('box');box.classList.add('mp-playing');
 for(const node of box.querySelectorAll('.mp-room-code,.mp-name-editor,.mp-room-actions'))node.remove();
 for(const id of ['mpVisibleLink','mpCopy','mpShare','mpWhatsApp','mpExit']){const node=$(id);if(node){if(id==='mpExit'){node.hidden=true;continue}if(id==='mpVisibleLink')node.closest('label')?.remove();else node.remove()}}
 const tools=box.querySelector('.v4-game-tools'),heading=box.querySelector('h2');if(tools&&heading)heading.after(tools);
 const progress=document.createElement('p');progress.className='mp-round-progress';progress.textContent=roundLabel(last);box.append(progress);
 const begin=$('mpPairPreview');if(begin&&last.groupFlow){$('mpBeginPairs').hidden=true;begin.hidden=game?.phase!=='preview'}
 // Header and controls reserve their own space; task content flows between them.
 let body=box.querySelector('.mp-play-content');if(!body){body=document.createElement('div');body.className='mp-play-content';const excluded='h2,.menu-exit-bar,.v4-game-tools,.game-header-controls,.game-footer,.mp-round-progress,#mpPairCount,#mpConnection,#multiError';for(const node of [...box.children])if(!node.matches(excluded))body.append(node);box.append(body)}
 const board=box.querySelector('.mp-board');if(board){const cards=board.querySelectorAll('[data-tile]').length;board.style.setProperty('--pair-rows',Math.ceil(cards/4));board.style.setProperty('--pair-wide-rows',Math.ceil(cards/5));board.style.setProperty('--pair-landscape-cols',Math.ceil(cards/2));}
}
let countdownTimer=null;
function sharedCountdown(s){
 screen='countdown';clearInterval(countdownTimer);const gen=generation,code=s.code,round=s.round,ends=performance.now()+Math.max(0,s.startsAt-s.serverTime);
 joinChime();overlay(base(s)+'<section class="mp-countdown"><p class="mp-round-starting">'+(s.plannedRounds?T('Round '+s.round+' of '+s.plannedRounds+' is starting','第 '+s.round+' 轮（共 '+s.plannedRounds+' 轮）即将开始'):T('Round '+s.round+' is starting','第 '+s.round+' 轮即将开始'))+'</p><p>'+T('Starting together in','即将一起开始')+'</p><div class="mp-count-ring"><strong id="mpCountdown" role="status"></strong></div><p class="mp-first-step">'+firstStep(s.mode)[0]+'</p><p class="mp-first-sub">'+firstStep(s.mode)[1]+'</p><small>'+playerCount(s.players.filter(p=>!p.departed&&!p.skipped).length)+' · '+roundLabel(s)+'</small><p class="mp-fair">'+fairNote(s.mode)+'</p></section><p id="multiError" role="alert"></p>');
 const tick=()=>{if(!current(gen)||room?.code!==code||last?.round!==round||screen!=='countdown'){clearInterval(countdownTimer);return}const left=Math.max(0,Math.ceil((ends-performance.now())/1000));$('mpCountdown').textContent=left;if(!left){clearInterval(countdownTimer);screen='loading';accept({...last,serverTime:s.startsAt})}};countdownTimer=setInterval(tick,100);tick();
}

function accept(s){if(!current()||!room||s.code!==room.code)return;last=s;if(s.host&&!s.closed)hosting.add(s.code);if(s.players&&$('mpLiveScores'))$('mpLiveScores').innerHTML=liveScores(s);if(s.players&&s.round)rememberResult(s);if(s.left||(s.closed&&!s.sessionFinished)){releaseRoom(s.code,s.left?(s.removed?T('The host removed you from the group. You can rejoin with the group code.','主持人已将你移出小组。你可以用小组码重新加入。'):T('You left the group. The others can keep playing.','你已退出小组，其他人可以继续。')):s.closeReason==='host_unavailable'?T('The group closed because the host was away for 10 minutes. Your scores are saved.','主持人离开了10分钟，小组已关闭。你的积分已保存。'):T('The host closed the group. Your scores are saved.','主持人已关闭小组。你的积分已保存。'),generation,!!s.closed);return}if(s.players&&$('mpRoster'))renderRoster(s);awayNote(s);
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
 overlay(base(s)+'<section id="onlineBingo" class="new-game" translate="no"><h3>'+T('Picture bingo · play together','图片宾果 · 一起玩')+'</h3><p>'+T('Mark the pictures called. Complete all 9 together. No speed bonus.','标记已叫出的图片，共同完成9张。不计速度奖励。')+'</p><div class="bingo-call" tabindex="-1" id="roomBingoCall" role="status"><span class="bingo-picture" aria-hidden="true">'+gamePicture(current[0])+'</span><strong>'+T(current[1],current[2])+'</strong><small>'+T('Call ','已叫')+called+'/9 · '+ready+'/'+members.length+T(' players marked this picture','位玩家已标记此图')+'</small></div>'+kit.bingoBoard(items,order,called,marked,'data-room-bingo')+'<p>'+marked.size+'/9 '+T('marked on your card','张已标记')+'</p><details><summary>'+T('Pictures called so far','已经叫到的图片')+'</summary><div class="bingo-called">'+items.slice(0,called).map(p=>'<span>'+p[0]+' '+T(p[1],p[2])+'</span>').join('')+'</div></details><div class="new-actions">'+(s.host?'<button class="btn main" id="roomBingoNext"'+(called>=9?' disabled':'')+'>'+T('Call next picture','叫下一张图片')+'</button>':'<p>'+T('The host will call the next picture when everyone is ready.','大家准备好后，主持人会叫下一张图片。')+'</p>')+'<button class="btn" id="roomBingoSpeak"'+(!window.speechSynthesis?' disabled':'')+'>'+T('Read picture name','朗读图片名称')+'</button></div>'+(mine.score!==null?'<p role="status">'+T('Your full card and result are saved. Waiting for the other players.','您的完整卡片与成绩已保存，正在等待其他玩家。')+'</p>':'')+'</section>'+shareControls()+'<p id="multiError" role="alert"></p>');
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
  const controls=$('mpPairPreview');if(!controls)return;if(last?.groupFlow){controls.hidden=g.phase!=='preview';$('mpBeginPairs').hidden=true;}
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
function waitingForOther(s){screen='waiting';const mine=s.players.find(p=>p.id===s.me),sat=mine?.skipped&&mine.score===null;overlay('<h2>'+(sat?T('This round has started','本轮已经开始'):T('Your round is complete','本轮已完成'))+'</h2><p>'+(sat?(()=>{const t=Math.max(0,...s.players.filter(p=>p.beganAt).map(p=>p.beganAt)),at=t?new Date(t).toLocaleTimeString(save.lang==='zh'?'zh-CN':'en-SG',{hour:'numeric',minute:'2-digit'}):'';return T('Round '+s.round+' started'+(at?' at '+at:'')+' while you were away, so you are sitting out. '+hostName(s)+' can include you in the next round.','第 '+s.round+' 轮'+(at?'在 '+at:'')+'开始时你暂时离开，本轮不参加。'+hostName(s)+' 可以在下一轮让你加入。')})():T('Score saved. Waiting for the other players to finish.','积分已保存，正在等待其他玩家完成。'))+'</p><div id="mpRoster"></div><p id="mpAwayNote" class="mp-away-note" role="status" hidden></p>'+(s.host?'<details><summary>'+T('Options','选项')+'</summary><button class="btn" id="mpEndRound">'+T('End round','结束本轮')+'</button></details>':'<div class="row">'+leaveButton(s)+'</div>')+'<p id="multiError" role="alert"></p>');renderRoster(s);awayNote(s);if($('mpEndRound'))$('mpEndRound').onclick=endRound}
function rememberResult(s){const mine=s.players?.find(p=>p.id===s.me);if(!mine||(!mine.skipped&&(mine.score===null||mine.score===undefined))||!s.round)return;const p=me();p.multiplayerHistory=p.multiplayerHistory||[];const key=s.code+':'+s.seed+':'+s.round;if(!p.multiplayerHistory.some(r=>r.key===key)){p.multiplayerHistory.push({key,date:new Date(s.serverTime||Date.now()).toISOString(),activity:s.mode,round:s.round,score:mine.score,total:mine.total,skipped:!!mine.skipped});persist()}}
function results(s){
 rememberResult(s);screen='results';game=null;shownRound=s.round;remove(GAME);remove(roomGameKey(s.code));
 const players=s.players.filter(p=>!p.departed||(p.score!==null&&p.score!==undefined)),has=p=>p.score!==null&&p.score!==undefined;
 const scored=players.filter(has).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name)),rest=players.filter(p=>!has(p)).sort((a,b)=>a.name.localeCompare(b.name));
 const rank=p=>1+scored.filter(q=>q.score>p.score).length,top=scored.filter(p=>p.score>0&&rank(p)===1);
 const final=!!s.plannedRounds&&s.round>=s.plannedRounds,more=final?Math.min(s.plannedRounds,20-s.round):0;
 const best=Math.max(0,...players.map(p=>p.total||0)),leaders=best>0?players.filter(p=>(p.total||0)===best):[];
 const overall=!leaders.length?'':leaders.length>1?T(joinNames(leaders)+' share first place overall!',joinNames(leaders)+' 总分并列第一！'):leaders[0].id===s.me?T('You win overall with '+best+' points!','你以 '+best+' 分获得总冠军！'):T(leaders[0].name+' wins overall with '+best+' points!',leaders[0].name+' 以 '+best+' 分获得总冠军！');
 const headline=final&&overall?overall:!top.length?T('Round complete','本轮完成'):top.length>1?T(joinNames(top)+' share first place!',joinNames(top)+' 并列第一！'):top[0].id===s.me?T('You win this round!','你赢得了本轮！'):T(top[0].name+' wins this round!',top[0].name+' 赢得了本轮！');
 const row=p=>{const r=has(p)?rank(p):null;return '<tr'+(p.id===s.me?' class="mp-me"':'')+'><td><span class="mp-rank'+(r&&r<=3&&p.score>0?' mp-rank-'+r:'')+'">'+(r||'–')+'</span></td><th scope="row">'+user(p.name)+(p.id===s.me?'<small> · '+T('You','你')+'</small>':'')+'</th><td>'+(r?p.score:p.skipped?T('Sat out','未参加'):T('Not finished','未完成'))+'</td><td>'+(p.total||0)+'</td></tr>'};
 overlay('<h2>'+(final?T('Final results','最终结果'):s.plannedRounds?T('Round '+s.round+' of '+s.plannedRounds+' complete','第 '+s.round+' 轮完成（共 '+s.plannedRounds+' 轮）'):T('Round '+s.round+' complete','第 '+s.round+' 轮完成'))+'</h2><div class="mp-results"><div class="mp-winner">'+svg('trophy',36)+'<p class="mp-winner-line" translate="no">'+esc(headline)+'</p><p>'+(final?T('That was the last of '+s.plannedRounds+(s.plannedRounds>1?' rounds.':' round.')+' Scores are saved.','这是 '+s.plannedRounds+' 轮中的最后一轮。积分已保存。'):T('Scores are saved.','积分已保存。'))+'</p></div><div class="mp-score-scroll"><table class="mp-score-table"><thead><tr><th scope="col"><span class="sr-only">'+T('Rank','排名')+'</span></th><th scope="col">'+T('Player','玩家')+'</th><th scope="col">'+T('Round','本轮')+'</th><th scope="col">'+T('Total','总分')+'</th></tr></thead><tbody>'+scored.concat(rest).map(row).join('')+'</tbody></table></div><footer class="mp-result-actions">'+(s.sessionFinished?'<button class="btn main" id="mpFinalLobby">'+T('Done','完成')+'</button>':s.host&&final?'<p>'+T('What next?','接下来？')+'</p>'+(more?'<button class="btn main" id="mpMoreRounds">'+svg('replay')+'<span>'+T('Play '+roundsName(more)+' more','再玩 '+roundsName(more))+'</span></button>':'')+'<div class="mp-two">'+(more?'<button class="btn" id="mpChooseNext">'+svg('grid')+'<span>'+T('Another game','换个游戏')+'</span></button>':'')+'<button class="btn'+(more?'':' main')+'" id="mpCloseRoom">'+svg('exit')+'<span>'+T('End group','结束小组')+'</span></button></div>':s.host?'<p>'+T('What next?','接下来？')+'</p><button class="btn main" id="mpChooseNext">'+svg('grid')+'<span>'+T('Choose another game','选择其他游戏')+'</span></button><div class="mp-two"><button class="btn" id="mpReplay">'+svg('replay')+'<span>'+T('Play again','再玩一次')+'</span></button><button class="btn" id="mpCloseRoom">'+svg('exit')+'<span>'+T('End group','结束小组')+'</span></button></div>':'<p>'+(final?T('That was the last round. Waiting for '+hostName(s)+' to decide what is next.','这是最后一轮。等待 '+hostName(s)+' 决定接下来做什么。'):T('Waiting for '+hostName(s)+' to choose the next game.','等待 '+hostName(s)+' 选择下一个游戏。'))+'</p><p id="mpAwayNote" class="mp-away-note" role="status" hidden></p><button class="btn mp-ghost" id="mpLeaveGroup">'+svg('exit')+'<span>'+T('Leave group','退出小组')+'</span></button>')+'</footer></div><p id="multiError" role="alert"></p>');awayNote(s);
 if(s.sessionFinished){membershipRevision++;if(read(KEY)?.code===s.code)remove(KEY);clearInvite();hosting.delete(s.code);$('mpFinalLobby').onclick=()=>{suspend();menu()};return}
 if(s.host){const configure=mode=>action(async()=>{if(final&&more)await api('rounds',{...room,plannedRounds:s.round+more});const state=await api('configure',{...room,round:s.round,revision:s.revision,mode});screen='loading';accept(state)});if($('mpChooseNext'))$('mpChooseNext').onclick=()=>chooseGame(s.mode,configure,()=>results(last));if($('mpReplay'))$('mpReplay').onclick=()=>configure(s.mode);if($('mpMoreRounds'))$('mpMoreRounds').onclick=()=>configure(s.mode);$('mpCloseRoom').onclick=()=>{if(confirm(T('End the group for everyone? Scores are kept.','为所有人结束小组？积分会保留。')))action(async()=>accept(await api('finishSession',{...room,round:s.round})))}}
}

function activityName(id){const m=MODES.find(v=>v[0]===id);return m?(save.lang==='zh'?(m[2]||window.tr?.(m[1])||m[1]):m[1]):T('Earlier activity','较早的活动')}
function historyFrame(html){overlay('<section class="online-history"><h2>'+T('Saved group rankings','已保存的小组排名')+'</h2><div class="history-body">'+html+'</div><footer class="history-actions"><button class="btn" id="historyLobby">'+T('Play Together','一起玩')+'</button><button class="btn" id="historyClose">'+T('Close','关闭')+'</button></footer><p id="multiError" role="alert"></p></section>');$('historyLobby').onclick=menu;$('historyClose').onclick=exitScreen}
async function openHistory(offset=0){
 window.MindGardenMenuHistory?.enter('online-history',()=>openHistory(offset));
 checkpoint();clearPairTimers();generation++;const gen=generation;room=null;game=null;last=null;screen='history';
 if(!session){historyFrame('<p>'+T('Open Play Together to see the groups linked to this browser.','打开“一起玩”以查看与此浏览器关联的小组。')+'</p>');return}
 historyFrame('<p>'+T('Loading your groups…','正在加载你的小组……')+'</p>');
 const data=await api('history',{offset});if(!current(gen))return;
 historyFrame((data.rooms.length?'<div class="history-room-field"><div class="history-label"><label for="historyRoomSelect">'+T('Group','小组')+'</label>'+(window.MindGardenInfo?.html(T('Only participants can view rankings. Clearing browser data removes access.','仅参与者可查看排名。清除浏览器数据会失去访问权限。'),T('About saved rankings','已保存排名说明'))||'')+'</div><select id="historyRoomSelect">'+data.rooms.map(r=>'<option value="'+esc(r.code)+'">'+esc(r.code)+' · '+r.completed+T(' rounds','轮')+'</option>').join('')+'</select></div><button class="btn main" id="historyRoomOpen">'+T('View results','查看成绩')+'</button>':'<div class="history-label"><p>'+T('No completed games','无已完成游戏')+'</p>'+(window.MindGardenInfo?.html(T('Only participants can view rankings. Clearing browser data removes access.','仅参与者可查看排名。清除浏览器数据会失去访问权限。'),T('About saved rankings','已保存排名说明'))||'')+'</div>')+'<div class="row">'+(offset?'<button class="btn" id="historyPrevious">'+T('Previous groups','上一页小组')+'</button>':'')+(data.nextOffset!==null?'<button class="btn" id="historyNext">'+T('More groups','更多小组')+'</button>':'')+'</div>');
 if($('historyRoomOpen'))$('historyRoomOpen').onclick=()=>action(()=>openRoomHistory($('historyRoomSelect').value,0,offset));
 if($('historyPrevious'))$('historyPrevious').onclick=()=>action(()=>openHistory(Math.max(0,offset-20)));if($('historyNext'))$('historyNext').onclick=()=>action(()=>openHistory(data.nextOffset));
}
async function openRoomHistory(code,offset=0,roomOffset=0){
 window.MindGardenMenuHistory?.enter('online-room-history:'+code,()=>openRoomHistory(code,offset,roomOffset));const gen=generation;historyFrame('<p>'+T('Loading saved results…','正在加载已保存成绩……')+'</p>');const data=await api('rankings',{code,offset});if(!current(gen))return;
 const table=rows=>'<div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('Points','积分')+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
 let playerPage=0;
 historyFrame('<h3>'+T('Group ','小组 ')+esc(code)+'</h3><label>'+T('Round','回合')+'<select id="historyRoundSelect"><option value="total">'+T('Total','总分')+'</option>'+data.rounds.map((r,i)=>'<option value="'+i+'">'+r.round+' · '+esc(activityName(r.mode))+'</option>').join('')+'</select></label><div id="historyScores"></div><div id="historyPlayerPages" class="compact-pager"></div><div class="row">'+(offset?'<button class="btn" id="roundsPrevious">'+T('Newer rounds','较新回合')+'</button>':'')+(data.nextOffset!==null?'<button class="btn" id="roundsNext">'+T('Earlier rounds','较早回合')+'</button>':'')+'<button class="btn" id="historyRooms">'+T('Groups','小组')+'</button></div>');
 function drawScores(){const total=$('historyRoundSelect').value==='total',rows=total?data.players:data.rounds[+$('historyRoundSelect').value].results,size=rankingPageSize(),pages=Math.max(1,Math.ceil(rows.length/size));playerPage=Math.min(playerPage,pages-1);$('historyScores').innerHTML=table(rows.slice(playerPage*size,(playerPage+1)*size).map(p=>{const rank=total?p.rank:p.score===null?null:1+rows.filter(x=>x.score!==null&&x.score>p.score).length;return '<tr><td>'+(rank||'—')+'</td><td>'+user(p.name)+'</td><td>'+(total?p.total:p.score===null?T('Not finished','未完成'):p.score)+'</td></tr>'}).join(''));$('historyPlayerPages').innerHTML=pages>1?'<button class="btn" id="historyPlayersPrev" '+(!playerPage?'disabled':'')+'>‹</button><span>'+(playerPage+1)+' / '+pages+'</span><button class="btn" id="historyPlayersNext" '+(playerPage+1>=pages?'disabled':'')+'>›</button>':'';if($('historyPlayersPrev'))$('historyPlayersPrev').onclick=()=>{playerPage--;drawScores()};if($('historyPlayersNext'))$('historyPlayersNext').onclick=()=>{playerPage++;drawScores()};}
 $('historyRoundSelect').onchange=()=>{playerPage=0;drawScores()};drawScores();
 $('historyRooms').onclick=()=>action(()=>openHistory(roomOffset));if($('roundsPrevious'))$('roundsPrevious').onclick=()=>action(()=>openRoomHistory(code,Math.max(0,offset-20),roomOffset));if($('roundsNext'))$('roundsNext').onclick=()=>action(()=>openRoomHistory(code,data.nextOffset,roomOffset));
}
window.MindGardenOnlineHistory=()=>action(()=>openHistory());
const localLeaderboard=window.lbView;window.lbView=function(...args){localLeaderboard(...args);const tabs=document.createElement('div');tabs.className='ranking-tabs';tabs.innerHTML='<button class="btn" type="button" aria-pressed="true">'+(window.MindGardenAccount?.connected?T('Account players','账户玩家'):T('On this device','此设备'))+'</button><button class="btn" type="button" id="leaderboardOnline">'+T('Play Together rankings','一起玩排名')+'</button>';$('box').querySelector('h2')?.after(tabs);$('leaderboardOnline').onclick=()=>action(()=>openHistory())};

window.addEventListener('resize',()=>{if(screen==='menu')renderDirectory();else if(screen==='lobby'&&last)renderRoster(last)});
window.addEventListener('pagehide',checkpoint);
function refreshOnline(){if(current()&&game?.phase==='preview')runPairClock(game);poll();lounge()}
window.addEventListener('focus',refreshOnline);document.addEventListener('visibilitychange',()=>{if(document.hidden)checkpoint();else refreshOnline()});
$('bOnline').onclick=menu;
if(session)startLounge();
if(/^[A-Z2-9]{6}$/i.test(new URLSearchParams(location.search).get('room')||''))setTimeout(menu,350);
})();
