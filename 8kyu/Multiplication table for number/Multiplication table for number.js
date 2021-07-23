// Description
/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below: 

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
 */

// My Solution
let number = 5;
for (let i = 0; i <= 10; i++) {
  result = i * number;
  console.log(`${i} * ${number} = ${result}`);
}

// My Solution - 2
const multiTable = function (number) {
  for (let i = 0; i <= 10; i++) {
    result = i * number;
    console.log(`${i} * ${number} = ${result}`);
  }
};

// Alternative - Short Solution

function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
    .join("\n");
}

// Alternative Solution from Solutions

const multiTable = (number) => {
  let table = "";

  for (let i = 0; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }
};
