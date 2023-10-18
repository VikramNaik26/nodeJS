const path = require("path");

console.log(path.sep);
// returns the path seperator supported to os
// for windows path seperator is "/"

const filePath = path.join("./content", "subFolder", "test.txt");
console.log(filePath);

console.log(path.basename(filePath));

console.log(path.resolve(__dirname)); // returns a absolute path

const absolutePath = path.resolve(
  __dirname,
  "content",
  "subFolder",
  "test.txt"
);

console.log(absolutePath);
