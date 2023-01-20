"use strict";

// if else statements

const [, , suite = "?"] = process.argv;

let suiteSymbol = "?";

if (suite === "hearts") {
  suiteSymbol = "\u2665";
} else if (suite === "diamons") {
  suiteSymbol = "\u2666";
} else if (suite === "spades") {
  suiteSymbol = "\u2660";
} else if (suite === "clubs") {
  suiteSymbol = "\u2663";
}

console.log(`Suite symbol is ${suiteSymbol}`);
