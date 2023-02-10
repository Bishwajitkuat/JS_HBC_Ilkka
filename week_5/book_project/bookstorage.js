"use strict";
const library = require("./books.json");

function getBooksOfPerson(firstname, lastname) {
  for (const person of library) {
    if (person.firstname === firstname && person.lastname === lastname) {
      return person.books;
    }
  }
  return [];
}

function getTheNamesOfBooks(firstname, lastname) {
  let found_book = [];
  for (const person of library) {
    if (person.firstname === firstname && person.lastname === lastname) {
      for (const book of person.books) {
        found_book.push(book.name);
      }
    }
  }
  return found_book;
}

function getTheTotal(firstname, lastname) {
  let ok = false;
  let totalPrice = 0;
  let totalPages = 0;
  for (const person of library) {
    if (person.firstname === firstname && person.lastname === lastname) {
      ok = true;
      for (const book of person.books) {
        totalPrice += book.price;
        totalPages += book.pages;
      }
    }
  }
  return {
    ok: ok,
    totalPrice: totalPrice,
    totalPages: totalPages,
  };
}

function getTheOwnerOfBook(bookName) {
  let authors = [];
  for (const person of library) {
    for (const book of person.books) {
      if (book.name === bookName) {
        const author = `${person.firstname} ${person.lastname}`;
        authors.push(author);
      }
    }
  }
  return authors;
}

function getAllBooks(substringInName) {
  let found_book_author = [];
  for (const person of library) {
    for (const book of person.books) {
      if (book.name === substringInName) {
        found_book_author.push({
          firstname: person.firstname,
          lastname: person.lastname,
          book: book,
        });
      }
    }
  }
  return found_book_author;
}

module.exports = {
  getBooksOfPerson,
  getTheNamesOfBooks,
  getTheTotal,
  getTheOwnerOfBook,
  getAllBooks,
};
