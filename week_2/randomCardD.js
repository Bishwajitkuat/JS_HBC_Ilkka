"use strict";

const suite = Math.floor(Math.random() * 4);
const rank = Math.floor(Math.random() * 13) + 1; // 1<=rank <= 13
console.log(`${getSuiteSymbole(suite)} ${rank}`);

function getSuiteSymbole(suite) {
  switch (suite) {
    case 0:
      return "\u2665";
    case 1:
      return "\u2666";

    case 2:
      return "\u2660";
    case 3:
      return "\u2663";
  }
}
