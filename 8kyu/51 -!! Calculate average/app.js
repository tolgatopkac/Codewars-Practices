/* Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

function find_average(array) {
  return array.reduce((result, current) => result + current, 0) / array.length;
}

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;
}

function find_average(array) {
  var sum = 0;
  const length = array.length;
  for (i = 0; i < length; i++) {
    sum += array[i];
  }
  return sum / length;
}
