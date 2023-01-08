
/* Parameters:
  file: the file object not the ID
*/
function putFile(file) {
  Logger.log(`printing file: ${file}`)
  let blob = file.getBlob()
  const base64Str = Utilities.base64Encode(blob.getBytes())
  const bodyObj = {
    "message": "Pushed file from GAS",
    "content": base64Str
}
  const headers = {
    'Authorization': `Bearer ${getGitToken()}`,
    "Content-Type": "application/vnd.github.v3+json",
  }
    var options = {
        'method': "PUT",
        'headers': headers,
        'payload': JSON.stringify(bodyObj),
        //"muteHttpExceptions" : true,
    }
    const URL = `${REPO_DOCUMENTS}/${file.getName()}`
    Logger.log(`URL: ${URL}`)
    try {
      UrlFetchApp.fetch(URL, options);
    } catch (err) {
      Logger.log(err)
      Logger.log('Error! File probably exists already')
    }
}

function putString(inputStr) {
  let blob = Utilities.newBlob(inputStr)
  const base64Str = Utilities.base64Encode(blob.getBytes())
  const bodyObj = {
    "message": "Put a string using GITHUB Rest API from doc_organizer",
    "content": base64Str
  }
  const headers = {
    'Authorization': `Bearer ${getGitToken()}`,
    "Content-Type": "application/vnd.github.v3+json",
  }
    var options = {
        'method': "PUT",
        'headers': headers,
        'payload': JSON.stringify(bodyObj),
        //"muteHttpExceptions" : true,
    }
    const URL = 'https://api.github.com/repos/alexhappycode/SFSU_document_organizer/contents/test.txt'
    UrlFetchApp.fetch(URL, options);
}

function putJson() {

}