// GLOBAL - NO WINDOW!!

// __dirname = path to the current directory
// __filename = name of the current file
// require = function to use modules
// modules = info about current modules
// process = info about env where the program bieng executed

const secret = "SUPER SECRET";
const john = "john";
const harry = "harry";

const sayHi = (name) => {
  console.log(`Hello ${name}`);
};

module.exports = { john, harry, sayHi };
