import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve, extname, sep} from 'node:path';
const root = resolve('public');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8','.json':'application/json'};
createServer(async (req,res) => {
  let path;
  try {path = decodeURIComponent(new URL(req.url,'http://localhost').pathname);} catch {res.writeHead(400).end();return;}
  if(path==='/download/windows'){res.writeHead(302,{Location:'https://github.com/PoweredByPixels/blocker-website/releases/download/playtest-2026-10-01/Blocker-Windows-x64-2026-10-01-223255f.zip'}).end();return;}
  const file = resolve(root,'.'+(path==='/'?'/index.html':path));
  if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403).end();return;}
  try {res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(await readFile(file));}
  catch {res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(resolve(root,'404.html')));}
}).listen(4196,'127.0.0.1',()=>console.log('Blocker website: http://127.0.0.1:4196'));
