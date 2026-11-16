const {JSDOM}=require('./test-dom.cjs'),fs=require('fs'),assert=require('node:assert/strict');
(async()=>{
const d=new JSDOM('<section id="scene"><div id="host"></div></section>',{runScripts:'outside-only'}),w=d.window,host=w.document.getElementById('host');
const source=fs.readFileSync(__dirname+'/../public/scenes.js','utf8');w.MindGardenScenes={scenes:JSON.parse(source.split('const scenes=')[1].split(';\nconst asset')[0])};
let callback,clock=0,width=1440,height=900;w.requestAnimationFrame=fn=>(callback=fn,1);w.cancelAnimationFrame=()=>callback=null;host.getBoundingClientRect=()=>({width,height});
w.eval(fs.readFileSync(__dirname+'/../src/garden-wildlife.js','utf8'));const engine=await w.createGardenWildlife(host);
let checked=0;
for(const size of [[1440,900],[390,844],[844,390],[2560,1080]]){[width,height]=size;for(const scene of w.MindGardenScenes.scenes){w.document.documentElement.dataset.gardenScene=scene.id;w.dispatchEvent(new w.Event('gardenSceneChange'));engine.setMode('standard',false);for(let i=0;i<800;i++){clock+=80;callback?.(clock);const {sky,spacing}=engine.snapshot();for(const bird of spacing.filter(f=>f.visible&&f.kind==='swallow')){assert(sky);assert(bird.x-bird.r>=sky.left&&bird.x+bird.r<=sky.right,scene.id+' horizontal clearance');assert(bird.y-bird.r>=sky.top&&bird.y+bird.r<=sky.bottom,scene.id+' vertical clearance');checked++}}}}
w.document.documentElement.dataset.gardenScene='personal';w.dispatchEvent(new w.Event('gardenSceneChange'));assert(engine.snapshot().spacing.filter(f=>f.kind==='swallow').every(f=>!f.visible));
w.document.documentElement.dataset.gardenScene='cloud-palace';w.document.getElementById('scene').classList.add('has-welcome-video');w.dispatchEvent(new w.Event('gardenSceneChange'));assert(engine.snapshot().spacing.filter(f=>f.kind==='swallow').every(f=>!f.visible));
engine.dispose();d.window.close();console.log('PASS: '+checked+' bird positions stay inside authored sky bounds across 22 scenes and 4 viewport crops; personal photos/videos suppress birds.');
})().catch(e=>{console.error(e);process.exitCode=1});
