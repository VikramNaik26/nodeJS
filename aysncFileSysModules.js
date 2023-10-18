const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) throw err;
  //   if(err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log(data);
  const first = data;
  readFile("./content/second.txt", "utf-8", (err, data) => {
    if (err) throw err;
    const second = data;

    writeFile(
      "./content/resultAsync.txt",
      `\nHere is a the result: ${first} and ${second}`,
      { flag: "a" },
      //   (err, data) => {
      //     if (err) throw err;
      //     console.log(data);
      //   }
      (err) => {
        console.log("Succesfully Written ");
      }
    );
  });
});
