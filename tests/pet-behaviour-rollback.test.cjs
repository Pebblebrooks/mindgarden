const {JSDOM}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict'),cp=require('node:child_process');
const d=new JSDOM('<section id="pet"></section>',{runScripts:'outside-only',pretendToBeVisual:true,url:'https://garden.test'}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){}});
w.eval(fs.readFileSync('public/mochi-widget.js','utf8'));
const root=w.document.getElementById('pet'),c=w.createMochiWidget(root,{asset:'pets/mochi-sprites.webp'}),sprite=root.querySelector('.mochi-sprite');
for(const species of ['cat','dog']){
 const select=root.querySelector('select');select.value=species;select.dispatchEvent(new w.Event('change'));
 c.react('rest');assert.equal(root.dataset.frame,'12');assert(sprite.style.backgroundImage.includes(species==='cat'?'mochi-sprites.webp':'toby-sprites.webp'));
 c.react('play');assert.equal(root.dataset.frame,'8');assert.equal(sprite.style.marginLeft,'');assert.equal(sprite.dataset.motion,undefined);
 root.querySelector('.mochi-stage').click();assert.equal(c.mode,'pet');
}
assert(root.querySelector('.mochi-floating-heart'));
assert(!fs.readFileSync('scripts/build-release.py','utf8').includes('companion-motion.js'));
assert.equal(fs.readFileSync('public/pet-ledge.js','utf8'),cp.execFileSync('git',['show','cceb8e5a28da59ffd75d1c3ebcd5215a2da52aef:public/pet-ledge.js'],{encoding:'utf8'}));
c.destroy();d.window.close();console.log('PASS: original progress controller restored exactly; cat/dog sleep and toy frames; no welcome locomotion; floating hearts retained');
