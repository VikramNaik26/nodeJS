const { createReadStream } = require("fs");

const stream = createReadStream("./content/resultPromise.txt", "utf8");

// default - size of a chunk will be 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream("./content/chunk.txt", {highWaterMark: 90000})
// const stream = createReadStream("./content/chunk.txt", {encoding: 'utf8})

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
