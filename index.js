var recipes = new Object({ breakfast: 'oatmeal', cookies: 'chocolate' })
function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
function deleteFromObjectbyKey(recipes, breakfast){
  var newObj = recipes.assign({}, obj);
  delete newObj.breakfast
  return newObj
}
