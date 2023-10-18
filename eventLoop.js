// recomended blog post nodeJs Event loop -> node.dev

// starting operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

// blocking code
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
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
        // blocking code
        // this will crash the server
      }
    }
    res.end("here is our short history");
  } else {
    res.end("404 Error");
  }
  //   response(`<h1>Oops!</h1><p>we can't seem to find your result`);
});

server.listen(5000);
