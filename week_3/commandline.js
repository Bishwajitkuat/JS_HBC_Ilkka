"use strict";
//console.log(process.argv);

const args = process.argv;

for (let i = 0; i < args.length; i++) {
  console.log(`args[${i}] = ${args[i]}`);
}

const [, , ...numberstrings] = process.argv;
console.log(numberstrings);
let sum = 0;
for (let item of numberstrings) {
  console.log(typeof +item); //Number(num) === +num
  sum += +item;
}
console.log(sum);
