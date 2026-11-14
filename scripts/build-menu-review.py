"""Portable review using the actual application code, isolated data and a simulated API."""
from pathlib import Path
import re,json,base64,mimetypes,sys
p=Path(__file__).resolve().parents[1]/'public'
s=(p/'index.html').read_text()
s=re.sub(r'<link[^>]+>', '',s)
s=re.sub(r'<script>if\("serviceWorker"[\s\S]*?</script>','',s)
css=(p/re.search(r'href="(garden-ui-\d+.css)"',(p/'index.html').read_text())[1]).read_text()
assets={}
for file in p.rglob('*'):
 if file.suffix in ['.webp','.svg','.png','.gif'] and file.stat().st_size<700000:
  assets[str(file.relative_to(p))]='data:'+mimetypes.guess_type(file.name)[0]+';base64,'+base64.b64encode(file.read_bytes()).decode()
for name,data in assets.items():
 css=css.replace('url("'+name+'")','url("'+data+'")').replace("url('"+name+"')",'url("'+data+'")')
s=s.replace('</head>','<style>'+css+'</style></head>')
s=re.sub(r'<script src="([^"?]+)[^"]*"></script>',lambda m:'<script>'+ (p/m[1]).read_text().replace('</script','<\\/script')+'</script>',s)
pre='''<script>
const memory=new Map();Object.defineProperty(window,'localStorage',{value:{getItem:k=>memory.get(k)||null,setItem:(k,v)=>memory.set(k,String(v)),removeItem:k=>memory.delete(k)}});
Object.defineProperty(navigator,'serviceWorker',{value:undefined});
window.MindGardenAssets=ASSETS;
new MutationObserver(()=>{for(const i of document.images){const raw=i.getAttribute('src');if(MindGardenAssets[raw])i.src=MindGardenAssets[raw]}}).observe(document.documentElement,{subtree:true,childList:true});
Object.defineProperty(window,'isSecureContext',{value:true});Object.defineProperty(window,'PublicKeyCredential',{value:function(){}});Object.defineProperty(navigator,'credentials',{value:{}});
let demoPasskeys=[],signed=false,remote={account:{id:'demo-account',username:'garden-demo'},revision:0,document:{schemaVersion:1,profiles:{}}};
window.fetch=async(url,options={})=>{const action=String(url).split('action=')[1],data=JSON.parse(options.body||'{}');let result={},status=200;
if(action==='passkey-status')result={available:true};
else if(action==='passkey-signin-options')result={id:'demo-flow',options:{challenge:'DEMO-ONLY'}};
else if(action==='passkey-signin-verify'){signed=true;result={account:remote.account};}
else if(['signup','signin','recover'].includes(action)){signed=true;remote.account.username=data.username;result={account:remote.account,...(data.generateRecovery||action==='recover'?{recovery:'DEMO-RECOVERY-ONLY-1234-5678'}:{})};}
else if(!signed){status=401;result={code:'SIGNIN'};}
else if(action==='passkey-register-options')result={id:'demo-flow',options:{challenge:'DEMO-ONLY'}};
else if(action==='passkey-register-verify'){demoPasskeys=[{id:'demo-key',created_at:Date.now()}];}
else if(action==='passkey-list')result={passkeys:demoPasskeys};
else if(action==='passkey-remove'){demoPasskeys=[];}
else if(action==='verify-owner')result={ok:true};
else if(action==='state'||action==='export')result=JSON.parse(JSON.stringify(remote));
else if(action==='save'){remote.document=data.document;remote.revision++;result={revision:remote.revision};}
else if(action==='signout')signed=false;
else if(action==='recovery-key')result={recovery:'DEMO-REPLACEMENT-KEY-1234'};
else{status=503;result={error:'Online play is not part of this menu preview.'};}
return {ok:status===200,status,json:async()=>result};};
Object.defineProperty(window,'PasswordCredential',{value:undefined});
</script>'''.replace('ASSETS',json.dumps(assets))
s=s.replace('<head>','<head>'+pre)
post='''<script>
SimpleWebAuthnBrowser.startRegistration=async()=>({id:'DEMO-NO-REAL-PASSKEY'});SimpleWebAuthnBrowser.startAuthentication=async()=>({id:'DEMO-NO-REAL-ASSERTION'});
function previewView(v){toHome();closeOv();if(v==='review'){startMG('odd');const wrong=[...document.querySelectorAll('#mp [data-a]')].find(b=>b.dataset.a!==mg.ans);if(wrong)wrong.click();}else if(v==='customise'||v==='gamechoices'){MindGardenDisplay.panel();if(v==='gamechoices'){document.getElementById('displayGames').closest('details').open=true;document.getElementById('displayFavourites').closest('details').open=true;}}else if(v==='credentials'){MindGardenAccount.panel('signup');if(document.getElementById('accountSignup')){document.getElementById('accountName').value='garden-demo';document.getElementById('accountPassword').value='DEMO-password-only-123';document.getElementById('accountWantRecovery').checked=true;document.getElementById('accountSignup').click();}}else if(v==='players')openPl();else if(v==='rename')MindGardenIdentity.open();else if(v==='account')MindGardenAccount.panel();else if(['signin','signup','recover'].includes(v))MindGardenAccount.panel(v);else if(v==='mygames'||v==='removed'){MindGardenPersonal.myGames();if(v==='removed')document.querySelector('[data-remove-game]')?.click();}else if(v==='leaderboard')document.getElementById('bLb').click();else if(['settings','play','appearance'].includes(v)){openSet();if(v!=='settings')document.querySelector('[data-menu-group="'+(v==='play'?'play':'garden')+'"]').open=true;}else if(v==='music')openMu();else if(v==='garden')MindGardenMenus.garden();else if(v==='playerdata')MindGardenMenus.player();else if(v==='family'){save.famOk=1;famView();}else if(v==='progress')openMyProgress();else if(v==='library')document.querySelector('[data-go=library]').click();else if(v==='pairs'){MindGardenPersonal.setup('pairs',1,'all');const c=document.getElementById('personalPairMode');c.value='words';c.dispatchEvent(new Event('change'));document.getElementById('personalPairStart').click();}}
window.addEventListener('message',e=>{if(e.source!==parent||!e.data?.review)return;const {view,lang,theme,scale}=e.data;save.lang=lang;save.mode=theme;save.textScale=+scale;save.fs=+scale;document.documentElement.style.setProperty('--fs',scale);persist();applyPrefs();document.documentElement.dataset.v4Mode=theme;document.documentElement.dataset.theme=theme;document.documentElement.style.setProperty('--fs',scale);previewView(view);});
save.pr={johnny:newP('Johnny'),jensen:newP('Jensen'),robert:newP('Robert'),gorky:newP('Gorky'),mei:newP('Mei Ling'),anita:newP('Anita')};save.cp='johnny';save.pr.johnny.log=[{g:'num',r:1,s:12,d:'2026-11-14'}];save.mode='dark';save.lang='en';save.anim=0;load();persist();renderHome();previewView('signin');
</script>'''
s=s.replace('</body>',post+'</body>')
outer='''<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mind Garden — revised working menu preview</title><style>body{margin:0;background:#e9f2eb;color:#153d37;font:16px/1.4 system-ui}header{padding:14px 20px;text-align:center}h1{font-size:24px;margin:0 0 6px}p{margin:6px}nav{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:12px}button,select{font:inherit;padding:8px;border-radius:8px;border:1px solid #678a78;background:white;color:#153d37}iframe{display:block;margin:auto;border:0;width:100%;height:900px}label{display:inline-flex;gap:5px;align-items:center}#auditResult{font-size:13px;max-height:80px;overflow:auto}</style></head><body><header><h1>Mind Garden · revised menus</h1><p>Working preview from the revised app code · Not deployed</p><p>Demo players and simulated accounts only. Use made-up login details. This preview does not contact Cloudflare. Device sign-in is simulated: no biometric prompt or real passkey is created.</p><nav><label>View <select id="view">OPTIONS</select></label><label>Size <select id="size"><option value="1280">Desktop</option><option value="390">Phone</option><option value="320">Small phone</option></select></label><label>Language <select id="lang"><option value="en">English</option><option value="zh">中文</option></select></label><label>Theme <select id="theme"><option value="dark">Dark</option><option value="light">Light</option></select></label><label>Text <select id="scale"><option value="1">100%</option><option value="2">200%</option></select></label><button id="show">Show screen</button><button id="reset">Restart demo</button></nav><p>Create account → Save login details → Continue to players → Select players. Close/Esc exits each menu.</p></header><iframe id="app" title="Revised Mind Garden" sandbox="allow-scripts allow-forms allow-downloads allow-modals"></iframe><script>
const source=SOURCE;const frame=document.getElementById('app');frame.srcdoc=source;
function show(){frame.style.width=Math.min(+document.getElementById('size').value,innerWidth)+'px';frame.style.height=document.getElementById('size').value==='1280'?'900px':'844px';frame.contentWindow.postMessage({review:true,view:document.getElementById('view').value,lang:document.getElementById('lang').value,theme:document.getElementById('theme').value,scale:document.getElementById('scale').value},'*');}
document.getElementById('show').onclick=show;document.getElementById('reset').onclick=()=>{frame.srcdoc=source};frame.onload=show;
</script></body></html>'''
views={'signin':'Sign in','credentials':'Save login details','gamechoices':'Game selection lists','removed':'Game removed / Undo','play':'Play preferences','appearance':'Appearance','review':'Compact answer review','welcome':'Welcome / scene footer','customise':'Customise my home','signin':'Sign in','signup':'Create account','account':'Online account','players':'Choose player','rename':'Edit name','recover':'Reset password','mygames':'My Games','library':'All Games','leaderboard':'Leaderboard','settings':'Settings','music':'Music','garden':'Garden','playerdata':'Player & saved data','family':'Family View','progress':'My Progress','pairs':'Picture–word cards'}
outer=outer.replace('OPTIONS',''.join('<option value="'+k+'">'+v+'</option>' for k,v in views.items())).replace('SOURCE',json.dumps(s).replace('</','<\\/'))
out=Path(sys.argv[1]);out.write_text(outer);print(out,len(outer.encode()))
