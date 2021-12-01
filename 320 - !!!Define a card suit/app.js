/* You get any card as an argument. Your task is to return a suit of this card.

Our deck (is preloaded): */

// includes
function defineSuit(card) {
  if (card.includes("♣")) return "clubs";
  if (card.includes("♦")) return "spades";
  if (card.includes("♥")) return "hearts";
  if (card.includes("♠")) return "spades";
}

// charAt
function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };

  return s[card.charAt(card.length - 1)];
}
