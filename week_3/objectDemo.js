"use strict";
const person = {
  first_name: "Bishwajit",
  last_name: "Das",
  age: 34,
};

console.log(person.age);
console.log(person.first_name);
console.log(person.last_name);

const card = {
  suite: "spades",
  suiteSymbol: "\u2660",
  color: "black",
  rank: 13,
  rankSymbol: "K",
};

const card1 = {
  suite: "spades",
  suiteSymbol: "\u2660",
  color: "black",
  rank: 6,
  rankSymbol: "6",
};
console.log(card.suiteSymbol);
console.log(card.rank < card1.rank);
