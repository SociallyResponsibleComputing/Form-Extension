function OnFormSubmit(e) {
  const responseMap = createResponseMap()
  const files = getFiles(responseMap)
  putFile(files)
  putJson()
  return responseMap
}

function getFiles(response) {
  try {
    // TODO: Handle multiple files
    let file = DriveApp.getFileById(response['Submit Document'][0])
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
  return responseMap
}
