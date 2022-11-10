// Notes

// ----------------------------------------------------------------
// SPLIT
// ----------------------------------------------------------------
let str = "My name is John";
let words = str.split(" ");
console.log(words);

// Output  : [ 'My', 'name', 'is', 'John' ]

let name = "My name is John";
let words1 = str.split(" ", 3);
console.log("words1:", words1);
let words2 = str.split(" ", 5);
console.log("words2:", words2);

let words3 = str.split("");
console.log(words3);

let newStr = "My".concat("name", "is", "John");
console.log(newStr);

// ---------------------------------

let exampleStr = "My name is John";
let newWords = str.split(" ");
console.log("use split():", newWords);
//use split(): [ 'My', 'name', 'is', 'John' ]
let s = words.join(" ");
console.log("use join():", s);

console.log("use split() and join():", str.split(" ").join(" "));
