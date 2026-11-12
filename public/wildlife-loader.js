/* Defer the large optional 3D engine until after the first screen is usable. */
(function(){
let loading;
window.createGardenWildlife=function(host){
 const boot=()=>loading||(loading=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=window.MindGardenAssets?.['garden-wildlife.js']||'garden-wildlife.js';s.onload=()=>resolve(window.createGardenWildlife);s.onerror=()=>{loading=null;s.remove();reject(Error('Wildlife unavailable'))};document.head.append(s)}));
 return new Promise(resolve=>{const run=()=>boot().then(factory=>factory(host)).then(resolve).catch(()=>resolve(null));if(window.requestIdleCallback)requestIdleCallback(run,{timeout:4000});else setTimeout(run,1200)});
};
})();
