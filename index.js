var recipes = {}
function updateObjectWithKeyAndValue(object,key,value)  {
  return Object.assign({prop: 1, prop2: 2}, Object[key]=value)
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value)  {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object,key)  {
  return delete object.key
}
function destructivelyDeleteFromObjectByKey(object,key)  {
  
}
