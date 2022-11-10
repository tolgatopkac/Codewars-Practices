/* Complete the function which converts a binary number (given as a string) to a decimal number.

 */

function bin2dec(num) {
  return num
    .split("")
    .reverse()
    .reduce(function (x, y, i) {
      return y === "1" ? x + Math.pow(2, i) : x;
    }, 0);
}

// alternative

function binToDec(bin) {
  return parseInt(bin, 2);
}
