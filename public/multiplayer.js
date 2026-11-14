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
const noticed=new Set();let view=null,checkpointTimer=null,mismatchTimer=null,previewTimer=null;
// Each response belongs to the screen that initiated it. Other dialogs may replace it.
function overlay(html){window.overlay(html);$('box').classList.add('mp-dialog');view=$('box').firstElementChild}
function current(gen=generation){return gen===generation&&!!view?.isConnected&&!$('ov').classList.contains('hidden')}
function clearPairTimers(){clearTimeout(mismatchTimer);clearInterval(previewTimer);mismatchTimer=previewTimer=null}
function suspend(){checkpoint();clearPairTimers();generation++;room=null;game=null;shownRound=0;screen='';last=null;view=null}
window.addEventListener('gardenPlayerChange',suspend);
function api(action,data={}){return fetch('/api/room8?action='+action,{method:'POST',headers:{'content-type':'application/json'},cache:'no-store',body:JSON.stringify({...data,token:session?.token||data.token})}).then(async r=>{let j;try{j=await r.json()}catch{throw Error(T('Online service unavailable. Check the deployment.','在线服务不可用，请检查部署。'))}if(!r.ok)throw Object.assign(Error(j.error||'Connection failed'),{status:r.status});return j})}
function error(e){const el=$('multiError');if(el)el.textContent=save.lang==='zh'&&window.tr?tr(e.message):e.message}
function name(){let n=(me().name||'').replace(/[^\p{L}\p{N} ._'-]/gu,'').slice(0,20);if(!n||/^(Player\s*\d*|玩家\s*\d*)$/i.test(n)){let tag=read('mindGardenGuestTag');if(!tag){tag=Array.from(crypto.getRandomValues(new Uint8Array(3)),x=>x.toString(16).padStart(2,'0')).join('').toUpperCase();store('mindGardenGuestTag',JSON.stringify(tag))}n='Guest '+tag}return n}
function invite(c=room?.code){const u=new URL(location.pathname,location.origin);u.hostname=u.hostname.replace(/^[a-f0-9]{8,}\.(?=[^.]+\.pages\.dev$)/i,'');u.searchParams.set('room',c);return u.href}
function user(n){return '<span translate="no">'+esc(n)+'</span>'}
function roomControls(s){const state=s?.host!==undefined?s:last;if(!state||state.closed||state.left)return '';return '<div class="mp-room-actions row">'+(state.host?(state.started&&!state.finished?'<button class="btn" id="mpCancelGame">'+T('Cancel game & close room','取消游戏并关闭房间')+'</button>':''):'<button class="btn" id="mpLeaveRoom">'+T('Leave room','退出此房间')+'</button>')+'</div>'}
function base(s){return '<h2>'+T('Play Together','一起玩')+' · '+T('Up to 8 players','最多8人')+'</h2><p class="mp-room-code">'+T('Room code','房间码')+' <strong translate="no">'+esc(room.code)+'</strong>'+(s?.round?' · '+T('Round ','第 ')+s.round+((s.totalRounds||last?.totalRounds)?' / '+(s.totalRounds||last.totalRounds):'')+T('',' 轮'):'')+'</p>'+nameControls()+roomControls(s)+'<p id="mpConnection" class="tip" role="status"></p>'}
function checkpoint(){clearTimeout(checkpointTimer);checkpointTimer=null;if(!game||!room)return;try{store(GAME,JSON.stringify({code:room.code,...game,done:game.done?[...game.done]:undefined}))}catch{}}
function queueCheckpoint(){clearTimeout(checkpointTimer);checkpointTimer=setTimeout(checkpoint,80)}
function exitScreen(){suspend();closeOv()}
function clearInvite(){const u=new URL(location.href);u.searchParams.delete('room');history.replaceState(null,'',u.pathname+u.search+u.hash)}
async function action(fn){if(busy)return;busy=true;const gen=generation;try{await fn()}catch(e){if(current(gen))error(e)}finally{busy=false}}
async function login(){const gen=generation,owner=save.cp,profile=me(),n=$('mpName')?.value.trim()||name();session=await api('login',{name:n,token:read(SESSION)?.token});store(SESSION,JSON.stringify(session));if(save.pr[owner]===profile){profile.name=session.name;persist()}if(owner===save.cp)window.MindGardenDashboard?.refresh();startLounge();return owner===save.cp&&current(gen)}
function nameControls(){return '<details class="mp-name-editor"><summary>'+T('Your name: ','你的名称：')+'<span class="mp-self-name" translate="no">'+esc(session?.name||name())+'</span> · '+T('Rename','改名')+'</summary><label class="lab">'+T('Name shown to other players','其他玩家看到的名称')+'<input id="mpRenameName" maxlength="20" value="'+esc(session?.name||name())+'"></label><button class="btn" id="mpSaveName">'+T('Save name','保存名称')+'</button><span id="mpNameStatus" role="status"></span></details>'}
async function renameOnline(n){
 n=n.trim();if(!/^[\p{L}\p{N} ._'-]{1,20}$/u.test(n))throw Error(T('Use 1–20 letters or numbers.','请使用1至20个字母或数字。'));
 if(session){const previous=session,updated=await api('login',{name:n});if(session!==previous)return n;session=updated;store(SESSION,JSON.stringify(session))}
 else{const previous=read(SESSION);if(previous)store(SESSION,JSON.stringify({...previous,name:n,offline:true}))}
 return n;
}
window.MindGardenMultiplayer={flushStorage(){for(const [k,v]of volatileStorage){try{v===null?localStorage.removeItem(k):localStorage.setItem(k,v);volatileStorage.delete(k)}catch{return false}}return true},rename:renameOnline,online:()=>!!session,active:()=>!!read(KEY),history:()=>action(()=>openHistory())};
function releaseRoom(code,notice,gen=generation){
 membershipRevision++;
 if(read(KEY)?.code===code)remove(KEY);if(read(GAME)?.code===code)remove(GAME);
 if(room?.code!==code)return;
 const show=current(gen);clearPairTimers();clearTimeout(checkpointTimer);checkpointTimer=null;generation++;room=null;game=null;last=null;shownRound=0;screen='';clearInvite();
 if(show)menu(notice);
}
function cancelRoom(){if(confirm(T('Cancel this game and close the room for everyone? Completed scores are kept.','取消游戏并为所有人关闭房间？已完成的成绩会保留。')))action(async()=>{const c=room?.code,gen=generation;if(!c)return;await api('close',{code:c});releaseRoom(c,T('Room closed. You can join or create another room.','房间已关闭。您可以加入或创建其他房间。'),gen)})}
$('box').addEventListener('click',e=>{if(e.target.closest('#mpCancelGame'))cancelRoom();if(e.target.closest('#mpLeaveRoom')&&confirm(T('Leave room? Your unfinished round will stop. Other players can continue.','退出此房间？你的未完成回合将停止，其他玩家可以继续。')))action(async()=>{const c=room?.code,gen=generation;if(!c)return;await api('leave',{code:c});releaseRoom(c,T('You have left the room. Enter another room code below. Other players can continue.','您已退出房间，可在下方输入其他房间码。其他玩家可以继续。'),gen)})});
$('box').addEventListener('click',e=>{const button=e.target.closest('#mpSaveName');if(!button)return;const editor=button.closest('details'),input=$('mpRenameName'),profile=me();action(async()=>{button.disabled=true;try{const n=await renameOnline(input.value);if(Object.values(save.pr).includes(profile)){profile.name=n;persist()}if(me()!==profile)return;window.MindGardenDashboard?.refresh();document.querySelectorAll('.mp-self-name').forEach(el=>el.textContent=n);if(editor.isConnected){editor.open=false;editor.querySelector('summary')?.focus()}if($('mpConnection'))$('mpConnection').textContent=T('Name saved.','名称已保存。')}finally{button.disabled=false}})});
function startLounge(){if(loungeTimer)clearInterval(loungeTimer);loungeTimer=setInterval(lounge,2500);lounge()}
async function lounge(){
 if(!session||loungeBusy||document.hidden)return;loungeBusy=true;const identity=session,revision=membershipRevision;
 try{const s=await api('lounge');if(session!==identity||revision!==membershipRevision)return;loungeRooms=s.rooms;
  if(screen==='menu'&&current()){if(s.activeRoom){store(KEY,JSON.stringify({code:s.activeRoom}));if(!$('mpResume')){const b=document.createElement('button');b.id='mpResume';b.className='btn';b.textContent=T('Resume room','返回房间');$('mpClose').before(b);b.onclick=()=>action(()=>join(read(KEY).code))}}else{remove(KEY);$('mpResume')?.remove()}}
  if($('mpOnlineCount'))$('mpOnlineCount').textContent=T(s.online+' '+(s.online===1?'player online':'players online'),s.online+'位玩家在线');
  const list=$('mpOpenRooms');if(list){list.innerHTML=s.rooms.length?s.rooms.map(r=>'<div class="mp-open-room">'+user(r.host)+' · <strong translate="no">'+r.code+'</strong> · '+r.players+'/8 <button class="btn sm" data-join-room="'+r.code+'">'+T('Join','加入')+'</button></div>').join(''):'<p>'+T('No open rooms yet. Create one to invite everyone online.','暂无开放房间。创建房间即可邀请所有在线玩家。')+'</p>';list.querySelectorAll('[data-join-room]').forEach(b=>b.onclick=()=>action(()=>join(b.dataset.joinRoom)))}
  const fresh=s.rooms.filter(r=>!noticed.has(r.code)&&r.code!==s.activeRoom);
  if(fresh.length){let notice=$('onlineInvitation');if(!notice){notice=document.createElement('aside');notice.id='onlineInvitation';notice.setAttribute('role','status');document.body.appendChild(notice)}
   notice.innerHTML='<span>'+T('New room invitations: ','新房间邀请：')+fresh.map(r=>user(r.host)+' <b translate="no">'+r.code+'</b>').join(' · ')+'</span><small id="mpInviteTip"></small><button class="btn sm" id="mpSeeInvite">'+(s.activeRoom?T('Room options','房间选项'):T('View lobby','查看大厅'))+'</button><button class="btn sm" id="mpDismissInvite" aria-label="'+T('Dismiss','关闭')+'">×</button>';
   if(s.activeRoom)$('mpInviteTip').textContent=T('Leave your current room first; hosts must finish or cancel it before joining another.','请先退出当前房间；房主须先结束或取消房间，才能加入其他房间。');
   $('mpSeeInvite').onclick=()=>{const active=read(KEY)?.code;if(active){if(room?.code===active&&current()){$('mpLeaveRoom')?.focus();$('mpCancelGame')?.focus();$('mpCloseRoom')?.focus();$('mpCancelRoom')?.focus()}else{menu();action(()=>join(active))}}else menu();notice.remove()};$('mpDismissInvite').onclick=()=>notice.remove();
  }
  // Acknowledge only after invitations have been rendered on the player's device.
  if(s.rooms.length){await api('ack',{codes:s.rooms.map(r=>r.code)});s.rooms.forEach(r=>noticed.add(r.code))}
 }catch(e){if(session!==identity)return;if($('mpOnlineCount'))$('mpOnlineCount').textContent=T('Reconnecting to the lobby…','正在重新连接大厅……');if(e.status===401){session=null;remove(SESSION);clearInterval(loungeTimer)}}finally{loungeBusy=false}
}
function menu(notice=''){
 window.MindGardenMenuHistory?.enter('online-lobby',()=>menu());checkpoint();clearPairTimers();generation++;room=null;game=null;shownRound=0;last=null;screen='menu';
 const prefill=(new URLSearchParams(location.search).get('room')||'').toUpperCase();
 overlay('<h2>'+T('Online lobby · 2–8 players','在线大厅 · 2至8人')+'</h2><p>'+T('Enter the lobby to receive room codes from hosts online. Joining a room shares your display name and game scores with its players.','进入大厅即可接收在线房主的房间码。加入房间后，其他玩家可看到你的显示名称和游戏积分。')+'</p>'+(!session?'<label class="lab">'+T('Your display name','你的显示名称')+'<input id="mpName" maxlength="20" value="'+esc(name())+'"></label><button class="btn main" id="mpLogin">'+T('Enter online lobby','进入在线大厅')+'</button>':'<p>'+T('Online as ','在线玩家：')+'<span class="mp-self-name">'+user(session.name)+'</span>'+' · <span id="mpOnlineCount" role="status"></span></p>'+nameControls()+'<button class="btn" id="mpHistory">'+T('Saved online rankings','已保存的在线排名')+'</button>'+roundChoices()+'<button class="btn main" id="mpCreate">'+T('Create room','创建房间')+'</button><h3>'+T('Open rooms — room codes arrive here','开放房间——在此接收房间码')+'</h3><div id="mpOpenRooms" aria-live="polite"></div>')+'<label class="lab">'+T('Room code','房间码')+'<input id="mpCode" maxlength="6" value="'+(/^[A-Z2-9]{6}$/.test(prefill)?prefill:'')+'"></label><div class="row"><button class="btn" id="mpJoin">'+T('Join room','加入房间')+'</button>'+(session&&read(KEY)?'<button class="btn" id="mpResume">'+T('Resume room','返回房间')+'</button>':'')+'<button class="btn" id="mpClose">'+T('Close','关闭')+'</button>'+(session?'<button class="btn" id="mpLogout">'+T('Go offline','退出在线大厅')+'</button>':'')+'</div><p id="multiError" role="alert"></p>');
 if($('mpLogin'))$('mpLogin').onclick=()=>action(async()=>{if(await login())menu()});
 if($('mpHistory'))$('mpHistory').onclick=()=>action(()=>openHistory());
 if($('mpCreate'))$('mpCreate').onclick=()=>action(async()=>{const gen=generation,r=await api('create',{rounds:Number($('mpRoundCount').value)});claim(r.code,gen)});
 $('mpJoin').onclick=()=>action(async()=>{const c=$('mpCode').value.trim().toUpperCase();if(!session&&!await login())return;await join(c)});
 if($('mpResume'))$('mpResume').onclick=()=>action(()=>join(read(KEY).code));
 if($('mpLogout'))$('mpLogout').onclick=()=>action(async()=>{const gen=generation;await api('logout');store(SESSION,JSON.stringify({...session,offline:true}));session=null;clearInterval(loungeTimer);noticed.clear();$('onlineInvitation')?.remove();if(current(gen))menu()});
 if(typeof notice==='string'&&notice){const status=document.createElement('p');status.id='mpLobbyStatus';status.setAttribute('role','status');status.textContent=notice;$('box').firstElementChild.after(status)}
 $('mpClose').onclick=exitScreen;if(session)lounge();
 if(/^[A-Z2-9]{6}$/.test(prefill))action(async()=>{if(!session&&!await login())return;await join(prefill)});
}
function claim(code,gen){membershipRevision++;store(KEY,JSON.stringify({code}));if(current(gen))enter(code)}
async function join(code){const gen=generation;await api('join',{code});claim(code,gen);clearInvite()}
function enter(code){clearPairTimers();generation++;room={code};store(KEY,JSON.stringify(room));shownRound=0;game=null;screen='loading';last=null;overlay(base()+'<p>'+T('Connecting…','正在连接……')+'</p><p id="multiError" role="alert"></p><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button>');$('mpExit').onclick=exitScreen;poll()}
function shareControls(){return '<label class="lab">'+T('Invitation link','邀请链接')+'<input id="mpVisibleLink" readonly aria-label="'+T('Invitation link','邀请链接')+'" value="'+esc(invite())+'"></label><div class="row"><button class="btn" id="mpCopy">'+T('Copy link','复制链接')+'</button><button class="btn" id="mpShare">'+T('Share','分享')+'</button><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button></div>'}
function wireShare(){
 $('mpExit').onclick=exitScreen;$('mpVisibleLink').onclick=e=>e.target.select();
 $('mpCopy').onclick=async()=>{const gen=generation;try{await navigator.clipboard.writeText(invite());if(current(gen)&&$('multiError'))$('multiError').textContent=T('Invitation copied.','邀请已复制。')}catch{if(current(gen)){$('mpVisibleLink')?.focus();$('mpVisibleLink')?.select()}}};
 $('mpShare').onclick=async()=>{const gen=generation;try{if(navigator.share){await navigator.share({title:T('Mind Garden invitation','心灵花园邀请'),url:invite()});return}}catch(e){if(e.name==='AbortError')return}if(current(gen)){$('mpVisibleLink')?.focus();$('mpVisibleLink')?.select()}};
}
function roundChoices(){return '<label class="lab">'+T('Number of rounds in your session','本次游戏的回合数')+'<select id="mpRoundCount">'+Array.from({length:20},(_,i)=>i+1).map(n=>'<option value="'+n+'"'+(n===3?' selected':'')+'>'+n+'</option>').join('')+'</select></label>'}
function modeOptions(){return MODES.map(m=>'<option value="'+m[0]+'"'+(m[0]===window.MindGardenPreferredRoomMode?' selected':'')+'>'+esc(m[0]==='bingo9'?T('Picture bingo · host-paced','图片宾果 · 房主控制节奏'):save.lang==='zh'?(m[2]||tr(m[1])):m[1])+'</option>').join('')}
function people(s){return '<ul class="mp-roster">'+s.players.map(p=>'<li>'+user(p.name)+(s.players.filter(q=>q.name.trim().toLowerCase()===p.name.trim().toLowerCase()).length>1?' <small translate="no">· '+esc(p.id.slice(-4))+'</small>':'')+(p.id===session?.id?' <small>'+T('You','你')+'</small>':'')+(p.host?' <small>'+T('Host','房主')+'</small>':'')+'<span>'+ (p.departed?T('Left room','已退出'):p.skipped?T('Not finished','未完成'):p.score!==null?T('Finished','已完成'):s.started?(p.beganAt?T('Started','已开始'):T('Waiting for Begin','等待点击开始')):T('Joined','已加入'))+' · '+(s.serverTime-p.lastSeen<15000?T('Online','在线'):T('Reconnecting','重新连接中'))+'</span></li>').join('')+'</ul>'}
function renderLobby(s){screen='lobby';overlay(base(s)+'<div class="mp-lobby-columns"><section class="mp-lobby-people"><p>'+T('Planned rounds: ','计划回合数：')+(s.totalRounds||T('Legacy room · finish manually','旧版房间 · 手动结束'))+'</p><h3 id="mpPlayerCount"></h3><div id="mpRoster"></div><div id="mpDelivery" aria-live="polite"></div></section><section class="mp-lobby-actions">'+(s.host?'<label class="lab">'+T('Activity','活动')+'<select id="mpMode">'+modeOptions()+'</select></label><button class="btn main" id="mpLaunch">'+T('Prepare round','准备回合')+'</button><p>'+T('Wait for your friends to join. After launch, each player presses Begin when ready. No new players can join after launch.','请等待朋友加入。房主开始后，每位玩家准备好再点击开始。开始后不能加入新玩家。')+'</p>':'<p>'+T('Wait for the host to prepare a round, then press Begin when you are ready.','等待房主准备回合，准备好后再点击开始。')+'</p>')+(s.host?'<button class="btn" id="mpCancelRoom">'+T('End room','结束房间')+'</button>':'')+'</section></div><details class="mp-invitation-details"><summary>'+T('Invitation link & sharing','邀请链接与分享')+'</summary>'+shareControls()+'</details><p id="multiError" role="alert"></p>');wireShare();if($('mpCancelRoom'))$('mpCancelRoom').onclick=cancelRoom;if(s.host)$('mpLaunch').onclick=()=>action(async()=>{const state=await api('launch',{...room,round:0,mode:$('mpMode').value});accept(state)});updateLobby(s)}
function updateLobby(s){if($('mpPlayerCount'))$('mpPlayerCount').textContent=s.players.filter(p=>!p.departed).length+'/8 '+T('players joined','位玩家已加入');if(s.players&&$('mpRoster'))$('mpRoster').innerHTML=people(s);if($('mpLaunch'))$('mpLaunch').disabled=s.players.filter(p=>!p.departed).length<2;
 if($('mpDelivery')&&s.host)$('mpDelivery').innerHTML='<p>'+T('Invitation delivery','邀请送达')+': '+s.invitations.filter(p=>p.receivedAt).length+'/'+s.invitations.length+'</p><ul class="mp-receipts">'+s.invitations.map(p=>'<li>'+user(p.name)+' — '+(p.receivedAt?T('Room code received','已收到房间码'):T('Awaiting connection','等待连接'))+'</li>').join('')+'</ul>';
}
async function poll(){if(!room||last?.sessionFinished||screen==='closed'||pollRequest?.gen===generation||document.hidden||!current())return;const gen=generation,c=room.code,ticket={gen};pollRequest=ticket;try{const s=await api('status',{...room,seenRound:shownRound});if(!current(gen)||room?.code!==c)return;accept(s);if($('mpConnection'))$('mpConnection').textContent=''}catch(e){if(current(gen)){if([401,403,404,410].includes(e.status)){room=null;game=null;screen='closed';generation++;remove(KEY);remove(GAME);if(e.status===401){session=null;remove(SESSION);clearInterval(loungeTimer);$('onlineInvitation')?.remove()}overlay('<h2>'+T('Room unavailable','房间不可用')+'</h2><p>'+esc(save.lang==='zh'&&window.tr?tr(e.message):e.message)+'</p><button class="btn" id="mpBackLobby">'+T('Back to lobby','返回大厅')+'</button>');$('mpBackLobby').onclick=menu;return}if($('mpConnection'))$('mpConnection').textContent=T('Connection interrupted. Reconnecting; your room and score are kept.','连接中断，正在重连；房间和积分已保留。');error(e)}}finally{if(pollRequest===ticket)pollRequest=null}}
function endRound(){if(confirm(T('End this round? Unfinished players receive no points.','结束本轮？未完成的玩家本轮不得分。')))action(async()=>accept(await api('finishRound',{...room,round:last.round})))}
function rankAward(rank,eligible=true){return (eligible&&rank>=1&&rank<=3?'<span class="rank-award" aria-label="'+T(['Gold','Silver','Bronze'][rank-1],['金奖','银奖','铜奖'][rank-1])+'">'+trophy(rank-1)+'</span> ':'')+rank}
function liveScores(s){const players=[...s.players].sort((a,b)=>(b.total||0)-(a.total||0));return '<h3>'+T('Room rankings','房间排名')+'</h3><p>'+T('Saved points so far; this round updates when results are submitted.','已保存的积分；本轮成绩提交后更新。')+'</p><div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('Total','总积分')+'</th></tr></thead><tbody>'+players.map(p=>'<tr><td>'+rankAward(1+players.filter(q=>(q.total||0)>(p.total||0)).length,(p.total||0)>0)+'</td><td>'+user(p.name)+'</td><td>'+(p.total||0)+'</td></tr>').join('')+'</tbody></table></div>'}
function livePanel(){if(!last)return;const panel=document.createElement('section');panel.className='mp-live';panel.innerHTML='<h3>'+T('Room players · live status','房间玩家 · 实时状态')+'</h3><div id="mpRoster">'+people(last)+'</div><div id="mpLiveScores">'+liveScores(last)+'</div>'+(last.host?'<button class="btn sm" id="mpEndRound">'+T('End current round','结束本轮')+'</button>':'');const target=$('box').querySelector('.mp-board,.gridm,#onlineBingo,.mp-ready');(target||$('multiError')).before(panel);if($('mpEndRound'))$('mpEndRound').onclick=endRound}

function accept(s){if(!current()||!room||s.code!==room.code)return;last=s;if(s.players&&$('mpLiveScores'))$('mpLiveScores').innerHTML=liveScores(s);if(s.players&&s.round)rememberResult(s);if(s.left||(s.closed&&!s.sessionFinished)){releaseRoom(s.code,s.left?T('You have left the room. Enter another room code below. Other players can continue.','您已退出房间，可在下方输入其他房间码。其他玩家可以继续。'):T('The host closed this room. You can join or create another room.','房主已关闭此房间。您可以加入或创建其他房间。'));return}if(s.players&&$('mpRoster'))$('mpRoster').innerHTML=people(s);
 if(!s.started){if(screen!=='lobby')renderLobby(s);else updateLobby(s);return}
 const mine=s.players.find(p=>p.id===s.me);if(s.finished){if(screen!=='results'||shownRound!==s.round||!!$('mpSessionFinished')!==!!s.sessionFinished)results(s);return}
 if(s.mode==='bingo9'&&!mine?.skipped){shownRound=s.round;game=null;if(s.requiresBegin&&!s.allReady)drawBingoReady(s);else drawBingoOnline(s);return}
 if(mine?.score!==null||mine?.skipped){shownRound=s.round;if(screen!=='waiting')waitingForOther(s);else updateLobby(s);return}
 if(shownRound!==s.round||!game){shownRound=s.round;screen='game';const saved=read(GAME);if(saved?.code===room.code&&saved.round===s.round&&saved.mode===s.mode){game=saved;if(saved.done)game.done=new Set(saved.done);game.locked=false;if(game.open?.length===2)game.open=[];if(game.submitted){finish();return}game.mode.startsWith('pairs')?draw('Find the matching picture.'):game.phase==='ready'?drawQuizReady():drawQuiz('Choose the best answer. Take your time.')}else start(s)}
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
 overlay(base(last)+'<section class="mp-ready"><h3>'+esc(activityName(g.mode))+'</h3><p>'+T('Press Begin when you are ready. Questions stay hidden and your timer has not started.','准备好后点击开始。题目暂不显示，计时尚未开始。')+'</p><button class="btn main" id="mpBeginGame">'+T('Begin','开始')+'</button></section><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button><p id="multiError" role="alert"></p>');
 $('mpExit').onclick=exitScreen;livePanel();
 $('mpBeginGame').onclick=()=>beginRound($('mpBeginGame'),state=>{if(game!==g)return;g.started=Date.now();g.phase='playing';checkpoint();drawQuiz(T('Choose the best answer. Take your time.','选择最佳答案，不用着急。'))});
}
function drawBingoReady(s){
 const mine=s.players.find(p=>p.id===s.me),ready=!!mine.beganAt;
 if(screen==='bingo-ready'&&!!$('mpBeginGame')===!ready){updateLobby(s);return}
 screen='bingo-ready';
 overlay(base(s)+'<section class="mp-ready"><h3>'+T('Picture bingo · ready check','图片宾果 · 准备确认')+'</h3><p>'+T('Everyone must press Begin before the first picture appears. The host cannot call ahead while someone is not ready.','所有人点击开始后才显示第一张图片。有人未准备好时，房主不能提前叫图。')+'</p>'+(ready?'<p>'+T('You are ready. Waiting for the other players.','您已准备好，正在等待其他玩家。')+'</p>':'<button class="btn main" id="mpBeginGame">'+T('Begin','开始')+'</button>')+'</section>'+shareControls()+'<p id="multiError" role="alert"></p>');
 wireShare();livePanel();if($('mpBeginGame'))$('mpBeginGame').onclick=()=>beginRound($('mpBeginGame'),accept);
}
let bingoViewKey='';
function drawBingoOnline(s){
 const kit=window.MindGardenNewGames,mine=s.players.find(p=>p.id===s.me),called=s.bingo?.called||1,mask=mine?.bingoMask||0;
 const key=JSON.stringify([s.code,s.round,called,s.players.map(p=>[p.id,p.bingoMask,p.score,p.skipped,p.departed])]);
 if(screen==='bingo'&&key===bingoViewKey&&$('onlineBingo'))return;
 const focused=document.activeElement,focusID=focused?.id,focusTile=focused?.getAttribute('data-room-bingo');
 bingoViewKey=key;screen='bingo';const items=kit.bingoItems(s.seed,s.round),order=shuffle(Array.from({length:9},(_,i)=>i),randomizer(s.seed^parseInt(s.me.slice(0,8),16))),marked=new Set(order.filter(i=>mask&(1<<i))),current=items[called-1],members=s.players.filter(p=>!p.departed&&!p.skipped),ready=members.filter(p=>p.bingoMask&(1<<(called-1))).length;
 overlay(base(s)+'<section id="onlineBingo" class="new-game" translate="no"><h3>'+T('Picture bingo · play together','图片宾果 · 一起玩')+'</h3><p>'+T('The host calls each picture. Mark any picture already called. Complete all 9 together; there is no speed bonus.','房主逐张叫图，您可以标记任何已经叫到的图片。一起完成9张图片，没有速度奖励。')+'</p><div class="bingo-call" tabindex="-1" id="roomBingoCall" role="status"><span class="bingo-picture" aria-hidden="true">'+gamePicture(current[0])+'</span><strong>'+T(current[1],current[2])+'</strong><small>'+T('Call ','已叫')+called+'/9 · '+ready+'/'+members.length+T(' players marked this picture','位玩家已标记此图')+'</small></div>'+kit.bingoBoard(items,order,called,marked,'data-room-bingo')+'<p>'+marked.size+'/9 '+T('marked on your card','张已标记')+'</p><details><summary>'+T('Pictures called so far','已经叫到的图片')+'</summary><div class="bingo-called">'+items.slice(0,called).map(p=>'<span>'+p[0]+' '+T(p[1],p[2])+'</span>').join('')+'</div></details><div class="new-actions">'+(s.host?'<button class="btn main" id="roomBingoNext"'+(called>=9?' disabled':'')+'>'+T('Call next picture','叫下一张图片')+'</button>':'<p>'+T('The host will call the next picture when everyone is ready.','大家准备好后，房主会叫下一张图片。')+'</p>')+'<button class="btn" id="roomBingoSpeak"'+(!window.speechSynthesis?' disabled':'')+'>'+T('Read picture name','朗读图片名称')+'</button></div>'+(mine.score!==null?'<p role="status">'+T('Your full card and result are saved. Waiting for the other players.','您的完整卡片与成绩已保存，正在等待其他玩家。')+'</p>':'')+'</section>'+shareControls()+'<p id="multiError" role="alert"></p>');
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
  overlay(base({round:g.round})+'<div class="mp-pair-status"><p id="mpPairMessage" role="status"></p>'+Object.values(messages).map(text=>'<p class="mp-message-reserve" aria-hidden="true">'+esc(text)+'</p>').join('')+'</div><p id="mpPairCount"></p><div id="mpPairPreview" class="mp-pair-controls"><button type="button" class="btn main" id="mpBeginPairs">'+T('Begin','开始')+'</button><p id="mpPairPhase" aria-live="off"></p><p class="mp-phase-reserve" aria-hidden="true">'+T('Remember: 8 seconds','记忆时间：8 秒')+'</p></div><div class="mp-board" tabindex="-1" role="group" aria-label="'+T('Matching cards','配对卡片')+'" style="grid-template-columns:repeat('+(count===10?5:4)+',minmax(0,1fr))">'+cards+'</div><div class="row"><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button></div><p id="multiError" role="alert"></p>');
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
 function drawQuiz(msg){screen='game';checkpoint();const g=game;if(!g)return;if(g.feedback)return drawQuizFeedback();const q=g.questions[g.index];overlay(base({round:g.round})+'<p>'+esc(msg)+'</p><p>Question '+(g.index+1)+' of '+g.questions.length+'</p><div class="seqline">'+gamePrompt(q.title)+'</div><div class="gridm" style="--c:2">'+q.options.map((o,i)=>'<button class="big '+(isGamePicture(q.labels?.[o]||o)?'picture-answer':'txt')+'" data-answer="'+i+'">'+(isGamePicture(q.labels?.[o]||o)?gamePicture(q.labels?.[o]||o):esc(q.labels?.[o]||o))+'</button>').join('')+'</div><div class="row"><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button></div><p id="multiError" role="alert"></p>');$('mpExit').onclick=exitScreen;document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>answer(+b.dataset.answer));livePanel()}
 function drawQuizFeedback(){const g=game;if(!g?.feedback)return;const f=g.feedback;overlay(base({round:g.round})+'<section role="status"><h3>'+T(f.good?'Correct!':'Let’s review',f.good?'正确！':'一起回顾')+'</h3><p><strong>'+T('Correct answer: ','正确答案：')+'</strong>'+esc(f.expected)+'</p><p><strong>'+T('Your answer: ','您的答案：')+'</strong>'+esc(f.chosen)+'</p></section><p>'+T('Continue when you are ready.','准备好后再继续。')+'</p><div class="row"><button class="btn main" id="mpQuizContinue">'+T(g.index+1===g.questions.length?'See results':'Next question',g.index+1===g.questions.length?'查看结果':'下一题')+'</button></div><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button><p id="multiError" role="alert"></p>');$('mpExit').onclick=exitScreen;$('mpQuizContinue').onclick=()=>{if(game!==g||!g.feedback)return;delete g.feedback;g.index++;checkpoint();if(g.index===g.questions.length){g.submitted=true;finish()}else drawQuiz(T('Choose the best answer. Take your time.','选择最佳答案，不用着急。'))};livePanel()}
 function answer(i){const g=game;if(!g||g.submitted||g.feedback||g.phase==='ready')return;const q=g.questions[g.index];if(!Number.isInteger(i)||i<0||i>=q.options.length)return;const good=q.options[i]===q.answer;(g.answers||(g.answers=[])).push(q.options[i]);g.moves+=good?1:2;if(good)g.correct++;g.feedback={good,expected:q.labels?.[q.answer]||q.answer,chosen:q.labels?.[q.options[i]]||q.options[i]};if(good)chime();else beep(300,.22,'sine');checkpoint();drawQuizFeedback()}

async function finish(){const g=game;if(!g||!room)return;checkpoint();const gen=generation,c=room.code;screen='saving';overlay(base({round:g.round})+'<p>'+T('Saving your result…','正在保存成绩……')+'</p><p id="multiError" role="alert"></p><button class="btn" id="mpExit">'+T('Back to garden · stay joined','返回花园 · 保留参与')+'</button>');$('mpExit').onclick=exitScreen;
 try{const s=await api('submit',{code:c,round:g.round,moves:g.moves,answers:g.answers,elapsed:Math.max(1,Math.floor((Date.now()-g.started)/1000))});if(!current(gen)||room?.code!==c)return;g.saved=true;checkpoint();accept(s)}catch(e){if(!current(gen))return;error(e);const b=document.createElement('button');b.className='btn';b.textContent=T('Retry saving','重新保存');b.onclick=()=>finish();$('multiError').after(b)}}
function waitingForOther(s){screen='waiting';overlay(base(s)+'<h3>'+T('Your round is complete','本轮已完成')+'</h3><div id="mpRoster"></div><p>'+T('Waiting for the other players. Your result is saved.','等待其他玩家，成绩已保存。')+'</p>'+ (s.host?'<button class="btn" id="mpEndRound">'+T('End round for unfinished players','结束未完成玩家的本轮游戏')+'</button>':'')+shareControls()+'<p id="multiError" role="alert"></p>');wireShare();updateLobby(s);if($('mpEndRound'))$('mpEndRound').onclick=()=>{if(confirm(T('End this round? Unfinished players will be marked not finished and receive no points for this round.','结束本轮？未完成的玩家将标记为未完成，本轮不得分。')))action(async()=>accept(await api('finishRound',{...room,round:s.round})))}}
function rememberResult(s){const mine=s.players?.find(p=>p.id===s.me);if(!mine||(!mine.skipped&&(mine.score===null||mine.score===undefined))||!s.round)return;const p=me();p.multiplayerHistory=p.multiplayerHistory||[];const key=s.code+':'+s.seed+':'+s.round;if(!p.multiplayerHistory.some(r=>r.key===key)){p.multiplayerHistory.push({key,date:new Date(s.serverTime||Date.now()).toISOString(),activity:s.mode,round:s.round,score:mine.score,total:mine.total,skipped:!!mine.skipped});persist()}}
function results(s){rememberResult(s);if(s.sessionFinished){membershipRevision++;if(read(KEY)?.code===s.code)remove(KEY);clearInvite()}screen='results';game=null;shownRound=s.round;remove(GAME);const players=[...s.players].sort((a,b)=>b.total-a.total||a.name.localeCompare(b.name));
 overlay(base(s)+(s.sessionFinished?'<h3 id="mpSessionFinished">'+T('Session complete','本次游戏已完成')+'</h3><p>'+T('Final scores are saved. Everyone can now join or create another room.','最终成绩已保存。所有人现在可以加入或创建其他房间。')+'</p>':'')+'<h3>'+T('Room leaderboard','房间排行榜')+'</h3><div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('This round','本轮')+'</th><th>'+T('Total','总积分')+'</th></tr></thead><tbody>'+players.map((p,i)=>'<tr><td>'+rankAward(1+players.filter(x=>x.total>p.total).length,p.score!==null||p.total>0)+'</td><td>'+user(p.name)+'</td><td>'+(p.departed?T('Left room','已退出'):p.skipped?T('Not finished','未完成'):p.score)+'</td><td>'+p.total+'</td></tr>').join('')+'</tbody></table></div>'+(s.sessionFinished?'<button class="btn main" id="mpFinalLobby">'+T('Back to online lobby','返回在线大厅')+'</button>':s.host?'<label class="lab">'+T('Next activity','下一项活动')+'<select id="mpMode">'+modeOptions()+'</select></label><div class="row"><button class="btn main" id="mpNext">'+T('Prepare next round','准备下一轮')+'</button><button class="btn" id="mpCloseRoom">'+T('Finish session','结束本次游戏')+'</button></div>':'<p>'+T('Waiting for the host to start the next round.','等待房主开始下一轮。')+'</p>')+shareControls()+'<p id="multiError" role="alert"></p>');wireShare();
 if(s.sessionFinished){$('mpFinalLobby').onclick=()=>{suspend();menu()};$('mpExit').textContent=T('Back to garden','返回花园')}
 else if(s.host){$('mpNext').onclick=()=>action(async()=>accept(await api('advance',{...room,round:s.round,mode:$('mpMode').value})));$('mpCloseRoom').onclick=()=>action(async()=>accept(await api('finishSession',{...room,round:s.round})))}
}

function activityName(id){const m=MODES.find(v=>v[0]===id);return m?(save.lang==='zh'?(m[2]||window.tr?.(m[1])||m[1]):m[1]):T('Earlier activity','较早的活动')}
function historyFrame(html){overlay('<section class="online-history"><h2>'+T('Saved online rankings','已保存的在线排名')+'</h2>'+html+'<div class="row"><button class="btn" id="historyLobby">'+T('Online lobby','在线大厅')+'</button><button class="btn" id="historyClose">'+T('Close','关闭')+'</button></div><p id="multiError" role="alert"></p></section>');$('historyLobby').onclick=menu;$('historyClose').onclick=exitScreen}
async function openHistory(offset=0){
 window.MindGardenMenuHistory?.enter('online-history',()=>openHistory(offset));
 checkpoint();clearPairTimers();generation++;const gen=generation;room=null;game=null;last=null;screen='history';
 if(!session){historyFrame('<p>'+T('Enter the online lobby to view rooms linked to this browser’s online identity.','进入在线大厅，查看与此浏览器在线身份关联的房间。')+'</p>');return}
 historyFrame('<p>'+T('Loading your rooms…','正在加载您的房间……')+'</p>');
 const data=await api('history',{offset});if(!current(gen))return;
 historyFrame('<p>'+T('Completed scores are kept after a room closes. Only participants can view a room’s rankings. History follows this browser’s online identity; clearing site data removes access to that identity.','房间关闭后，已完成的成绩仍会保留。仅参与者可查看房间排名。记录与此浏览器的在线身份关联，清除网站数据会失去该身份的访问权限。')+'</p><div class="history-rooms">'+(data.rooms.length?data.rooms.map(r=>'<button class="history-room" data-history-room="'+esc(r.code)+'"><strong>'+T('Room ','房间 ')+esc(r.code)+'</strong><span>'+esc(new Date(r.createdAt).toLocaleString(save.lang==='zh'?'zh-CN':'en-GB'))+'</span><small>'+r.completed+T(r.completed===1?' completed round · ':' completed rounds · ','轮已完成 · ')+r.total+T(' points','分')+' · '+(r.status==='closed'?T('Closed','已关闭'):T('Open','进行中'))+'</small></button>').join(''):'<p>'+T('No played rooms yet. Completed online rounds will appear here.','尚无游戏房间记录。在线游戏回合会显示在这里。')+'</p>')+'</div><div class="row">'+(offset?'<button class="btn" id="historyPrevious">'+T('Previous rooms','上一页房间')+'</button>':'')+(data.nextOffset!==null?'<button class="btn" id="historyNext">'+T('More rooms','更多房间')+'</button>':'')+'</div>');
 document.querySelectorAll('[data-history-room]').forEach(b=>b.onclick=()=>action(()=>openRoomHistory(b.dataset.historyRoom,0,offset)));
 if($('historyPrevious'))$('historyPrevious').onclick=()=>action(()=>openHistory(Math.max(0,offset-20)));if($('historyNext'))$('historyNext').onclick=()=>action(()=>openHistory(data.nextOffset));
}
async function openRoomHistory(code,offset=0,roomOffset=0){
 window.MindGardenMenuHistory?.enter('online-room-history:'+code,()=>openRoomHistory(code,offset,roomOffset));const gen=generation;historyFrame('<p>'+T('Loading saved results…','正在加载已保存成绩……')+'</p>');const data=await api('rankings',{code,offset});if(!current(gen))return;
 const table=rows=>'<div class="mp-table-wrap"><table class="mp-table"><thead><tr><th>'+T('Rank','排名')+'</th><th>'+T('Player','玩家')+'</th><th>'+T('Points','积分')+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
 const summary=table(data.players.map(p=>'<tr><td>'+(p.rank?rankAward(p.rank,p.completed>0):'—')+'</td><td>'+user(p.name)+'</td><td>'+p.total+'<br><small>'+p.completed+T(' completed','轮已完成')+'</small></td></tr>').join(''));
 historyFrame('<h3>'+T('Room ','房间 ')+esc(code)+'</h3><p>'+T('Totals across this room’s completed rounds. Equal scores share a rank.','汇总此房间已完成回合的积分，同分并列。')+'</p>'+summary+'<h3>'+T('Round history','回合记录')+'</h3>'+data.rounds.map(r=>'<details class="saved-round"><summary>'+T('Round ','第')+r.round+' · '+esc(activityName(r.mode))+'</summary>'+table(r.results.map(p=>'<tr><td>'+(p.score===null?'—':rankAward(1+r.results.filter(v=>v.score!==null&&v.score>p.score).length))+'</td><td>'+user(p.name)+'</td><td>'+(p.score===null?T('Not finished','未完成'):p.score)+'</td></tr>').join(''))+'</details>').join('')+'<div class="row">'+(offset?'<button class="btn" id="roundsPrevious">'+T('Newer rounds','较新回合')+'</button>':'')+(data.nextOffset!==null?'<button class="btn" id="roundsNext">'+T('Earlier rounds','较早回合')+'</button>':'')+'<button class="btn" id="historyRooms">'+T('Back to my rooms','返回我的房间记录')+'</button></div>');
 $('historyRooms').onclick=()=>action(()=>openHistory(roomOffset));if($('roundsPrevious'))$('roundsPrevious').onclick=()=>action(()=>openRoomHistory(code,Math.max(0,offset-20),roomOffset));if($('roundsNext'))$('roundsNext').onclick=()=>action(()=>openRoomHistory(code,data.nextOffset,roomOffset));
}
const localLeaderboard=window.lbView;window.lbView=function(...args){localLeaderboard(...args);const tabs=document.createElement('div');tabs.className='ranking-tabs';tabs.innerHTML='<button class="btn" type="button" aria-pressed="true">'+(window.MindGardenAccount?.connected?T('Account players','账户玩家'):T('On this device','此设备'))+'</button><button class="btn" type="button" id="leaderboardOnline">'+T('Online room rankings','在线房间排名')+'</button>';$('box').querySelector('h2')?.after(tabs);$('leaderboardOnline').onclick=()=>action(()=>openHistory())};

window.addEventListener('pagehide',checkpoint);
function refreshOnline(){if(current()&&game?.phase==='preview')runPairClock(game);poll();lounge()}
window.addEventListener('focus',refreshOnline);document.addEventListener('visibilitychange',()=>{if(document.hidden)checkpoint();else refreshOnline()});
$('bOnline').onclick=menu;
if(session)startLounge();
if(/^[A-Z2-9]{6}$/i.test(new URLSearchParams(location.search).get('room')||''))setTimeout(menu,350);
})();
