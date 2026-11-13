// Model browser document disposal: queued work and observers stop with the window.
module.exports=function installDomLifecycle(window){
 const observers=new Set(),NativeObserver=window.MutationObserver,nativeQueue=window.queueMicrotask.bind(window),nativeClose=window.close.bind(window);let closed=false;
 window.MutationObserver=class extends NativeObserver{constructor(callback){super((...args)=>{if(!closed)callback(...args)});observers.add(this)}};
 window.queueMicrotask=callback=>nativeQueue(()=>{if(!closed)callback()});
 window.close=()=>{closed=true;for(const observer of observers)observer.disconnect();observers.clear();setTimeout(nativeClose,50)};
};
