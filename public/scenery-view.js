(function(){
'use strict';
const T=(a,b)=>save.lang==='zh'?b:a;
const icon='<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="5" width="5" height="14" rx="1"/><rect x="10" y="5" width="5" height="14" rx="1"/><rect x="17" y="5" width="4" height="14" rx="1"/></svg>';
function toggle(){save.welcomeCardsHidden=!save.welcomeCardsHidden;persist();mount()}
function mount(){
 const nav=document.getElementById('unifiedNav'),menu=document.getElementById('navMenu'),scene=document.querySelector('.welcome-scene');if(!nav||!menu||!scene)return;
 const hidden=!!save.welcomeCardsHidden;document.documentElement.dataset.welcomeCards=hidden?'hidden':'shown';
 let b=document.getElementById('navCards');if(!b){b=document.createElement('button');b.id='navCards';b.className='nav-quiet nav-symbol';b.dataset.go='welcomeCards';b.innerHTML=icon;b.onclick=toggle;nav.querySelector('.nav-actions').insertBefore(b,document.getElementById('navMore'))}
 const label=hidden?T('Show game cards','显示游戏卡片'):T('Hide game cards','隐藏游戏卡片');if(b.getAttribute('aria-label')!==label){b.setAttribute('aria-label',label);b.title=label;b.setAttribute('aria-pressed',String(!hidden))}
 let group=document.getElementById('gardenViewControls');if(!group){group=document.createElement('section');group.id='gardenViewControls';group.className='nav-group';group.innerHTML='<h3>'+T('Garden view','花园景色')+'</h3><button type="button" id="menuCards"></button><div id="menuScenery"></div><div id="menuPets"></div>';menu.prepend(group);group.querySelector('#menuCards').onclick=toggle}
 const m=group.querySelector('#menuCards');if(m.textContent!==label)m.textContent=label;m.setAttribute('aria-pressed',String(!hidden));
 const tray=document.querySelector('.hero-media-controls');if(tray&&tray.parentElement!==group.querySelector('#menuScenery'))group.querySelector('#menuScenery').append(tray);
 let pet=group.querySelector('#menuPetToggle');if(!pet){pet=document.createElement('button');pet.id='menuPetToggle';pet.textContent=T('🐾 Garden pets','🐾 花园宠物');group.querySelector('#menuPets').append(pet);pet.onclick=()=>{document.querySelector('#gardenCat .mochi-show')?.click();menu.classList.add('hidden');const more=document.getElementById('navMore');more.setAttribute('aria-expanded','false');more.setAttribute('aria-label',T('Open menu','打开菜单'));const panel=document.getElementById('gardenCat');if(!panel?.classList.contains('mochi-collapsed'))panel?.querySelector('[data-mochi="hide"]')?.focus();else more.focus()}}pet.setAttribute('aria-expanded',String(!!document.getElementById('gardenCat')&&!document.getElementById('gardenCat').classList.contains('mochi-collapsed')));
 window.MindGardenNav?.schedule();
}
let queued=false;const schedule=()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;mount()})};
new MutationObserver(schedule).observe(document.getElementById('unifiedNav'),{childList:true,subtree:true});
new MutationObserver(schedule).observe(document.getElementById('welcomeDashboard'),{childList:true});
document.addEventListener('keydown',e=>{const panel=document.getElementById('gardenCat');if(e.key==='Escape'&&panel?.contains(document.activeElement)&&!panel.classList.contains('mochi-collapsed')){e.preventDefault();panel.querySelector('[data-mochi="hide"]')?.click()}});
window.addEventListener('gardenPetsChange',schedule);window.addEventListener('gardenPlayerChange',schedule);window.addEventListener('gardenSceneChange',schedule);mount();
})();
