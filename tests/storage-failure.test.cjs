const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('node:fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8');
function boot(raw,blocked=false){const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window;w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};if(raw!==undefined)w.localStorage.setItem('gardenMatch',raw);const set=w.Storage.prototype.setItem;if(blocked)w.Storage.prototype.setItem=function(){throw new w.DOMException('Quota exceeded','QuotaExceededError')};
 w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+html.match(/src="(garden-ui-\d+\.js)"/)[1],'utf8'));return {w,dom,unblock:()=>w.Storage.prototype.setItem=set}}
try{
 const a=boot(undefined,true);try{assert(a.w.document.getElementById('storageWarning'),'Failed saving must be visible');assert.equal(a.w.persist(),false);a.w.document.getElementById('bOnline').click();assert(a.w.document.getElementById('mpLogin'),'Blocked storage must not crash the lobby');a.unblock();assert.equal(a.w.persist(),true);assert.equal(a.w.document.getElementById('storageWarning'),null);assert(a.w.localStorage.getItem('gardenMatch'))}finally{a.dom.window.close()}
 for(const raw of ['{broken','null','[]',JSON.stringify({pr:{bad:null},cp:'bad'}),JSON.stringify({pr:{bad:{name:'Bad',log:{},stars:{}}},cp:'bad'})]){
  const a=boot(raw);try{assert(a.w.document.getElementById('welcomeDashboard'));assert(a.w.document.getElementById('storageRecoveryDownload'));assert.equal(a.w.eval('save.recoveryOriginal'),raw);assert.equal(JSON.parse(a.w.localStorage.getItem('gardenMatch')).recoveryOriginal,raw);assert(Array.isArray(a.w.eval('me().log')))}finally{a.dom.window.close()}
 }
 const raw='{broken',b=boot(raw,true);try{assert.equal(b.w.localStorage.getItem('gardenMatch'),raw,'A failed recovery save must leave original bytes untouched');assert(b.w.document.getElementById('storageRecoveryDownload'))}finally{b.dom.window.close()}
 console.log('PASS: storage-full warning and recovery, blocked-storage lobby, malformed saves preserve original bytes, safe boot and atomic failure.');
}catch(e){console.error(e);process.exitCode=1}
