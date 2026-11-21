/* Item 6 (approved 21 Nov 2026): each player's family album of up to 12 named photos.
   Photos and names stay in this browser's IndexedDB (the same store as welcome photos).
   They are never uploaded, synced or included in player backups. */
(function(){
'use strict';
const T=(a,b)=>window.MindGardenLocale.pair(a,b),MAX=12,prefix=owner=>owner+':album:';
let dbPromise=null,cache={owner:null,items:[]},loading=null;
function db(){return dbPromise||(dbPromise=new Promise((resolve,reject)=>{if(!window.indexedDB)return reject(Error(T('Photo storage is unavailable in this browser.','此浏览器无法保存照片。')));const r=indexedDB.open('mindGardenPhotos',1);r.onupgradeneeded=()=>r.result.createObjectStore('photos');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)}))}
function tx(mode,work){return db().then(d=>new Promise((resolve,reject)=>{const t=d.transaction('photos',mode),store=t.objectStore('photos');let result;Promise.resolve(work(store)).then(v=>result=v);t.oncomplete=()=>resolve(result);t.onerror=t.onabort=()=>reject(t.error||Error(T('Photo could not be saved.','无法保存照片。')))}))}
function revoke(){for(const item of cache.items)URL.revokeObjectURL(item.url);cache={owner:null,items:[]}}
async function load(owner=save.cp){
 const rows=await tx('readonly',store=>new Promise(resolve=>{const out=[],range=IDBKeyRange.bound(prefix(owner),prefix(owner)+'￿'),c=store.openCursor(range);c.onsuccess=()=>{const cur=c.result;if(!cur)return resolve(out);if(cur.value?.blob)out.push({id:String(cur.key).slice(prefix(owner).length),label:String(cur.value.label||''),added:cur.value.added||0,blob:cur.value.blob});cur.continue()}}));
 if(owner!==save.cp)return [];
 revoke();cache={owner,items:rows.sort((a,b)=>a.added-b.added).map(r=>({id:r.id,label:r.label,url:URL.createObjectURL(r.blob)}))};return cache.items;
}
function list(){if(cache.owner!==save.cp){loading=loading||load().finally(()=>loading=null);return loading}return Promise.resolve(cache.items)}
async function shrink(file){
 if(!/^image\/(jpeg|png|webp)$/.test(file.type))throw Error(T('Choose a JPG, PNG or WebP photo.','请选择JPG、PNG或WebP照片。'));
 if(file.size>25*1024*1024)throw Error(T('Choose a photo smaller than 25 MB.','请选择小于25MB的照片。'));
 const url=URL.createObjectURL(file);try{const im=new Image();im.src=url;await im.decode();const c=document.createElement('canvas'),ratio=Math.min(1,1200/Math.max(im.width,im.height));c.width=Math.max(1,Math.round(im.width*ratio));c.height=Math.max(1,Math.round(im.height*ratio));c.getContext('2d').drawImage(im,0,0,c.width,c.height);return await new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(Error(T('Photo could not be saved.','无法保存照片。'))),'image/jpeg',.85))}finally{URL.revokeObjectURL(url)}
}
async function add(files){
 const owner=save.cp,current=await list(),room=MAX-current.length,errors=[];let added=0;
 for(const file of [...files].slice(0,Math.max(0,room))){try{const blob=await shrink(file);const id=Date.now().toString(36)+Math.random().toString(36).slice(2,7);await tx('readwrite',store=>store.put({label:'',blob,added:Date.now()},prefix(owner)+id));added++}catch(e){errors.push(e.message)}}
 await load(owner);return {added,skipped:Math.max(0,files.length-room),errors};
}
async function rename(id,label){const owner=save.cp;label=String(label||'').trim().slice(0,40);await tx('readwrite',store=>new Promise(resolve=>{const r=store.get(prefix(owner)+id);r.onsuccess=()=>{if(r.result){r.result.label=label;store.put(r.result,prefix(owner)+id)}resolve()}}));const item=cache.owner===owner&&cache.items.find(x=>x.id===id);if(item)item.label=label}
async function remove(id){const owner=save.cp;await tx('readwrite',store=>store.delete(prefix(owner)+id));await load(owner)}
const ready=items=>items.filter(x=>x.label);
window.MindGardenAlbum={MAX,list,add,rename,remove,ready,cached:()=>cache.owner===save.cp?cache.items:[]};
list().catch(()=>{});
})();
