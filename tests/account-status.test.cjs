const {JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom'),fs=require('fs'),assert=require('node:assert/strict');
const root=__dirname+'/../public/',html=fs.readFileSync(root+'index.html','utf8'),bundle=html.match(/src="(garden-ui-\d+\.js)"/)[1];
const wait=async()=>{for(let i=0;i<14;i++)await new Promise(r=>setImmediate(r))};
async function boot({lang='en',saved=null,remote=null,signed=false,deferStartup=false}={}){
 const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<style[\s\S]*?<\/style>/g,''),{url:'https://garden.test/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()}),w=dom.window,errors=[],downloads=[];
 let firstState=true,finishStartup,managerResolve,storedBlob;
 remote=remote||{account:{id:'account-test',username:'tester'},revision:0,document:{schemaVersion:1,profiles:{}}};
 if(saved)w.localStorage.setItem('gardenMatch',saved);else w.localStorage.setItem('gardenMatch',JSON.stringify({lang}));
 w.fetch=async(url,options)=>{const action=new URL(url,'https://garden.test').searchParams.get('action'),body=JSON.parse(options.body);let data={},status=200;
  if(action==='passkey-status')return {ok:true,status:200,json:async()=>({available:false})};
  if(action==='state'&&firstState){firstState=false;if(deferStartup)return new Promise(resolve=>{finishStartup=()=>resolve({ok:false,status:401,json:async()=>({code:'SIGNIN',error:'Sign in'})})})}
  if(action==='signup'||action==='signin'){signed=true;data={account:remote.account,...(body.generateRecovery?{recovery:'a'.repeat(64)}:{})}}
  else if(!signed){status=401;data={code:'SIGNIN',error:'Sign in'}}
  else if(action==='state')data=JSON.parse(JSON.stringify(remote));
  else if(action==='save'){remote.document=JSON.parse(JSON.stringify(body.document));data={revision:++remote.revision}}
  else if(action==='signout')signed=false;
  return {ok:status===200,status,json:async()=>data};
 };
 w.URL.createObjectURL=blob=>{storedBlob=blob;return 'blob:test'};w.URL.revokeObjectURL=()=>{};w.HTMLAnchorElement.prototype.click=function(){downloads.push({name:this.download,blob:storedBlob})};
 w.matchMedia=()=>({matches:false,addEventListener(){}});w.scrollTo=()=>{};w.requestAnimationFrame=()=>0;w.HTMLElement.prototype.scrollIntoView=()=>{};
 w.PasswordCredential=function(data){Object.assign(this,data)};w.navigator.credentials={store:()=>new Promise(resolve=>{managerResolve=resolve})};
 w.addEventListener('error',e=>errors.push(e.message));w.eval(html.match(/<script>([\s\S]*?)<\/script>/)[1]);w.eval(fs.readFileSync(root+bundle,'utf8'));await wait();
 const el=id=>w.document.getElementById(id),click=id=>{assert(el(id),id);el(id).click()};
 return {w,el,click,remote,downloads,errors,lateStartup:()=>finishStartup?.(),finishManager:()=>managerResolve?.(),expire:()=>{signed=false}};
}
async function resize(x,expected){
 for(const [width,height]of [[390,844],[844,390],[768,1024],[1024,768]]){
  Object.defineProperty(x.w,'innerWidth',{value:width,configurable:true});Object.defineProperty(x.w,'innerHeight',{value:height,configurable:true});
  x.w.dispatchEvent(new x.w.Event('resize'));x.w.dispatchEvent(new x.w.Event('orientationchange'));await wait();
  assert.equal(x.el('navAccount').textContent,expected);assert.equal(x.w.document.querySelectorAll('#navAccount').length,1);
  x.w.renderHome();await wait();assert.equal(x.el('navAccount').textContent,expected,'rebuilt navbar preserves auth state');
 }
}
(async()=>{
 for(const lang of ['en','zh']){
  const x=await boot({lang,deferStartup:true}),{w,el,click}=x,api=w.MindGardenAccount;
  w.me().name='Jamie';w.me().log=[{g:'num',r:1,s:4,d:'2026-11-14'}];w.persist();
  api.panel('signup');el('accountName').value='tester';el('accountPassword').value='test-only-long-password';el('accountWantRecovery').checked=true;click('accountSignup');await wait();
  assert(api.signedIn);assert(!api.connected,'no player is uploaded without selection');assert.equal(Object.keys(x.remote.document.profiles).length,0);
  assert(el('accountOutcome').textContent.includes(lang==='en'?'Account created':'账户已创建'));assert.equal(w.document.activeElement.id,'accountOutcome');
  // A password-manager prompt that stays open must not prevent the success screen.
  assert(el('accountContinue'));x.lateStartup();await wait();assert(api.signedIn,'stale startup 401 cannot undo new sign-in');
  await resize(x,lang==='en'?'Account':'账户');
  click('accountDownloadLogin');click('accountSaveKey');await wait();assert.equal(x.downloads.length,2);
  assert.equal(el('accountDownloadLogin').nextElementSibling.id,'accountDownloadLoginFeedback');assert.equal(el('accountSaveKey').nextElementSibling.id,'accountSaveKeyFeedback');
  assert(el('accountDownloadLoginFeedback').textContent.includes(lang==='en'?'Check Downloads':'下载列表'));
  // Closing the save screen does not sign out; opening Account returns to it.
  click('accountDone');click('navAccount');assert(el('accountOutcome'));assert(el('accountGeneratedKey'));
  click('accountContinue');await wait();assert(el('accountCopyPlayers'));assert(api.signedIn);assert(!api.connected);
  await resize(x,lang==='en'?'Account':'账户');
  w.document.querySelector('[data-copy-player]').checked=true;click('accountCopyPlayers');await wait();assert(api.connected);
  assert(el('accountOutcome').textContent.includes(lang==='en'?'Players saved to account':'玩家已保存至账户'));
  const localId=w.save.cp;w.me().log.push({g:'num',r:2,s:5,d:'2026-11-14'});w.persist();await api.sync();click('accountSignout');await wait();
  assert(!api.signedIn);assert(!api.connected);assert.equal(w.me().name,'Jamie');assert.equal(w.save.cp,localId);assert.equal(w.me().log.length,1);
  assert.equal(JSON.parse(w.localStorage.getItem('mindGardenAccountCopies'))['account-test'].profiles[localId].log.length,2);
  assert(w.document.querySelector('[data-auth-view="signed-out"]'));assert(el('accountSwitchPlayer'));assert(el('accountOutcome').textContent.includes(lang==='en'?'Playing on this device':'此设备游玩'));
  await resize(x,lang==='en'?'Sign in':'登录');assert(el('welcomeAccountState').textContent.includes(lang==='en'?'On this device':'此设备玩家'));
  click('accountSwitchPlayer');await wait();assert(el('pn'));assert.deepEqual(x.errors,[]);x.finishManager();w.close();
 }
 // Reload after successful signup but before selecting players keeps the real session.
 const x=await boot({signed:true});assert(x.w.MindGardenAccount.signedIn);assert(!x.w.MindGardenAccount.connected);x.click('navAccount');await wait();assert(x.el('accountCopyPlayers'));await resize(x,'Account');x.w.close();
 // A cached profile is not evidence of a currently valid server session.
 const setup=await boot();setup.w.MindGardenAccount.panel('signup');setup.el('accountName').value='tester';setup.el('accountPassword').value='test-only-long-password';setup.click('accountSignup');await wait();setup.click('accountContinue');await wait();setup.w.document.querySelector('[data-copy-player]').checked=true;setup.click('accountCopyPlayers');await wait();
 const saved=setup.w.localStorage.getItem('gardenMatch'),remote=setup.remote;setup.w.close();const expired=await boot({saved,remote,signed:false});assert(!expired.w.MindGardenAccount.signedIn);assert(expired.w.MindGardenAccount.connected);await resize(expired,'Sign in');expired.click('navAccount');await wait();assert(expired.el('accountSignin'));assert(expired.w.me().name);expired.w.close();
 console.log('PASS account outcomes, adjacent download feedback, pending password-manager prompt, verified session vs cached players, late startup response, reload, orientation/rebuild state, and sign-out preserving named device players and account copies.');
})().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>setTimeout(()=>process.exit(process.exitCode||0),50));
