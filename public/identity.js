/* One device's active profile remains selected after leaving multiplayer. */
(function(){
'use strict';
const T=(en,zh)=>save.lang==='zh'?zh:en;
async function rename(n){
 n=n.trim();if(!/^[\p{L}\p{N} ._'-]{1,20}$/u.test(n))throw Error(T('Use 1–20 letters or numbers; spaces are allowed.','请使用1至20个字母或数字，可含空格。'));
 const profile=me();await window.MindGardenMultiplayer?.rename(n);if(Object.values(save.pr).includes(profile)){profile.name=n;persist()}if(me()===profile)renderHome();return n;
}
function editor(){
 overlay('<h2>'+T('Make this garden yours','让花园属于你')+'</h2><label class="lab">'+T('Your name','你的名称')+'<input id="gardenName" maxlength="20" autocomplete="nickname" value="'+esc(me().name)+'"></label><p class="tip">'+T('Saved on this device, including after you leave the online lobby. If you are online, your room name updates too.','名称保存在此设备，退出在线大厅后仍会保留。在线时，房间中的名称也会同步更新。')+'</p><div class="row"><button class="btn main" id="gardenNameSave">'+T('Save name','保存名称')+'</button><button class="btn" id="gardenNameProfiles">'+T('Choose or add a player','选择或添加玩家')+'</button><button class="btn" id="gardenNameDone">'+T('Done','完成')+'</button></div><p id="gardenNameStatus" role="status"></p>');
 document.getElementById('gardenNameSave').onclick=async()=>{const b=document.getElementById('gardenNameSave');b.disabled=true;try{await rename(document.getElementById('gardenName').value);if(b.isConnected)closeOv()}catch(e){if(document.getElementById('gardenNameStatus'))document.getElementById('gardenNameStatus').textContent=e.message}finally{b.disabled=false}};
 document.getElementById('gardenNameProfiles').onclick=()=>openPl();document.getElementById('gardenNameDone').onclick=closeOv;
}
const originalSettings=window.openSet;window.openSet=function(){originalSettings();const group=document.createElement('section');group.className='account-settings';group.innerHTML='<h3>'+T('Player & garden','玩家与花园')+'</h3><p>'+T('Playing as ','当前玩家：')+'<strong translate="no">'+esc(me().name)+'</strong></p><div class="row"><button class="btn" id="settingsRename">'+T('Rename me','修改我的名称')+'</button><button class="btn" id="settingsPlayers">'+T('Choose or add a player','选择或添加玩家')+'</button><button class="btn" id="settingsFamily">'+T('Family view','家人视图')+'</button><button class="btn" id="settingsSound">'+T('Music & nature','音乐与自然')+'</button></div>';document.getElementById('box').prepend(group);document.getElementById('settingsRename').onclick=editor;document.getElementById('settingsPlayers').onclick=()=>openPl();document.getElementById('settingsFamily').onclick=()=>famView();document.getElementById('settingsSound').onclick=()=>openMu()};document.getElementById('bSet').onclick=window.openSet;
const originalPlayers=window.openPl;window.openPl=function(){originalPlayers();const b=document.createElement('button');b.className='btn';b.id='profileRename';b.textContent=T('Rename current player','修改当前玩家名称');b.onclick=editor;document.getElementById('pd').before(b)};document.getElementById('bPl').onclick=()=>window.openPl();
window.MindGardenIdentity={open:editor,rename,syncSelected:()=>window.MindGardenMultiplayer?.rename(me().name).catch(()=>{})};
})();
