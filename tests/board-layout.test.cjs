const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const scope={window:{},document:{getElementById:()=>null}};vm.runInNewContext(fs.readFileSync('public/board-layout.js','utf8'),scope);const fit=scope.window.MindGardenBoardLayout.squareGrid;
let cases=0;for(const count of [6,8,12,16,20,24])for(const [width,height]of [[688,444],[688,620],[597,210],[311,610],[266,480],[450,220],[311,270]]){
 const r=fit(count,width,height);assert(r.size>=48);assert(r.columns*r.rows>=count);assert.equal(r.width,r.columns*r.size+(r.columns-1)*10);assert.equal(r.height,r.rows*r.size+(r.rows-1)*10);if(!r.overflow){assert(r.width<=width);assert(r.height<=height)}else assert(!Array.from({length:count},(_,i)=>{const c=i+1;return c*48+(c-1)*10<=width&&Math.ceil(count/c)*48+(Math.ceil(count/c)-1)*10<=height}).some(Boolean),'Must fit whenever 48px targets can fit');cases++;
}
const r=fit(16,688,444,4);assert.equal(r.columns,4);assert.equal(r.size,103);assert(r.height<=444);assert(fit(24,200,70).overflow);
console.log('PASS '+cases+' board geometries: square tracks, both bounds, level-8 regression, full decks and 48px targets.');
