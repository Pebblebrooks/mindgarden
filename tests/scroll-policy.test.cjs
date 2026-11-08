const {readFileSync}=require('node:fs'),assert=require('node:assert/strict'),{JSDOM,VirtualConsole}=require(process.env.MG_JSDOM||'jsdom');
const html=readFileSync(__dirname+'/../public/index.html','utf8'),css=readFileSync(__dirname+'/../public/garden-ui-4011.css','utf8');
const dom=new JSDOM(html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<link[^>]+>/g,''),{pretendToBeVisual:true,runScripts:'outside-only',virtualConsole:new VirtualConsole()}),w=dom.window,d=w.document;
try{
 const sheet=d.createElement('style');sheet.textContent=css;d.head.append(sheet);
 const style=el=>w.getComputedStyle(el),root=d.documentElement,body=d.body,overlay=d.getElementById('ov'),box=d.getElementById('box');
 assert.equal(style(body).overflow,'visible','Body must not become a competing wheel scroller');
 assert.equal(style(body).overscrollBehavior,'auto','Body must not block scroll chaining to the document');
 assert.equal(style(root).overflowY,'auto');
 for(const fs of [1,1.4,2]){
  root.style.setProperty('--fs',String(fs));overlay.classList.remove('hidden');
  assert.equal(style(root).overflowY,'hidden','Opening a modal locks the background');
  assert.equal(style(box).overflow,'auto','Dialog contents retain their own scroll');
  assert.equal(style(box).overscrollBehavior,'contain','Reaching the dialog edge must not scroll the page');
  assert.equal(style(overlay).boxSizing,'border-box','Backdrop padding must fit within viewport height');
  overlay.classList.add('hidden');assert.equal(style(root).overflowY,'auto','Closing a modal restores document scrolling');
 }
 console.log('PASS: CSS scroll ownership, dialog background lock/unlock, scroll containment and viewport box sizing at 100/140/200% text. Physical mouse-wheel/device rendering still needs a browser check.');
}finally{w.close()}
