const debug = require("debug")("assertion");
const chalk = require("chalk");

const assertValidity = (a, b) => {
  const transformedA = Number.parseInt(a, 10);
  const transformeB = Number.parseInt(b, 10);

  if (Number.isNaN(transformedA) || Number.isNaN(transformeB)) {
    debug(chalk.red("ERROR: The passed arguments must be numbers!"));
    process.exit();
  }
};

module.exports = assertValidity;
