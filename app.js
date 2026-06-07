const schedule = [
['Group A','2026-06-11','Mexico','South Africa','Estadio Azteca, Mexico City','1pm local'],['Group A','2026-06-11','South Korea','Czechia','Estadio Akron, Zapopan','8pm local'],['Group A','2026-06-18','Czechia','South Africa','Mercedes-Benz Stadium, Atlanta','12noon local'],['Group A','2026-06-18','Mexico','South Korea','Estadio Akron, Zapopan','7pm local'],['Group A','2026-06-24','Czechia','Mexico','Estadio Azteca, Mexico City','7pm local'],['Group A','2026-06-24','South Africa','South Korea','Estadio BBVA, Guadalupe','7pm local'],
['Group B','2026-06-12','Canada','Bosnia and Herzegovina','BMO Field, Toronto','3pm local'],['Group B','2026-06-13','Qatar','Switzerland',"Levi's Stadium, Santa Clara",'12noon local'],['Group B','2026-06-18','Switzerland','Bosnia and Herzegovina','SoFi Stadium, Inglewood','12noon local'],['Group B','2026-06-18','Canada','Qatar','BC Place, Vancouver','3pm local'],['Group B','2026-06-24','Switzerland','Canada','BC Place, Vancouver','12noon local'],['Group B','2026-06-24','Bosnia and Herzegovina','Qatar','Lumen Field, Seattle','12noon local'],
['Group C','2026-06-13','Brazil','Morocco','Gillette Stadium, Foxborough','6pm local'],['Group C','2026-06-13','Haiti','Scotland','MetLife Stadium, East Rutherford','9pm local'],['Group C','2026-06-19','Scotland','Morocco','Lincoln Financial Field, Philadelphia','6pm local'],['Group C','2026-06-19','Brazil','Haiti','Gillette Stadium, Foxborough','9pm local'],['Group C','2026-06-24','Scotland','Brazil','Hard Rock Stadium, Miami Gardens','6pm local'],['Group C','2026-06-24','Morocco','Haiti','Mercedes-Benz Stadium, Atlanta','6pm local'],
['Group D','2026-06-12','United States','Paraguay','SoFi Stadium, Inglewood','6pm local'],['Group D','2026-06-13','Australia','Turkiye','BC Place, Vancouver','9pm local'],['Group D','2026-06-19','Turkiye','Paraguay',"Levi's Stadium, Santa Clara",'9pm local'],['Group D','2026-06-19','United States','Australia','Lumen Field, Seattle','12noon local'],['Group D','2026-06-25','Turkiye','United States','SoFi Stadium, Inglewood','7pm local'],['Group D','2026-06-25','Paraguay','Australia',"Levi's Stadium, Santa Clara",'7pm local'],
['Group E','2026-06-14','Ivory Coast','Ecuador','Lincoln Financial Field, Philadelphia','7pm local'],['Group E','2026-06-14','Germany','Curacao','NRG Stadium, Houston','12noon local'],['Group E','2026-06-20','Germany','Ivory Coast','BMO Field, Toronto','4pm local'],['Group E','2026-06-20','Ecuador','Curacao','Arrowhead Stadium, Kansas City','7pm local'],['Group E','2026-06-25','Curacao','Ivory Coast','Lincoln Financial Field, Philadelphia','4pm local'],['Group E','2026-06-25','Ecuador','Germany','MetLife Stadium, East Rutherford','4pm local'],
['Group F','2026-06-14','Netherlands','Japan','AT&T Stadium, Arlington','3pm local'],['Group F','2026-06-14','Sweden','Tunisia','Estadio BBVA, Guadalupe','8pm local'],['Group F','2026-06-20','Netherlands','Sweden','NRG Stadium, Houston','12noon local'],['Group F','2026-06-20','Tunisia','Japan','Estadio BBVA, Guadalupe','10pm local'],['Group F','2026-06-25','Japan','Sweden','AT&T Stadium, Arlington','6pm local'],['Group F','2026-06-25','Tunisia','Netherlands','Arrowhead Stadium, Kansas City','6pm local'],
['Group G','2026-06-15','Iran','New Zealand','SoFi Stadium, Inglewood','6pm local'],['Group G','2026-06-15','Belgium','Egypt','Lumen Field, Seattle','12noon local'],['Group G','2026-06-21','Belgium','Iran','SoFi Stadium, Inglewood','12noon local'],['Group G','2026-06-21','New Zealand','Egypt','BC Place, Vancouver','6pm local'],['Group G','2026-06-26','Egypt','Iran','Lumen Field, Seattle','8pm local'],['Group G','2026-06-26','New Zealand','Belgium','BC Place, Vancouver','8pm local'],
['Group H','2026-06-15','Saudi Arabia','Uruguay','Hard Rock Stadium, Miami Gardens','6pm local'],['Group H','2026-06-15','Spain','Cape Verde','Mercedes-Benz Stadium, Atlanta','12noon local'],['Group H','2026-06-21','Uruguay','Cape Verde','Hard Rock Stadium, Miami Gardens','6pm local'],['Group H','2026-06-21','Spain','Saudi Arabia','Mercedes-Benz Stadium, Atlanta','12noon local'],['Group H','2026-06-26','Cape Verde','Saudi Arabia','NRG Stadium, Houston','7pm local'],['Group H','2026-06-26','Uruguay','Spain','Estadio Akron, Zapopan','6pm local'],
['Group I','2026-06-16','France','Senegal','MetLife Stadium, East Rutherford','3pm local'],['Group I','2026-06-16','Iraq','Norway','Gillette Stadium, Foxborough','6pm local'],['Group I','2026-06-22','Norway','Senegal','MetLife Stadium, East Rutherford','8pm local'],['Group I','2026-06-22','France','Iraq','Lincoln Financial Field, Philadelphia','5pm local'],['Group I','2026-06-26','Norway','France','Gillette Stadium, Foxborough','3pm local'],['Group I','2026-06-26','Senegal','Iraq','BMO Field, Toronto','3pm local'],
['Group J','2026-06-16','Argentina','Algeria','Arrowhead Stadium, Kansas City','8pm local'],['Group J','2026-06-16','Austria','Jordan',"Levi's Stadium, Santa Clara",'9pm local'],['Group J','2026-06-22','Argentina','Austria','AT&T Stadium, Arlington','12noon local'],['Group J','2026-06-22','Jordan','Algeria',"Levi's Stadium, Santa Clara",'8pm local'],['Group J','2026-06-27','Algeria','Austria','Arrowhead Stadium, Kansas City','9pm local'],['Group J','2026-06-27','Jordan','Argentina','AT&T Stadium, Arlington','9pm local'],
['Group K','2026-06-17','Portugal','DR Congo','NRG Stadium, Houston','12noon local'],['Group K','2026-06-17','Uzbekistan','Colombia','Estadio Azteca, Mexico City','8pm local'],['Group K','2026-06-23','Portugal','Uzbekistan','NRG Stadium, Houston','12noon local'],['Group K','2026-06-23','Colombia','DR Congo','Estadio Akron, Zapopan','8pm local'],['Group K','2026-06-27','Colombia','Portugal','Hard Rock Stadium, Miami Gardens','7:30pm local'],['Group K','2026-06-27','DR Congo','Uzbekistan','Mercedes-Benz Stadium, Atlanta','7:30pm local'],
['Group L','2026-06-17','Ghana','Panama','BMO Field, Toronto','7pm local'],['Group L','2026-06-17','England','Croatia','AT&T Stadium, Arlington','3pm local'],['Group L','2026-06-23','England','Ghana','Gillette Stadium, Foxborough','4pm local'],['Group L','2026-06-23','Panama','Croatia','BMO Field, Toronto','7pm local'],['Group L','2026-06-27','Panama','England','MetLife Stadium, East Rutherford','5pm local'],['Group L','2026-06-27','Croatia','Ghana','Lincoln Financial Field, Philadelphia','5pm local'],
['Round of 32','2026-06-28','Runner-up Group A','Runner-up Group B','SoFi Stadium, Inglewood','TBD'],['Round of 32','2026-06-29','Winner Group E','3rd Group A/B/C/D/F','Gillette Stadium, Foxborough','TBD'],['Round of 32','2026-06-29','Winner Group F','Runner-up Group C','Estadio BBVA, Guadalupe','TBD'],['Round of 32','2026-06-29','Winner Group C','Runner-up Group F','NRG Stadium, Houston','TBD'],['Round of 32','2026-06-30','Winner Group I','3rd Group C/D/F/G/H','MetLife Stadium, East Rutherford','TBD'],['Round of 32','2026-06-30','Runner-up Group E','Runner-up Group I','AT&T Stadium, Arlington','TBD'],['Round of 32','2026-06-30','Winner Group A','3rd Group C/E/F/H/I','Estadio Azteca, Mexico City','TBD'],['Round of 32','2026-07-01','Winner Group L','3rd Group E/H/I/J/K','Mercedes-Benz Stadium, Atlanta','TBD'],['Round of 32','2026-07-01','Winner Group D','3rd Group B/E/F/I/J',"Levi's Stadium, Santa Clara",'TBD'],['Round of 32','2026-07-01','Winner Group G','3rd Group A/E/H/I/J','Lumen Field, Seattle','TBD'],['Round of 32','2026-07-02','Runner-up Group K','Runner-up Group L','BMO Field, Toronto','TBD'],['Round of 32','2026-07-02','Winner Group H','Runner-up Group J','SoFi Stadium, Inglewood','TBD'],['Round of 32','2026-07-02','Winner Group B','3rd Group E/F/G/I/J','BC Place, Vancouver','TBD'],['Round of 32','2026-07-03','Winner Group J','Runner-up Group H','Hard Rock Stadium, Miami Gardens','TBD'],['Round of 32','2026-07-03','Winner Group K','3rd Group D/E/I/J/L','Arrowhead Stadium, Kansas City','TBD'],['Round of 32','2026-07-03','Runner-up Group D','Runner-up Group G','AT&T Stadium, Arlington','TBD'],
['Round of 16','2026-07-04','Winner Match 74','Winner Match 77','Lincoln Financial Field, Philadelphia','TBD'],['Round of 16','2026-07-04','Winner Match 73','Winner Match 75','NRG Stadium, Houston','TBD'],['Round of 16','2026-07-05','Winner Match 76','Winner Match 78','MetLife Stadium, East Rutherford','TBD'],['Round of 16','2026-07-05','Winner Match 79','Winner Match 80','Estadio Azteca, Mexico City','TBD'],['Round of 16','2026-07-06','Winner Match 83','Winner Match 84','AT&T Stadium, Arlington','TBD'],['Round of 16','2026-07-06','Winner Match 81','Winner Match 82','Lumen Field, Seattle','TBD'],['Round of 16','2026-07-07','Winner Match 86','Winner Match 88','Mercedes-Benz Stadium, Atlanta','TBD'],['Round of 16','2026-07-07','Winner Match 85','Winner Match 87','BC Place, Vancouver','TBD'],
['Quarter-final','2026-07-09','Winner Match 89','Winner Match 90','Gillette Stadium, Foxborough','TBD'],['Quarter-final','2026-07-10','Winner Match 93','Winner Match 94','SoFi Stadium, Inglewood','TBD'],['Quarter-final','2026-07-11','Winner Match 91','Winner Match 92','Hard Rock Stadium, Miami Gardens','TBD'],['Quarter-final','2026-07-11','Winner Match 95','Winner Match 96','Arrowhead Stadium, Kansas City','TBD'],['Semi-final','2026-07-14','Winner Match 97','Winner Match 98','AT&T Stadium, Arlington','TBD'],['Semi-final','2026-07-15','Winner Match 99','Winner Match 100','Mercedes-Benz Stadium, Atlanta','TBD'],['Third-place play-off','2026-07-18','Loser Match 101','Loser Match 102','Hard Rock Stadium, Miami Gardens','TBD'],['Final','2026-07-19','Winner Match 101','Winner Match 102','MetLife Stadium, East Rutherford','TBD']
].map((m,i)=>({id:i+1,stage:m[0],date:m[1],home:m[2],away:m[3],venue:m[4],time:m[5]}));



// 1) Paste your deployed Google Apps Script Web App URL here.
// Example: const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxxx/exec';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz8AX1jgvQ1mi52m2-gCHcEvBZw4CMdgYdM6MX7onc5yNEPvho6K95aj4oLJ_c7BmH_/exec';

let predictions = [];
let results = {};
let loading = false;
const $=id=>document.getElementById(id);

function outcome(h,a){return h>a?'H':h<a?'A':'D'}
function points(p){const r=results[p.matchId];if(!r || r.home === '' || r.away === '')return 0; if(+p.predHome===+r.home && +p.predAway===+r.away)return 3; return outcome(+p.predHome,+p.predAway)===outcome(+r.home,+r.away)?1:0;}
function matchLabel(m){return `M${String(m.id).padStart(3,'0')} · ${m.home} vs ${m.away}`}
function setStatus(msg, type='info'){$('connectionStatus').innerHTML=msg;$('connectionStatus').className='panel status '+type;}
function isConfigured(){return GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.startsWith('https://script.google.com/macros/');}

function jsonp(params){
  return new Promise((resolve,reject)=>{
    if(!isConfigured()){reject(new Error('Google Script URL is not configured.'));return;}
    const cb='cb_'+Date.now()+'_'+Math.random().toString(36).slice(2);
    const script=document.createElement('script');
    const url=new URL(GOOGLE_SCRIPT_URL);
    Object.entries(params).forEach(([k,v])=>url.searchParams.set(k, typeof v==='object'?JSON.stringify(v):v));
    url.searchParams.set('callback', cb);
    window[cb]=(data)=>{delete window[cb];script.remove();resolve(data);};
    script.onerror=()=>{delete window[cb];script.remove();reject(new Error('Could not connect to Google Apps Script. Check deployment permissions.'));};
    script.src=url.toString();
    document.body.appendChild(script);
  });
}

async function loadFromSheet(){
  if(!isConfigured()){setStatus('Sync URL missing.','warn');renderAll();return;}
  loading=true;setStatus('Syncing data...','info');
  try{
    const data=await jsonp({action:'getData'});
    if(!data.ok) throw new Error(data.error||'Unknown sync error');
    predictions=(data.predictions||[]).map(p=>({name:p.name, participantId:p.participantId||'', matchId:+p.matchId, predHome:+p.predHome, predAway:+p.predAway, createdAt:p.createdAt||'', updatedAt:p.updatedAt||''}));
    results={};
    (data.results||[]).forEach(r=>{results[+r.matchId]={home:r.home, away:r.away, updatedAt:r.updatedAt||''};});
    setStatus('Data refreshed successfully.','ok');
  }catch(err){setStatus('Connection issue: '+err.message,'error');}
  loading=false;renderAll();
}

async function savePrediction(record){
  setStatus('Saving prediction...','info');
  const data=await jsonp({action:'savePrediction', record});
  if(!data.ok) throw new Error(data.error||'Could not save prediction');
  await loadFromSheet();
}

async function saveResult(record){
  const data=await jsonp({action:'saveResult', record});
  if(!data.ok) throw new Error(data.error||'Could not save result');
}

function renderSchedule(filter=''){
  const rows=schedule.filter(m=>(Object.values(m).join(' ').toLowerCase()).includes(filter.toLowerCase()));
  $('scheduleTable').innerHTML='<thead><tr><th>#</th><th>Date</th><th>Stage</th><th>Match</th><th>Venue</th><th>Time</th><th>Actual</th></tr></thead><tbody>'+rows.map(m=>`<tr><td>M${String(m.id).padStart(3,'0')}</td><td>${m.date}</td><td><span class="tag">${m.stage}</span></td><td><b>${m.home}</b> vs <b>${m.away}</b></td><td>${m.venue}</td><td>${m.time}</td><td>${results[m.id]?results[m.id].home+'-'+results[m.id].away:'—'}</td></tr>`).join('')+'</tbody>';
}
function renderSelects(){const opts=schedule.map(m=>`<option value="${m.id}">${matchLabel(m)}</option>`).join('');$('matchSelect').innerHTML=opts;}
function leaderboard(){const map={};predictions.forEach(p=>{map[p.name]??={name:p.name,played:0,exact:0,outcome:0,points:0};const pts=points(p);map[p.name].played++;map[p.name].points+=pts;if(pts===3)map[p.name].exact++; if(pts===1)map[p.name].outcome++;});return Object.values(map).sort((a,b)=>b.points-a.points||b.exact-a.exact||a.name.localeCompare(b.name));}
function renderLeaderboard(){const rows=leaderboard();$('leaderboardTable').innerHTML='<thead><tr><th>Position</th><th>Participant</th><th>Predictions</th><th>Exact scores</th><th>Correct outcomes</th><th>Points</th></tr></thead><tbody>'+rows.map((r,i)=>`<tr><td>${i+1}</td><td><b>${r.name}</b></td><td>${r.played}</td><td>${r.exact}</td><td>${r.outcome}</td><td class="pts">${r.points}</td></tr>`).join('')+'</tbody>';}
function renderPredictions(){$('predictionsTable').innerHTML='<thead><tr><th>Participant</th><th>Match</th><th>Prediction</th><th>Actual</th><th>Points</th></tr></thead><tbody>'+predictions.slice().reverse().slice(0,80).map(p=>{const m=schedule.find(x=>x.id==p.matchId),r=results[p.matchId];return `<tr><td>${p.name}</td><td>M${m.id}: ${m.home} vs ${m.away}</td><td>${p.predHome}-${p.predAway}</td><td>${r?r.home+'-'+r.away:'—'}</td><td>${points(p)}</td></tr>`}).join('')+'</tbody>';}
function renderStats(){const people=new Set(predictions.map(p=>p.name));$('statParticipants').textContent=people.size;$('statPredictions').textContent=predictions.length;$('statResults').textContent=Object.keys(results).filter(k=>results[k].home!==''&&results[k].away!=='').length;}
function renderResults(){
  $('resultsTable').innerHTML='<thead><tr><th>#</th><th>Date</th><th>Match</th><th>Home goals</th><th>Away goals</th><th>Status</th></tr></thead><tbody>'+schedule.map(m=>{const r=results[m.id]||{home:'',away:''};return `<tr><td>M${String(m.id).padStart(3,'0')}</td><td>${m.date}</td><td><b>${m.home}</b> vs <b>${m.away}</b><br><small>${m.stage}</small></td><td><input class="resultInput" data-id="${m.id}" data-side="home" type="number" min="0" max="20" value="${r.home??''}"></td><td><input class="resultInput" data-id="${m.id}" data-side="away" type="number" min="0" max="20" value="${r.away??''}"></td><td>${r.updatedAt?'Saved':'Pending'}</td></tr>`}).join('')+'</tbody>';
}
function renderAll(){renderSchedule($('search').value||'');renderLeaderboard();renderPredictions();renderStats();renderResults();}

$('burger').onclick=()=>{const isOpen=$('nav').classList.toggle('open');$('burger').classList.toggle('open',isOpen);$('burger').setAttribute('aria-expanded',String(isOpen));};
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{$('nav').classList.remove('open');$('burger').classList.remove('open');$('burger').setAttribute('aria-expanded','false');}));
$('search').oninput=e=>renderSchedule(e.target.value);
$('syncBtn').onclick=loadFromSheet;
$('refreshBtn').onclick=loadFromSheet;
$('refreshHeroBtn').onclick=loadFromSheet;

$('predictionForm').onsubmit=async e=>{
  e.preventDefault();
  const record={name:$('participant').value.trim(), participantId:$('participantId').value.trim(), matchId:+$('matchSelect').value, predHome:+$('predHome').value, predAway:+$('predAway').value};
  try{await savePrediction(record);e.target.reset();}
  catch(err){setStatus('Save failed: '+err.message,'error');}
};

$('saveAllResultsBtn').onclick=async()=>{
  if(!isConfigured()){setStatus('Sync URL missing.','warn');return;}
  const byId={};
  document.querySelectorAll('.resultInput').forEach(inp=>{byId[inp.dataset.id]??={matchId:+inp.dataset.id};byId[inp.dataset.id][inp.dataset.side]=inp.value;});
  const records=Object.values(byId).filter(r=>r.home!=='' && r.away!=='');
  setStatus(`Saving ${records.length} results...`,'info');
  try{for(const r of records){await saveResult(r);}await loadFromSheet();}
  catch(err){setStatus('Result save failed: '+err.message,'error');}
};

renderSelects();
loadFromSheet();
