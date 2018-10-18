var recipes = new Object({ breakfast: 'oatmeal', cookies: 'chocolate' })
function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
function deleteFromObjectbyKey(recipes, cookies) {
  var newObj = Object.assign({}, recipes);
  delete newObj.cookies;
  return newObj
}
