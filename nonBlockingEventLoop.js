const { readFile, writeFile } = require("fs").promises;
// const { readFile } = require("fs").promises;
// const { util } = require("util");
// const readFilePromise = util.promisify(readFile);

// const path = require("path");

/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}; */

/* getText("./content/first.txt")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
 */

/* const start = async () => {
  try {
    const first = await getText("./content/first.txt");
    const second = await getText("./content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start(); */

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile("./content/resultPromise.txt", first + second);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();
