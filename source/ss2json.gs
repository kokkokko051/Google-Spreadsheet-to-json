//Google Apps Script
function doGet(e) {
    const p = e.parameter;
    const url = p.url;
    const page = p.page
  
    const ss = SpreadsheetApp.openById(url);
    const sheet = ss.getSheets()[page];
    const row = sheet.getLastRow();
    const column = sheet.getLastColumn();
  
    const title = sheet.getRange(1, 1, 1, column).getValues();
    const range = sheet.getRange(2, 1, row-1, column).getValues();
    let pad = {};
    let send = [];
    for(let i = 0; i < range.length; i++){
        for(let j = 0; j < title[0].length; j++){
            pad[title[0][j]] = range[i][j];
        }
        send.push({...pad});
    }
    const result = {"data": send}
    const out = ContentService.createTextOutput();
    out.setMimeType(ContentService.MimeType.JSON);
    out.setContent(JSON.stringify(result));
    return out;
}
