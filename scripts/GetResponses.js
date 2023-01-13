function getFiles(responseMap) {
  try {
    // TODO: Handle multiple files
    let file = DriveApp.getFileById(responseMap['File Submission'][0])
    return file
  } catch (e) {
    Logger.log(e)
    Logger.log('Someone Probably did not submit any documents')
  }
}

function createResponseMap() {
  let form = FormApp.getActiveForm()
  let allResponses = form.getResponses()
  let latestResponse = allResponses[allResponses.length - 1]
  let response = latestResponse.getItemResponses()
  let responseMap = {}
  for (var i = 0; i < response.length; i++) {
    let question = response[i].getItem().getTitle()
    let answer = response[i].getResponse()
    responseMap[question] = answer
  }
  try {
    responseMap.filename = getFiles(responseMap).getName()
  } catch (e) {
    Logger.log(e)
  }
  responseMap.date = Date.now()
  return responseMap
}
