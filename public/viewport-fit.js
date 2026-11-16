/* Fit game boards to the current viewport without scaling text or touch targets. */
(function(){
 const mini=document.getElementById('mini'),mp=document.getElementById('mp');let queued=false;
 function fit(){queued=false;document.documentElement.style.setProperty('--game-viewport-height',(window.visualViewport?.height||innerHeight)+'px');if(mini.classList.contains('hidden'))return;
 const style=getComputedStyle(mp),available=Math.max(0,mp.clientHeight-(parseFloat(style.paddingTop)||0)-(parseFloat(style.paddingBottom)||0));
 mp.style.setProperty('--play-space',available+'px');
 for(const grid of mp.querySelectorAll('.gridm')){
  // Story answer columns belong to the responsive stylesheet, not picture/word board fitting.
  if(grid.classList.contains('story-answer-grid'))continue;
  const cells=[...grid.children];if(!cells.length)continue;
  const text=cells.every(e=>e.classList.contains('txt')),width=grid.clientWidth;
  if(text){
   const numeric=grid.classList.contains('number-answer-grid'),longest=Math.max(...cells.map(e=>e.textContent.trim().length));
   let minimum=longest>24?200:longest>10?140:90,context=null;
   if(numeric){context=document.createElement('canvas').getContext('2d');minimum=72;for(const cell of cells){cell.style.fontSize='';const s=getComputedStyle(cell);if(context)context.font=s.fontWeight+' '+s.fontSize+' '+s.fontFamily;const textWidth=context?context.measureText(cell.textContent.trim()).width:cell.textContent.trim().length*parseFloat(s.fontSize)*.65;minimum=Math.max(minimum,textWidth+(parseFloat(s.paddingLeft)||0)+(parseFloat(s.paddingRight)||0)+(parseFloat(s.borderLeftWidth)||0)+(parseFloat(s.borderRightWidth)||0)+4)}}
   const gap=parseFloat(getComputedStyle(grid).columnGap)||0,cols=Math.max(numeric?Math.min(2,cells.length):1,Math.min(cells.length,numeric?6:4,Math.floor((width+gap)/(minimum+gap))));
   grid.style.setProperty('grid-template-columns',`repeat(${cols},minmax(0,1fr))`,'important');
   // Preserve the chosen text size whenever it fits; keep long numbers intact on narrow screens.
   if(numeric&&context)for(const cell of cells){const s=getComputedStyle(cell),size=parseFloat(s.fontSize),available=cell.clientWidth-(parseFloat(s.paddingLeft)||0)-(parseFloat(s.paddingRight)||0)-4;context.font=s.fontWeight+' '+s.fontSize+' '+s.fontFamily;const measured=context.measureText(cell.textContent.trim()).width;if(measured>available&&available>0)cell.style.fontSize=Math.max(18,Math.floor(size*available/measured))+'px';}
  }
  const cols=getComputedStyle(grid).gridTemplateColumns.split(' ').length||1,rows=Math.ceil(cells.length/cols);
  if(!text&&!grid.classList.contains('story-answer-grid')&&cells.every(e=>e.matches('.big'))){const gs=getComputedStyle(grid),number=k=>parseFloat(gs[k])||0,gap=number('rowGap');
   let space=available-(grid.getBoundingClientRect().top-mp.getBoundingClientRect().top);
   if(grid.parentElement===mp){const outer=e=>{const s=getComputedStyle(e);return e.getBoundingClientRect().height+(parseFloat(s.marginTop)||0)+(parseFloat(s.marginBottom)||0)};space=available-[...mp.children].filter(e=>e!==grid).reduce((sum,e)=>sum+outer(e),0)-number('marginTop')-number('marginBottom')}
   const cell=Math.max(44,Math.min(100,(space-number('paddingTop')-number('paddingBottom')-(rows-1)*gap)/rows));grid.style.setProperty('--fit-cell',cell+'px');if(!grid.classList.contains('viewport-grid'))grid.classList.add('viewport-grid')}
 }
 }
 function schedule(){if(!queued){queued=true;requestAnimationFrame(fit)}}
 new MutationObserver(schedule).observe(mini,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
 new MutationObserver(()=>{mp.scrollTop=0;schedule()}).observe(mp,{childList:true});
 if(window.ResizeObserver)new ResizeObserver(schedule).observe(mp);
 new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['lang','data-text-large']});
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
 function schedule(){if(!queued){queued=true;requestAnimationFrame(fitWords)}}
 new MutationObserver(schedule).observe(grid,{childList:true,subtree:true,characterData:true});
 new MutationObserver(schedule).observe(document.documentElement,{attributes:true,attributeFilter:['style','lang']});
 if(window.ResizeObserver)new ResizeObserver(schedule).observe(grid);
 window.addEventListener('resize',schedule);document.fonts?.ready.then(schedule);
})();
