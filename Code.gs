const SHEET_PREDICTIONS = 'Predictions';
const SHEET_RESULTS = 'Results';
const SHEET_AUDIT = 'Audit';

function doGet(e) {
  const callback = e.parameter.callback || 'callback';
  let output;
  try {
    setupSheets_();
    const action = e.parameter.action || 'getData';
    if (action === 'getData') output = getData_();
    else if (action === 'savePrediction') output = savePrediction_(JSON.parse(e.parameter.record || '{}'));
    else if (action === 'saveResult') output = saveResult_(JSON.parse(e.parameter.record || '{}'));
    else output = { ok: false, error: 'Unknown action: ' + action };
  } catch (err) {
    output = { ok: false, error: String(err) };
  }
  return ContentService
    .createTextOutput(callback + '(' + JSON.stringify(output) + ')')
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function setupSheets_() {
  const ss = SpreadsheetApp.getActive();
  const sheets = ss.getSheets().map(s => s.getName());
  if (!sheets.includes(SHEET_PREDICTIONS)) {
    ss.insertSheet(SHEET_PREDICTIONS).appendRow(['key','name','participantId','matchId','predHome','predAway','createdAt','updatedAt']);
  }
  if (!sheets.includes(SHEET_RESULTS)) {
    ss.insertSheet(SHEET_RESULTS).appendRow(['matchId','home','away','updatedAt']);
  }
  if (!sheets.includes(SHEET_AUDIT)) {
    ss.insertSheet(SHEET_AUDIT).appendRow(['timestamp','action','payload']);
  }
}

function getData_() {
  const ss = SpreadsheetApp.getActive();
  const predRows = sheetObjects_(ss.getSheetByName(SHEET_PREDICTIONS));
  const resultRows = sheetObjects_(ss.getSheetByName(SHEET_RESULTS));
  return { ok: true, predictions: predRows, results: resultRows };
}

function savePrediction_(r) {
  if (!r.name || !r.matchId && r.matchId !== 0) throw new Error('Missing name or matchId');
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName(SHEET_PREDICTIONS);
  const now = new Date().toISOString();
  const key = String(r.name).trim().toLowerCase() + '|' + String(r.matchId);
  const values = sh.getDataRange().getValues();
  let rowIndex = -1;
  for (let i = 1; i < values.length; i++) if (values[i][0] === key) rowIndex = i + 1;
  const existingCreatedAt = rowIndex > -1 ? sh.getRange(rowIndex, 7).getValue() : now;
  const row = [key, r.name, r.participantId || '', Number(r.matchId), Number(r.predHome), Number(r.predAway), existingCreatedAt || now, now];
  if (rowIndex > -1) sh.getRange(rowIndex, 1, 1, row.length).setValues([row]);
  else sh.appendRow(row);
  audit_('savePrediction', r);
  return { ok: true };
}

function saveResult_(r) {
  if (!r.matchId && r.matchId !== 0) throw new Error('Missing matchId');
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName(SHEET_RESULTS);
  const now = new Date().toISOString();
  const values = sh.getDataRange().getValues();
  let rowIndex = -1;
  for (let i = 1; i < values.length; i++) if (Number(values[i][0]) === Number(r.matchId)) rowIndex = i + 1;
  const row = [Number(r.matchId), Number(r.home), Number(r.away), now];
  if (rowIndex > -1) sh.getRange(rowIndex, 1, 1, row.length).setValues([row]);
  else sh.appendRow(row);
  audit_('saveResult', r);
  return { ok: true };
}

function sheetObjects_(sheet) {
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0];
  return values.slice(1).filter(row => row.some(v => v !== '')).map(row => {
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    return obj;
  });
}

function audit_(action, payload) {
  SpreadsheetApp.getActive().getSheetByName(SHEET_AUDIT).appendRow([new Date().toISOString(), action, JSON.stringify(payload)]);
}
