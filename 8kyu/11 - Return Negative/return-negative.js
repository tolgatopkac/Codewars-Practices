/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Notes:

The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. */

// Solution - 1
function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else {
    return num;
  }
}

// Solution  -2
function makeNegative(num) {
  return -Math.abs(num);
}

// Solution - 3
function makeNegative(num) {
  return num < 0 ? num : -num;
}
