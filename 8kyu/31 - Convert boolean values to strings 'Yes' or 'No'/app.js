// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// with falsy
function boolToWord(bool) {
  if (
    bool === false ||
    bool === 0 ||
    bool === "" ||
    bool === undefined ||
    bool === null ||
    bool === NaN
  ) {
    return "No";
  } else {
    return "Yes";
  }
}

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}
