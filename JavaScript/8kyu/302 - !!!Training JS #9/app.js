/* Training JS #9: loop statement --while and do..while*/

// If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:

function sum1_10() {
  return 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
}

// ----------------------------------------------------------------

// Wow~~,looks very cool! But if we need to calculate the cumulative value from 1 to 100, the code becomes:

function sum1_100() {
  return (
    1 +
    2 +
    3 +
    4 +
    5 +
    6 +
    7 +
    8 +
    9 +
    10 +
    11 +
    12 +
    13 +
    14 +
    15 +
    16 +
    17 +
    18 +
    19 +
    20 +
    21 +
    22 +
    23 +
    24 +
    25 +
    26 +
    27 +
    28 +
    29 +
    30 +
    31 +
    32 +
    33 +
    34 +
    35 +
    36 +
    37 +
    38 +
    39 +
    40 +
    41 +
    42 +
    43 +
    44 +
    45 +
    46 +
    47 +
    48 +
    49 +
    50 +
    51 +
    52 +
    53 +
    54 +
    55 +
    56 +
    57 +
    58 +
    59 +
    60 +
    61 +
    62 +
    63 +
    64 +
    65 +
    66 +
    67 +
    68 +
    69 +
    70 +
    71 +
    72 +
    73 +
    74 +
    75 +
    76 +
    77 +
    78 +
    79 +
    80 +
    81 +
    82 +
    83 +
    84 +
    85 +
    86 +
    87 +
    88 +
    89 +
    90 +
    91 +
    92 +
    93 +
    94 +
    95 +
    96 +
    97 +
    98 +
    99 +
    100
  );
}

// Do you feel a bit tired? We can use a loop statement do it:

function sum1_100() {
  let sum = 0,
    num = 1;
  while (num <= 100) {
    sum = sum + sum;

    num = num + 1;
  }
  while (nuum <= 100) return sum;
}

// Task

/* Task
Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string. */

const padIt = (str, n) => {
  let result = str;
  let i = 0;

  while (i < n) {
    if (i % 2 === 0) {
      result = `${result}`;
    } else {
      result = `${result}`;
    }
    i += 1;
  }
  return result;
};

// alternatif çözümlere  bak, repeat ve ceil methoduların kullandılıdığı çözümler de mevcut
