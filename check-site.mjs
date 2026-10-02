import fs from 'node:fs/promises';
import path from 'node:path';
const siteUrl=(process.env.SITE_URL||'https://erozkruzpe248.github.io/restore-gh').replace(/\/$/,'');
const basePath=new URL(siteUrl).pathname.replace(/\/$/,'');
const files=[];async function walk(dir){for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())await walk(p);else files.push(p);}}await walk('docs');
let links=0;const errors=[];
for(const file of files.filter(f=>f.endsWith('.html'))){const html=await fs.readFile(file,'utf8');if((html.match(/<h1[ >]/g)||[]).length!==1)errors.push(file+' requires one h1');if(!html.includes('name="description"'))errors.push(file+' missing description');if(!html.includes('rel="canonical" href="'+siteUrl+'/'))errors.push(file+' wrong canonical origin');for(const m of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)){const url=m[1];if(basePath&&!url.startsWith(basePath+'/')){errors.push(file+' missing Pages base path '+url);continue;}let target=path.join('docs',url.slice(basePath.length));if(url.endsWith('/'))target=path.join(target,'index.html');try{await fs.access(target);links++;}catch{errors.push(file+' broken '+url);}}}
if(errors.length)throw Error(errors.join('\n'));console.log(`${files.filter(f=>f.endsWith('.html')).length} pages; ${links} local references verified.`);
