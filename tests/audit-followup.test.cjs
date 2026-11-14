const {JSDOM,VirtualConsole}=require('jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8');
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window;
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.fetch=async()=>({ok:false,status:401,json:async()=>({code:'SIGNIN'})});
require('./dom-lifecycle.cjs')(w);w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+html.match(/src="(garden-ui-\d+\.js)"/)[1],'utf8'));
const wait=()=>new Promise(r=>setTimeout(r,30)),plain=x=>JSON.parse(JSON.stringify(x));
(async()=>{try{
 await wait();
 const record={d:'2026-11-14',g:'pairs',r:.5,s:15,level:2,attempts:10,mismatches:3,hints:1,stars:null,timed:true,preview:true,shared:true};w.me().log=[record];w.MindGardenPersonal.settings('num','my');
 const config=plain(w.MindGardenPersonal.config());w.me().gameSettings.defaults={...config,count:5,range:'challenging',length:'long'};
 const backup=w.MindGardenExport.backup(),restored=w.MindGardenExport.validated(JSON.stringify(backup));assert.deepEqual(plain(restored.log[0]),record);assert.equal(restored.gameSettings.defaults.count,5);assert.equal(restored.gameSettings.defaults.range,'challenging');
 for(const field of ['timed','shared','preview']){const invalid=plain(backup);invalid.profile.log[0][field]='true';assert.throws(()=>w.MindGardenExport.validated(JSON.stringify(invalid)))}
 const original=w.me().name,set=w.Storage.prototype.setItem;w.Storage.prototype.setItem=function(){throw Error('quota')};
 w.MindGardenIdentity.open();w.document.getElementById('gardenName').value='Renamed';w.document.getElementById('gardenNameSave').click();await wait();assert(w.document.getElementById('gardenName'),'Failed save leaves dialog open');assert(w.document.getElementById('gardenNameStatus').textContent.includes('could not be saved'));assert.equal(w.me().name,original);
 w.Storage.prototype.setItem=set;w.document.getElementById('gardenNameSave').click();await wait();assert.equal(w.me().name,'Renamed');assert.equal(JSON.parse(w.localStorage.getItem('gardenMatch')).pr[w.save.cp].name,'Renamed');
 w.save.pr.other=w.newP('Other');await assert.rejects(w.MindGardenMultiplayer.rename('  Ｏｔｈｅｒ '),/unavailable/);
 console.log('PASS audit follow-up: complete result/default backup round-trip, invalid flags rejected, quota retry retains rename, multiplayer duplicate validation.');
}finally{w.close()}})().catch(e=>{console.error(e);process.exitCode=1});
