# FIFA World Cup 2026 Quiniela — Google Sheets Database Version

## What changed
- Predictions are saved directly to Google Sheets.
- Actual results are entered inside the app in one results list.
- The leaderboard is calculated in the app using the Google Sheet data.
- Excel export/import was removed because Google Sheets is now the database.

## Setup
1. Create a new Google Sheet.
2. Open **Extensions → Apps Script**.
3. Paste the content of `Code.gs`.
4. Save the Apps Script project.
5. Click **Deploy → New deployment → Web app**.
6. Execute as: **Me**.
7. Who has access: **Anyone with the link**.
8. Copy the Web App URL.
9. Open `app.js` and paste the URL here:

```js
const GOOGLE_SCRIPT_URL = 'PASTE_YOUR_WEB_APP_URL_HERE';
```

10. Open `index.html` in your browser or upload the folder to any static hosting service.

## Scoring logic
- Exact score: 3 points
- Correct winner/draw outcome: 1 point
- Incorrect result: 0 points

## Google Sheet tabs created automatically
- `Predictions`
- `Results`
- `Audit`

## Important note
The Apps Script endpoint is public if you deploy it as “Anyone with the link”. This is practical for a friendly quiniela, but not secure for a paid or sensitive tournament. For a stricter version, add participant login and admin authentication.
