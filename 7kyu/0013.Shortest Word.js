/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

const findShort = (s) => {
  const arr = s.split(" ");
  arr.sort((a, b) => a.length - b.length);
  return arr[0].length || 0;
};
