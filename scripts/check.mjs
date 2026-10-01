import {readFile,access,readdir} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve('public');
const html=await readFile(resolve(root,'index.html'),'utf8');
const refs=[...html.matchAll(/(?:src|href|srcset)="(\/(?!\/)[^"#]+)"/g)].map(m=>m[1]);
for(const path of new Set(refs))await access(resolve(root,'.'+path));
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
if(new Set(ids).size!==ids.length)throw Error('Duplicate HTML ID');
for(const [,id] of html.matchAll(/(?:data-dialog="|href="#)([^"]+)"/g))if(!ids.includes(id))throw Error('Missing target '+id);
for(const [,attributes] of html.matchAll(/<img\b([^>]+)>/g))if(!/\balt="/.test(attributes))throw Error('Missing image alt');
if(!html.includes('CONCEPT ART · AI GENERATED'))throw Error('Missing concept disclosure');
async function checkFolder(folder){for(const e of await readdir(folder,{withFileTypes:true})){const full=resolve(folder,e.name);if(e.isDirectory())await checkFolder(full);else if(/\.(zip|exe|bin|dll)$/.test(e.name)||/^\.env|device-identity|pending-score|preferences\.json/.test(e.name))throw Error('Unexpected private or player file in public: '+e.name);}}
await checkFolder(root);
console.log('Static checks passed: local references, dialog targets, image labels and public file scope.');
