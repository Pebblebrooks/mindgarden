(function(){
'use strict';
const T=(a,b)=>window.MindGardenLocale.pair(a,b);
const icon='<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1"/><rect x="10" y="5" width="5" height="14" rx="1"/><rect x="17" y="5" width="4" height="14" rx="1"/></svg>';
let cardsHidden=me().dashboardPreferences?.welcomeVisible!==true;
window.MindGardenWelcomeCards={setVisible(value){cardsHidden=!value;mount()}};
function toggle(){cardsHidden=!cardsHidden;mount()}
function mount(){
 const nav=document.getElementById('unifiedNav'),menu=document.getElementById('navMenu'),scene=document.querySelector('.welcome-scene');if(!nav||!menu||!scene)return;
 const hidden=cardsHidden;document.documentElement.dataset.welcomeCards=hidden?'hidden':'shown';
 const label=hidden?T('Show game cards','显示游戏卡片'):T('Hide game cards','隐藏游戏卡片');
 let b=document.getElementById('navCards');if(!b){b=document.createElement('button');b.type='button';b.id='navCards';b.className='nav-quiet nav-symbol';b.dataset.go='welcomeCards';b.innerHTML=icon;b.onclick=toggle;nav.querySelector('.nav-actions').insertBefore(b,document.getElementById('navMore'))}
 b.setAttribute('aria-label',label);b.title=label;b.setAttribute('aria-pressed',String(!hidden));
 for(const [id,target,text,zh,glyph] of [['scenePrevious','heroPrevious','Previous scenery','上一处景色','‹'],['sceneNext','heroNext','Next scenery','下一处景色','›']]){
 let arrow=document.getElementById(id);if(!arrow){arrow=document.createElement('button');arrow.id=id;arrow.type='button';arrow.className='scene-edge-arrow';arrow.textContent=glyph;arrow.onclick=()=>document.getElementById(target)?.click();scene.append(arrow)}arrow.setAttribute('aria-label',T(text,zh));
 }

 let group=document.getElementById('gardenViewControls');if(!group){group=document.createElement('details');group.id='gardenViewControls';group.className='nav-group garden-preferences';group.innerHTML='<summary>'+T('Garden view','花园景色')+'</summary><div id="menuScenery"></div><button type="button" id="menuCards"></button>';menu.firstElementChild.after(group);group.querySelector('#menuCards').onclick=toggle}
 const m=group.querySelector('#menuCards');if(m.getAttribute('aria-label')!==label){m.innerHTML=icon+'<span>'+label+'</span>';m.setAttribute('aria-label',label)}m.setAttribute('aria-pressed',String(!hidden));
 const tray=document.querySelector('.hero-media-controls');if(tray&&tray.parentElement!==group.querySelector('#menuScenery'))group.querySelector('#menuScenery').append(tray);
 window.MindGardenNav?.schedule();
}
let queued=false;const schedule=()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;mount()})};
new MutationObserver(schedule).observe(document.getElementById('unifiedNav'),{childList:true,subtree:true});
new MutationObserver(schedule).observe(document.getElementById('welcomeDashboard'),{childList:true});
document.addEventListener('keydown',e=>{const panel=document.getElementById('gardenCat');if(e.key==='Escape'&&panel?.contains(document.activeElement)&&!panel.classList.contains('mochi-collapsed')){e.preventDefault();panel.querySelector('[data-mochi="hide"]')?.click()}});
window.addEventListener('gardenPetsChange',schedule);window.addEventListener('gardenPlayerChange',()=>{cardsHidden=me().dashboardPreferences?.welcomeVisible!==true;schedule()});window.addEventListener('gardenSceneChange',schedule);mount();
})();
