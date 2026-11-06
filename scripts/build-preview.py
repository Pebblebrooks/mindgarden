"""Build a standalone HTML preview; no multiplayer backend or service worker."""
from pathlib import Path
import base64, json, re, sys
root = Path(__file__).resolve().parents[1]
p = root / 'public'
output = Path(sys.argv[1]) if len(sys.argv)>1 else root / 'preview.html'
s = (p/'index.html').read_text()
s = re.sub(r'<link[^>]*href="https://fonts.googleapis.com[^>]*>', '', s)
s = re.sub(r'<link[^>]*(?:rel="manifest"|rel="icon"|rel="apple-touch-icon")[^>]*>', '', s)
s = re.sub(r'<link rel="stylesheet" href="([^"?]+)[^"]*">', lambda m:'<style>\n'+(p/m.group(1)).read_text()+'\n</style>', s)
s = re.sub(r'<script src="([^"?]+)[^"]*"></script>', lambda m:'<script>\n'+(p/m.group(1)).read_text()+'\n</script>', s)
s = re.sub(r'<script>if\("serviceWorker"[\s\S]*?</script>', '', s)
assets = {}
for f in [str(f.relative_to(p)) for f in sorted((p/'audio').rglob('*.mp3'))]+['wildlife/animal_cat.glb','wildlife/animal_fox.glb','wildlife/animal_owl.glb','wildlife/cat.gif','wildlife/fox.gif','wildlife/owl.gif','wildlife/cat.png','wildlife/fox.png','wildlife/owl.png','bird.gif','bird-gentle.gif','bird-still.png','butterfly.gif','butterfly-gentle.gif','butterfly-still.png','garden-day.webp','garden-sunset.webp']:
 mime = 'audio/mpeg' if f.endswith('.mp3') else 'model/gltf-binary' if f.endswith('.glb') else 'image/'+f.split('.')[-1]
 assets[f] = 'data:'+mime+';base64,'+base64.b64encode((p/f).read_bytes()).decode()
for filename,variable in [('garden-day.webp','preview-day-art'),('garden-sunset.webp','preview-sunset-art'),('garden-landscape.webp','preview-day-art')]:
 s = s.replace("url('"+filename+"')",'var(--'+variable+')')
s = s.replace("url('sea-banner.svg')",'none')
s = s.replace('</head>','<style>:root{--preview-day-art:url("'+assets.pop('garden-day.webp')+'");--preview-sunset-art:url("'+assets.pop('garden-sunset.webp')+'");}</style>\n<script>window.MindGardenAssets='+json.dumps(assets)+';</script>\n</head>')
s = s.replace('<body>','<body><aside id="previewNotice" style="position:fixed;z-index:1000;left:10px;bottom:10px;background:#123f43;color:white;border-radius:12px;padding:8px 12px;font:13px system-ui;max-width:80vw">V3.4 preview · Multiplayer needs deployment. <button onclick="this.parentNode.remove()" style="margin-left:8px" aria-label="Dismiss preview notice">×</button></aside>')
s = s.replace("function api(action,data={}){return fetch", "function api(action,data={}){return Promise.reject(Error(T('Online multiplayer is available after deploying the package.','部署此更新后即可使用在线多人游戏。')));return fetch")
s = s.replace('if(session)startLounge();','// Preview: no background lobby requests.')
output.write_text(s)
print(output.resolve(), output.stat().st_size)
