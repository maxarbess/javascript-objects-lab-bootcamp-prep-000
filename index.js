var recipes = {}
var newRecipes = Object.assign({},obj)
function updateObjectWithKeyAndValue(object,key,value)  {
  return Object.assign({prop: 1, prop2: 2}, Object[key]=value)
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value)  {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object,key)  {
  return delete newRecipes.key
}
function destructivelyDeleteFromObjectByKey(object,key)  {
  delete object.key
  return object
}
