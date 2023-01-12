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
