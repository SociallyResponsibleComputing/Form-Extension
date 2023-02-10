function OnFormSubmit(e) {
  const responseMap = createResponseMap()
  let [file1, file2] = getFiles(responseMap)
  responseMap.filename = putFile(file1)
  updateJsonFile(responseMap)
  responseMap.filename = putFile(file2)
  updateJsonFile(responseMap)
  return responseMap
}
