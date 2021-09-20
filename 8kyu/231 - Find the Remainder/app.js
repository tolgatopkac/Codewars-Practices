/* Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers. */

function remainder(a, b) {
  if (a > b && b != 0) {
    return a % b;
  } else if (a < b && a != 0) {
    return b % a;
  } else if (a == 0 || b == 0) {
    return NaN;
  } else {
    return 0;
  }
}

// alternative

function remainder(a, b) {
  return a > b ? a % b : b % a;
}
