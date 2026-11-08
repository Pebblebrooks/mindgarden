/* Non-modal pet panel: move only by the title; preserve petting gestures. */
(function(){
'use strict';
let active=null;
function bounds(){const v=window.visualViewport;return {x:v?.offsetLeft||0,y:v?.offsetTop||0,w:v?.width||innerWidth,h:v?.height||innerHeight}}
function move(panel,x,y){const b=bounds(),r=panel.getBoundingClientRect(),pad=8;panel.dataset.positioned='true';panel.style.setProperty('--pet-left',Math.max(b.x+pad,Math.min(x,b.x+b.w-r.width-pad))+'px');panel.style.setProperty('--pet-top',Math.max(b.y+pad,Math.min(y,b.y+b.h-r.height-pad))+'px')}
function mount(){const p=document.getElementById('gardenCat'),h=p?.querySelector('.mochi-heading h2');if(!h||h.dataset.movable)return;h.dataset.movable='true';h.tabIndex=0;h.title=save.lang==='zh'?'拖动标题移动宠物；方向键微调':'Drag heading to move pet; arrow keys to adjust';
h.addEventListener('pointerdown',e=>{if(e.button!==0||!e.isPrimary)return;const r=p.getBoundingClientRect();active={p,h,id:e.pointerId,x:e.clientX,y:e.clientY,left:r.left,top:r.top};h.setPointerCapture(e.pointerId);p.dataset.dragging='true';h.focus({preventScroll:true});e.preventDefault()});
h.addEventListener('pointermove',e=>{if(active?.h!==h||active.id!==e.pointerId)return;move(p,active.left+e.clientX-active.x,active.top+e.clientY-active.y)});
const end=e=>{if(active?.h!==h||active.id!==e.pointerId)return;active=null;delete p.dataset.dragging;if(h.hasPointerCapture(e.pointerId))h.releasePointerCapture(e.pointerId)};h.addEventListener('pointerup',end);h.addEventListener('pointercancel',end);h.addEventListener('lostpointercapture',end);
h.addEventListener('keydown',e=>{const delta={ArrowLeft:[-16,0],ArrowRight:[16,0],ArrowUp:[0,-16],ArrowDown:[0,16]}[e.key];if(!delta)return;e.preventDefault();const r=p.getBoundingClientRect();move(p,r.left+delta[0],r.top+delta[1])});
}
function clamp(){const p=document.getElementById('gardenCat');if(p?.dataset.positioned&&!p.classList.contains('mochi-collapsed')){const r=p.getBoundingClientRect();move(p,r.left,r.top)}}
window.addEventListener('resize',clamp);window.visualViewport?.addEventListener('resize',clamp);window.addEventListener('gardenPetsChange',()=>{mount();requestAnimationFrame(clamp)});window.addEventListener('gardenPlayerChange',()=>queueMicrotask(mount));mount();
})();
