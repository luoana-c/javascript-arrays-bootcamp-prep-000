var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
  
function addElementToBeginningOfArray(array, element) {
  newArray = [element, ...array];
  return newArray;
}




function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element);
  return array;
}




function addElementToEndOfArray(array, element) {
  newArray = array.push(element);
  return newArray;
}
function destructivelyAddElementToEndOfArray(array, element) {
  array = array.push(element);
  return array;
}

