const {JSDOM}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const d=new JSDOM('<div id="pet"></div>',{runScripts:'outside-only',pretendToBeVisual:true}),w=d.window;
let reduced=false,enabled=true,now=1000,nextId=0;const jobs=new Map();
w.matchMedia=()=>({get matches(){return reduced},addEventListener(){},removeEventListener(){}});
w.requestAnimationFrame=fn=>{jobs.set(++nextId,fn);return nextId};w.cancelAnimationFrame=id=>jobs.delete(id);
w.eval(fs.readFileSync('public/companion-motion.js','utf8'));
const sprite=w.document.getElementById('pet'),pet=w.createCompanionMotion(sprite,{allowed:()=>enabled});
function step(seconds){for(let i=0;i<seconds*60;i++){now+=1000/60;const run=[...jobs.values()];jobs.clear();run.forEach(fn=>fn(now));assert(+sprite.dataset.position>=0&&+sprite.dataset.position<=1);}}
let lastDirection=sprite.dataset.direction;const directions=new Set(),states=new Set();
for(let i=0;i<3600;i++){step(1/60);directions.add(sprite.dataset.direction);states.add(sprite.dataset.motion);if(sprite.dataset.direction!==lastDirection){assert.equal(sprite.dataset.frame,'0','direction changes at front pose only');lastDirection=sprite.dataset.direction;}}
assert.equal(directions.size,2);for(const s of ['walk','brake','sit','turn-in','turn-out','stand'])assert(states.has(s),s);
pet.travel(-1);step(10);pet.react('pet');step(5);assert.equal(sprite.dataset.motion,'idle');
enabled=false;pet.refresh();const frozen=sprite.dataset.position;step(3);assert.equal(sprite.dataset.position,frozen);assert.equal(jobs.size,0);
enabled=true;reduced=true;pet.refresh();assert.equal(jobs.size,0);reduced=false;pet.refresh();assert(jobs.size>0);
pet.setSpecies('dog');assert(sprite.style.backgroundImage.includes('toby-consistent'));pet.destroy();assert.equal(jobs.size,0);d.window.close();
console.log('PASS bidirectional travel, front-facing turns, braking, bounds, petting, pause, reduced motion, species and cleanup');
