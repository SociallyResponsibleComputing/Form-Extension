
function PutFile(fileContents) {
  const headers = {
    'Authorization': `Bearer ${getGitToken()}`,
    "Content-Type": "application/vnd.github.v3+json",
  }

  const blob = fileContents
  Logger.Log("Type of file: " + typeof(fileContents))
  if (typeof fileContents != Blob) {
    blob = Utilities.newBlob(fileContents)
  }
  const base64Str = Utilities.base64Encode(blob.getBytes())
  const bodyObj = {
    "message": "testing commit",
    "content": base64Str
};
    var options = {
        'method': "PUT",
        'headers': headers,
        'payload': JSON.stringify(bodyObj),
        //"muteHttpExceptions" : true,
    }
    const URL = 'https://api.github.com/repos/alexhappycode/SFSU_document_organizer/contents/test.txt'
    UrlFetchApp.fetch(URL, options);
}