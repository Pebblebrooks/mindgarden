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

/* Word cards scale with their own card and fit long translated labels. */
(function(){
 const grid=document.getElementById('grid');if(!grid)return;let queued=false;
 function fitWords(){queued=false;for(const word of grid.querySelectorAll('.pair-word')){
  const face=word.closest('.f');if(!face||!face.clientWidth||!face.clientHeight)continue;
  word.style.fontSize='';let size=parseFloat(getComputedStyle(word).fontSize);
  // Dense boards need a smaller label; never clip or truncate a matching clue.
  while(size>10&&(word.offsetHeight>face.clientHeight-2||word.scrollWidth>word.clientWidth+1)){
   size=Math.max(10,size-1);word.style.fontSize=size+'px';
  }
 }}
 function schedule(){if(!queued){queued=true;queueMicrotask(fitWords)}}
 new MutationObserver(schedule).observe(grid,{childList:true,subtree:true,characterData:true});
 new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['style','lang']});
 if(window.ResizeObserver)new ResizeObserver(schedule).observe(grid);
 window.addEventListener('resize',schedule);document.fonts?.ready.then(schedule);
})();
