import {readFile,writeFile} from 'node:fs/promises';
const songs=JSON.parse(await readFile('data/songs.json','utf8'));const start=Date.UTC(2026,7,23),day=86400000;
const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(),get=t=>Number(parts.find(p=>p.type===t).value),now=Date.UTC(get('year'),get('month')-1,get('day')),index=((Math.floor((now-start)/day)%songs.length)+songs.length)%songs.length;
await writeFile('data/current-song.json',JSON.stringify({date:new Date(now).toISOString().slice(0,10),index,song:songs[index]},null,2)+'\n');
console.log(`Today: ${songs[index].artist} — ${songs[index].title}`);
