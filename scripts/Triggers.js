function OnFormSubmit(e) {
  const responseMap = createResponseMap()
  putFile(getFiles(responseMap))
  updateJsonFile(responseMap)
  return responseMap
}
