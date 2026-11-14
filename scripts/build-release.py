"""Build cohesive versioned UI assets from the editable sources."""
from pathlib import Path
import re,json,subprocess
root=Path(__file__).resolve().parents[1]
p=root/'public'
sources=json.loads((root/'scripts/release-sources.json').read_text())
# Reject empty/truncated WebP scenery before emitting a deployable bundle.
for image in p.glob('garden-*.webp'):
 data=image.read_bytes()
 if len(data)<20 or data[:4]!=b'RIFF' or data[8:12]!=b'WEBP' or int.from_bytes(data[4:8],'little')+8!=len(data):
  raise ValueError('Invalid scenery image: '+image.name)
version=json.loads((root/'package.json').read_text())['version']
assert re.fullmatch(r'\d+\.\d+\.\d+',version), 'Use a semantic release version'
tag=version.replace('.','')
shared=(root/'shared/online-activities.js').read_text().replace('export const ', 'const ').replace('export function ', 'function ')
(p/'online-activities.js').write_text('(function(){\n'+shared+'\nwindow.MindGardenOnlineActivities={activities:onlineActivities,questions:makeOnlineQuestions};\n})();\n')
styles=sources['styles']
scripts=sources['scripts']
import runpy
runpy.run_path(str(root/'scripts/build-language-catalog.py'))
for dest,names,sep in [(f'garden-ui-{tag}.css',styles,'\n'),(f'garden-ui-{tag}.js',scripts,'\n;\n')]:
 source=sep.join('/* '+n+' */\n'+(p/n).read_text() for n in names)
 subprocess.run(['node',str(root/'scripts/compact-release.mjs'),str(p/dest)],input=source,text=True,check=True)
s=(p/'index.html').read_text()
s=re.sub(r'<link rel="stylesheet" href="(?:v\d+\.css[^\"]*|garden-ui-\d+\.css)">\n?','',s)
s=s.replace('</head>',f'<link rel="stylesheet" href="garden-ui-{tag}.css">\n</head>')
s=re.sub(r'<script src="(?:'+ '|'.join(re.escape(n) for n in scripts+['daily-quotes.js'])+r'|garden-ui-\d+\.js)(?:\?[^\"]*)?"></script>\n?','',s)
s=s.replace('<script>if("serviceWorker"', f'<script src="garden-ui-{tag}.js"></script>\n<script>if("serviceWorker"')
s=re.sub(r'(<meta name="mind-garden-release" content=")[^"]+',r'\g<1>v'+version,s)
(p/'index.html').write_text(s)
# Remove obsolete generated bundles only; editable sources remain.
for old in p.glob('garden-ui-*'):
 if old.name not in (f'garden-ui-{tag}.js',f'garden-ui-{tag}.css') and re.fullmatch(r'garden-ui-\d+\.(js|css)',old.name):old.unlink()
assets=['./','index.html','move-remember/index.html','move-remember/app.js','move-remember/style.css',f'garden-ui-{tag}.css',f'garden-ui-{tag}.js']+[str(f.relative_to(p)) for f in sorted(p.rglob('*')) if f.is_file() and f.suffix in ('.webp','.gif','.jpg','.jpeg','.png','.glb','.mp3','.svg','.webmanifest')]
(p/'sw.js').write_text('/* V'+version+': coherent UI release, no HTML fallback for missing scripts or styles. */\nconst V="mind-garden-v'+tag+'", F='+json.dumps(assets)+''';
self.addEventListener('install',e=>{e.waitUntil((async()=>{const cache=await caches.open(V);for(const path of F){const response=await fetch(new Request(path,{cache:'reload'}));const type=response.headers.get('content-type')||'';if(!response.ok||(/\\.(css|js)$/.test(path)&&type.includes('text/html')))throw Error('Incomplete release: '+path);await cache.put(path,response)}await self.skipWaiting()})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('mind-garden-')&&key!==V)await caches.delete(key);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==self.location.origin||u.pathname.startsWith('/api/'))return;
e.respondWith((async()=>{const cache=await caches.open(V);try{const response=await fetch(r);const type=response.headers.get('content-type')||'';if(/\\.(js|css)$/.test(u.pathname)&&type.includes('text/html'))return await cache.match(r)||new Response('Requested asset is missing',{status:404});if(response.ok)await cache.put(r,response.clone());return response}catch{const hit=await cache.match(r);if(hit)return hit;if(r.mode==='navigate')return await cache.match('./')||Response.error();return Response.error()}})())});
''')
print('Built '+version+' index, UI bundles and cache manifest')
