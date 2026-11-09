/* Immediate, non-scoring press feedback shared by game controls.
   Keep native click activation so scrolling, keyboard input and double-score guards work. */
(function(){
'use strict';
const scope='#game button,#mini button,#box button';
let press=null;
function clear(){if(press)press.button.classList.remove('quick-pressed');press=null}
function button(target){const b=target.closest?.('button');return b?.matches(scope)&&!b.disabled&&b.getAttribute('aria-disabled')!=='true'?b:null}
document.addEventListener('pointerdown',e=>{if(e.isPrimary===false||e.button>0)return;const b=button(e.target);if(!b)return;clear();press={button:b,id:e.pointerId,x:e.clientX,y:e.clientY};b.classList.add('quick-pressed')},{passive:true,capture:true});
document.addEventListener('pointermove',e=>{if(press&&e.pointerId===press.id&&Math.hypot(e.clientX-press.x,e.clientY-press.y)>12)clear()},{passive:true});
for(const type of ['pointerup','pointercancel','lostpointercapture'])document.addEventListener(type,e=>{if(press&&e.pointerId===press.id)clear()},{passive:true});
document.addEventListener('keydown',e=>{if(!['Enter',' '].includes(e.key)||e.repeat)return;const b=button(e.target);if(b){clear();press={button:b};b.classList.add('quick-pressed')}});
document.addEventListener('keyup',e=>{if(['Enter',' '].includes(e.key))clear()});
window.addEventListener('blur',clear);document.addEventListener('visibilitychange',clear);
window.MindGardenQuickFeedback={clear};
})();
