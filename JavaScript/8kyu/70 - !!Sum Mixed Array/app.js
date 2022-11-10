/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number. */

function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return sum;
}

// Alternative

function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}

const sumMix = (x) => x.reduce((a, b) => +b + a, 0);
