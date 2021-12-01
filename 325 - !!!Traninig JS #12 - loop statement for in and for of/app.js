/* 
In lesson #11, we learned that for loop can traverse the array. If we want to traverse an object, we can use the variant of the for: for..in, it can traverse all the keys of the object. an example:

 */

// OBJECTS
function showObjectKeys(obj) {
  for (var key in obj) {
    console.log(key);
  }
}

function showObjectValues(obj) {
  for (var key in obj) {
    console.log(obj[key]);
  }
}

var ob = { item: "This", item2: "is", item3: "an", item4: "example" };

console.log("keys of ob:");
showObjectKeys(ob);
console.log("values of ob:");
showObjectValues(ob);

// ARRAYS

function showArrayIndex(arr) {
  for (var index in arr) {
    console.log(index);
  }
}

function showArrayEl(arr) {
  for (var el in arr) {
    console.log(arr[el]);
  }
}

var arr = ["one", "two", "three"];

console.log("index of array:");
showArrayIndex(arr);
console.log("elemans of array:");
showArrayEl(arr);

// TASK
/* Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

Return the five after works finished.

You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-) */

function giveMeFive(obj) {
  var arr = [];
  for (var key in obj) {
    if (key.length == 5) arr.push(key);
    if (obj[key].length == 5) arr.push(obj[key]);
  }
  return arr;
}
