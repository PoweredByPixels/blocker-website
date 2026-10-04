import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve, extname, sep} from 'node:path';
const root = resolve('public');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8','.json':'application/json'};
createServer(async (req,res) => {
  let path;
  try {path = decodeURIComponent(new URL(req.url,'http://localhost').pathname);} catch {res.writeHead(400).end();return;}
  if(path==='/download/windows'){res.writeHead(302,{Location:'https://github.com/PoweredByPixels/blocker-website/releases/download/playtest-2026-10-04-marble-run/Blocker-Windows-x64-2026-10-04-f5e3fb0.zip'}).end();return;}
  if(path==='/download/macos'){res.writeHead(302,{Location:'https://github.com/PoweredByPixels/blocker-website/releases/download/playtest-2026-10-01-new-beginning/Blocker-macOS-Universal-2026-10-01-9c6daf4.zip'}).end();return;}
  const file = resolve(root,'.'+(path==='/'?'/index.html':path));
  if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403).end();return;}
  try {const body=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(body);}
  catch {res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(resolve(root,'404.html')));}
}).listen(4196,'127.0.0.1',()=>console.log('Blocker website: http://127.0.0.1:4196'));
