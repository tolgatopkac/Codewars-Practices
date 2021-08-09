// Write function that checks if a given string (case insensitive) is a palindrome.

// Solution - 1
function isPalindrome(x) {
  x = x.toLowerCase();
  return x === x.split("").reverse().join("");
}

// Solution - 2
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
};
