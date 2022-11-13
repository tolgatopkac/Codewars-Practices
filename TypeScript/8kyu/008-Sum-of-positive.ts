/* You get an array of numbers, return the sum of all of the positives ones.

  Example[1, -4, 7, 12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

 */

/* REDUCE */
export function positiveSum(arr: number[]): number {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)
}


/* REDUCE - FILTER -  */

export function positiveSum2(arr: number[]): number {
  return arr.filter((e) => e >= 0).reduce((acc, e) => acc + e, 0)
}

