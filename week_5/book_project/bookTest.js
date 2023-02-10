"use strict";
const library = require("./books.json");
console.log("############inde 0 ###########");
for (const book of library[0].books) {
  console.log("Book Name: ", book.name);
  console.log("Book Price: ", book.price);
}

console.log("############ index 1 ###########");

for (const book of library[1].books) {
  console.log("Book Name: ", book.name);
  console.log("Book Price: ", book.price);
}

console.log("############## all person #############");

for (const person of library) {
  console.log("Book owner: ", person.firstname, " ", person.lastname);
  console.log("Books: ");
  for (const book of person.books) {
    console.log("\t" + book.name);
  }
}

console.log("############ book owner with each book #########");
for (const person of library) {
  for (const book of person.books) {
    console.log(person.firstname, " ", person.lastname + ": " + book.name);
  }
}

console.log("############ another version #########");
for (const person of library) {
  const name = person.firstname + " " + person.lastname + ": ";
  for (const book of person.books) {
    console.log(name, book.name);
  }
}

console.log("############ total num of pages per person #########");
for (const person of library) {
  const name = person.firstname + " " + person.lastname + ": ";
  let page_num = 0;
  for (const book of person.books) {
    page_num += book.pages;
  }
  console.log(`${name} total number of pages: ${page_num}`);
}

console.log("############ total num of pages and prices per person #########");
for (const person of library) {
  let page_num = 0;
  let total_price = 0;
  for (const book of person.books) {
    page_num += book.pages;
    total_price += book.price;
  }
  console.log(
    `${person.firstname} ${person.lastname} \nTotal number of pages: ${page_num} \nTotal price: ${total_price}€\n`
  );
}

console.log("############ total page and price count #########");
let page_num = 0;
let total_price = 0;
for (const person of library) {
  for (const book of person.books) {
    page_num += book.pages;
    total_price += book.price;
  }
}
console.log(
  `Total number of pages: ${page_num} \nTotal price: ${total_price}€\nCost per page: ${
    total_price / page_num
  }€`
);

// func for total price of books in the library

function totalPriceOfTheLibrary() {
  let sum = 0;
  for (const person of library) {
    for (const book of person.books) {
      sum += book.price;
    }
  }
  return sum;
}
console.log("Value of books in library: ", totalPriceOfTheLibrary());
