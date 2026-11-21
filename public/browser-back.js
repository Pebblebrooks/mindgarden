/* B.36 (GAME-01, A11Y-01): the phone or browser Back button steps back inside
   Mind Garden instead of leaving for the previous website. One history entry is
   kept above the page while anything other than the home dashboard is showing;
   Back uses it to take one in-app step, then the entry is restored if needed. */
(function(){
'use strict';
const $=id=>document.getElementById(id);
const shown=el=>!!el&&!el.classList.contains('hidden');
let armed=false,ignore=false,queued=false;

function atRoot(){
 return shown($('home'))&&!shown($('gameLibrary'))&&!shown($('ov'))&&!shown($('navMenu'))&&!document.querySelector('dialog[open]');
}
function sync(){
 if(atRoot()){
  // Returned home through the app: drop the guard entry so Back can leave normally.
  if(armed){armed=false;ignore=true;try{history.back()}catch{ignore=false}}
 }else if(!armed&&!ignore){
  try{history.pushState({mindGardenStep:true},'');armed=true}catch{}
 }
}
function queue(){if(queued)return;queued=true;queueMicrotask(()=>{queued=false;sync()})}
function escape(){document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true}))}

function stepBack(){
 const dialog=[...document.querySelectorAll('dialog[open]')].at(-1);
 if(dialog){const cancel=new Event('cancel',{cancelable:true});if(dialog.dispatchEvent(cancel))dialog.close();return}
 if(shown($('ov'))){
  const back=$('menuBack');if(back&&!back.hidden&&!back.disabled){back.click();return}
  const exit=$('menuExit');if(exit){exit.click();return}
 }
 const game=['game','mini'].map($).find(shown);
 if(game){game.querySelector('[data-game-back]')?.click();return}
 if(shown($('ov'))||shown($('navMenu'))){escape();if(shown($('ov')))window.closeOv?.();return}
 if(shown($('gameLibrary'))){document.querySelector('#unifiedNav [data-go="home"],.nav-brand[data-go="home"]')?.click();return}
}

window.addEventListener('popstate',()=>{
 if(ignore){ignore=false;queue();return}
 armed=false;
 if(atRoot())return;
 stepBack();
 queue();
});
new MutationObserver(queue).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','open']});
queue();
window.MindGardenBrowserBack={stepBack,atRoot,get armed(){return armed}};
})();
