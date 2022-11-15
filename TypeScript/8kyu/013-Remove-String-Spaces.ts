/* Simple, remove the spaces from the string, then return the resultant string.

 */


// LOOP 

function noSpace(x) {
  let newStr = '';
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== ' ') {
      newStr += x[i];
    }
  }
  return newStr;
}



// Regular Expression 
function noSpace2(x) {
  return x.replace(/ /g, '');
}


function noSpace3(x) {
  return x.replace(/\s/g, '');
}

// split - join
function noSpace4(x) {
  return x.split(" ").join("");
}


// split - filter
function noSpace5(x) {
  return x.split("").filter(i => i !== " ").join("");
}


// split - reduce
function noSpace6(x) {
  return x.split(" ").reduce((a, c) => a + c)
}