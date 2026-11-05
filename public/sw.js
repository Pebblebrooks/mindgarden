/* Mind Garden v2.3: offline cache for static assets, NEVER cache multiplayer API. */
const V="mind-garden-v23",F=["./","index.html","i18n.js","upgrade.js","multiplayer.js","dashboard.js","ambient.js","v23.css","manifest.webmanifest","icon.svg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
 const r=e.request,u=new URL(r.url);
 if(r.method!=="GET"||u.pathname.startsWith("/api/")||u.origin!==self.location.origin)return;
 e.respondWith(fetch(r).then(res=>{if(res.ok){const cloned=res.clone();caches.open(V).then(cache=>cache.put(r,cloned))}return res}).catch(()=>caches.match(r).then(c=>c||caches.match("./"))))
});
