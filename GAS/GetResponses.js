function onSubmit(e) {
  const response = getFormResponse()
  //PutFile(response.fileId)
  //putJson(response)
  return `fileId: ${fileId}, fileName: ${file.getName()}`
}

function getFormResponse() {
  let form = FormApp.getActiveForm()
  let allResponses = form.getResponses()
  let latestResponse = allResponses[allResponses.length - 1]
  let response = latestResponse.getItemResponses()
  Logger.log(response)
  let responseDict = {}
  for (var i = 0; i < response.length; i++) {
    let question = response[i].getItem().getTitle()
    let answer = response[i].getResponse()
    responseDict[question] = answer
  }
  Logger.log(`response Dict ${JSON.stringify(responseDict)}`)
  let fileId = responseDict['Submit Document'][0]
  return responseDict
}
