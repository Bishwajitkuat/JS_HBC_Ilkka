"use strict";
const Spades = 0;
const Clubes = 1;
const Hearts = 2;
const Diamonds = 3;

function createCard(suite, rank) {
  const suitesSymboles = ["\u2660", "\u2663", "\u2665", "\u2666"];
  return `${suitesSymboles[suite]} ${rank}`;
}

console.log(createCard(Hearts, 10));

const deck = [];

for (let rank = 1; rank < 14; rank++) {
  deck.push(createCard(Spades, rank));
  deck.push(createCard(Clubes, rank));
  deck.push(createCard(Hearts, rank));
  deck.push(createCard(Diamonds, rank));
}

console.log(deck);

// suffling cards

for (let i = 0; i < deck.length; i++) {
  const indA = Math.floor(Math.random() * deck.length);
  const indB = Math.floor(Math.random() * deck.length);
  [deck[indA], deck[indB]] = [deck[indB], deck[indA]];
}

console.log("suffle:", deck);
const johnCard = deck.pop();
const mikeCard = deck.pop();
const jRank = +johnCard.split(" ")[1];
const mRank = +mikeCard.split(" ")[1];

console.log("John rank: ", jRank);
console.log("Mike rank: ", mRank);

if (jRank !== mRank) {
  jRank > mRank ? console.log("John win!") : console.log("Mike win!");
} else console.log("It's a tie!");
