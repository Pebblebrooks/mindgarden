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
 const x=await boot({lang}),{w,el,click}=x;const nav=w.MindGardenMenuHistory;
 const back=async()=>{assert(el('menuBack')&&!el('menuBack').hidden,'Back exists');click('menuBack');await wait()};
 // Root menu -> account -> device data -> players -> rename, then back one level at a time.
 click('navMore');click('menuAccountSettings');await wait();assert.equal(nav.key,'account:settings');assert.equal(nav.depth,1);
 click('accountDeviceData');await wait();assert.equal(nav.key,'settings:player');click('settingsPlayers');await wait();assert.equal(nav.key,'players');
 const player=w.save.cp;el('box').querySelector('.player-edit-name').click();await wait();assert(el('gardenName'));el('gardenName').value='Unsaved';await back();assert(el('pd'));assert.equal(w.me().name,w.save.pr[player].name);assert.notEqual(w.me().name,'Unsaved');
 click('pd');await wait();assert.equal(nav.key,'settings:player');assert(el('sd'));click('sd');await wait();assert(el('accountOptions').open);await back();assert(!el('navMenu').classList.contains('hidden'));assert(el('ov').classList.contains('hidden'));
 // Reopening Settings and changing preferences must not add phantom levels.
 click('navMore');w.closeOv();w.openSet();await wait();const d=el('box').querySelector('[data-menu-group="sound"]');d.open=true;d.querySelector('button').click();await wait();assert.equal(nav.key,'music');await back();assert.equal(nav.key,'settings:general');assert(el('box').querySelector('[data-menu-group="sound"]').open);assert(!el('box').querySelector('[data-menu-group="access"]').hidden);const depth=nav.depth;w.openSet();await wait();assert.equal(nav.depth,depth);click('menuExit');assert.equal(nav.depth,0);

 // Avatar, deletion confirmation and personalised home save return without losing the parent.
 w.openPl();await wait();el('box').querySelector('[data-av]').click();await wait();assert(el('avb'));await back();assert(el('pd'));el('box').querySelector('[data-x]')?.click();await wait();if(el('deletePlayerName')){await back();assert(el('pd'))}click('menuExit');
 w.openSet();await wait();[...el('box').querySelectorAll('button')].find(b=>b.textContent===(lang==='en'?'Customise my home':'定制我的主页')).click();await wait();assert(el('displaySave'));click('displaySave');await wait();assert.equal(nav.key,'settings:general');assert(el('sd'));click('menuExit');
 // All Games and My Games configuration use saved state, not stale DOM snapshots.
 w.MindGardenPersonal.myGames();await wait();el('box').querySelector('[data-configure]').click();await wait();assert(nav.key.startsWith('game-settings:'));await back();assert(el('personalSelected'));assert.equal(nav.key,'my-games');click('menuExit');
 // About submenus retain their previous expanded section.
 click('navMore');w.document.querySelector('#navMenu [data-go="about"]').click();await wait();const action=el('box').querySelector('[data-about-action="settings"]');action.closest('details')?.setAttribute('open','');action.click();await wait();assert.equal(nav.key,'settings:general');await back();assert(el('appInfoTitle'));click('infoDone');await wait();assert(!el('navMenu').classList.contains('hidden'));w.closeOv();
 // Authenticate, copy a player, then select or rename players without losing account options.
 w.MindGardenAccount.panel('signup');el('accountName').value='tester';el('accountPassword').value='test-password-123';click('accountSignup');await wait();click('accountContinue');await wait();w.document.querySelector('[data-copy-player]').checked=true;click('accountCopyPlayers');await wait();assert.equal(nav.depth,0,'No credential forms remain behind the connected account');
 el('accountOptions').open=true;el('accountSecurity').open=true;el('box').scrollTop=130;
 click('accountPlayers');await wait();assert.equal(nav.key,'players');const depth2=nav.depth;w.document.querySelector('[data-p]').click();await wait();assert.equal(nav.depth,depth2,'Player refresh is not a new level');click('pd');await wait();assert(el('accountPlayers'));assert(el('accountOptions').open);assert(el('accountSecurity').open);assert.equal(el('box').scrollTop,130);assert(w.MindGardenAccount.signedIn);
 const icons=[...el('box').querySelectorAll('.account-panel .mg-info-button')];assert(icons.every(b=>b.querySelector('span').textContent==='i'));assert(!el('box').querySelector('button button'),'No nested interactive buttons');
 const signoutInfo=el('accountSignout').parentElement.querySelector('.mg-info-button');signoutInfo.click();assert(w.MindGardenAccount.signedIn);w.MindGardenInfo.hide();
 click('accountSettingsOpen');await wait();el('accountSecurity').open=true;click('deviceSetup');await wait();assert.equal(nav.key,'device-signin');await back();assert(el('accountSecurity').open);await back();click('accountPlayers');await wait();click('menuExit');assert(el('ov').classList.contains('hidden'));assert.equal(nav.depth,0);w.MindGardenAccount.panel();await wait();assert.equal(nav.depth,0);
 click('accountPlayers');await wait();el('box').dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true,cancelable:true}));assert(el('ov').classList.contains('hidden'));assert.equal(nav.depth,0);
 assert.deepEqual(x.errors,[]);w.close();
 }console.log('PASS bilingual menu Back/Done: account/player/rename, settings/music, game settings, About, device sign-in; disclosure/scroll restoration; rerender deduplication; auth boundary; Close/Escape; independent help controls.');
})().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)});
