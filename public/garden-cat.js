/* Welcome-page adapter; removes controllers when navigation rebuilds the page. */
(function(){
'use strict';
let controller=null,element=null;
window.isGardenPetSceneActive=()=>{const home=document.getElementById('home'),dash=document.getElementById('welcomeDashboard'),ov=document.getElementById('ov');return !!home&&!!dash&&!home.classList.contains('hidden')&&!dash.classList.contains('hidden')&&(!ov||ov.classList.contains('hidden'))&&!Array.from(document.querySelectorAll('dialog[open],[role="dialog"]')).some(d=>d.getClientRects().length>0)};
function syncScene(){if(element)element.dataset.sceneVisible=String(window.isGardenPetSceneActive());controller?.refresh();window.dispatchEvent(new Event('gardenPetSceneChange'))}
for(const id of ['home','welcomeDashboard','ov']){const node=document.getElementById(id);if(node)new MutationObserver(syncScene).observe(node,{attributes:true,attributeFilter:['class','hidden','open']})}

function mount(){const host=document.querySelector('#welcomeDashboard .welcome-scene');if(element&&!element.isConnected){controller?.destroy();controller=null;element=null}if(!host)return;if(!element){element=document.createElement('section');element.id='gardenCat';document.body.append(element);controller=window.createMochiWidget(element,{asset:'pets/mochi-sprites.webp',language:()=>save.lang,onVisibilityChange:()=>window.dispatchEvent(new Event('gardenPetsChange')),sceneAllowed:()=>window.isGardenPetSceneActive(),motionAllowed:()=>window.MindGardenMotion?.effectiveMode()!=='off'})}syncScene()}
new MutationObserver(mount).observe(document.getElementById('welcomeDashboard'),{childList:true});
new MutationObserver(()=>controller?.refresh()).observe(document.documentElement,{attributes:true,attributeFilter:['class','data-motion','data-ambient-paused']});
window.addEventListener('gardenPlayerChange',()=>{controller?.destroy();element?.remove();element=null;controller=null;mount()});window.addEventListener('pagehide',()=>controller?.destroy());window.addEventListener('pageshow',e=>{if(e.persisted){controller?.destroy();element?.remove();element=null;controller=null;mount()}});mount();
})();
