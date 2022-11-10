/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty. */

const getAverage = (marks) =>
  Math.floor(marks.reduce((total, value) => total + value, 0) / marks.length);

// ----------------------------------------------------------------

let total = 0;
function getAverage2(marks) {
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  return Math.floor(total / marks.length);
}
console.log(getAverage2([2, 2, 2, 2]));
