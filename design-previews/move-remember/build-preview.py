from pathlib import Path
import base64,json
p=Path(__file__).resolve().parent
assets={n:'data:image/'+('webp' if n=='garden' else 'png')+';base64,'+base64.b64encode((p/'assets'/(n+('.webp' if n=='garden' else '.png'))).read_bytes()).decode() for n in ['garden','reaches','hands','up']}
css=(p/'style.css').read_text()
for n,v in assets.items():css=css.replace('assets/'+n+('.webp' if n=='garden' else '.png'),v)
js=(p/'app.js').read_text().replace("'assets/'+n+'.png'",json.dumps(assets)+'[n]')
html=(p/'index.html').read_text().replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>').replace('<script src="app.js"></script>','<script>'+js+'</script>')
out=Path('/workspace/scratch/32e6fa115e82/Move-and-Remember-working-preview.html');out.write_text(html);print(out, out.stat().st_size)
