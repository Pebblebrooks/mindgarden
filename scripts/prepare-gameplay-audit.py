"""Prepare isolated browser QA without adding test files to the production tree."""
from pathlib import Path
import argparse, json, re, shutil
root=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser()
parser.add_argument('--output',type=Path,default=root/'.openai/gameplay-audit')
args=parser.parse_args()
out=args.output.resolve()
public=(root/'public').resolve()
if out==public or public in out.parents or out==root or out in root.parents:
    raise SystemExit('Choose a separate QA output directory, outside public.')
dist=out/'dist'
dist.mkdir(parents=True,exist_ok=True)
shutil.copytree(public,dist,dirs_exist_ok=True)
for src in ['gameplay-audit.html','gameplay-audit.js']:
    shutil.copy2(root/'tests/browser'/src,dist/src)
html=(public/'index.html').read_text()
bootstrap="""<script>/* QA memory only: never read or modify saved player data. */const qaStore=new Map();Object.defineProperty(window,'localStorage',{value:{getItem:k=>qaStore.get(k)??null,setItem:(k,v)=>qaStore.set(k,String(v)),removeItem:k=>qaStore.delete(k),clear:()=>qaStore.clear(),key:i=>[...qaStore.keys()][i]??null,get length(){return qaStore.size}}});</script>"""
html=html.replace('<head>','<head>'+bootstrap,1)
html=re.sub(r'<script>if\("serviceWorker".*?</script>','',html,flags=re.S)
(dist/'qa-candidate-app.html').write_text(html)
(out/'.openai').mkdir(exist_ok=True)
(out/'.openai/hosting.json').write_text(json.dumps({'static':{'directory':'dist'}},indent=2)+'\n')
print(str(out))
print('Open gameplay-audit.html after starting the managed preview.')
print('Use ?batch=0&cycle=all for the 56-game initial/ready sweep, or cycle=numbers for numeric answer/review checks.')
