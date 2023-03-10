"use strict";

const sloOP = new Promise((resolve, reject) => {
  setTimeout(() => resolve("slow bet steady"), 2000);
});

sloOP.then((result) => console.log("I am 1st", result));

console.log("it will execute before the sloOP()");

sloOP.then((result) => console.log("I am 2nd:", result));
