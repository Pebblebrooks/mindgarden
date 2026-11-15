// Browser contracts absent in jsdom; never loaded by the deployed app.
const jsdom=require('jsdom');
class JSDOM extends jsdom.JSDOM {
 constructor(...args){super(...args);const w=this.window;let disposed=false;const observers=new Set();
 // Requests are handled by Node's in-memory API tests, so use its signal type.
 w.AbortController=global.AbortController;w.AbortSignal=global.AbortSignal;
 const NativeObserver=w.MutationObserver;
 w.MutationObserver=class extends NativeObserver{constructor(fn){super((...a)=>{if(!disposed)fn(...a)});observers.add(this)}};
 for(const name of ['setTimeout','setInterval']){const native=w[name].bind(w);w[name]=(fn,ms,...a)=>native(typeof fn==='function'?()=>{if(!disposed)fn(...a)}:fn,ms)}
 const queue=w.queueMicrotask.bind(w);w.queueMicrotask=fn=>queue(()=>{if(!disposed)fn()});
 const close=w.close.bind(w);w.close=()=>{if(disposed)return;disposed=true;for(const o of observers)o.disconnect();close()};
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;this.querySelector('button,input,select,[tabindex]')?.focus()};
 w.HTMLDialogElement.prototype.close=function(){if(!this.open)return;this.open=false;this.dispatchEvent(new w.Event('close'))};
 w.document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;const d=[...w.document.querySelectorAll('dialog[open]')].at(-1);if(d){e.preventDefault();e.stopImmediatePropagation();const cancel=new w.Event('cancel',{cancelable:true});if(d.dispatchEvent(cancel))d.close()}},true);
 }
}
function chooseLanguage(w,target=w.save.lang==='en'?'zh':'en'){
 w.MindGardenLanguage.open();const choice=w.document.querySelector('[data-language="'+target+'"]');
 if(!choice)throw Error('Language picker choice missing: '+target);choice.click();
}
module.exports={...jsdom,JSDOM,chooseLanguage};
