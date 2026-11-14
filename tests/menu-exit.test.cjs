const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,el=id=>w.document.getElementById(id),errors=[];

const downloads=[];let downloadBlob;w.URL.createObjectURL=blob=>{downloadBlob=blob;return 'blob:test'};w.URL.revokeObjectURL=()=>{};w.HTMLAnchorElement.prototype.click=function(){downloads.push({name:this.download,blob:downloadBlob})};
let remote={account:{id:'account-test',username:'tester'},revision:0,document:{schemaVersion:1,profiles:{}}},signed=false,offline=false;
w.fetch=async(url,options)=>{if(offline)throw Error('Offline');const action=String(url).split('action=')[1],b=JSON.parse(options.body);let data={},status=200;
if(['signup','signin'].includes(action)){signed=true;data={account:remote.account,...(action==='signup'&&b.generateRecovery?{recovery:'a'.repeat(64)}:{})};}
else if(!signed){status=401;data={code:'SIGNIN',error:'Sign in'};}
else if(action==='recovery-key')data={recovery:'b'.repeat(64)};
else if(action==='save'){if(b.revision!==remote.revision){status=409;data={code:'CONFLICT',error:'Conflict'}}else{remote.document=JSON.parse(JSON.stringify(b.document));remote.revision++;data={revision:remote.revision}}}
else if(['state','export'].includes(action))data=JSON.parse(JSON.stringify(remote));else if(action==='signout')signed=false;
return {ok:status===200,status,json:async()=>data};};
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
const tick=()=>new Promise(r=>setImmediate(r)),click=id=>{assert(el(id),id);el(id).click()},wait=async()=>{for(let i=0;i<12;i++)await tick()};
(async()=>{try{
 await wait();
 for(const lang of ['en','zh']){
 w.eval('save.lang='+JSON.stringify(lang)+';persist();load();renderHome()');
 for(const open of [()=>w.MindGardenAccount.panel('signup'),()=>w.MindGardenAccount.panel('recover'),()=>w.openSet(),()=>w.openPl(),()=>w.MindGardenMenus.player(),()=>w.MindGardenPersonal.myGames(),()=>w.MindGardenPersonal.setup('num',1,'all')]){
 open();await wait();assert(el('menuExit'),'Direct close exists');const before=w.eval('JSON.stringify(save.pr)');
 el('menuExit').click();assert(el('ov').classList.contains('hidden'),'Close exits directly');assert.equal(w.eval('JSON.stringify(save.pr)'),before,'Close retains player data');
 open();await wait();el('box').dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true}));assert(el('ov').classList.contains('hidden'),'Escape exits directly');
 }
 }
 w.eval("show('game');overlay('<h2>Level complete</h2><button id=next>Next</button>')");await wait();assert(!el('menuExit'),'Active game results keep their own controls');
 assert.deepEqual(errors,[]);console.log('PASS direct Close and Escape in seven menu types, both languages; profile preservation; active game results untouched.');
}finally{w.close()}})();
