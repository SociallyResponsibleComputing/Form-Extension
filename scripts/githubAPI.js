/* Parameters:
  file: the file object not the ID
*/
function putFile(file) {
  Logger.log(`printing file: ${file}`)
  let blob = file.getBlob()
  const base64Str = Utilities.base64Encode(blob.getBytes())
  const bodyObj = {
    message: 'Pushed file from GAS',
    content: base64Str,
  }
  const headers = {
    Authorization: `Bearer ${getGitToken()}`,
    'Content-Type': 'application/vnd.github.v3+json',
  }
  var options = {
    method: 'PUT',
    headers: headers,
    payload: JSON.stringify(bodyObj),
    //"muteHttpExceptions" : true,
  }
  const URL = `${DOCUMENTS_URL}/${file.getName()}`
  Logger.log(`URL: ${URL}`)
  try {
    UrlFetchApp.fetch(URL, options)
  } catch (err) {
    Logger.log(err)
    Logger.log('Error! File probably exists already')
  }
}

/* Parameters:
  inputStr: The string to add to file
*/
function putString(inputStr) {
  let blob = Utilities.newBlob(inputStr)
  const base64Str = Utilities.base64Encode(blob.getBytes())
  const bodyObj = {
    message: 'Put a string using GITHUB Rest API from doc_organizer',
    content: base64Str,
  }
  const headers = {
    Authorization: `Bearer ${getGitToken()}`,
    'Content-Type': 'application/vnd.github.v3+json',
  }
  var options = {
    method: 'PUT',
    headers: headers,
    payload: JSON.stringify(bodyObj),
    //"muteHttpExceptions" : true,
  }
  const URL = `${DOCUMENTS_URL}/test.txt`
  return UrlFetchApp.fetch(URL, options)
  //return URL
}

/* Google script file associated with grabbing files
from Github
Params:
  filepath: path with '/' included in beginning
 */
function getFileFromGithub(filepath) {
  var urlFetchOptions = {
  "method": "GET",
  "headers": {
    "Accept": "application/vnd.github.raw",
    "X-GitHub-Api-Version": "2022-11-28",
    "Authorization": `Bearer ${getGitToken()}`
  },
  "muteHttpExceptions": false
  }
  const url = DOCUMENTS_URL + filepath
  Logger.log('url ' + url)
  const gitResponse = UrlFetchApp.fetch(url, urlFetchOptions)
  return gitResponse
}

/* Google script file associated with grabbing files
from Github */
function getReadme() {
  Logger.log('git token,' + getGitToken())
  var urlFetchOptions = {
  "method": "GET",
  "headers": {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Authorization": `Bearer ${getGitToken()}`
  },
  "muteHttpExceptions": false
  }
  url = DOCUMENTS_URL + '/readme'
  const gitResponse = UrlFetchApp.fetch(url, urlFetchOptions)
  decodedResponse = decodeResponseBase64(gitResponse)
  return decodedResponse
}


function putJson() {}
