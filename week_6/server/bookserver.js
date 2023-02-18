"use strict";
const http = require("http");

const port = 3000;
const host = "localhost"; // 127.0.0.1

const {
  getBooksOfPerson,
  getTheNamesOfBooks,
  getTheTotal,
  getTheOwnerOfBook,
  getAllBooks,
} = require("./storage/bookstorage");

const server = http.createServer((req, res) => {
  const { pathname, searchParams } = new URL(
    `http://${req.headers.host}${req.url}`
  );
  const route = decodeURIComponent(pathname);

  if (route === "/books") {
    const firstname = searchParams.get("firstname");
    const lastname = searchParams.get("lastname");
    const data = getBooksOfPerson(firstname, lastname);
    sendJson(res, data);
  } else if (route === "/names") {
    const firstname = searchParams.get("firstname");
    const lastname = searchParams.get("lastname");
    const data = getTheNamesOfBooks(firstname, lastname);
    sendJson(res, data);
  } else if (route === "/totals") {
    const firstname = searchParams.get("firstname");
    const lastname = searchParams.get("lastname");
    const data = getTheTotal(firstname, lastname);
    sendJson(res, data);
  } else if (route === "/owner") {
    const name = searchParams.get("name");
    const data = getTheOwnerOfBook(name);
    sendJson(res, data);
  } else if (route === "/booksnames") {
    const value = searchParams.get("value");
    const data = getAllBooks(value);
    sendJson(res, data);
  } else {
    sendJson(res, { error: "Not ound" }, 400);
  }
});

server.listen(port, host, () =>
  console.log(`Bookserver serving at ${host}:${port}`)
);

function sendJson(res, data, status = 200) {
  const jsonData = JSON.stringify(data);

  res.writeHead(status, {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(jsonData);
}
