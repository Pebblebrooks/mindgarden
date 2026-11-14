const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm');
const root=path.join(__dirname,'..'),p=path.join(root,'public');
const sources=JSON.parse(fs.readFileSync(path.join(root,'scripts/release-sources.json'),'utf8'));
const version=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8')).version.replaceAll('.','');
for(const [kind,ext] of [['scripts','js'],['styles','css']]){
  assert.equal(new Set(sources[kind]).size,sources[kind].length,'No duplicate modules');
  const original=sources[kind].map(n=>fs.readFileSync(path.join(p,n),'utf8')).join('\n');
  const built=fs.readFileSync(path.join(p,`garden-ui-${version}.${ext}`),'utf8');
  assert(Buffer.byteLength(built)<Buffer.byteLength(original),'Release should be smaller than editable sources');
  if(ext==='js')new vm.Script(built);
  assert(!built.includes('seaScene'),'Removed sailboat styles must not return');
  assert(!built.includes('MindGardenQuotes'),'Removed quote runtime must not return');
}
for(const name of ['daily-quotes.js','v27.css','wildlife.js','sea-banner.svg'])assert(!fs.existsSync(path.join(p,name)),name);
const sw=fs.readFileSync(path.join(p,'sw.js'),'utf8');
assert(!sw.includes('sea-banner.svg'),'Do not precache removed assets');
assert.equal(fs.readdirSync(p).filter(n=>/^garden-ui-\d+\.(js|css)$/.test(n)).length,2,'Only current release bundles');
const art={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'src/wildlife-art.js'),'utf8'),art);
assert(art.window.MindGardenWildlife('bird').includes('<svg'),'Retain reproducible artwork source outside deployment');
console.log('PASS compact release: active source manifest, smaller bundles, removed code absent, artwork generation retained.');
