// Description

/* Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level. */

// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

// My Solution - 1
function getRealFloor(n) {
  if (n <= 13 && n >= 1) {
    return (n = n - 1);
  } else if (n <= 0) {
    return n;
  } else {
    return (n = n - 2);
  }
}

console.log(getRealFloor(12));

// Alternative Solution
// 1

function getRealFloor2(n) {
  if (n === 0) return n;
  if (n < 0) return n;
  if (n < 13) return n - 1;
  if (n >= 13) return n - 2;
}
console.log(getRealFloor2(12));

// 2 - Short Solution
const getRealFloor3 = (n) => (n > 13 ? n - 2 : n > 0 ? n - 1 : n);
console.log(getRealFloor3(12));

// 3
function getRealFloor4(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}

console.log(getRealFloor4(12));
