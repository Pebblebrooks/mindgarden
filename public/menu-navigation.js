/* Re-render menu routes from current data; never retain DOM, passwords or account snapshots. */
(function(){
'use strict';
const $=id=>document.getElementById(id),T=(a,b)=>window.MindGardenLocale.pair(a,b);
let current=null,parents=[],restoring=false,revision=0,opener=null;const inertBefore=new Map();
const box=$('box'),ov=$('ov');
function capture(host=box){return {scroll:host.scrollTop,focus:host.contains(document.activeElement)?document.activeElement.id:'',focusGo:host.contains(document.activeElement)?document.activeElement.dataset.go:'',details:[...host.querySelectorAll('details')].map((d,i)=>({id:d.id,key:d.dataset.menuGroup,index:i,open:d.open}))}}
function restore(state,host=box){if(!state)return;const details=[...host.querySelectorAll('details')];for(const d of state.details){const node=(d.id&&details.find(n=>n.id===d.id))||(d.key&&details.find(n=>n.dataset.menuGroup===d.key))||details[d.index];if(node)node.open=d.open}host.scrollTop=state.scroll;const focus=(state.focus&&$(state.focus))||(state.focusGo&&[...host.querySelectorAll('[data-go]')].find(n=>n.dataset.go===state.focusGo));if(focus&&host.contains(focus)&&!focus.closest('details:not([open])'))focus.focus({preventScroll:true})}
function clear(){current=null;parents=[];revision++;}
function deferred(state,host){const version=revision;queueMicrotask(()=>queueMicrotask(()=>{if(version!==revision)return;restore(state,host);mount()}))}
function enter(key,render){
 if(restoring)return;
 if(ov.classList.contains('hidden')&&current?.key!=='main-menu')clear();
 if(current?.key===key){const state=capture();current.render=render;deferred(state);return;}
 const previous=parents.findIndex(p=>p.key===key);
 if(previous>=0){const target=parents[previous];parents=parents.slice(0,previous);current={...target,render};revision++;deferred(target.state);return;}
 if(current){current.state=capture(current.key==='main-menu'?$('navMenu'):box);parents.push(current);}
 current={key,render};revision++;
}
function back(){
 if(!parents.length||box.querySelector('[aria-busy="true"]'))return false;
 const target=parents.pop();current=target;restoring=true;revision++;
 window.MindGardenInfo?.hide();
 let result;const version=revision;
 try{result=target.render()}finally{restoring=false}
 const ready=()=>{if(version===revision)deferred(target.state,target.key==='main-menu'?$('navMenu'):box)};
 if(result?.then)Promise.resolve(result).then(ready,error=>{if(version!==revision)return;const status=$('multiError')||$('accountStatus');if(status)status.textContent=error.message;mount()});else ready();return true;
}
function finish(){if(!back())window.closeOv()}
function mount(){
 const bar=box.querySelector('.menu-exit-bar');if(!bar||ov.classList.contains('hidden'))return;decorate(bar);
 const fallback=$('personalEdit')||$('avb')||$('deviceBack');let b=$('menuBack');if((parents.length||fallback)&&!b){b=document.createElement('button');b.type='button';b.id='menuBack';b.className='btn';b.textContent='←';b.title=T('Back','返回');b.setAttribute('aria-label',T('Back to previous menu','返回上一级菜单'));b.onclick=e=>{e.preventDefault();e.stopPropagation();if(parents.length)back();else fallback?.click()};bar.prepend(b)}
 if(b){b.hidden=!parents.length&&!fallback;if(fallback)fallback.hidden=true;b.disabled=!!box.querySelector('[aria-busy="true"]');}
}
const close=window.closeOv;window.closeOv=function(){if(!restoring)clear();window.MindGardenInfo?.hide();const result=close.apply(this,arguments);releaseOutside();const target=opener?.isConnected?opener:$('navMore');if(!restoring&&!target?.closest('#box'))target?.focus({preventScroll:true});return result};
const previousOverlay=window.overlay;window.overlay=function(){if(ov.classList.contains('hidden'))opener=document.activeElement;box.classList.remove('standard-popup');for(const attr of ['role','aria-modal','aria-labelledby'])box.removeAttribute(attr);releaseOutside();return previousOverlay.apply(this,arguments)};
function releaseOutside(){for(const [node,value]of inertBefore)node.inert=value;inertBefore.clear();}
function decorate(bar){
 box.classList.add('standard-popup');box.setAttribute('role','dialog');box.setAttribute('aria-modal','true');box.setAttribute('aria-labelledby','menuPopupTitle');
 let heading=$('menuPopupTitle');if(!heading){heading=document.createElement('div');heading.id='menuPopupTitle';heading.setAttribute('role','heading');heading.setAttribute('aria-level','2');bar.insertBefore(heading,$('menuExit'));}
 const original=box.querySelector('h2'),account=box.querySelector('.account-panel[data-auth-view="connected"]'),isAccountHome=account&&account.dataset.accountView!=='settings';
 let text=isAccountHome?T('Account','账户'):$('pd')?T('Switch player','切换玩家'):(original?.querySelector('span')?.textContent||original?.textContent||T('Menu','菜单'));
 if(heading.textContent!==text)heading.textContent=text;
 if(original&&!isAccountHome){original.classList.add('popup-original-heading');original.setAttribute('aria-hidden','true');const help=original.querySelector('.mg-info-button');if(help&&!box.querySelector('.popup-heading-help')){const row=document.createElement('div');row.className='popup-heading-help';original.after(row);row.append(help);}}
 for(const brand of box.querySelectorAll('.menu-brand'))brand.hidden=true;
 // One Close control, always in the common header. Keep intentional Done/Continue actions.
 for(const id of ['infoClose','movementClose','historyClose','localCopyDone','mpClose'])if($(id))$(id).hidden=true;
 for(const b of box.querySelectorAll('button'))if(b.id!=='menuExit'&&/^(Close|关闭)$/.test(b.textContent.trim()))b.hidden=true;
 const accountDone=$('accountDone');if(accountDone&&(/^(Close|关闭)$/.test(accountDone.textContent.trim())||(parents.length&&/^(Back|返回)$/.test(accountDone.textContent.trim()))))accountDone.hidden=true;
 for(const id of ['pd','sd','displaySave','gardenNameSave','personalProgressDone','fd','lbd','v4GuideDone','infoDone','soundDone','fld','personalStart']){const button=$(id);if(!button||button.closest('.popup-footer'))continue;const row=button.parentElement;if(row.classList.contains('row'))row.classList.add('popup-footer');else{const footer=document.createElement('div');footer.className='popup-footer';button.before(footer);footer.append(button)}if(id!=='gardenNameSave'&&id!=='displaySave')button.classList.add('main');}
 const gameStart=$('personalPairStart')||($('personalPreview')&&($('startExtra')||$('newGameStart')||$('gaStart')||$('cgBegin')||$('edBegin')));if(gameStart)gameStart.parentElement.classList.add('popup-footer');
 if($('deletePlayerCancel'))$('deletePlayerCancel').classList.add('main');
 for(const inner of box.querySelectorAll('[role="dialog"]')){inner.removeAttribute('role');inner.removeAttribute('aria-modal');}
 for(const node of document.body.children)if(node!==ov&&!node.contains(ov)&&!['SCRIPT','STYLE'].includes(node.tagName)){if(!inertBefore.has(node))inertBefore.set(node,node.inert);node.inert=true;}
}
function visibleControls(){return [...box.querySelectorAll('button,a[href],input,select,textarea,summary,[tabindex]')].filter(n=>!n.disabled&&n.tabIndex>=0&&!n.closest('[hidden],[inert]')&&(()=>{for(let a=n;a&&a!==box.parentElement;a=a.parentElement){const s=getComputedStyle(a);if(s.display==='none'||s.visibility==='hidden'||s.visibility==='collapse')return false}return true})()).filter(n=>{const d=n.closest('details:not([open])');return !d||n===d.querySelector('summary')});}
document.addEventListener('keydown',e=>{if(e.key!=='Tab'||ov.classList.contains('hidden')||!box.querySelector('.menu-exit-bar'))return;const controls=visibleControls(),first=controls[0],last=controls.at(-1);if(!first)return;if(!box.contains(document.activeElement)){e.preventDefault();first.focus()}else if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}},true);
new MutationObserver(()=>{if(ov.classList.contains('hidden'))releaseOutside();else mount()}).observe(ov,{attributes:true,attributeFilter:['class']});
// Done returns one level. Explicit Close/Continue playing always exits all menus.
const doneIds=new Set(['pd','sd','soundDone','fld','fd','lbd','personalProgressDone','infoDone','v4GuideDone','gardenNameDone','displayCancel']);
document.addEventListener('click',e=>{
 const b=e.target.closest?.('button');if(!b)return;
 if(parents.length&&doneIds.has(b.id)&&box.contains(b)){e.preventDefault();e.stopImmediatePropagation();back();return;}
 const menu=$('navMenu');if(menu?.contains(b)&&!menu.classList.contains('hidden')&&ov.classList.contains('hidden')){
  clear();current={key:'main-menu',render:()=>{close();const next=$('navMenu');next.classList.remove('hidden');$('navMore').setAttribute('aria-expanded','true');next.querySelector('button')?.focus()}};
 }
},true);
new MutationObserver(mount).observe(box,{childList:true,subtree:true,attributes:true,attributeFilter:['aria-busy']});
window.MindGardenMenuHistory={enter,back,finish,clear,get depth(){return parents.length},get key(){return current?.key||null}};
})();
