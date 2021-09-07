/* Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:
5, 10, 2  -->  17

*/

// func declaration
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// arrow func

goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;

//   func expression
const goals = function (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
};
