/* Welcome-page adapter; removes controllers when navigation rebuilds the page. */
(function(){
'use strict';
let controller=null,element=null;
function mount(){const host=document.querySelector('#welcomeDashboard .welcome-scene');if(element&&!element.isConnected){controller?.destroy();controller=null;element=null}if(!host)return;if(!element){element=document.createElement('section');element.id='gardenCat';host.append(element);controller=window.createMochiWidget(element,{asset:'pets/mochi-sprites.webp',language:()=>save.lang,motionAllowed:()=>window.MindGardenMotion?.effectiveMode()!=='off'&&document.documentElement.dataset.ambientPaused!=='true'})}controller?.refresh()}
new MutationObserver(mount).observe(document.getElementById('welcomeDashboard'),{childList:true});
new MutationObserver(()=>controller?.refresh()).observe(document.documentElement,{attributes:true,attributeFilter:['class','data-motion','data-ambient-paused']});
window.addEventListener('gardenPlayerChange',()=>{controller?.destroy();element?.remove();element=null;controller=null;mount()});window.addEventListener('pagehide',()=>controller?.destroy());window.addEventListener('pageshow',e=>{if(e.persisted){controller?.destroy();element?.remove();element=null;controller=null;mount()}});mount();
})();
