"""Create an offline review HTML from the candidate app. Sample room transport only."""
from pathlib import Path
import base64,json,re,mimetypes
root=Path(__file__).resolve().parents[1];p=root/'public';out=root.parent/'Mind-Garden-v5.0.0-working-preview.html'
s=(p/'index.html').read_text()
s=re.sub(r'<link[^>]*(?:href="https://fonts.googleapis.com|rel="manifest"|rel="icon"|rel="apple-touch-icon")[^>]*>','',s)
s=re.sub(r'<script>if\("serviceWorker"[\s\S]*?</script>','',s)
assets={}
for f in p.rglob('*'):
 if f.is_file() and (f.suffix in ('.webp','.svg','.gif','.png','.jpg','.jpeg','.mp3','.glb') or f.name=='garden-wildlife.js'):
  mime=mimetypes.guess_type(f.name)[0] or 'application/octet-stream';assets[str(f.relative_to(p))]='data:'+mime+';base64,'+base64.b64encode(f.read_bytes()).decode()
def css(text):
 def replace(m):
  key=m.group(1).strip('\"\'');return 'url("'+assets[key]+'")' if key in assets else m.group(0)
 return re.sub(r'url\(([^)]+)\)',replace,text)
# Inline Move & Remember as a same-origin srcdoc; avoid missing relative files.
movement=(p/'move-remember/index.html').read_text()
movement_css=(p/'move-remember/style.css').read_text()
for key,value in assets.items():
 if key.startswith('move-remember/'):
  movement_css=movement_css.replace(key.removeprefix('move-remember/'),value)
movement=movement.replace('<link rel="stylesheet" href="style.css">','<style>'+movement_css+'</style>')
movement_js=(p/'move-remember/app.js').read_text().replace("location.search", "'?embedded=1'")
movement_js=movement_js.replace(',location.origin)',',"*")')
movement=movement.replace('<script src="app.js"></script>','<script>'+movement_js+'</script>')
s=re.sub(r'<link rel="stylesheet" href="([^"?]+)[^"]*">',lambda m:'<style>'+css((p/m.group(1)).read_text())+'</style>',s)
s=re.sub(r'<script src="([^"?]+)[^"]*"></script>',lambda m:'<script>'+ (p/m.group(1)).read_text().replace('</script','<\\/script')+'</script>',s)
s=s.replace('src="move-remember/index.html?embedded=1"','src="about:blank"')
s=s.replace("active={frame:$('movementFrame'),","$('movementFrame').srcdoc=window.MindGardenMovementDocument;active={frame:$('movementFrame'),")
s=s.replace("},location.origin)","},location.protocol==='file:'?'*':location.origin)")
s=s.replace('</head>','<script>window.MindGardenMovementDocument='+json.dumps(movement).replace('<',r'\u003c')+';</script></head>')
bootstrap='<script>window.MindGardenAssets='+json.dumps(assets)+';</script><script>'+(root/'design-previews/pilot/demo.js').read_text()+'</script>'
s=s.replace('</head>',bootstrap+'''<style>#pilotPreviewBanner{position:relative;z-index:2000;background:#244d3c;color:white;padding:14px 20px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:12px;font:15px system-ui}#pilotPreviewBanner span{font-size:13px}#pilotPreviewBanner button{background:#f4f5e9;color:#244d3c;padding:10px 14px;border:0;border-radius:10px;cursor:pointer}@media print{#pilotPreviewBanner{display:none!important}}</style></head>''')
# Asset hooks used by existing app; direct relative image elements are normalized too.
s=s.replace('</body>', '<script>document.querySelectorAll("img[src]").forEach(i=>{const a=window.MindGardenAssets[i.getAttribute("src")];if(a)i.src=a});</script></body>')
out.write_text(s);print(str(out),out.stat().st_size)
