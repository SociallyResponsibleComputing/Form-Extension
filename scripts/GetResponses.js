function getFiles(responseMap) {
  try {
    let InstructorFile =
      responseMap['Instructor Guide File Submission'] &&
      DriveApp.getFileById(responseMap['Instructor Guide File Submission'][0])
    let assignmentFile =
      responseMap['Assignment File Submission'] &&
      DriveApp.getFileById(responseMap['Assignment File Submission'][0])
    Logger.log([InstructorFile, assignmentFile])
    return [InstructorFile, assignmentFile]
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
  responseMap.date = Date.now()
  return responseMap
}
