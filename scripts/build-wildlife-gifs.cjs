// Export the original articulated SVG art to genuine looping GIF frames.
const fs=require('fs'),path=require('path'),vm=require('vm'),sharp=require('sharp');
const root=path.join(__dirname,'../public'),c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync(path.join(root,'wildlife.js'),'utf8'),c);
const out=process.argv[2]||'/tmp/mind-garden-gif-frames';fs.mkdirSync(out,{recursive:true});
(async()=>{for(const kind of ['butterfly','bird']){const base=c.window.MindGardenWildlife(kind);const dir=path.join(out,kind);fs.mkdirSync(dir,{recursive:true});for(let i=0;i<16;i++){const t=i/16*Math.PI*2,sy=.2+.8*Math.cos(t);let svg=base;
 if(kind==='butterfly'){const scale=.12+.88*(1+Math.cos(t))/2;svg=svg.replaceAll('class="wf-wing butterfly-left"',`transform="scale(${scale} 1)"`).replaceAll('class="wf-wing butterfly-right"',`transform="scale(${scale} 1)"`)}
 else{svg=svg.replace('class="wf-wing bird-near"',`transform="rotate(${3-15*Math.cos(t)}) scale(1 ${sy})"`).replace('class="wf-wing bird-far"',`transform="rotate(${3-15*Math.cos(t+.2)}) scale(1 ${.2+.8*Math.cos(t+.2)})"`).replace('class="wf-bird-body"',`transform="translate(0 ${-2*(1-Math.cos(t))/2})"`)}
 await sharp(Buffer.from(svg)).resize(240,174).png().toFile(path.join(dir,String(i).padStart(2,'0')+'.png'));}}})();
