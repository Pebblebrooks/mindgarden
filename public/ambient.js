/* v2.3: garden visitors are decorative only, optional and pointer-transparent. */
(function(){
 'use strict';
 const dash=document.getElementById('welcomeDashboard');
 const scene=dash&&dash.querySelector('.welcome-scene');
 if(!scene)return;
 const visitors=document.createElement('div');visitors.id='gardenLife';visitors.setAttribute('aria-hidden','true');
 visitors.innerHTML='<span class="life life-butterfly">🦋</span><span class="life life-bird">🐦</span><span class="life life-bee">🐝</span><span class="life life-cat">🐈</span><span class="life life-dog">🐕</span>';
 scene.insertBefore(visitors,scene.firstChild);
 // The view is re-rendered when players switch. Reinsert if needed.
 const refresh=window.MindGardenDashboard.refresh;
 window.MindGardenDashboard.refresh=function(){refresh();const newScene=document.querySelector('#welcomeDashboard .welcome-scene');if(newScene&&!newScene.contains(visitors))newScene.insertBefore(visitors,newScene.firstChild)};
 // Decorate without patching the game engine: reattach after dashboard's render calls.
 const observer=new MutationObserver(()=>{
  const target=document.querySelector('#welcomeDashboard .welcome-scene');
  if(target&&!target.contains(visitors))target.insertBefore(visitors,target.firstChild);
 });
 observer.observe(dash,{childList:true});
})();
