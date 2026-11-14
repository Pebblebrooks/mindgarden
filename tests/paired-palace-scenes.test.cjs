const {JSDOM}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const root=__dirname+'/../public/',read=f=>fs.readFileSync(root+f,'utf8'),html=read('index.html');
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true});const w=dom.window;w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};const errors=[];w.addEventListener('error',e=>errors.push(e.message));
require('./dom-lifecycle.cjs')(w);w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);for(const f of ['language-catalog.js','language-runtime.js','artwork.js','info-help.js','upgrade.js','multiplayer.js','i18n.js','dashboard.js','ambient.js','identity.js','personal-progress.js','scenes.js'])w.eval(read(f));
(async()=>{try{
const ids=['cloud-palace','jade-terraces','lotus-palace','moon-palace','golden-sanctuary','celestial-waterfall','sunrise-causeway','mist-mountain','starlight-court','cloud-sea-harbour'];
for(const id of ids){
w.MindGardenScenes.choose(id);w.MindGardenScenes.apply();
for(const mode of ['light','dark','light']){
w.document.documentElement.dataset.theme=mode;
await new Promise(r=>setTimeout(r,10));
assert.equal(w.document.documentElement.dataset.gardenScene,id,'Theme toggle must preserve scenery');
assert.equal(w.document.documentElement.dataset.gardenSceneMode,mode);
const name=`garden-${id}-${mode==='light'?'day':'night'}.webp`;
assert(w.document.documentElement.style.getPropertyValue('--garden-art').includes(name));
assert(fs.existsSync(root+name),name+' must be packaged');
assert.equal(w.eval('save.sceneLight'),id);assert.equal(w.eval('save.sceneDark'),id);
}
}
assert.deepEqual(errors,[]);console.log('PASS: all ten palaces keep the same scenery through light/dark/light toggles, using matching packaged day/night artwork.');
}finally{setImmediate(()=>dom.window.close())}})();
