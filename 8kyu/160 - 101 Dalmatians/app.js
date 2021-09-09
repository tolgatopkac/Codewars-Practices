/* Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

Good luck! */

const howManyDalmatians = function (numer) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  if (numer <= 10) {
    return dogs[0];
  } else if (numer > 10 && numer <= 50) {
    return dogs[1];
  } else if (numer > 50 && numer < 101) {
    return dogs[2];
  } else if ((numer = 101)) {
    return dogs[3];
  }

  //   var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
};

// alternative

const howManyDalmatians = function (numer) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  switch (numer) {
    case numer <= 10:
      return dogs[0];
      break;
    case numer > 10 && numer <= 50:
      return dogs[1];
      break;

    case numer > 50 && numer < 100:
      return dogs[2];
      break;
    case (numer = 101):
      return dogs[3];
      break;
  }
};
