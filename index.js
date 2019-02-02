var recipes = {}
var newRecipes = Object.assign({},recipes)
function updateObjectWithKeyAndValue(object,key,value)  {
  return Object.assign({prop: 1, prop2: 2}, Object[key]=value)
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value)  {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object,key)  {
   let newObject = Object.assign({},object)
  delete newObject[key]
  return 
}
function destructivelyDeleteFromObjectByKey(object,key)  {
  return delete object.key
}
