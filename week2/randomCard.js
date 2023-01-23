"use strict";

const suite = Math.floor(Math.random() * 4);
const rank = Math.floor(Math.random() * 13) + 1;

let suiteSymbol;

if (suite === 0) suiteSymbol = "\u2665"; //hearts
else if (suite === 1) suiteSymbol = "\u2666"; // diamonds
else if (suite === 2) suiteSymbol = "\u2660"; // spadees
else suiteSymbol = "\u2663"; // clubs

console.log(`${suiteSymbol} ${rank}`);
