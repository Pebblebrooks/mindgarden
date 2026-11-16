/* Fit matching cards to their allocated play area, including both axes and gaps. */
(function(){
'use strict';
function squareGrid(count,width,height,preferred=4,gap=10){
 count=Math.max(1,Math.floor(count));width=Math.max(0,width);height=Math.max(0,height);
 const minimum=48,maximum=168,limit=Math.max(1,Math.min(count,Math.floor((width+gap)/(minimum+gap))));let best=null;
 for(let columns=1;columns<=limit;columns++){
  const rows=Math.ceil(count/columns),size=Math.floor(Math.min(maximum,(width-gap*(columns-1))/columns,(height-gap*(rows-1))/rows));
  const candidate={columns,rows,size};
  if(!best||size>best.size||size===best.size&&Math.abs(columns-preferred)<Math.abs(best.columns-preferred))best=candidate;
 }
 // Keep the familiar arrangement when it costs less than 5% of card size.
 if(preferred<=limit){const rows=Math.ceil(count/preferred),size=Math.floor(Math.min(maximum,(width-gap*(preferred-1))/preferred,(height-gap*(rows-1))/rows));if(size>=minimum&&size>=best.size*.95)best={columns:preferred,rows,size}}
 if(best.size<minimum){best.columns=limit;best.rows=Math.ceil(count/limit);best.size=minimum}
 best.width=best.columns*best.size+(best.columns-1)*gap;best.height=best.rows*best.size+(best.rows-1)*gap;
 return {...best,overflow:best.width>width||best.height>height};
}
window.MindGardenBoardLayout={squareGrid};
const game=document.getElementById('game'),grid=document.getElementById('grid');if(!game||!grid)return;
let queued=false;
function fit(){
 queued=false;if(game.classList.contains('hidden')||!grid.children.length||!grid.clientHeight)return;
 const style=getComputedStyle(grid),px=n=>parseFloat(style[n])||0;
 const width=grid.clientWidth-px('paddingLeft')-px('paddingRight'),height=grid.clientHeight-px('paddingTop')-px('paddingBottom');
 const layout=squareGrid(grid.children.length,width,height,parseInt(style.getPropertyValue('--c'))||4,10);
 for(const [key,value]of Object.entries({'--pair-columns':layout.columns,'--pair-rows':layout.rows,'--pair-cell':layout.size+'px'}))if(grid.style.getPropertyValue(key)!==String(value))grid.style.setProperty(key,value);
 grid.dataset.boardOverflow=String(layout.overflow);
}
function schedule(){if(!queued){queued=true;queueMicrotask(fit)}}
new MutationObserver(schedule).observe(game,{childList:true,subtree:true,attributes:true,attributeFilter:['class']});
if(window.ResizeObserver)new ResizeObserver(schedule).observe(grid);
window.addEventListener('resize',schedule);window.visualViewport?.addEventListener('resize',schedule);document.fonts?.ready.then(schedule);schedule();
})();
