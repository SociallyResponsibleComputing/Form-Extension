function printObj(obj) {
  for (const key in obj) {
    Logger.info(key + ': ' + obj[key])
  }
}

/* Parameters
  response: the whole fetch response
*/
function decodeResponseBase64(response) {
  const resStr = response.getContentText()
  const content64 = JSON.parse(resStr).content
  const byteContent = Utilities.base64Decode(content64, Utilities.Charset.UTF_8)
  return Utilities.newBlob(byteContent).getDataAsString()
}

/* Parameters
  base64String: The base64 string to decode
*/
function decodeBase64(base64String) {
  const byteContent = Utilities.base64Decode(
    base64String,
    Utilities.Charset.UTF_8,
  )
  return Utilities.newBlob(byteContent).getDataAsString()
}

function getIdFromUrl(url) {
  return url.match(/[-\w]{25,}/)
}

function downloadByUrl(url) {
  if (!url) {
    Logger.log('No url provided')
    return
  }

  let fileId = getIdFromUrl(url)
  Logger.log(`fileId: ${fileId}`)
  let file = undefined
  try {
    file = DriveApp.getFileById(fileId)
  } catch (e) {
    Logger.log(e)
    Logger.log('File does not exist inside downloadByUrl')
    return
  }

  Logger.log('putting url file')
  putFile(file)
}
