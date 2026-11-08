/* Small decorative companions peek over the progress panel, never over its content. */
(function(){
const root=document.documentElement,T=(a,b)=>save.lang==='zh'?b:a;
let visible=true;
function mount(){const panel=document.getElementById('progressDisplay');if(!panel)return;let strip=document.getElementById('progressPetPeeks');if(!strip){strip=document.createElement('div');strip.id='progressPetPeeks';strip.setAttribute('aria-hidden','true');strip.innerHTML='<span class="progress-peek cat"><i></i></span><span class="progress-peek dog"><i></i></span>';panel.before(strip);if(window.IntersectionObserver)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()}).observe(strip)}sync()}
function sync(){const strip=document.getElementById('progressPetPeeks');if(!strip)return;strip.dataset.paused=String(!visible||document.hidden||window.MindGardenMotion?.effectiveMode()==='off'||matchMedia('(prefers-reduced-motion: reduce)').matches||!document.getElementById('ov').classList.contains('hidden'));strip.title=T('Your garden friends are cheering you on','花园伙伴为您加油')}
new MutationObserver(mount).observe(document.getElementById('gardenProgressStrip'),{childList:true});new MutationObserver(sync).observe(root,{attributes:true,attributeFilter:['data-motion','data-still']});new MutationObserver(sync).observe(document.getElementById('ov'),{attributes:true,attributeFilter:['class']});document.addEventListener('visibilitychange',sync);window.addEventListener('gardenPlayerChange',mount);mount();
})();
