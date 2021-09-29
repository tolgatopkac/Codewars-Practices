/* This time we learn about two useful methods of Number objects: toString() and toLocaleString(). the basic usage of the two methods is to convert a number into a string. look at this:
 */

var num = 111;
var a = num.toString(),
  b = num.toLocaleString(),
  c = num + "";
console.log([a, b, c]); //put them to an array, we can see the quotes
//output: [ '111', '111', '111' ]

/* We can see, if you just want to translate a number into a string representation, in the general case the results obtained in these ways is the same. I love to use the last one, cause I'm lazy ;-)


But these two methods have other uses as well.

When used toLocaleString() converted a number to a string. the results obtained are in the order of the local numeric format(I don't have this experience. it is always the same as toString() in my here).

And toString() of Number object has a more special usage: According to the base output different strings. */

/* radix is optional parameter. if ignored it, the output will be the default decimal. If not, like this:
 */

function colorOf(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  if (r.length < 2) {
    r = "0" + r;
  }
  if (g.length < 2) {
    g = "0" + g;
  }
  if (b.length < 2) {
    b = "0" + b;
  }

  return "#" + r + g + b;
}
