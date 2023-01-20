"use strict";

console.log("Hello world!");

const a = 10;
console.log(a);
//a=20 ; error

let b = 20;
console.log(b);
b = 50;
let c = a + b;
console.log("c=", c); //c is number
console.log("c=" + c); // c is str
console.log("sum= " + a + b);
console.log("sum= " + (a + b));
console.log(`Result of ${a}+${b} = ${c}`);
console.log(`Sum of ${a} and ${b} is ${a + b}`);
for (let i = 0; i < 10; i++) console.log(`${i}`);

console.log("escape charecter 'double quote will stay' escape charecter");

// unicode charecter
console.log("\u2663");
const hearts = "\u2665";
console.log(hearts);
const spade = "\u2660";
console.log(spade);
console.log("\u2700");
console.log(String.fromCodePoint(0x1f977)); // method for showing hexadecimal charecters.

const funny = String.fromCodePoint(0x1f34d, 0x1f1ed, 0x1f977);
console.log(funny);

// if statements
