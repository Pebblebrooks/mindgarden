/* The progress animals share the welcome companion identities and turn sequences. */
(function(){
window.createPetLedge=function(root,assets,enabled=()=>true,crawlAsset,onAction=()=>{},actionAsset,options={}){
 root.innerHTML='<span class="ledge-pet cat" aria-hidden="true"><i></i></span><span class="ledge-pet dog" aria-hidden="true"><i></i></span>';
 let paused=false,visible=true,disposed=false;
 const els=[...root.children],controllers=els.map((el,i)=>window.createCompanionMotion(el.firstElementChild,{
  species:i?'dog':'cat',start:i?.8:.2,direction:i?-1:1,
  // Separate roaming areas prevent pets walking through each other.
  bounds:()=>{const w=root.clientWidth||400,size=Math.min(140,w*.24),span=w-size;return i?[(w/2+4)/span,1]:[0,Math.max(0,(w/2-size-4)/span)]},allowed:()=>!disposed&&!paused&&visible&&enabled(),
  position:p=>{const size=Math.min(140,root.clientWidth*.24);el.style.width=el.style.height=size+'px';el.style.transform=`translate(${p*Math.max(0,root.clientWidth-size)}px,${root.clientHeight-size*.88}px)`},
  onAction:a=>{el.dataset.action=a;onAction(i,a)}
 }));
 function refresh(){root.hidden=!enabled();controllers.forEach(c=>c.refresh())}
 const observer=typeof IntersectionObserver==='function'?new IntersectionObserver(e=>{visible=e[0].isIntersecting;refresh()}):null;observer?.observe(root);refresh();
 return {refresh,travel(dir){controllers.forEach(c=>c.travel(dir))},visit(action){controllers.forEach(c=>action==='travel'||action==='crawl'?c.travel(Math.random()<.5?-1:1):c.react(action));refresh()},pause(value){paused=value;refresh()},destroy(){disposed=true;controllers.forEach(c=>c.destroy());observer?.disconnect()}};
};
})();
