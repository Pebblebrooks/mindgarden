const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),d=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=d.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+html.match(/src="(garden-ui-\d+\.js)"/)[1],'utf8'));
try{
assert.equal(w.document.querySelectorAll('#gardenCat,#progressPetPeeks,.wildlife-poster,.zoo .wk,.zoo .pk,.zoo .cr').length,0);
assert.equal(w.document.querySelectorAll('#gardenLife .scenery-flyers>span').length,3);
w.openSet();assert.equal(w.document.querySelectorAll('#menuPetToggle').length,0);w.closeOv();
w.eval("me().dashboardPreferences={petsVisible:true};renderHome();window.dispatchEvent(new Event('gardenPlayerChange'))");
assert.equal(w.document.querySelectorAll('#gardenCat,#progressPetPeeks').length,0);
const source=fs.readFileSync(__dirname+'/../src/garden-wildlife.js','utf8');assert(!source.includes('GLTFLoader'));assert(!source.includes('drawHen'));assert(!source.includes("animal('"));assert(source.includes("bird('swallow'"));assert(source.includes("insect('butterfly'"));
assert(w.MG.pets,'Independent Garden Pets activity remains available');
console.log('PASS: no scenery land animals or welcome pets, including saved pet visibility; flying fallback and bird/butterfly renderers retained; pet game preserved.');
}finally{setImmediate(()=>d.window.close())}
