"use strict";
const {
  getBooksOfPerson,
  getTheNamesOfBooks,
  getTheTotal,
  getTheOwnerOfBook,
  getAllBooks,
} = require("./bookstorage");
// console.log(getBooksOfPerson("Leila", "Hokki"));
// console.log(getBooksOfPerson("Matt", "River"));
// // nobody
// console.log(getBooksOfPerson("nobody", "nobody"));

// console.log(getTheNamesOfBooks("Matt", "River"));

// person exists
console.log(getTheTotal("Matt", "River"));

// person do not exist
console.log(getTheTotal("nobody", "nobody"));

// book name as argument author list retuns
console.log(getTheOwnerOfBook("Programming ABC"));

// book does not exist
console.log("######### book does not exist ########");
console.log(getTheOwnerOfBook("nobook"));

// all book with "ABC" name
console.log("######### all book with ABC name ########");
console.log(getAllBooks("ABC"));

// all book with "Programming JavaScript" name
console.log("######## all book with Programming JavaScript name");
console.log(getAllBooks("rog"));
// book does not exist
console.log("######## book does not exist ############");
console.log(getAllBooks("nobook"));
