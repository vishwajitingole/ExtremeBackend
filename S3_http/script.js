const http = require("http");

var server = http.createServer((req, res) => {
  console.log("Hello server se!!!");

  if (req.url == "/") {
    res.end("Chal rha hai");
  } else {
    res.end("Page not found");
  }
});

server.listen(3000);
