/* Optional explanations: hover, keyboard focus, or tap. Critical game feedback stays visible. */
(function(){
'use strict';
const selector='.mg-info-button,.mg-help-trigger';
let tip=null,owner=null,pinned=false;
const helpText=b=>b.dataset.info||b.closest('.mg-help')?.querySelector('.mg-help-text')?.textContent||'';
function hide(){if(owner){owner.setAttribute('aria-expanded','false');owner.removeAttribute('aria-describedby')}if(tip)tip.hidden=true;owner=null;pinned=false}
function show(button){const text=helpText(button);if(!text)return;if(owner!==button){hide();owner=button}if(!tip){tip=document.createElement('div');tip.id='mgInfoTooltip';tip.className='mg-info-tooltip';tip.setAttribute('role','tooltip');document.body.append(tip)}const host=button.closest('dialog[open]')||document.body;if(tip.parentElement!==host)host.append(tip);tip.textContent=text;tip.hidden=false;button.setAttribute('aria-expanded','true');button.setAttribute('aria-describedby',tip.id);const r=button.getBoundingClientRect(),width=Math.min(360,innerWidth-32);tip.style.width=width+'px';tip.style.left=Math.max(16,Math.min(innerWidth-width-16,r.left+r.width/2-width/2))+'px';tip.style.top='16px';const h=tip.getBoundingClientRect().height;tip.style.top=Math.max(16,Math.min(innerHeight-h-16,r.bottom+10))+'px'}
document.addEventListener('pointerover',e=>{const b=e.target.closest?.(selector);if(b&&e.pointerType!=='touch')show(b)});
document.addEventListener('pointerout',e=>{if(owner&&!pinned&&e.target.closest?.(selector)===owner&&!owner.contains(e.relatedTarget)&&!tip?.contains(e.relatedTarget)&&document.activeElement!==owner)hide()});
document.addEventListener('pointerout',e=>{if(owner&&!pinned&&tip?.contains(e.target)&&!tip.contains(e.relatedTarget)&&!owner.contains(e.relatedTarget)&&document.activeElement!==owner)hide()});
document.addEventListener('focusin',e=>{if(e.target.matches?.(selector))show(e.target)});
document.addEventListener('focusout',e=>{if(e.target===owner&&!pinned)hide()});
document.addEventListener('click',e=>{const b=e.target.closest?.(selector);if(b){if(owner===b&&pinned)hide();else{show(b);pinned=true}}else if(!tip?.contains(e.target))hide()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&owner){e.stopPropagation();hide()}},true);
window.addEventListener('resize',hide);window.addEventListener('scroll',hide,true);
new MutationObserver(()=>{if(owner&&!owner.isConnected)hide()}).observe(document.body,{childList:true,subtree:true});
window.MindGardenInfo={html(text,label){return '<button class="mg-info-button" type="button" aria-label="'+esc(label||(save.lang==='zh'?'更多说明':'More information'))+'" aria-expanded="false" data-info="'+esc(text)+'"><span aria-hidden="true">ⓘ</span></button>'},hide};
})();
