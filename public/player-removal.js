/* Destructive actions apply only to the selected player and require a named confirmation. */
(function(){
'use strict';const $=id=>document.getElementById(id),T=(a,b)=>MindGardenLocale.pair(a,b);
function confirmRemoval(id,historyOnly){
 window.MindGardenMenuHistory?.enter('delete:'+id+':'+historyOnly,()=>confirmRemoval(id,historyOnly));if(id!==save.cp)return;const player=me(),owner=save.accountSync?{...save.accountSync}:null;
 overlay('<section class="personal-panel"><h2>'+T(historyOnly?'Delete my history':'Delete my player',historyOnly?'删除我的记录':'删除我的玩家')+'</h2><p>'+esc(player.name)+'</p><p>'+T('This affects this player only. Other players and separate copies are kept.','此操作仅影响这位玩家，其他玩家及独立副本会保留。')+'</p><label for="deletePlayerName">'+T('Type your player name to confirm','输入您的玩家名称以确认')+'</label><input id="deletePlayerName" autocomplete="off">'+(owner?'<label for="deletePlayerPassword">'+T('Account password','账户密码')+'</label><input id="deletePlayerPassword" type="password" autocomplete="current-password">':'<p>'+T('Anyone using an unprotected shared browser can access device-only profiles. A personal account adds account verification.','共用且未受保护的浏览器无法识别操作人；个人账户可增加账户验证。')+'</p>')+'<p id="deletePlayerStatus" role="status"></p><button class="btn" id="deletePlayerCancel">'+T('Keep my records','保留我的记录')+'</button><button class="btn" id="deletePlayerConfirm">'+T('Confirm deletion','确认删除')+'</button></section>');
 $('deletePlayerCancel').onclick=()=>openPl();$('deletePlayerName').focus();$('deletePlayerConfirm').onclick=async()=>{const b=$('deletePlayerConfirm');if($('deletePlayerName').value.trim()!==player.name){$('deletePlayerStatus').textContent=T('Enter the player name exactly as shown.','请准确输入上方玩家名称。');return;}b.disabled=true;try{
 const next=JSON.parse(JSON.stringify(save.pr));let selected=id;
 if(historyOnly){Object.assign(next[id],{log:[],multiplayerHistory:[],streak:0,last:'',gp:0,bt:{}})}else{delete next[id];if(!Object.keys(next).length){const fresh='p'+Date.now();next[fresh]=newP(T('Player 1','玩家1'));}selected=Object.keys(next)[0]}
 if(owner){await window.MindGardenAccount.saveRemoval({schemaVersion:1,profiles:next},$('deletePlayerPassword').value,selected);if(b.isConnected)openPl();return}
 if(!b.isConnected||save.cp!==id||me()!==player)return;
 const previous=save.pr,previousId=save.cp;save.pr=next;save.cp=selected;load();
 if(persist()===false){save.pr=previous;save.cp=previousId;load();throw Error(T('Device save failed. Retry before closing.','设备保存失败，请在关闭前重试。'))}
 renderHome();openPl();}catch(e){if($('deletePlayerStatus'))$('deletePlayerStatus').textContent=e.message;b.disabled=false}};
}
$('box').addEventListener('click',e=>{const b=e.target.closest('[data-x],[data-fc]');if(!b)return;e.preventDefault();e.stopImmediatePropagation();confirmRemoval(b.dataset.x||b.dataset.fc,!!b.dataset.fc)},true);
function controls(){document.querySelectorAll('#box [data-x],#box [data-fc]').forEach(b=>{b.hidden=(b.dataset.x||b.dataset.fc)!==save.cp})}
new MutationObserver(controls).observe($('box'),{childList:true,subtree:true});
})();
