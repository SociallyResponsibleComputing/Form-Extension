function OnFormSubmit(e) {
  const responseMap = createResponseMap()
  let [file1, file2] = getFiles(responseMap)
  file1 && (responseMap.filename = putFile(file1))
  updateJsonFile(responseMap)
  file2 && (responseMap.filename = putFile(file2))
  updateJsonFile(responseMap)

  // try download by URL
  let urlKey = 'URL of Instructor Guide (in case of google doc)'
  downloadByUrl(responseMap[urlKey])
  return responseMap
}
