const {JSDOM,VirtualConsole}=require('./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
const html=fs.readFileSync('public/index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,''),{url:'https://pets.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,el=id=>w.document.getElementById(id),errors=[];
w.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.fetch=async()=>({ok:false,status:503,json:async()=>({error:'Offline'})});w.addEventListener('error',e=>errors.push(e.message));
w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync('public/'+bundle,'utf8'));
try{
 for(const lang of ['en','zh'])for(const homeVisible of [true,false]){
  w.save.lang=lang;w.MindGardenPetsVisible=homeVisible;w.chooseMiniLevel('pets');el('gaStart').click();const pet=el('gaPet');
  assert(pet.classList.contains('mochi-game'));assert(!pet.querySelector('.mochi-content').hidden);assert.equal(w.MindGardenPetsVisible,homeVisible);
  for(const species of ['cat','dog']){const select=pet.querySelector('select');select.value=species;select.dispatchEvent(new w.Event('change'));pet.querySelector('.mochi-stage').click();assert.equal(pet.dataset.mood,'pet');assert(pet.querySelector('.mochi-sprite').style.backgroundImage.includes(species==='cat'?'mochi':'toby'));}
  pet.querySelector('[data-mochi=motion]').click();assert.equal(pet.dataset.still,'true');pet.querySelector('[data-mochi=motion]').click();
  el('gaPetDone').click();assert(el('mini').classList.contains('hidden'));assert.equal(w.MindGardenPetsVisible,homeVisible);
 }
 assert.deepEqual(errors,[]);console.log('PASS Garden Pets: bilingual launch always expanded, cat/dog gestures, pause, exit, home visibility preserved.');
}finally{w.close()}
