/* Exercise actual animal meshes and animation poses with only GPU drawing stubbed. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const esbuild=require('esbuild');
(async()=>{
const {GLTFLoader}=await import(require('node:url').pathToFileURL(require.resolve('three/examples/jsm/loaders/GLTFLoader.js')).href);
const loader=new GLTFLoader();
async function loadModel(filename){
 const file=fs.readFileSync(path.join(__dirname,'../public',filename)),jsonLength=file.readUInt32LE(12),json=JSON.parse(file.subarray(20,20+jsonLength));
 // Texture decoding is a browser concern; preserve the complete geometry/rig/animations.
 for(const m of json.materials||[]){delete m.normalTexture;delete m.emissiveTexture;delete m.occlusionTexture;if(m.pbrMetallicRoughness){delete m.pbrMetallicRoughness.baseColorTexture;delete m.pbrMetallicRoughness.metallicRoughnessTexture;}}
 delete json.images;delete json.textures;delete json.samplers;
 let j=Buffer.from(JSON.stringify(json));j=Buffer.concat([j,Buffer.alloc((4-j.length%4)%4,32)]);const bin=file.subarray(20+jsonLength),head=Buffer.alloc(20);head.writeUInt32LE(0x46546c67,0);head.writeUInt32LE(2,4);head.writeUInt32LE(20+j.length+bin.length,8);head.writeUInt32LE(j.length,12);head.writeUInt32LE(0x4e4f534a,16);const b=Buffer.concat([head,j,bin]);return loader.parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'');
}
let source=fs.readFileSync(path.join(__dirname,'../src/garden-wildlife.js'),'utf8').replace('new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:\'low-power\'})','new FakeRenderer()').replace('const loader=new GLTFLoader();','const loader=window.testLoader;');
const result=esbuild.buildSync({stdin:{contents:source,resolveDir:path.join(__dirname,'../src'),loader:'js'},bundle:true,write:false,format:'iife',nodePaths:[path.resolve(path.dirname(require.resolve('three')),'../..')]});
let width=1440,height=950,now=0,frame;
class FakeRenderer{constructor(){this.domElement={setAttribute(){},addEventListener(){}}}setPixelRatio(){}setClearColor(){}setSize(){}render(){}dispose(){}}
const window={testLoader:{loadAsync:loadModel}},context={window,FakeRenderer,console,performance:{now:()=>now},devicePixelRatio:1,ResizeObserver:class{observe(){}disconnect(){}},requestAnimationFrame:f=>(frame=f,1),cancelAnimationFrame(){},document:{documentElement:{dataset:{theme:'light'}}},matchMedia:()=>({matches:false}),setTimeout,clearTimeout};
vm.runInNewContext(result.outputFiles[0].text,context);
const host={append(){},dataset:{},classList:{add(){},remove(){}},getBoundingClientRect:()=>({width,height,top:0}),parentElement:{querySelector:()=>null}};
const api=await window.createGardenWildlife(host);assert.equal(host.dataset.ready,'4');api.setMode('standard',false);
let minVisible=16;
for(let i=0;i<1200;i++){now+=1000/60;frame(now);const s=api.snapshot(),visible=s.spacing.filter(x=>x.visible);minVisible=Math.min(minVisible,visible.length);assert(visible.length>=8);for(let j=0;j<visible.length;j++)for(let k=j+1;k<visible.length;k++){const a=visible[j],b=visible[k];assert(Math.hypot(a.x-b.x,a.y-b.y)>=a.r+b.r-.01,`${a.id} overlaps ${b.id}`)}}
api.setMode('off',true);assert(api.snapshot().paused);api.dispose();console.log(`PASS: four real GLB models/rigs and all flyers; 1,200 animated pose frames with no envelope overlap (${minVisible} minimum visible), pause and disposal. GPU drawing stubbed.`);
})().catch(e=>{console.error(e);process.exitCode=1});
