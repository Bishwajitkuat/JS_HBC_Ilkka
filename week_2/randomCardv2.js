"use strict";

const suite = Math.floor(Math.random() * 4);
const rank = Math.floor(Math.random() * 13) + 1; // 1<=rank <= 13

let suiteSymbol;

switch (suite) {
  case 0:
    suiteSymbol = "\u2665";
    break;
  case 1:
    suiteSymbol = "\u2666";
    break;
  case 2:
    suiteSymbol = "\u2660";
    break;
  case 3:
    suiteSymbol = "\u2663";
}

console.log(`${suiteSymbol} ${rank}`);
