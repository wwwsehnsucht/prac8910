const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("main page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("about me");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("page not found");
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
