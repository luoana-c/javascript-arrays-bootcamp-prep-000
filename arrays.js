var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
function addElementToBeginningOfArray(array, item) {
  newArray = array.unshift(item);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, item) {
  array = array.unshift(item);
  return array;
}

function addElementToEndOfArray(array, item) {
  newArray = array.push(item);
  return newArray;
}
function destructivelyAddElementToEndOfArray(array, item) {
  array = array.push(item);
  return array;
}

addElementToBeginningOfArray([1], "foo")