// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function combat(health, damage) {
  if (health >= damage) {
    return health - damage;
  } else if (health < 0) {
    return "Health cannot go below 0";
  } else {
    return 0;
  }
}
