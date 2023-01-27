"use strict";
console.log("hello");

const num = [1, 2, 3, 4, 5, 6];

// multiple variable declaration assigning value from array

const [first_item, second_item] = num;
console.log(first_item, second_item);

// ...rest; spread rest items in an array, ...rest will return an array and we can spread that again by ...rest

let [first, second, ...rest] = num;
console.log(first, second, rest);

const [, , third, , ...restitems] = num;
console.log(third, ...restitems);

// swaping index of two items
console.log("Before swap:", num);
// swaping index 1 and 3:
[num[1], num[3]] = [num[3], num[1]];
console.log("After swap:", num);
