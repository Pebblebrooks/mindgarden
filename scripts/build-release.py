"""Build cohesive versioned UI assets from the editable sources."""
from pathlib import Path
import re,json
root=Path(__file__).resolve().parents[1]
p=root/'public'
version=json.loads((root/'package.json').read_text())['version']
assert re.fullmatch(r'\d+\.\d+\.\d+',version), 'Use a semantic release version'
tag=version.replace('.','')
shared=(root/'shared/online-activities.js').read_text().replace('export const ', 'const ').replace('export function ', 'function ')
(p/'online-activities.js').write_text('(function(){\n'+shared+'\nwindow.MindGardenOnlineActivities={activities:onlineActivities,questions:makeOnlineQuestions};\n})();\n')
styles=['v23.css','v24.css','v25.css','v28.css','v29.css','v30.css','v31.css','v32.css','v33.css','v35.css','v36.css','v37.css','v38.css','new-games.css','v386.css','v387.css','game-visuals.css','v4.css','mochi-widget.css','garden-activities.css']
scripts=['artwork.js','player-preferences.js','upgrade.js','new-games.js','progression.js','daily-plan.js','online-activities.js','multiplayer.js','i18n.js','dashboard.js','garden-wildlife.js','ambient.js','soundscape.js','identity.js','personal-progress.js','scenes.js','personal-photos.js','home-nature.js','welcome-media.js','data-export.js','text-size.js','bouquet-3d.js','responsive-nav.js','v4.js','pet-audio.js','mochi-widget.js','garden-cat.js','garden-activities.js','bloom-preview.js','vendor/anime-4.2.2.min.js','pet-ledge.js','progress-pets.js']
for dest,names,sep in [(f'garden-ui-{tag}.css',styles,'\n'),(f'garden-ui-{tag}.js',scripts,'\n;\n')]:
 (p/dest).write_text(sep.join('/* '+n+' */\n'+(p/n).read_text() for n in names))
s=(p/'index.html').read_text()
s=re.sub(r'<link rel="stylesheet" href="(?:v\d+\.css[^\"]*|garden-ui-\d+\.css)">\n?','',s)
s=s.replace('</head>',f'<link rel="stylesheet" href="garden-ui-{tag}.css">\n</head>')
s=re.sub(r'<script src="(?:'+ '|'.join(re.escape(n) for n in scripts+['daily-quotes.js'])+r'|garden-ui-\d+\.js)(?:\?[^\"]*)?"></script>\n?','',s)
s=s.replace('<script>if("serviceWorker"', f'<script src="garden-ui-{tag}.js"></script>\n<script>if("serviceWorker"')
s=re.sub(r'(<meta name="mind-garden-release" content=")[^"]+',r'\g<1>v'+version,s)
(p/'index.html').write_text(s)
assets=['./','index.html',f'garden-ui-{tag}.css',f'garden-ui-{tag}.js']+[str(f.relative_to(p)) for f in sorted(p.rglob('*')) if f.is_file() and f.suffix in ('.webp','.gif','.jpg','.jpeg','.png','.glb','.mp3','.svg','.webmanifest')]
(p/'sw.js').write_text('/* V'+version+': coherent UI release, no HTML fallback for missing scripts or styles. */\nconst V="mind-garden-v'+tag+'", F='+json.dumps(assets)+''';
self.addEventListener('install',e=>{e.waitUntil((async()=>{const cache=await caches.open(V);for(const path of F){const response=await fetch(new Request(path,{cache:'reload'}));const type=response.headers.get('content-type')||'';if(!response.ok||(/\\.(css|js)$/.test(path)&&type.includes('text/html')))throw Error('Incomplete release: '+path);await cache.put(path,response)}await self.skipWaiting()})())});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('mind-garden-')&&key!==V)await caches.delete(key);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==self.location.origin||u.pathname.startsWith('/api/'))return;
e.respondWith((async()=>{const cache=await caches.open(V);try{const response=await fetch(r);const type=response.headers.get('content-type')||'';if(/\\.(js|css)$/.test(u.pathname)&&type.includes('text/html'))return await cache.match(r)||new Response('Requested asset is missing',{status:404});if(response.ok)await cache.put(r,response.clone());return response}catch{const hit=await cache.match(r);if(hit)return hit;if(r.mode==='navigate')return await cache.match('./')||Response.error();return Response.error()}})())});
''')
print('Built '+version+' index, UI bundles and cache manifest')
