const fs=require('node:fs'),assert=require('node:assert/strict');
const {JSDOM}=require('./test-dom.cjs');
const root=__dirname+'/../public/';
const html=fs.readFileSync(root+'index.html','utf8');
assert(!html.includes('function gardenBg('));
assert(!html.includes('id="gbg"'));
assert(!html.includes('function heroSvg('));
function boot(saved){
 const d=new JSDOM('<html data-theme="light"><button id="bSet"></button></html>',{runScripts:'outside-only'}),w=d.window;
 w.save={cp:'one',sceneLight:'sakura',sceneDark:'sakura',...saved};
 w.MindGardenLocale={pair:a=>a};w.persist=()=>{};w.openSet=()=>{};
 w.matchMedia=()=>({matches:false,addEventListener(){}});
 w.eval(fs.readFileSync(root+'scenes.js','utf8'));
 return {d,w,art:()=>w.document.documentElement.style.getPropertyValue('--garden-art')};
}
let a=boot({photolight:true});
assert.equal(a.art(),'none','No stock scenery while saved photo is unresolved');
a.w.MindGardenPhotos={get:()=> 'blob:selected-photo',ready:()=>true};a.w.MindGardenScenes.apply();assert(a.art().includes('blob:selected-photo'));
a.w.MindGardenPhotos={get:()=>null,ready:()=>true};a.w.MindGardenScenes.apply();assert(a.art().includes('sakura'),'Missing photo has a safe fallback');a.d.window.close();
a=boot({heroLight:'video-123'});assert.equal(a.w.save.heroLight,'video-123','Restore must not overwrite saved video');assert.equal(a.art(),'none');a.w.MindGardenScenes.choose('pond');a.w.MindGardenScenes.apply();assert.equal(a.w.save.heroLight,'pond');assert(a.art().includes('pond'));a.d.window.close();
console.log('PASS: obsolete startup illustration removed; pending photo neutral; missing photo fallback; video selection preserved; explicit scenery selection works.');
