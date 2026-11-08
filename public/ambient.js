/* v2.9: decorative motion with persistent settings and lifecycle pausing. */
(function(){
'use strict';
const T=(a,b)=>save.lang==='zh'?b:a;
const dash=document.getElementById('welcomeDashboard');
if(!dash)return;
const assetUrl=name=>window.MindGardenAssets?.[name]||name;
const life=document.createElement('div');life.id='gardenLife';life.setAttribute('aria-hidden','true');
// Locally bundled 3D animation; GIFs are the fallback if WebGL is unavailable.
life.innerHTML=['cat','fox','owl'].map(kind=>'<div class="wildlife-poster fallback-'+kind+'"><img data-kind="'+kind+'" src="'+assetUrl('wildlife/'+kind+'.png')+'" alt=""></div>').join('');
life.insertAdjacentHTML('beforeend','<div class="garden-weather"><i class="garden-cloud cloud-one"></i><i class="garden-cloud cloud-two"></i></div>');
let engine=null,visible=true;
if(window.IntersectionObserver)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()},{threshold:0}).observe(dash);
(window.createGardenWildlife?window.createGardenWildlife(life):Promise.resolve(null)).then(value=>{engine=value;window.MindGardenAmbient=value;life.classList.toggle('wildlife-fallback',!value);sync()});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!save.motionMode)save.motionMode=save.still?'off':'gentle';
function effectiveMode(){return save.still||save.motionMode==='off'||(reduced.matches&&!save.motionExplicit)?'off':save.motionMode==='standard'?'standard':'gentle'}
function setMode(mode){if(!['off','gentle','standard'].includes(mode))return;if(mode!=='off')save.motionPrevious=mode;else if(['gentle','standard'].includes(save.motionMode))save.motionPrevious=save.motionMode;save.motionMode=mode;save.still=mode==='off'?1:0;save.motionExplicit=true;persist();sync()}
function sync(){
 const scene=dash.querySelector('.welcome-scene');if(scene&&!scene.contains(life))scene.prepend(life);
 const mode=effectiveMode();
 document.documentElement.dataset.motionExplicit=String(!!save.motionExplicit);
 document.documentElement.dataset.motion=mode;
 life.hidden=mode==='off';
 motion();
 const paused=!visible||document.hidden||!document.getElementById('ov').classList.contains('hidden')||document.getElementById('home').classList.contains('hidden')||dash.classList.contains('hidden');
 document.documentElement.dataset.ambientPaused=String(paused);
 engine?.setMode(mode,paused);
 life.querySelectorAll('.wildlife-poster img').forEach(poster=>{
 const source=assetUrl('wildlife/'+poster.dataset.kind+(paused||mode==='off'?'.png':'.gif'));
 if(poster.getAttribute('src')!==source)poster.src=source;
 });
 window.MindGardenWelcomeMedia?.render();
}
new MutationObserver(sync).observe(dash,{childList:true,attributes:true,attributeFilter:['class']});
['ov','home'].forEach(id=>new MutationObserver(sync).observe(document.getElementById(id),{attributes:true,attributeFilter:['class']}));
document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
const original=window.openSet;
window.openSet=function(){original();const group=document.createElement('fieldset');group.className='motion-options';
 group.innerHTML='<legend>'+T('Animation','动画')+'</legend>'+[['off',T('Off','关')],['gentle',T('Gentle','轻柔')],['standard',T('Standard','标准')]].map(([v,n])=>'<button type="button" class="btn" data-motion-mode="'+v+'" aria-pressed="'+(effectiveMode()===v)+'">'+n+'</button>').join('');
 document.getElementById('sd').parentElement.before(group);
 group.querySelectorAll('button').forEach(b=>b.onclick=()=>{setMode(b.dataset.motionMode);openSet()});
};
document.getElementById('bSet').onclick=window.openSet;
// Replace the old binary setting with the three explicit modes.
const idx=SET.findIndex(x=>x[0]==='still');if(idx>=0)SET.splice(idx,1);
window.MindGardenMotion={sync,effectiveMode,setMode};window.addEventListener('gardenPlayerChange',sync);window.addEventListener('gardenSceneChange',sync);
sync();
})();
