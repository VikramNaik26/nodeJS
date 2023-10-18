const { readFileSync, writeFileSync } = require("fs");

// import { readFileSync } from 'node:fs';

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");
console.log(first, second);

writeFileSync(
  "./content/resultSync.txt",
  `Here is a the result: ${first} and ${second}`
);

// const firstRead = readFile("./content/first.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

writeFileSync(
  "./content/resultSync.txt",
  `\nHere is a the result: ${first} and ${second}`,
  { flag: "a" }
);
