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
  return array.unshift(item);
}