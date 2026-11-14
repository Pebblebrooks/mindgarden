const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const root=__dirname+'/../public/',html=fs.readFileSync(root+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const wait=async()=>{for(let i=0;i<14;i++)await new Promise(r=>setImmediate(r))};
async function boot({lang='en',saved=null,remote=null,signed=false,deferStartup=false,deferSignup=false,signupFailure=false}={}){
 const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,errors=[],downloads=[];
 let firstState=true,finishStartup,managerResolve,storedBlob,finishSignup,signupCount=0;
 remote=remote||{account:{id:'account-test',username:'tester'},revision:0,document:{schemaVersion:1,profiles:{}}};
 if(saved)w.localStorage.setItem('gardenMatch',saved);else w.localStorage.setItem('gardenMatch',JSON.stringify({lang}));
 w.fetch=async(url,options)=>{const action=new URL(url,'https://garden.test').searchParams.get('action'),body=JSON.parse(options.body);let data={},status=200;
  if(action==='passkey-status')return {ok:true,status:200,json:async()=>({available:true})};
  if(action==='state'&&firstState){firstState=false;if(deferStartup)return new Promise(resolve=>{finishStartup=()=>resolve({ok:false,status:401,json:async()=>({code:'SIGNIN',error:'Sign in'})})})}
  if(action==='signup'){signupCount++;if(deferSignup)await new Promise(resolve=>finishSignup=resolve);if(signupFailure)return {ok:false,status:409,json:async()=>({code:'EXISTS',error:'Account already exists.'})};}
  if(action==='signup'||action==='signin'){signed=true;data={account:remote.account,...(body.generateRecovery?{recovery:'a'.repeat(64)}:{})}}
  else if(!signed){status=401;data={code:'SIGNIN',error:'Sign in'}}
  else if(action==='state')data=JSON.parse(JSON.stringify(remote));
  else if(action==='save'){remote.document=JSON.parse(JSON.stringify(body.document));data={revision:++remote.revision}}
  else if(action==='signout')signed=false;
  return {ok:status===200,status,json:async()=>data};
 };
 w.URL.createObjectURL=blob=>{storedBlob=blob;return 'blob:test'};w.URL.revokeObjectURL=()=>{};w.HTMLAnchorElement.prototype.click=function(){downloads.push({name:this.download,blob:storedBlob})};
 w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.HTMLElement.prototype.scrollIntoView=()=>{};
 w.isSecureContext=true;w.PublicKeyCredential=function(){};w.PasswordCredential=function(data){Object.assign(this,data)};w.navigator.credentials={store:()=>new Promise(resolve=>{managerResolve=resolve})};
 w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(root+bundle,'utf8'));await wait();
 const el=id=>w.document.getElementById(id),click=id=>{assert(el(id),id);el(id).click()};
 return {w,el,click,remote,downloads,errors,lateStartup:()=>finishStartup?.(),finishManager:()=>managerResolve?.(),expire:()=>{signed=false},finishSignup:()=>finishSignup?.(),get signupCount(){return signupCount},allowSignup:()=>{signupFailure=false;deferSignup=false}};
}

(async()=>{for(const lang of ['en','zh']){
 const x=await boot({lang});const {w,el,click}=x;const text=(en,zh)=>lang==='en'?en:zh;
 await wait();assert.equal(el('customiseDashboard').previousElementSibling.className,'nav-preferences');assert.equal(el('customiseDashboard').nextElementSibling.id,'menuAccountSettings');
 click('customiseDashboard');assert(el('displaySave'));assert(el('box').textContent.includes(w.me().name));click('displayCancel');
 click('menuAccountSettings');await wait();assert(el('accountOptions').open);click('accountDeviceData');await wait();assert(el('box').querySelector('.data-export-settings'));w.closeOv();
 w.MindGardenAccount.panel('signup');el('accountName').value='tester';el('accountPassword').value='test-password-123';click('accountSignup');await wait();click('accountContinue');await wait();w.document.querySelector('[data-copy-player]').checked=true;click('accountCopyPlayers');await wait();
 assert(el('deviceSetup').closest('#accountSecurity'));assert.equal(el('accountOptions').open,false);assert(el('accountSyncNow').closest('#accountOptions'));assert(el('accountExport').closest('#accountOptions'));assert(el('accountGenerateRecovery').closest('#accountSecurity'));assert(!el('accountPlayers').closest('details'));assert(!el('accountSignout').closest('details'));assert.equal(el('accountDone').textContent,text('Continue playing','继续玩'));assert.equal(w.document.querySelectorAll('#accountDone').length,1);
 assert(el('accountSyncNow').parentElement.querySelector('.mg-info-button'));assert(el('accountDownloadLogin').parentElement.querySelector('[data-info]').dataset.info.includes(text('unencrypted','未加密')));
 click('accountSettingsOpen');await wait();assert(el('accountOptions').open);assert(el('accountRetrySave').hidden);const normal=w.fetch;w.fetch=async()=>{throw new TypeError('offline')};await w.MindGardenAccount.sync({pull:true});await wait();assert(!el('accountRetrySave').hidden);w.fetch=normal;click('accountRetrySave');await wait();assert(el('accountRetrySave').hidden);assert(el('accountOptions').open);
 // Help must not activate the action it explains.
 w.MindGardenAccount.panel(undefined,'home');await wait();const info=el('accountSignout').parentElement.querySelector('.mg-info-button');info.click();await wait();assert(w.MindGardenAccount.signedIn);assert.equal(info.getAttribute('aria-expanded'),'true');w.MindGardenInfo.hide();
 click('accountDone');w.MindGardenAccount.panel(undefined,'home');await wait();click('accountSignout');await wait();assert(!w.MindGardenAccount.signedIn);assert(el('accountSwitchPlayer'));
 w.closeOv();w.save.famOk=1;w.famView();await wait();assert(el('box').textContent.includes(text('Players’ Progress','玩家进度')));assert(!el('box').textContent.includes(text('Family View','家人视图')));assert.deepEqual(x.errors,[]);w.close();
 }console.log('PASS simplified account menu: bilingual navigation, home customisation, signed-out backups, advanced tools, independent help, retry/recovery, sign-out and progress naming.');
})().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)});
