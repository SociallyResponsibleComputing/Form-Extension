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
    let fileId = responseDict['Submit Document'][0]
    let file = DriveApp.getFileById(fileId)
    PutFile(file)
    return `fileId: ${fileId}, fileName: ${file.getName()}`
}