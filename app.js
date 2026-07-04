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
// ===== ROUND OF 32 — placeholders resolved to actual qualified teams =====
// Slot identity (match id 73-88) preserved so R16 "Winner Match N" references still resolve.
['Round of 32','2026-06-28','South Africa','Canada','SoFi Stadium, Inglewood','TBD'],['Round of 32','2026-06-29','Germany','Paraguay','Gillette Stadium, Foxborough','TBD'],['Round of 32','2026-06-29','Netherlands','Morocco','Estadio BBVA, Guadalupe','TBD'],['Round of 32','2026-06-29','Brazil','Japan','NRG Stadium, Houston','TBD'],['Round of 32','2026-06-30','France','Sweden','MetLife Stadium, East Rutherford','TBD'],['Round of 32','2026-06-30','Ivory Coast','Norway','AT&T Stadium, Arlington','TBD'],['Round of 32','2026-06-30','Mexico','Ecuador','Estadio Azteca, Mexico City','TBD'],['Round of 32','2026-07-01','England','Congo','Mercedes-Benz Stadium, Atlanta','TBD'],['Round of 32','2026-07-01','United States','Bosnia and Herzegovina',"Levi's Stadium, Santa Clara",'TBD'],['Round of 32','2026-07-01','Belgium','Senegal','Lumen Field, Seattle','TBD'],['Round of 32','2026-07-02','Portugal','Croatia','BMO Field, Toronto','TBD'],['Round of 32','2026-07-02','Spain','Austria','SoFi Stadium, Inglewood','TBD'],['Round of 32','2026-07-02','Switzerland','Algeria','BC Place, Vancouver','TBD'],['Round of 32','2026-07-03','Argentina','Cape Verde','Hard Rock Stadium, Miami Gardens','TBD'],['Round of 32','2026-07-03','Colombia','Ghana','Arrowhead Stadium, Kansas City','TBD'],['Round of 32','2026-07-03','Australia','Egypt','AT&T Stadium, Arlington','TBD'],
['Round of 16','2026-07-04','Paraguay','France','Lincoln Financial Field, Philadelphia','TBD'],['Round of 16','2026-07-04','Canada','Morocco','NRG Stadium, Houston','TBD'],['Round of 16','2026-07-05','Brazil','Norway','MetLife Stadium, East Rutherford','TBD'],['Round of 16','2026-07-05','Mexico','England','Estadio Azteca, Mexico City','TBD'],['Round of 16','2026-07-06','Portugal','Spain','AT&T Stadium, Arlington','TBD'],['Round of 16','2026-07-06','United States','Belgium','Lumen Field, Seattle','TBD'],['Round of 16','2026-07-07','Argentina','Egypt','Mercedes-Benz Stadium, Atlanta','TBD'],['Round of 16','2026-07-07','Switzerland','Colombia','BC Place, Vancouver','TBD'],
['Quarter-final','2026-07-09','Winner Match 89','Winner Match 90','Gillette Stadium, Foxborough','TBD'],['Quarter-final','2026-07-10','Winner Match 93','Winner Match 94','SoFi Stadium, Inglewood','TBD'],['Quarter-final','2026-07-11','Winner Match 91','Winner Match 92','Hard Rock Stadium, Miami Gardens','TBD'],['Quarter-final','2026-07-11','Winner Match 95','Winner Match 96','Arrowhead Stadium, Kansas City','TBD'],['Semi-final','2026-07-14','Winner Match 97','Winner Match 98','AT&T Stadium, Arlington','TBD'],['Semi-final','2026-07-15','Winner Match 99','Winner Match 100','Mercedes-Benz Stadium, Atlanta','TBD'],['Third-place play-off','2026-07-18','Loser Match 101','Loser Match 102','Hard Rock Stadium, Miami Gardens','TBD'],['Final','2026-07-19','Winner Match 101','Winner Match 102','MetLife Stadium, East Rutherford','TBD']
].map((m,i)=>({id:i+1,stage:m[0],date:m[1],home:m[2],away:m[3],venue:m[4],time:m[5]}));


// 1) Paste your deployed Google Apps Script Web App URL here.
// Example: const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxxx/exec';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz8AX1jgvQ1mi52m2-gCHcEvBZw4CMdgYdM6MX7onc5yNEPvho6K95aj4oLJ_c7BmH_/exec';

let predictions = [];
let results = {};
let matchControl = {};
let loading = false;
const $=id=>document.getElementById(id);

function outcome(h,a){return h>a?'H':h<a?'A':'D'}
function points(p){const r=results[p.matchId];if(!r || r.home === '' || r.away === '')return 0; if(+p.predHome===+r.home && +p.predAway===+r.away)return 3; return outcome(+p.predHome,+p.predAway)===outcome(+r.home,+r.away)?1:0;}
function matchLabel(m){return `M${String(m.id).padStart(3,'0')} · ${m.home} vs ${m.away}`}
function setStatus(msg, type='info'){$('connectionStatus').innerHTML=msg;$('connectionStatus').className='panel status '+type;}
function isConfigured(){return GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL.startsWith('https://script.google.com/macros/');}
function isMatchClosed(matchId){

  const status =
    (matchControl[String(matchId)] || 'OPEN')
      .toUpperCase();

  return status === 'CLOSED'
      || status === 'HIDDEN';
}
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
    matchControl = data.matchControl || {};
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
  $('scheduleTable').innerHTML='<thead><tr><th>#</th><th>Date</th><th>Stage</th><th>Match</th><th>Venue</th><th>Time</th><th>Actual</th><th>Predict</th></tr></thead><tbody>'+rows.map(m=>`<tr class="match-row"><td data-label="#" class="match-id">M${String(m.id).padStart(3,'0')}</td><td data-label="Date">${m.date}</td><td data-label="Stage"><span class="tag">${m.stage}</span></td><td data-label="Match" class="teams"><b>${m.home}</b> <span>vs</span> <b>${m.away}</b></td><td data-label="Venue">${m.venue}</td><td data-label="Time">${m.time}</td><td data-label="Actual" class="actual-score">${results[m.id]?results[m.id].home+'-'+results[m.id].away:'—'}</td><td data-label="Predict"><button class="mini-predict-btn" data-match-id="${m.id}" type="button">Predict</button></td></tr>`).join('')+'</tbody>';
}

function currentParticipant(){return ($('participantGlobal')?.value||'').trim();}
function currentParticipantId(){return ($('participantIdGlobal')?.value||'').trim();}
function latestPredictionFor(matchId){
  const name=currentParticipant().toLowerCase();
  const pid=currentParticipantId().toLowerCase();
  if(!name && !pid) return null;
  return predictions.slice().reverse().find(p=>+p.matchId===+matchId && ((name && (p.name||'').toLowerCase()===name) || (pid && (p.participantId||'').toLowerCase()===pid))) || null;
}

function focusPredictionMatch(matchId){
  const m=schedule.find(x=>+x.id===+matchId);
  if(!m) return;
  const search=$('predictionSearch');
  if(search){
    search.value=`M${String(m.id).padStart(3,'0')} ${m.home}`;
    renderPredictionList(m.home);
  }
  location.hash='quiniela';
  setTimeout(()=>{
    const card=document.querySelector(`.prediction-match-card[data-match-id="${matchId}"]`);
    if(card){
      card.classList.add('selected-prediction-card');
      card.scrollIntoView({behavior:'smooth', block:'center'});
      const first=card.querySelector('.quickPredInput');
      if(first) first.focus({preventScroll:true});
      setTimeout(()=>card.classList.remove('selected-prediction-card'),2200);
    }
  },100);
}
function renderPredictionList(filter=''){
  const container=$('predictionMatchList');
  if(!container) return;
  const q=(filter||'').toLowerCase();
  const rows=schedule.filter(m=>((Object.values(m).join(' ')+' M'+String(m.id).padStart(3,'0')+' Match '+m.id).toLowerCase()).includes(q)).slice(0,104);
  container.innerHTML=rows.map(m=>{
    const existing=latestPredictionFor(m.id);
    const closed = isMatchClosed(m.id);

if (
  (matchControl[String(m.id)] || '')
    .toUpperCase() === 'HIDDEN'
){
  return '';
}
    return `<article class="prediction-match-card" data-match-id="${m.id}">
      <div class="pm-meta"><span class="match-id">M${String(m.id).padStart(3,'0')}</span><span class="tag">${m.stage}</span><span>${m.date}</span></div>
      <div class="pm-teams"><b>${m.home}</b><span>vs</span><b>${m.away}</b></div>
      <div class="pm-venue">${m.venue} · ${m.time}</div>
      ${closed ? `
<div class="closed-badge">
Predictions Closed
</div>
` : ``}
${closed ? '' : `
<div class="pm-score">
`}        <label>${m.home}<input class="quickPredInput" data-match-id="${m.id}" data-side="home" type="number" min="0" max="20" value="${existing?existing.predHome:''}" placeholder="0"></label>
        <label>${m.away}<input class="quickPredInput" data-match-id="${m.id}" data-side="away" type="number" min="0" max="20" value="${existing?existing.predAway:''}" placeholder="0"></label>
        <button class="savePredictionBtn" data-match-id="${m.id}" type="button">Save</button>
      </div>
      ${closed ? '' : '</div>'}
      <small class="pm-saved">${existing?'Current saved prediction: '+existing.predHome+'-'+existing.predAway:'No prediction saved yet'}</small>
    </article>`
  }).join('') || '<p class="muted">No matches found.</p>';
}

function leaderboard(){const map={};predictions.forEach(p=>{map[p.name]??={name:p.name,played:0,exact:0,outcome:0,points:0};const pts=points(p);map[p.name].played++;map[p.name].points+=pts;if(pts===3)map[p.name].exact++; if(pts===1)map[p.name].outcome++;});return Object.values(map).sort((a,b)=>b.points-a.points||b.exact-a.exact||a.name.localeCompare(b.name));}
function renderLeaderboard(){const rows=leaderboard();$('leaderboardTable').innerHTML='<thead><tr><th>Position</th><th>Participant</th><th>Predictions</th><th>Exact scores</th><th>Correct outcomes</th><th>Points</th></tr></thead><tbody>'+rows.map((r,i)=>`<tr><td data-label="Position" class="rank">${i+1}</td><td data-label="Participant"><b>${r.name}</b></td><td data-label="Predictions">${r.played}</td><td data-label="Exact scores">${r.exact}</td><td data-label="Correct outcomes">${r.outcome}</td><td data-label="Points" class="pts">${r.points}</td></tr>`).join('')+'</tbody>';}
function renderPredictions(){$('predictionsTable').innerHTML='<thead><tr><th>Participant</th><th>Match</th><th>Prediction</th><th>Actual</th><th>Points</th></tr></thead><tbody>'+predictions.slice().reverse().slice(0,80).map(p=>{const m=schedule.find(x=>x.id==p.matchId),r=results[p.matchId];return `<tr><td data-label="Participant">${p.name}</td><td data-label="Match">M${m.id}: ${m.home} vs ${m.away}</td><td data-label="Prediction">${p.predHome}-${p.predAway}</td><td data-label="Actual">${r?r.home+'-'+r.away:'—'}</td><td data-label="Points">${points(p)}</td></tr>`}).join('')+'</tbody>';}
function renderStats(){const people=new Set(predictions.map(p=>p.name));$('statParticipants').textContent=people.size;$('statPredictions').textContent=predictions.length;$('statResults').textContent=Object.keys(results).filter(k=>results[k].home!==''&&results[k].away!=='').length;}
function renderResults(){
  $('resultsTable').innerHTML='<thead><tr><th>#</th><th>Date</th><th>Match</th><th>Home goals</th><th>Away goals</th><th>Status</th></tr></thead><tbody>'+schedule.map(m=>{const r=results[m.id]||{home:'',away:''};return `<tr class="match-row result-row"><td data-label="#" class="match-id">M${String(m.id).padStart(3,'0')}</td><td data-label="Date">${m.date}</td><td data-label="Match" class="teams"><b>${m.home}</b> <span>vs</span> <b>${m.away}</b><br><small>${m.stage}</small></td><td data-label="Home goals"><input class="resultInput" data-id="${m.id}" data-side="home" type="number" min="0" max="20" value="${r.home??''}" placeholder="0"></td><td data-label="Away goals"><input class="resultInput" data-id="${m.id}" data-side="away" type="number" min="0" max="20" value="${r.away??''}" placeholder="0"></td><td data-label="Status" class="status-cell">${r.updatedAt?'Saved':'Pending'}</td></tr>`}).join('')+'</tbody>';
}
function renderAll(){renderSchedule($('search').value||'');renderLeaderboard();renderPredictions();renderStats();renderResults();renderPredictionList($('predictionSearch')?.value||'');}

$('burger').onclick=()=>{const isOpen=$('nav').classList.toggle('open');$('burger').classList.toggle('open',isOpen);$('burger').setAttribute('aria-expanded',String(isOpen));};
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{$('nav').classList.remove('open');$('burger').classList.remove('open');$('burger').setAttribute('aria-expanded','false');}));
document.addEventListener('click',e=>{const btn=e.target.closest('.mini-predict-btn');if(btn) focusPredictionMatch(+btn.dataset.matchId);});
$('search').oninput=e=>renderSchedule(e.target.value);
$('syncBtn').onclick=loadFromSheet;
$('refreshBtn').onclick=loadFromSheet;
$('refreshHeroBtn').onclick=loadFromSheet;
$('predictionSearch').oninput=e=>renderPredictionList(e.target.value);
$('participantGlobal').oninput=()=>renderPredictionList($('predictionSearch').value||'');
$('participantIdGlobal').oninput=()=>renderPredictionList($('predictionSearch').value||'');
$('predictionMatchList').addEventListener('click', async e=>{
  const btn=e.target.closest('.savePredictionBtn');
  if(!btn) return;
  const matchId=+btn.dataset.matchId;
  if(isMatchClosed(matchId)){
  setStatus(
    'Predictions closed for this match.',
    'warn'
  );
  return;
}
  const name=currentParticipant();
  if(!name){setStatus('Please enter participant name first.','warn');$('participantGlobal').focus();return;}
  const home=document.querySelector(`.quickPredInput[data-match-id="${matchId}"][data-side="home"]`).value;
  const away=document.querySelector(`.quickPredInput[data-match-id="${matchId}"][data-side="away"]`).value;
  if(home==='' || away===''){setStatus('Please enter both scores before saving.','warn');return;}
  const record={name, participantId:currentParticipantId(), matchId, predHome:+home, predAway:+away};
  try{btn.disabled=true;btn.textContent='Saving...';await savePrediction(record);btn.textContent='Saved';}
  catch(err){setStatus('Save failed: '+err.message,'error');btn.textContent='Save';}
  finally{setTimeout(()=>{btn.disabled=false;btn.textContent='Save';},900);}
});

$('saveAllResultsBtn').onclick=async()=>{
  if(!isConfigured()){setStatus('Sync URL missing.','warn');return;}
  const byId={};
  document.querySelectorAll('.resultInput').forEach(inp=>{byId[inp.dataset.id]??={matchId:+inp.dataset.id};byId[inp.dataset.id][inp.dataset.side]=inp.value;});
  const records=Object.values(byId).filter(r=>r.home!=='' && r.away!=='');
  setStatus(`Saving ${records.length} results...`,'info');
  try{for(const r of records){await saveResult(r);}await loadFromSheet();}
  catch(err){setStatus('Result save failed: '+err.message,'error');}
};

renderPredictionList();
loadFromSheet();
