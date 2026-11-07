import assert from 'node:assert/strict';
import {database,client} from './room8.test.mjs';
import {onRequest} from '../functions/api/room8.js';
const {DB,sqlite}=database();
try{
 for(const body of ['null','[]','true','42','"text"','{broken']){
  const r=await onRequest({env:{DB},request:new Request('https://garden.test/api/room8?action=login',{method:'POST',body})});
  assert.equal(r.status,400,'Invalid JSON body: '+body);
 }
 const api=client(DB),host=await api('login',{name:'Host'}),guest=await api('login',{name:'Guest'}),{code}=await api('create',host);await api('join',{...guest,code});
 for(const round of ['invalid',null,{},[],0.5,-1])await api('launch',{...host,code,mode:'sums',round},400);
 assert.equal(sqlite.prepare('SELECT round FROM mg_rooms WHERE code=?').get(code).round,0);
 await api('launch',{...host,code,mode:'sums',round:0});
 console.log('PASS: malformed JSON, non-object bodies and invalid round values return 400 without mutating rooms; valid launches still work.');
}finally{sqlite.close()}
