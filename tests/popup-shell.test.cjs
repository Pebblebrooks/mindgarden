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
 const x=await boot({lang}),{w,el,click}=x;
 const check=()=>{assert(el('box').classList.contains('standard-popup'));assert.equal(el('menuExit').textContent,'×');assert(el('menuExit').getAttribute('aria-label'));assert.equal(el('box').getAttribute('role'),'dialog');assert.equal(el('box').getAttribute('aria-labelledby'),'menuPopupTitle');assert(el('menuPopupTitle').textContent);assert(w.document.getElementById('home').parentElement.inert);};
 for(const open of [()=>w.openSet(),()=>w.openPl(),()=>w.openMu(),()=>w.MindGardenDisplay.panel(),()=>w.MindGardenV4.openGuide(),()=>w.openMyProgress(),()=>w.MindGardenAccount.panel('signin')]){open();await wait();check();click('menuExit');assert(!w.document.getElementById('home').parentElement.inert);}
 w.openSet();await wait();const group=el('box').querySelector('[data-menu-group="sound"]');group.open=true;group.querySelector('button').click();await wait();check();assert.equal(el('menuBack').textContent,'←');click('menuBack');await wait();assert(el('sd'));assert(el('box').querySelector('[data-menu-group="sound"]').open);click('menuExit');
 w.MindGardenAccount.panel('signup');el('accountName').value='tester';el('accountPassword').value='test-password-123';click('accountSignup');await wait();click('accountContinue');await wait();w.document.querySelector('[data-copy-player]').checked=true;click('accountCopyPlayers');await wait();check();
 assert.equal(el('menuPopupTitle').textContent,lang==='en'?'Account':'账户');assert(el('accountOptions').hidden);assert(el('accountSettingsOpen'));assert(el('accountSignout').closest('.account-signout'));assert(el('accountDone').closest('.account-footer'));assert(el('accountSignout').compareDocumentPosition(el('accountDone'))&w.Node.DOCUMENT_POSITION_FOLLOWING);
 click('accountSettingsOpen');await wait();check();assert.equal(w.MindGardenMenuHistory.key,'account:settings');assert(!el('accountOptions').hidden);assert(el('accountOptions').open);assert(el('accountDone').closest('[hidden]'));assert(!el('accountSyncNow').classList.contains('main'));
 click('menuBack');await wait();assert(el('accountOptions').hidden);click('accountPlayers');await wait();assert(el('playersManagement'));assert(el('box').querySelector('.player-edit-name').closest('#playersManagement'));assert(el('pd').closest('.popup-footer'));click('pd');await wait();assert(el('accountSettingsOpen'));click('menuExit');
 w.show('game');w.overlay('<h2>Level complete</h2><button id="testNext">Next</button>');await wait();assert(!el('menuExit'));assert(!el('box').classList.contains('standard-popup'));assert(!w.document.getElementById('home').parentElement.inert);assert.deepEqual(x.errors,[]);w.close();
}console.log('PASS approved popup shell: bilingual headers, symbol controls and labels, grouped account screens, primary/quiet action order, player management disclosure, parent returns, inert background cleanup and game-result isolation.');})().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)});
