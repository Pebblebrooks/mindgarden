/* Keep one navigation row; measure real controls after fonts/preferences change. */
(function(){
'use strict';
const nav=document.getElementById('unifiedNav');if(!nav)return;
const T=(a,b)=>save.lang==='zh'?b:a;
const removalOrder=['contact','about','language','music','appearance','text','leaderboard','progress','online','library'];
function fit({available,brand,compactBrand,main,tools,toggle,gap=12,mainGap=5,toolGap=6}){
 const hidden=new Set(),sum=(items,space)=>{const shown=items.filter(x=>!hidden.has(x.key));return shown.reduce((s,x)=>s+x.width,0)+Math.max(0,shown.length-1)*space};
 const required=(b)=>{const center=sum(main,mainGap),right=sum([...tools,{key:'toggle',width:toggle}],toolGap);return center?center+2*Math.max(b,right)+2*gap:b+right+gap};
 for(const key of removalOrder){if(required(brand)<=available-2)break;hidden.add(key)}
 const compact=required(brand)>available-2;
 return {hidden:[...hidden],compact,required:required(compact?compactBrand:brand)};
}
let scheduled=false;
function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;layout()})}
function layout(){
 if(!nav.isConnected||!nav.clientWidth)return;
 const brand=nav.querySelector('.nav-brand'),main=nav.querySelector('.nav-items'),actions=nav.querySelector('.nav-actions'),more=document.getElementById('navMore');
 if(!brand||!main||!actions||!more)return;
 const focus=document.activeElement,mainButtons=[...main.children],toolButtons=[...actions.children].filter(x=>x!==more),all=[...mainButtons,...toolButtons];
 nav.dataset.navCompact='false';nav.dataset.navEmpty='false';
 for(const el of all)el.dataset.navHidden='false';
 nav.classList.add('nav-measuring');
 const width=el=>Math.ceil(el.getBoundingClientRect().width);
 const style=getComputedStyle(nav),available=nav.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight);
 const brandWidth=width(brand),gap=parseFloat(style.columnGap)||12;
 const options={available,brand:brandWidth,compactBrand:48,main:mainButtons.map(el=>({key:el.dataset.go,width:width(el)})),tools:toolButtons.map(el=>({key:el.id==='navTextSize'?'text':el.dataset.go,width:width(el)})),toggle:width(more),gap,mainGap:parseFloat(getComputedStyle(main).gap)||5,toolGap:parseFloat(getComputedStyle(actions).gap)||6};
 const result=fit(options);
 for(const el of all)el.dataset.navHidden=String(result.hidden.includes(el.id==='navTextSize'?'text':el.dataset.go));
 nav.dataset.navCompact=String(result.compact);
 nav.dataset.navEmpty=String(mainButtons.every(el=>el.dataset.navHidden==='true'));
 nav.classList.remove('nav-measuring');nav.classList.add('nav-overflow-ready');
 // A focused control that moves into the menu stays available to keyboard users.
 if(focus&&all.some(el=>el.dataset.navHidden==='true'&&el.contains(focus))){
  const menu=document.getElementById('navMenu');menu.classList.remove('hidden');more.setAttribute('aria-expanded','true');more.setAttribute('aria-label',T('Close menu','关闭菜单'));
  let selector=focus.hasAttribute('data-text-preset')?'[data-text-preset]':focus.hasAttribute('data-text-reset')?'[data-text-reset]':focus.hasAttribute('data-text-step')?'[data-text-step="'+focus.dataset.textStep+'"]':focus.dataset.go?'[data-go="'+focus.dataset.go+'"]':null;
  (selector?menu.querySelector(selector)||more:more).focus({preventScroll:true});
 }
}
const resize=window.ResizeObserver?new ResizeObserver(schedule):null;
function observe(){resize?.disconnect();resize?.observe(nav);for(const el of nav.querySelectorAll('.nav-brand,.nav-items>*,.nav-actions>*'))resize?.observe(el);schedule()}
new MutationObserver(observe).observe(nav,{childList:true,subtree:true});
new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['style','lang','data-text-large']});
window.addEventListener('resize',schedule);window.visualViewport?.addEventListener('resize',schedule);
window.addEventListener('gardenPlayerChange',schedule);document.fonts?.ready.then(schedule);
window.MindGardenNav={fit,layout,schedule};observe();layout();
})();
