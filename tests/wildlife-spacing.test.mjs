import {placeSolids} from '../src/wildlife-spacing.js';
import assert from 'node:assert/strict';
for(const [width,height] of [[320,760],[768,900],[1440,900]]){
 let previous=new Map();let count=0;for(let frame=0;frame<3000;frame++){
 const items=Array.from({length:15},(_,i)=>({id:String(i),x:width*(.5+.45*Math.sin(frame*.014+i)),y:height*(.5+.4*Math.cos(frame*.011+i*2)),r:i<5?35+10*Math.sin(frame*.02+i):12+6*Math.cos(frame*.03+i),previous:previous.get(String(i)),maxStep:3.3}));
 const placed=placeSolids(items,width,height);const visible=placed.filter(x=>x.visible);assert(visible.length>=8);for(let i=0;i<visible.length;i++){const a=visible[i];assert(a.x-a.r>=0&&a.x+a.r<=width);assert(a.y-a.r>=0&&a.y+a.r<=height);for(let j=i+1;j<visible.length;j++){const b=visible[j];assert(Math.hypot(a.x-b.x,a.y-b.y)>=a.r+b.r+3.99,`${width} frame ${frame}: overlap`)}}count+=visible.length;previous=new Map(placed.map(x=>[x.id,{x:x.x,y:x.y,visible:x.visible}]));}assert(count>3000*8);
}
// Head-on approach must yield rather than exchange sides through one another.
let pair=[{id:'a',x:100,y:100,r:20,previous:{x:100,y:100},maxStep:3},{id:'b',x:200,y:100,r:20,previous:{x:200,y:100},maxStep:3}];
for(let n=0;n<100;n++){pair=placeSolids(pair.map(x=>({...x,previous:{x:x.x,y:x.y},x:x.id==='a'?200:100,y:100})),300,200);assert(Math.hypot(pair[0].x-pair[1].x,pair[0].y-pair[1].y)>=43.99)}
console.log('PASS: 9,000 dynamic collision frames across phone/tablet/desktop bounds; no visible envelope overlap, bounded placement and head-on avoidance.');
