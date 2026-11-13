/* Fit game boards to the current viewport without scaling text or touch targets. */
(function(){
 const mini=document.getElementById('mini'),mp=document.getElementById('mp');let queued=false;
 function fit(){queued=false;if(mini.classList.contains('hidden'))return;
 const height=window.visualViewport?.height||innerHeight,available=Math.max(180,height-mp.getBoundingClientRect().top-12);
 mp.style.setProperty('--play-space',available+'px');
 for(const grid of mp.querySelectorAll('.gridm')){
  const cells=[...grid.children];if(!cells.length)continue;
  const text=cells.every(e=>e.classList.contains('txt')),width=grid.clientWidth;
  if(text){const longest=Math.max(...cells.map(e=>e.textContent.trim().length));const minimum=longest>24?200:longest>10?140:90;const cols=Math.max(1,Math.min(cells.length,4,Math.floor(width/minimum)));grid.style.setProperty('grid-template-columns',`repeat(${cols},minmax(0,1fr))`,'important')}
  const cols=getComputedStyle(grid).gridTemplateColumns.split(' ').length||1,rows=Math.ceil(cells.length/cols);
  if(!text&&cells.every(e=>e.matches('.big'))){const top=grid.getBoundingClientRect().top;const cell=Math.max(44,Math.min(100,(height-top-60-(rows-1)*6)/rows));grid.style.setProperty('--fit-cell',cell+'px');if(!grid.classList.contains('viewport-grid'))grid.classList.add('viewport-grid')}
 }
 }
 function schedule(){if(!queued){queued=true;queueMicrotask(fit)}}
 new MutationObserver(schedule).observe(mini,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
 new MutationObserver(()=>{mp.scrollTop=0;schedule()}).observe(mp,{childList:true});
 window.addEventListener('resize',schedule);window.visualViewport?.addEventListener('resize',schedule);document.fonts?.ready.then(schedule);schedule();
})();
