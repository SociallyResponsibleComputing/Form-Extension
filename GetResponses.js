var POST_URL = "https://docorganizer.requestcatcher.com/test";

function onSubmit(e) {
    var form = FormApp.getActiveForm();
    var allResponses = form.getResponses();
    var latestResponse = allResponses[allResponses.length - 1];
    var response = latestResponse.getItemResponses();
    var responseDict = {};
    for (var i = 0; i < response.length; i++) {
        var question = response[i].getItem().getTitle();
        var answer = response[i].getResponse();
        responseDict[question] = answer;
    }
    Logger.log(`response Dict ${JSON.stringify(responseDict)}`)
    Logger.log(responseDict)
    let fileId = responseDict['Submit Document'][0]
    //Logger.log('Document Obj:', responseDict['Submit Document'])
    Logger.log('Document ID: ' + fileId)

    let file = DriveApp.getFileById(fileId)
    PutFile(file)
    return `fileId: ${fileId}, fileName: ${file.getName()}`
}