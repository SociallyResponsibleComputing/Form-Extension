function onSubmit(e) {
  const response = getFormResponse()
  putFile(response)
  putJson()
  return response
}

function getFormResponse() {
  let form = FormApp.getActiveForm()
  let allResponses = form.getResponses()
  let latestResponse = allResponses[allResponses.length - 1]
  let response = latestResponse.getItemResponses()
  Logger.log(JSON.stringify(response))
  let responseDict = {}
  for (var i = 0; i < response.length; i++) {
    let question = response[i].getItem().getTitle()
    let answer = response[i].getResponse()
    responseDict[question] = answer
  }
  Logger.log(`response Dict ${JSON.stringify(responseDict)}`)
  return responseDict
}
