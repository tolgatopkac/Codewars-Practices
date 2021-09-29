/* In this kata you will have to write a function that takes litres and pricePerLitre as arguments. Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the toal cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

 */

const fuelPrice = (litres, pricePerLiter) => {
  let discountCents = 0;
  if (litres >= 2) discountCents = 0.05;
  if (litres >= 4) discountCents = 0.1;
  if (litres >= 6) discountCents = 0.15;
  if (litres >= 8) discountCents = 0.2;
  if (litres >= 10) discountCents = 0.25;
  const totalPrice = litres * pricePerLiter - litres * discountCents;
  return Number(totalPrice.toFixed(2));
};

// alternative

function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i += 2) {
    // discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;
}
