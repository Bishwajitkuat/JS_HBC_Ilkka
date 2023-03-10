"use strict";
const fs = require("fs"); // fs => file system
const path = require("path");
const jsonPath = path.join(__dirname, "books.json");

async function readStorage(jsonPath) {
  try {
    const data = await fs.promises.readFile(jsonPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function getBooksOfPerson(firstname, lastname) {
  const library = await readStorage(jsonPath);
  return new Promise((resolve, reject) => {
    for (const person of library) {
      if (person.firstname === firstname && person.lastname === lastname) {
        resolve(person.books);
      }
    }
    resolve([]);
  });
}

async function getTheNamesOfBooks(firstname, lastname) {
  const library = await readStorage(jsonPath);
  return new Promise((resolve, reject) => {
    const found = [];
    for (const person of library) {
      if (person.firstname === firstname && person.lastname === lastname) {
        for (const book of person.books) {
          found.push(book.name);
        }
        resolve(found);
      }
    }
    resolve(found);
  });
}

async function getTheTotals(firstname, lastname) {
  const library = await readStorage(jsonPath);
  return new Promise((resolve, reject) => {
    for (const person of library) {
      if (person.firstname === firstname && person.lastname === lastname) {
        let totals = {
          ok: true,
          totalPrice: 0,
          totalPages: 0,
        };
        for (const book of person.books) {
          totals.totalPrice += book.price;
          totals.totalPages += book.pages;
        }
        resolve(totals);
      }
    }
    resolve({
      ok: false,
      totalPrice: 0,
      totalPages: 0,
    });
  });
}

async function getTheOwnerOfBook(bookName) {
  const library = await readStorage(jsonPath);
  return new Promise((resolve, reject) => {
    const found = [];
    for (const person of library) {
      for (const book of person.books) {
        if (book.name === bookName) {
          found.push(`${person.firstname} ${person.lastname}`);
        }
      }
    }
    resolve(found);
  });
}

async function getAllBooks(substringInName) {
  const library = await readStorage(jsonPath);
  return new Promise((resolve, reject) => {
    const found = [];
    for (const person of library) {
      for (const book of person.books) {
        if (book.name.includes(substringInName)) {
          found.push({
            firstname: person.firstname,
            lastname: person.lastname,
            book: book,
          });
        }
      }
    }
    resolve(found);
  });
}

module.exports = {
  getBooksOfPerson,
  getTheNamesOfBooks,
  getTheTotals,
  getTheOwnerOfBook,
  getAllBooks,
};
