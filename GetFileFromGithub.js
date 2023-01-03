/* Google script file associated with grabbing files
from Github */
function getFileFromGithub(filepath) {
  Logger.log('git token,' + getGitToken())
  var urlFetchOptions = {
  "method": "GET",
  "headers": {
    "Accept": "application/vnd.github.raw",
    "X-GitHub-Api-Version": "2022-11-28",
    "Authorization": `Bearer ${getGitToken()}`
  },
  "muteHttpExceptions": false
  }
  const url = SFSU_DOCUMENT + '/contents' + filepath
  Logger.log('url ' + url)
  const gitResponse = UrlFetchApp.fetch(url, urlFetchOptions)
  Logger.log(gitResponse)
}

function GetFileFromGithub() {
  getFileFromGithub('/README.md')
}

function GetReadme() {
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
  url = SFSU_DOCUMENT + '/readme'
  const gitResponse = UrlFetchApp.fetch(url, urlFetchOptions)
  decodedResponse = decodeResponseBase64(gitResponse)
  return decodedResponse
}

