/* One device's active profile remains selected after leaving multiplayer. */
(function(){
'use strict';
const T=(en,zh)=>window.MindGardenLocale.pair(en,zh);
const normalise=n=>String(n||'').normalize('NFKC').trim().replace(/\s+/gu,' ').toLowerCase();
function nameError(n,excludeId=null,profiles=save.pr){
 const name=String(n||'').normalize('NFKC').trim().replace(/\s+/gu,' ');
 if(!/^[\p{L}\p{N} ._'-]{1,20}$/u.test(name))return T('Use 1–20 letters or numbers; spaces are allowed.','请使用1至20个字母或数字，可含空格。');
 const key=normalise(name);
 if(excludeId&&profiles[excludeId]&&key===normalise(profiles[excludeId].name))return '';
 return Object.entries(profiles).some(([id,p])=>id!==excludeId&&normalise(p.name)===key)?T('This name is unavailable. Choose a different player name.','此名称不可用，请选择其他玩家名称。'):'';
}
function bindName(input,status,excludeId=null,profiles=()=>save.pr){
 input.setAttribute('aria-describedby',status.id);status.setAttribute('role','alert');
 const validate=()=>{const error=nameError(input.value,excludeId,profiles());input.setCustomValidity(error);input.setAttribute('aria-invalid',String(!!error));status.textContent=error;return !error};
 input.addEventListener('input',validate);return validate;
}
async function rename(n){
 n=n.normalize('NFKC').trim().replace(/\s+/gu,' ');const error=nameError(n,save.cp);if(error)throw Error(error);
 const profile=me(),previous=profile.name;await window.MindGardenMultiplayer?.rename(n);if(Object.values(save.pr).includes(profile)){profile.name=n;if(persist()===false){profile.name=previous;throw Error(T('Name could not be saved. Free device storage and retry.','无法保存名称，请释放设备存储空间后重试。'))}}if(me()===profile)renderHome();return n;
}
function editor(){
 window.MindGardenMenuHistory?.enter('rename',()=>editor());
 overlay('<section class="rename-panel"><div class="menu-brand">🌿 '+T('Mind Garden','心灵花园')+'</div><h2>'+T('Change player name','修改玩家名称')+'</h2><p>'+T('Editing: ','正在修改：')+esc(me().name)+'</p><label class="lab">'+T('Player name','玩家名称')+'<input id="gardenName" maxlength="20" autocomplete="nickname" value="'+esc(me().name)+'"></label><p class="record-assurance">'+T('Your past scores and progress stay with this player.','过去的成绩和进度会保留在这位玩家的资料中。')+'</p><p>'+T('Changing a name does not combine two players or retrieve another player’s records.','修改名称不会合并两位玩家，也不会读取另一位玩家的记录。')+'</p><div class="row"><button class="btn main" id="gardenNameSave">'+T('Save name','保存名称')+'</button><button class="btn" id="gardenNameDone">'+T('Cancel','取消')+'</button></div><p id="gardenNameStatus" role="status"></p><div class="rename-account-option"><button class="btn" id="gardenOnlineAccount">'+T('Online account (optional)','在线账户（可选）')+'</button>'+window.MindGardenAccount.infoButton()+'</div></section>');
 const validate=bindName(document.getElementById('gardenName'),document.getElementById('gardenNameStatus'),save.cp);
 document.getElementById('gardenNameSave').onclick=async()=>{const b=document.getElementById('gardenNameSave');if(!validate()){document.getElementById('gardenName').focus();return;}b.disabled=true;try{await rename(document.getElementById('gardenName').value);if(b.isConnected){if(window.MindGardenMenuHistory)window.MindGardenMenuHistory.finish();else closeOv()}}catch(e){if(document.getElementById('gardenNameStatus'))document.getElementById('gardenNameStatus').textContent=e.message}finally{b.disabled=false}};
 document.getElementById('gardenNameDone').onclick=closeOv;
 document.getElementById('gardenOnlineAccount').onclick=()=>window.MindGardenAccount.panel();

}
const originalSettings=window.openSet;window.openSet=function(){originalSettings();const group=document.createElement('section');group.className='account-settings';group.innerHTML='<h3>'+T('Player & garden','玩家与花园')+'</h3><p>'+T('Playing as ','当前玩家：')+'<strong translate="no">'+esc(me().name)+'</strong></p><div class="row"><button class="btn" id="settingsRename">'+T('Rename me','修改我的名称')+'</button><button class="btn" id="settingsPlayers">'+T('Choose or add a player','选择或添加玩家')+'</button><button class="btn" id="settingsFamily">'+T('Players’ Progress','玩家进度')+'</button><button class="btn" id="settingsSound">'+T('Music & nature','音乐与自然')+'</button></div>';document.getElementById('box').prepend(group);document.getElementById('settingsRename').onclick=editor;document.getElementById('settingsPlayers').onclick=()=>openPl();document.getElementById('settingsFamily').onclick=()=>famView();document.getElementById('settingsSound').onclick=()=>openMu()};document.getElementById('bSet').onclick=window.openSet;
const originalPlayers=window.openPl;window.openPl=function(){originalPlayers();const input=document.getElementById('pn'),status=document.createElement('p');status.id='playerNameStatus';input.maxLength=20;input.closest('label').after(status);const validate=bindName(input,status),add=document.getElementById('pa'),originalAdd=add.onclick;add.onclick=()=>{if(!validate()){input.focus();return;}input.value=input.value.normalize('NFKC').trim().replace(/\s+/gu,' ');originalAdd()};const b=document.createElement('button');b.className='btn';b.id='profileRename';b.textContent=T('Rename player','修改玩家名称');b.onclick=editor;document.getElementById('pd').before(b)};document.getElementById('bPl').onclick=()=>window.openPl();
window.MindGardenIdentity={open:editor,rename,nameError,bindName,syncSelected:()=>window.MindGardenMultiplayer?.rename(me().name).catch(()=>{})};
})();
