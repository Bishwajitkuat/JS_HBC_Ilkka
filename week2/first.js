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
