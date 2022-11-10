/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
 */

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

function fakeBin(x) {
  let y = "";
  for (let i = 0; i < x.length; i++) {
    if (Number(str[i]) >= 5) {
      y += "1";
    } else {
      y += "0";
    }
  }
  return y;
}
