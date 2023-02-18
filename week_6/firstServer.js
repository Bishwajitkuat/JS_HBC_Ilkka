"usee strict";

const http = require("http");

const port = 3000;
const host = "localhost"; // 127.0.0.1

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    // "Content-Type": "text/plain", // content type is only text nothing else will owrk
    "Content-Type": "text/html", // now we can response html because Content-type is text/html, we cand aslo response text/css, text/js, text/json
  });
  // response.write('some text  to send');
  response.end("<h1>Hello world!</h1>");
});

server.listen(port, host, () =>
  console.log(`Server ${host}:${port} is serving`)
);
