// Shared by both room endpoints. No raw client address is stored.
export async function roomRequestGuard(request,db,action){
 const response=(error,status,headers={})=>new Response(JSON.stringify({error}),{status,headers:{'content-type':'application/json','cache-control':'no-store',...headers}});
 if(Number(request.headers.get('content-length')||0)>16384)return response('Request is too large.',413);
 const ip=request.headers.get('CF-Connecting-IP');if(!ip)return null; // Header is supplied by the Cloudflare edge.
 const now=Date.now(),entry=['login','create','join'].includes(action);
 const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(ip+':'+Math.floor(now/60000)));
 const bucket=Array.from(new Uint8Array(digest),n=>n.toString(16).padStart(2,'0')).join('')+(entry?':entry':':play');
 try{
  const hit=await db.prepare('INSERT INTO mg_request_limits(bucket,expires_at) VALUES(?,?) ON CONFLICT(bucket) DO UPDATE SET hits=hits+1 RETURNING hits').bind(bucket,now+120000).first();
  if(hit.hits>(entry?120:2400))return response('Too many requests. Please wait a minute.',429,{'retry-after':'60'});
  await db.prepare('DELETE FROM mg_request_limits WHERE expires_at<?').bind(now).run();
 }catch(e){if(!String(e).includes('no such table'))throw e;return response('Apply the pilot database migration before using online play.',503)}
 return null;
}
export async function boundedJSON(request){
 const reader=request.body?.getReader();if(!reader)return JSON.parse('');
 const chunks=[];let size=0;
 for(;;){const {value,done}=await reader.read();if(done)break;size+=value.byteLength;if(size>16384){await reader.cancel();throw Object.assign(Error('Request is too large.'),{status:413})}chunks.push(value)}
 const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength}return JSON.parse(new TextDecoder().decode(bytes));
}
