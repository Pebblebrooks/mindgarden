"""Collect literal English/Chinese pairs from editable application sources."""
from pathlib import Path
import re,ast,json
p=Path(__file__).resolve().parents[1]/'public'
quoted=r'''(?:'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")'''
pairs={}
for f in sorted(p.glob('*.js')):
 if f.name.startswith(('garden-ui-','language-')) or f.name=='garden-wildlife.js':continue
 source=f.read_text()
 for m in re.finditer('('+quoted+r')\s*,\s*('+quoted+')',source):
  if source[:m.start()].rstrip()[-1:] not in ['(', '[', ','] or source[m.end():].lstrip().startswith('+'):continue
  try:a,b=map(ast.literal_eval,m.groups())
  except (ValueError,SyntaxError):continue
  if isinstance(a,str) and isinstance(b,str) and re.search('[A-Za-z]',a) and not re.search('[\u3400-\u9fff<>]',a) and re.search('[\u3400-\u9fff]',b) and '<' not in b:pairs.setdefault(a,b)
(p/'language-catalog.js').write_text('window.MindGardenLanguageCatalog='+json.dumps(pairs,ensure_ascii=False)+';\n')
print('Bilingual catalog:',len(pairs),'phrases')
