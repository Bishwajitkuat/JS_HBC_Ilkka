"use strict";

const person = require("./person.json");
console.log(person);

// keys in an array

console.log(Object.keys(person));

// values in an array

console.log(Object.values(person));

// key values in an array
console.log("key and values: ", Object.entries(person));

// accessing each key value pair by key

for (const key of Object.keys(person)) {
  console.log(`${key} = ${person[key]}`);
}
console.log("###############");
// accessing each key value pair by entires

for (const [key, value] of Object.entries(person)) {
  console.log(`${key} = ${person[key]}`);
}
