
function checkFileExists(filepath) {
  var urlFetchOptions = {
  "method": "GET",
  "headers": {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Authorization": `Bearer ${getGitToken()}`
  },
  "muteHttpExceptions": false
  }
  const url = `${DOCUMENTS_URL}/${filepath}`
  let gitResponse
  try {
    gitResponse = UrlFetchApp.fetch(url, urlFetchOptions)
  } catch (e) {
    Logger.log(`Found not taken filename: ${url}`)
    return false
  }
  if (gitResponse.getResponseCode() == '200') {
    return true
  }
  return false
}

/* Parameters:
  file: the file object not the ID
*/
function putFile(file) {
  const root = file.getName()
  let filename = root
  let counter = 1
  while(checkFileExists(filename)) {
    filename = `${root}(${counter})`
    counter++
  }
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
  const URL = `${DOCUMENTS_URL}/${filename}`
  try {
    UrlFetchApp.fetch(URL, options)
  } catch (err) {
    Logger.log(err)
    Logger.log('Error! File probably exists already')
  }
  return filename
}

/* Parameters:
  inputStr: The string to add to file

  if file does not exist, it will create the file,
  otherwise it will append to the file
*/
function appendStringToFile(path, inputStr) {
  let sha = null
  let content = null
  try {
    let currentData = getFileFromGithub(path)
    sha = currentData.sha
    content = decodeBase64(currentData.content)
    content = content.slice(0, -1);
  } catch (e) {
    Logger.log(e)
    Logger.log("File does not exist, will create a new file")
  }

  let blob = Utilities.newBlob(`${content ?? '[\n'}${content ? ',' : ''}${inputStr}\n]`)
  const base64Str = Utilities.base64Encode(blob.getBytes())
  const bodyObj = {
    message: 'Put a string using GITHUB Rest API from doc_organizer',
    content: base64Str,
    sha: sha
  }
  const headers = {
    Authorization: `Bearer ${getGitToken()}`,
    'Content-Type': 'application/vnd.github.v3+json',
  }
  var options = {
    method: 'PUT',
    headers: headers,
    payload: JSON.stringify(bodyObj),
    "muteHttpExceptions" : false,
  }
  const URL = `${DOCUMENTS_URL}/${path}`
  let response = UrlFetchApp.fetch(URL, options)
  return JSON.parse(response.getContentText())
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
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Authorization": `Bearer ${getGitToken()}`
  },
  "muteHttpExceptions": false
  }
  const url = `${DOCUMENTS_URL}/${filepath}`
  const gitResponse = UrlFetchApp.fetch(url, urlFetchOptions)
  return JSON.parse(gitResponse.getContentText())
}

function getSha (path) {
  return getFileFromGithub(path).sha
}

/* Google script file associated with grabbing files
from Github */
function getReadme() {
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


function updateJsonFile(map) {
  appendStringToFile('Document_Metadata.json', JSON.stringify(map))
}
