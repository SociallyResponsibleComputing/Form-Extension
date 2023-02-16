/* Helper Functions */

/* Create UI menu for adding API keys */
function TokenUI() {
  const ui = FormApp.getUi()
  ui.createMenu('Credentials & Authentication')
    .addItem('Set Github Access Token', 'setGithubAccessToken')
    .addItem('Delete API key', 'resetKey')
    .addItem('Delete all credentials', 'deleteAll')
    .addToUi()
}

function getGitToken() {
  // Logger.log(PropertiesService.getScriptProperties().getProperty('gh_access_token'))
  // return PropertiesService.getScriptProperties().getProperty('gh_access_token')
  return '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'
}

function setGithubAccessToken() {
  const ui = FormApp.getUi()
  var scriptValue = ui.prompt('Please provide your API key.', ui.ButtonSet.OK)
  PropertiesService.getUserProperties().setProperty(
    'gh_access_token',
    scriptValue.getResponseText(),
  )
}

function resetKey() {
  PropertiesService.getUserProperties().deleteProperty('gh_access_token')
}

function deleteAll() {
  PropertiesService.getUserProperties().deleteAllProperties()
}
