"use strict";
const SPADES = {
  suiteName: "spades",
  suiteSymbol: "\u2660",
  color: "black",
};

const CLUBS = {
  suiteName: "clubs",
  suiteSymbol: "\u2663",
  color: "black",
};

const HEARTS = {
  suiteName: "hearts",
  suiteSymbol: "\u2665",
  color: "red",
};

const DIAMONDS = {
  suiteName: "diamonds",
  suiteSymbol: "\u2666",
  color: "red",
};
const symb = [, "A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
function createCard(suite, rank) {
  let rankSymbol = symb[rank];
  // we can use array instead of switch statement

  // switch (rank) {
  //   case 13:
  //     rankSymbol = "K";
  //     break;
  //   case 12:
  //     rankSymbol = "Q";
  //     break;
  //   case 11:
  //     rankSymbol = "J";
  //     break;
  //   case 1:
  //     rankSymbol = "A";
  //     break;
  //   default:
  //     rankSymbol = `${rank}`;
  // }
  // will return an object
  return {
    suite,
    rank,
    rankSymbol,
    // return suite: suite,
    // rank : rank value
    // rankSymbol: rankSymbol value
  };
}

console.log(createCard(SPADES, 13));

// changing value of key of an object
SPADES.color = "white";

console.log(createCard(SPADES, 13));

const deck = [];

for (let rank = 1; rank < 14; rank++) {
  deck.push(createCard(SPADES, rank));
  deck.push(createCard(CLUBS, rank));
  deck.push(createCard(HEARTS, rank));
  deck.push(createCard(DIAMONDS, rank));
}

// console.log(deck.suiteSymbol, deck.rank);

// suffling cards

for (let i = 0; i < deck.length; i++) {
  const indA = Math.floor(Math.random() * deck.length);
  const indB = Math.floor(Math.random() * deck.length);
  [deck[indA], deck[indB]] = [deck[indB], deck[indA]];
}
// const x = deck.forEach((item) => {
//   console.log(item.rankSymbol, item.rank);
// });

// console.log(deck);

// tow cards

const johnCard = deck.pop();
const mikeCard = deck.pop();
// console.log("John card:", johnCard);
// console.log("Mike card: ", mikeCard);
const jRank = johnCard.rank;
const mRank = mikeCard.rank;

console.log(
  "John card: ",
  johnCard.suite.suiteSymbol,
  johnCard.rankSymbol,
  johnCard.rank
);
console.log(
  "Mike card: ",
  mikeCard.suite.suiteSymbol,
  mikeCard.rankSymbol,
  mikeCard.rank
);

if (jRank !== mRank) {
  jRank > mRank ? console.log("John win!") : console.log("Mike win!");
} else console.log("It's a tie!");
