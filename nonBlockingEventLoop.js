const { readFile } = require("fs");
// const { readFile } = require("fs").promises;
const path = require("path");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

getText("./content/first.txt")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
