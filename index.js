const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    data = fs.readFile("./index.html", (err, html) => {
      if (err) {
        console.error(err);
      }
      res.write(html);
    });
  } else if (req.url === '/about') {
    data = fs.readFile("./about.html", (err, html) => {
      if (err) {
        console.error(err);
      }
      res.write(html);
    });
  } else if (req.url === "/contact-me") {
    data = fs.readFile("./contact-me.html", (err, html) => {
      if (err) {
        console.error(err);
      }
      res.write(html);
    });
  } else {
    data = fs.readFile("./404.html", (err, html) => {
      if (err) {
        console.error(err);
      }
      res.write(html);
    });
  }
});

server.listen(PORT);
