/* v2.9: decorative motion with persistent settings and lifecycle pausing. */
(function(){
'use strict';
const dash=document.getElementById('welcomeDashboard');
if(!dash)return;
const assetUrl=name=>window.MindGardenAssets?.[name]||name;
const life=document.createElement('div');life.id='gardenLife';life.setAttribute('aria-hidden','true');
// Locally bundled 3D animation; GIFs are the fallback if WebGL is unavailable.
life.innerHTML=['cat','fox','owl'].map(kind=>'<div class="wildlife-poster fallback-'+kind+'"><img data-kind="'+kind+'" src="'+assetUrl('wildlife/'+kind+'.png')+'" alt=""></div>').join('');
let engine=null,visible=true;
if(window.IntersectionObserver)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()},{threshold:0}).observe(dash);
(window.createGardenWildlife?window.createGardenWildlife(life):Promise.resolve(null)).then(value=>{engine=value;window.MindGardenAmbient=value;life.classList.toggle('wildlife-fallback',!value);sync()});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!save.motionMode)save.motionMode=save.still||reduced.matches?'off':'gentle';
function sync(){
 const scene=dash.querySelector('.welcome-scene');if(scene&&!scene.contains(life))scene.prepend(life);
 const mode=reduced.matches||save.still?'off':save.motionMode;
 document.documentElement.dataset.motion=mode;
 const paused=!visible||document.hidden||!document.getElementById('ov').classList.contains('hidden')||document.getElementById('home').classList.contains('hidden')||dash.classList.contains('hidden');
 document.documentElement.dataset.ambientPaused=String(paused);
 engine?.setMode(mode,paused);
 life.querySelectorAll('.wildlife-poster img').forEach(poster=>{
 const source=assetUrl('wildlife/'+poster.dataset.kind+(paused||mode==='off'?'.png':'.gif'));
 if(poster.getAttribute('src')!==source)poster.src=source;
 });
}
new MutationObserver(sync).observe(dash,{childList:true,attributes:true,attributeFilter:['class']});
['ov','home'].forEach(id=>new MutationObserver(sync).observe(document.getElementById(id),{attributes:true,attributeFilter:['class']}));
document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
const original=window.openSet;
window.openSet=function(){original();const group=document.createElement('fieldset');group.className='motion-options';
 group.innerHTML='<legend>Motion</legend>'+[['off','Off'],['gentle','Gentle'],['standard','Standard']].map(([v,n])=>'<button type="button" class="btn" data-motion-mode="'+v+'" aria-pressed="'+(save.motionMode===v)+'">'+n+'</button>').join('');
 document.getElementById('sd').parentElement.before(group);
 group.querySelectorAll('button').forEach(b=>b.onclick=()=>{save.motionMode=b.dataset.motionMode;save.still=save.motionMode==='off'?1:0;persist();motion();sync();openSet()});
};
document.getElementById('bSet').onclick=window.openSet;
// Replace the old binary setting with the three explicit modes.
const idx=SET.findIndex(x=>x[0]==='still');if(idx>=0)SET.splice(idx,1);
sync();
})();
