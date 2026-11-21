/* Item 4 (approved 21 Nov 2026, GAME-01 amendment): Save and exit for long games.
   One save per game per player, in this browser only (not synced, not in backups).
   A saved game counts toward scores only when it is finished. */
(function(){
'use strict';
const T=(a,b)=>window.MindGardenLocale.pair(a,b),$=id=>document.getElementById(id),providers={};
const key=id=>'mindGardenSave:'+save.cp+':'+id;
const enc=v=>JSON.stringify(v,(k,x)=>x instanceof Set?{__set:[...x]}:x);
const dec=s=>JSON.parse(s,(k,x)=>x&&typeof x==='object'&&Array.isArray(x.__set)?new Set(x.__set):x);
function register(id,p){providers[id]=p}
function active(){for(const [id,p]of Object.entries(providers))try{if(p.current())return id}catch{}return null}
function get(id){try{const raw=localStorage.getItem(key(id));return raw?dec(raw):null}catch{return null}}
function remove(id){try{localStorage.removeItem(key(id))}catch{}}
function saveActive(){const id=active();if(!id)return false;try{localStorage.setItem(key(id),enc({id,saved:Date.now(),state:providers[id].snapshot()}));return true}catch{return false}}
function when(t){const d=new Date(t),today=new Date().toDateString()===d.toDateString(),time=d.toLocaleTimeString(save.lang==='zh'?'zh-CN':'en-SG',{hour:'numeric',minute:'2-digit'});return today?T('saved today, ','今天保存，')+time:T('saved ','保存于 ')+d.toLocaleDateString(save.lang==='zh'?'zh-CN':'en-SG',{day:'numeric',month:'short'})+', '+time}
// Offer the saved game at the top of the game's setup screen.
function offer(id){
 const saved=get(id),box=$('box');if(!saved||!providers[id]||!box||box.querySelector('.saved-game-card'))return;
 const card=document.createElement('section');card.className='saved-game-card';card.setAttribute('aria-label',T('Saved game','已保存的游戏'));
 card.innerHTML='<h3>'+T('Saved game','已保存的游戏')+'</h3><p>'+T('Level ','第 ')+(saved.state.level||1)+(save.lang==='zh'?' 级':'')+' · '+when(saved.saved)+'</p><div class="saved-game-actions"><button type="button" class="btn main" id="savedContinue">'+T('Continue saved game','继续已保存的游戏')+'</button><button type="button" class="btn" id="savedNew">'+T('Start a new game','开始新游戏')+'</button></div>';
 (box.querySelector('h2')||box.firstElementChild)?.after(card);
 $('savedContinue').onclick=()=>{remove(id);window.closeOv?.();Promise.resolve(providers[id].resume(saved.state)).catch(()=>{})};
 $('savedNew').onclick=()=>{card.remove();box.querySelector('#gaStart,#newGameStart,#startExtra')?.focus()};
}
window.MindGardenSaves={register,active,get,remove,saveActive,offer};
})();
