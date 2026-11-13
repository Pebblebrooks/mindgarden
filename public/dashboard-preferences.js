/* Display choices belong to the player; gameplay selections remain independent. */
(function(){
'use strict';
const $=id=>document.getElementById(id),T=(a,b)=>window.MindGardenLocale.pair(a,b);
const shortcuts=[['daily','dashStart','Today’s Games','今日游戏'],['my',' .personal-open','My Games','我的游戏'],['all','dashBrowse','All Games','所有游戏'],['online','dashTogether','Play Together','一起玩'],['progress','dashProgress','My Progress','我的进度'],['leaders','dashLeaders','Leaderboard','排行榜']];
const ids=()=>['pairs',...Object.keys(MG).filter(id=>id!=='followgardener')];
function clean(raw={}){return {welcomeVisible:raw.welcomeVisible===true,petsVisible:raw.petsVisible===true,progressVisible:raw.progressVisible!==false,welcomeCards:Array.isArray(raw.welcomeCards)?shortcuts.map(x=>x[0]).filter(id=>raw.welcomeCards.includes(id)):shortcuts.map(x=>x[0]),gameCards:Array.isArray(raw.gameCards)?ids().filter(id=>raw.gameCards.includes(id)):null}}
const prefs=()=>clean(me().dashboardPreferences);
let showAll=false;
function apply(){const p=prefs();
 for(const [id,selector]of shortcuts){const b=selector.startsWith(' ')?document.querySelector('#welcomeDashboard'+selector):$(selector);b?.closest('.welcome-choice')?.classList.toggle('display-choice-hidden',!p.welcomeCards.includes(id))}
 document.querySelectorAll('#welcomeDashboard .welcome-group-title').forEach(h=>{let n=h.nextElementSibling,visible=false;while(n&&!n.classList.contains('welcome-group-title')){if(n.classList.contains('welcome-choice')&&!n.classList.contains('display-choice-hidden'))visible=true;n=n.nextElementSibling}h.classList.toggle('display-choice-hidden',!visible)});
 $('gardenProgressStrip')?.classList.toggle('display-choice-hidden',!p.progressVisible);
 document.querySelectorAll('#gameCards [data-game]').forEach(b=>(b.closest('.personal-game-card')||b).classList.toggle('display-choice-hidden',!showAll&&p.gameCards!==null&&!p.gameCards.includes(b.dataset.game)));
 const grid=$('gameCards');if(grid&&!$('displayGameNotice')){const row=document.createElement('div');row.id='displayGameNotice';row.className='row';grid.before(row)}
 const notice=$('displayGameNotice');if(notice){const key=JSON.stringify([save.lang,p.gameCards,showAll]);if(notice.dataset.state!==key){notice.dataset.state=key;notice.replaceChildren();if(p.gameCards!==null){const b=document.createElement('button');b.className='btn';b.textContent=showAll?T('Show my chosen cards','显示我选择的卡片'):T('Show all game cards','显示所有游戏卡片');b.onclick=()=>{showAll=!showAll;apply()};notice.append(b)}}}
 const group=$('gardenViewControls');if(group&&!$('customiseDashboard')){const b=document.createElement('button');b.id='customiseDashboard';b.textContent=T('Customise dashboard','自定义主页');b.onclick=panel;group.append(b)}
}
function restore(){showAll=false;const p=prefs();window.MindGardenWelcomeCards?.setVisible(p.welcomeVisible);window.MindGardenWelcomePet?.setVisible(p.petsVisible);apply()}
function panel(){const menu=$('navMenu');menu?.classList.add('hidden');$('navMore')?.setAttribute('aria-expanded','false');const p=prefs();
 overlay('<section id="dashboardCustom"><h2>'+T('Customise dashboard','自定义主页')+'</h2><p>'+T('Saved for this player. Choose what you see; your scores and game settings stay intact.','为此玩家保存。选择显示内容，不影响成绩或游戏设置。')+'</p><div id="displayLaunch"></div><details class="simple-menu-group"><summary>'+T('Welcome shortcuts','欢迎页快捷卡片')+'</summary><div id="displayWelcome"></div></details><details class="simple-menu-group"><summary>'+T('Game cards','游戏卡片')+'</summary><p>'+T('Choose cards for All Games. My Games keeps its own play selection.','选择“所有游戏”显示的卡片。“我的游戏”保留独立的游玩选择。')+'</p><label>'+T('Find a game','查找游戏')+'<input id="displaySearch" type="search"></label><div class="row"><button class="btn" id="displayAll">'+T('Select all','全选')+'</button><button class="btn" id="displayNone">'+T('Clear selection','清除选择')+'</button></div><div id="displayGames"></div></details><div class="row"><button class="btn main" id="displaySave">'+T('Save display','保存显示设置')+'</button><button class="btn" id="displayCancel">'+T('Cancel','取消')+'</button></div></section>');
 function checkbox(host,key,label,checked){const l=document.createElement('label');l.className='display-option';const c=document.createElement('input');c.type='checkbox';c.value=key;c.checked=checked;l.append(c,document.createTextNode(label));$(host).append(l);return c}
 const launch={};for(const [key,en,zh]of [['welcomeVisible','Show welcome cards on launch','启动时显示欢迎卡片'],['progressVisible','Show garden progress bouquet','显示花园进度花束'],['petsVisible','Show garden pet on launch','启动时显示花园宠物']])launch[key]=checkbox('displayLaunch',key,T(en,zh),p[key]);
 shortcuts.forEach(([id,,en,zh])=>checkbox('displayWelcome',id,T(en,zh),p.welcomeCards.includes(id)));
 ids().forEach(id=>checkbox('displayGames',id,id==='pairs'?T('Matching Pairs','配对游戏'):MG[id].n,p.gameCards===null||p.gameCards.includes(id)));
 $('displaySearch').oninput=()=>{const q=$('displaySearch').value.trim().toLocaleLowerCase();$('displayGames').querySelectorAll('label').forEach(l=>l.hidden=!l.textContent.toLocaleLowerCase().includes(q))};
 for(const [id,value]of [['displayAll',true],['displayNone',false]])$(id).onclick=()=>{ $('displayGames').querySelectorAll('input').forEach(c=>c.checked=value)};
 $('displayCancel').onclick=closeOv;$('displaySave').onclick=()=>{const selected=host=>[...$(host).querySelectorAll('input:checked')].map(c=>c.value),games=selected('displayGames');me().dashboardPreferences={...Object.fromEntries(Object.entries(launch).map(([k,c])=>[k,c.checked])),welcomeCards:selected('displayWelcome'),gameCards:games.length===ids().length?null:games};persist();closeOv();restore()};$('displayLaunch').querySelector('input')?.focus();
}
const oldSet=window.openSet;window.openSet=function(){oldSet();const b=document.createElement('button');b.className='btn';b.textContent=T('Customise dashboard','自定义主页');b.onclick=panel;const group=document.querySelector('[data-menu-group="garden"]');(group||$('box')).append(b)};$('bSet').onclick=window.openSet;
let queued=false;function schedule(){if(queued)return;queued=true;queueMicrotask(()=>{queued=false;apply()})}
for(const id of ['welcomeDashboard','libraryDisplay','unifiedNav'])if($(id))new MutationObserver(schedule).observe($(id),{childList:true,subtree:true});
window.addEventListener('gardenPlayerChange',restore);window.MindGardenDisplay={clean,prefs,panel,restore};restore();
})();
