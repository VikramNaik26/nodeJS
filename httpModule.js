const http = require("http");

// const server = http.createServer((request, response) => {
//     //   console.log(request);
//       response.write("welcome to our home page");
//       response.end();
//     });

const server = http.createServer((req, res) => {
  //   console.log(request);
  if (req.url === "/") {
    res.end("welcome to our home page");
  } else if (req.url === "/about") {
    res.end("here is our short history");
  } else {
    res.end("404 Error");
  }
  //   response(`<h1>Oops!</h1><p>we can't seem to find your result`);
});

server.listen(5000);
