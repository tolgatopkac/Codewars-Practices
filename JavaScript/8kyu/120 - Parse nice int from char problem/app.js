/* Ask a small girl - "How old are you?". She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only. */

function getAge(inputString) {
  switch (inputString) {
    case "0 year old":
      return 0;
      break;
    case "1 year old":
      return 1;
      break;
    case "2 years old":
      return 2;
      break;
    case "3 years old":
      return 3;
      break;
    case "4 years old":
      return 4;
      break;
    case "5 years old":
      return 5;
      break;
    case "6 years old":
      return 6;
      break;
    case "7 years old":
      return 7;
      break;
    case "8 years old":
      return 8;
      break;
    case "9 years old":
      return 9;
      break;
  }
}

// alternative

function getAge(inputString) {
  return parseInt(inputString);
}
