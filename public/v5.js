/* V5 shell interactions use existing game, profile and menu APIs. */
(function(){
'use strict';
const T=(a,b)=>window.MindGardenLocale.pair(a,b);
function information(text,opener){
 if(document.getElementById('v5Information'))return;
 window.MindGardenInfo?.hide();opener.setAttribute('aria-haspopup','dialog');opener.setAttribute('aria-expanded','true');
 const d=document.createElement('dialog');d.id='v5Information';d.className='v5-dialog';d.setAttribute('aria-labelledby','v5InformationTitle');
 const title=document.createElement('h2');title.id='v5InformationTitle';title.textContent=T('Information','说明');
 const p=document.createElement('p');p.textContent=text;
 const close=document.createElement('button');close.className='btn main';close.textContent=T('Got it','知道了');close.onclick=()=>d.close();
 const x=document.createElement('button');x.className='btn v5-dialog-close';x.textContent='×';x.setAttribute('aria-label',T('Close','关闭'));x.onclick=()=>d.close();
 d.append(x,title,p,close);document.body.append(d);d.addEventListener('close',()=>{d.remove();if(opener?.isConnected){opener.setAttribute('aria-expanded','false');opener.focus();window.MindGardenInfo?.hide()}});d.showModal();
}
document.addEventListener('click',e=>{const b=e.target.closest('.mg-help-trigger,.mg-info-button');if(!b)return;const text=b.dataset.info||b.closest('.mg-help')?.querySelector('.mg-help-text')?.textContent;if(!text)return;e.preventDefault();e.stopImmediatePropagation();information(text,b)},true);
function mount(){
 const menu=document.getElementById('navMenu');
 if(menu){
  for(const b of menu.querySelectorAll('[data-go="nature"],[data-go="motion"],#menuCards'))b.classList.add('v5-switch');
  for(const summary of menu.querySelectorAll('summary')){
   if(summary.querySelector('.v5-menu-icon'))continue;
   const parent=summary.parentElement,kind=parent.id==='gardenViewControls'?'scenery':parent.id==='sceneryRotation'?'reset':parent.classList.contains('nav-preferences')?'options':parent.dataset.menuGroup==='player'?'person':'progress';
   const label=summary.textContent;summary.replaceChildren();const icon=document.createElement('span');icon.className='v5-menu-icon';icon.setAttribute('aria-hidden','true');icon.innerHTML=MindGardenIcon(kind);const text=document.createElement('span');text.className='v5-menu-label';text.textContent=label;summary.append(icon,text);
  }
 }

 for(const b of document.querySelectorAll('[data-go=language]')){b.setAttribute('translate','no');const label=b.querySelector('span:last-child');if(label&&label.textContent!=='English / 中文')label.textContent='English / 中文';}

 const dash=document.getElementById('welcomeDashboard');if(dash&&!document.getElementById('v5GardenView')){
 const b=document.createElement('button');b.id='v5GardenView';b.className='btn';
 const update=()=>b.textContent=document.documentElement.dataset.v5Garden==='true'?T('Back to games','返回游戏'):T('Enjoy the garden','欣赏花园');
 b.onclick=()=>{document.documentElement.dataset.v5Garden=String(document.documentElement.dataset.v5Garden!=='true');update()};update();dash.append(b);
 }
 const scale=Number(document.documentElement.style.getPropertyValue('--fs'))||1;if(document.documentElement.dataset.textLarge!==String(scale>=1.5))document.documentElement.dataset.textLarge=String(scale>=1.5);
}
new MutationObserver(mount).observe(document.getElementById('welcomeDashboard'),{childList:true});
new MutationObserver(mount).observe(document.getElementById('unifiedNav'),{childList:true,subtree:true});
new MutationObserver(mount).observe(document.documentElement,{attributes:true,attributeFilter:['style']});
window.addEventListener('gardenPlayerChange',()=>{delete document.documentElement.dataset.v5Garden;mount()});mount();
})();
