const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const p=__dirname+'/../public/',html=fs.readFileSync(p+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,el=id=>w.document.getElementById(id),errors=[];

let remote={account:{id:'account-test',username:'tester'},revision:0,document:{schemaVersion:1,profiles:{}}},signed=false,offline=false;
w.fetch=async(url,options)=>{if(offline)throw Error('Offline');const action=String(url).split('action=')[1],b=JSON.parse(options.body);let data={},status=200;
if(['signup','signin'].includes(action)){signed=true;data={account:remote.account};}
else if(!signed){status=401;data={code:'SIGNIN',error:'Sign in'};}
else if(action==='save'){if(b.revision!==remote.revision){status=409;data={code:'CONFLICT',error:'Conflict'}}else{remote.document=JSON.parse(JSON.stringify(b.document));remote.revision++;data={revision:remote.revision}}}
else if(['state','export'].includes(action))data=JSON.parse(JSON.stringify(remote));else if(action==='signout')signed=false;
return {ok:status===200,status,json:async()=>data};};
w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(p+bundle,'utf8'));
const tick=()=>new Promise(r=>setImmediate(r)),click=id=>{assert(el(id),id);el(id).click()},wait=async()=>{for(let i=0;i<12;i++)await tick()};
(async()=>{await wait();const api=w.MindGardenAccount,localId=w.save.cp;api.panel();el('accountName').value='tester';el('accountPassword').value='sufficiently long password';click('accountSignup');await wait();assert(api.connected);assert(remote.document.profiles[localId]);assert.equal(w.save.accountSync.dirty,false);
w.save.lang='zh';w.persist();await api.sync();assert.equal(remote.document.profiles[localId].preferences.lang,'zh');
w.save.pr.other=w.newP('Other player');w.persist();await api.sync();assert(remote.document.profiles.other);
remote.document.profiles.other.name='Updated on second device';remote.document.profiles.other.preferences={...w.me().preferences,lang:'en',mode:'dark'};remote.revision++;
w.openPl();w.document.querySelector('[data-p="other"]').click();await wait();assert.equal(w.save.cp,'other');assert.equal(w.me().name,'Updated on second device');assert.equal(w.save.lang,'en');assert.equal(w.save.mode,'dark');
offline=true;w.me().log.push({d:'2026-11-13',g:'num',r:1,s:20});w.persist();assert.equal(await api.sync(),false);assert(w.save.accountSync.dirty);assert(w.me().log.length);offline=false;await api.sync();assert.equal(remote.document.profiles.other.log.length,1);
remote.revision++;w.me().name='Local conflict';w.persist();assert.equal(await api.sync(),false);api.panel();assert(el('accountUseServer'));assert.equal(w.me().name,'Local conflict');click('accountUseServer');await wait();assert.equal(w.me().name,'Updated on second device');assert(!w.save.accountSync.dirty);
assert(!JSON.stringify(api.snapshot()).includes('account-test'));api.panel();click('accountSignout');await wait();assert(!api.connected);assert.equal(w.save.cp,localId);assert(!w.save.pr.other);assert(!w.save.accountSync);assert.deepEqual(errors,[]);
w.MindGardenPersonal.setup('num',1,'my');el('gameCount').value='5';el('gameCount').dispatchEvent(new w.Event('change'));el('gameRange').value='gentle';el('gameRange').dispatchEvent(new w.Event('change'));el('gameLength').value='long';el('gameLength').dispatchEvent(new w.Event('change'));assert.equal(w.MindGardenPersonal.settings('num','my').length,'long');assert.equal(w.MindGardenPersonal.settings('num','all').length,'standard');assert.equal(w.MindGardenPersonal.settings('pairs','my').count,15);w.MindGardenPersonal.setup('pairs',1,'my');el('personalPairMode').value='related';el('personalPairMode').dispatchEvent(new w.Event('change'));w.MindGardenPersonal.setup('pairs',1,'all');assert.equal(el('personalPairMode').value,'auto');w.MindGardenPersonal.setup('pairs',1,'my');assert.equal(el('personalPairMode').value,'related');
console.log('PASS initial upload, preferences, new players, fresh switch retrieval, offline retry, conflict protection, account-free exports and local-player restoration on signout.');
})().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)});
