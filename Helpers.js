function printObj(obj) {
  for (const key in obj) {
    Logger.info(key + ': ' + obj[key])
  }
}

function getGitToken() {
  PropertiesService.getScriptProperties().setProperty('gh_access_token', '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');
  return PropertiesService.getUserProperties().getProperty('gh_access_token');
}

function decodeResponseBase64(response) {
  const resStr = response.getContentText()
  const resObj = JSON.parse(resStr)
  const content64 = resObj.content
  const byteContent = Utilities.base64Decode(content64, Utilities.Charset.UTF_8)
  return Utilities.newBlob(byteContent).getDataAsString();
}

function decodeBase64(targetStr) {
  const byteContent = Utilities.base64Decode(targetStr, Utilities.Charset.UTF_8)
  return Utilities.newBlob(byteContent).getDataAsString();
}