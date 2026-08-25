const http = require("http");
const port = process.env.PORT || 8080;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from an EVO-governed deploy (Phase 11)!\n");
  })
  .listen(port, () => console.log("listening on " + port));
