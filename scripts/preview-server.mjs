// Local review server only. It uses an isolated in-memory database, never production.
import http from 'node:http';
import {readFileSync,existsSync,statSync} from 'node:fs';
import {resolve,extname} from 'node:path';
import {database} from '../tests/room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const {DB,sqlite}=database();sqlite.exec(readFileSync(new URL('../migrate-v5.0.0.sql',import.meta.url),'utf8'));
const root=resolve('public'),args=process.argv,port=Number(args[args.indexOf('--port')+1])||4173;
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.gif':'image/gif','.mp3':'audio/mpeg','.webmanifest':'application/manifest+json','.glb':'model/gltf-binary'};
http.createServer(async(req,res)=>{try{
 const u=new URL(req.url,'http://preview.local');
 if(u.pathname==='/api/room8'){
  let body='';for await(const c of req){body+=c;if(body.length>16384){res.writeHead(413);res.end();return}}
  const r=await onRequest({env:{DB},request:new Request(u,{method:req.method,headers:req.headers,body:req.method==='POST'?body:undefined})});res.writeHead(r.status,Object.fromEntries(r.headers));res.end(await r.text());return;
 }
 const f=resolve(root,'.'+decodeURIComponent(u.pathname==='/'?'/index.html':u.pathname));
 if(!f.startsWith(root+'/')||!existsSync(f)||!statSync(f).isFile()){res.writeHead(404);res.end('Not found');return}
 res.writeHead(200,{'content-type':types[extname(f)]||'application/octet-stream','cache-control':'no-store'});res.end(readFileSync(f));
 }catch{res.writeHead(500);res.end('Preview error')}}).listen(port,'0.0.0.0',()=>console.log('Isolated Mind Garden preview on '+port));
