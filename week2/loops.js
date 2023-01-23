"use strict";
for (let i = 0; i < 10; i++) {
  console.log("I love you!");
}

let x = 4;

do {
  console.log("doing this once");
} while (x < 4);

let result;
for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 5; col++) {
    result += `${row}-${col} `;
  }
  result += "\n";
}

console.log(result);
