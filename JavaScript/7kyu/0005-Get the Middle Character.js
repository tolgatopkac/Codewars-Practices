// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// ----------------------------------------------------------------
function getMiddle(s) {
  let arr = s.split("");
  if (arr.length % 2 === 0) {
    let arr2 = `${arr[arr.length / 2 - 1]}${arr[arr.length / 2]}`;
    return arr2;
  } else {
    return `${arr[Math.trunc(s.length / 2)]}`;
  }
}

// ----------------------------------------------------------------

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
