const debug = require("debug")("assertion");
const chalk = require("chalk");
const prompt = require("prompt");

prompt.start();

const assertValidity = async (a, b) => {
  let transformedA = Number.parseInt(a, 10);
  let transformeB = Number.parseInt(b, 10);
  let numbers = { a: transformedA, b: transformeB };

  if (Number.isNaN(numbers.a) || Number.isNaN(numbers.b)) {
    if (Number.isNaN(numbers.a)) {
      debug(chalk.red("First number invalid, please input it"));
      const objResp = await prompt.get(["First Number"]);
      transformedA = objResp["First Number"];
      numbers = await assertValidity(transformedA, transformeB);
    }

    if (Number.isNaN(numbers.b)) {
      debug(chalk.red("Seccond number invalid, please input it"));
      const objResp = await prompt.get(["Seccond Number"]);
      transformeB = objResp["Seccond Number"];
      numbers = await assertValidity(transformedA, transformeB);
    }
  }

  return numbers;
};

module.exports = assertValidity;
