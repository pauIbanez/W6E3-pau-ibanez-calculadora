const debug = require("debug")("calculator:results");
const chalk = require("chalk");

const printResults = (results) => {
  debug(chalk.bold.green("Results:"));
  Object.keys(results).forEach((key) => {
    debug(chalk.yellow(`${key}: ${results[key]}`));
  });
};

module.exports = printResults;
