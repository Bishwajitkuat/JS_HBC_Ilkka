"use strict";
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// index
console.log(numbers[0]);
console.log(numbers[1]);
// length property
console.log("length is:", numbers.length);

// adding item in array, if index does not exist yet, js creats item in the asked index and js will add empty item before that index if necessary

numbers[10] = 123;
console.log(numbers, numbers.length);

// if we re-assign array.length, js will left out the indexs outside of the scope. if the length is highter than actual length js will add empty item to fill the places
numbers.length = 15;
console.log(numbers, numbers.length);
numbers.length = 5;
console.log(numbers, numbers.length);

// array.push(value); adds item in the end of an array

numbers.push(111);
console.log(numbers, numbers.length);

// array.pop(); takes way last item from array and return the last item

let popOut = numbers.pop();
console.log(popOut);
console.log(numbers, numbers.length);

// sum

let sum = numbers[0] + numbers[1];
console.log(sum);

// sum from for loop

let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum2 += numbers[i];
}
console.log("sum from for loop:", sum2);

// item of arry; goes each item of an array

let sum1 = 0;
for (const item of numbers) {
  sum1 += item;
}

console.log(`${numbers.join(" + ")} = ${sum1}`);

let multi = 1;
for (let item of numbers) {
  multi *= item;
}
console.log(`${numbers.join(" x ")} = ${multi}`);
