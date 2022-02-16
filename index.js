require("dotenv").config();
const programArguments = require("./getArguments");
const assertValidity = require("./assertValidity");
const calculate = require("./calculator");
const printResults = require("./printResults");

(async () => {
  const numbers = await assertValidity(
    programArguments.first,
    programArguments.seccond
  );

  const results = calculate(numbers.a, numbers.b);
  printResults(results);
})();
