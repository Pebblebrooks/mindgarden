const {JSDOM}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const d=new JSDOM('<div id="pet"></div>',{runScripts:'outside-only',pretendToBeVisual:true,url:'https://preview.test'}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){}});const calls=[];
const audio={perform:(who,action)=>calls.push([who,action]),stop(){},pause(){},enable(){}};w.eval(fs.readFileSync('public/mochi-widget.js','utf8'));
const root=w.document.getElementById('pet'),pet=w.createMochiWidget(root,{audio,asset:'cat',dogAsset:'dog',vocalAsset:'vocal'});
assert.equal(root.querySelectorAll('[data-tool],[data-mochi=rest],[data-sound],[data-action]').length,0);
root.querySelector('.mochi-stage').click();assert.equal(pet.mode,'pet');assert(calls.some(x=>x[1]==='purr'));root.querySelector('[data-mochi=hide]').click();assert.equal(root.querySelector('.mochi-content').hidden,true);assert.equal(w.localStorage.getItem('mind-garden-pet-visible'),'false');root.querySelector('.mochi-show').click();assert.equal(root.querySelector('.mochi-content').hidden,false);
pet.destroy();d.window.close();console.log('PASS: no manual action controls; direct touch reaction; hide/show persistence; cleanup');
