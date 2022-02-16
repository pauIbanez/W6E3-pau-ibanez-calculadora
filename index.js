require("dotenv").config();
const programArguments = require("./getArguments");
const assertValidity = require("./assertValidity");
const calculate = require("./calculator");

(async () => {
  const numbers = await assertValidity(
    programArguments.first,
    programArguments.seccond
  );

  const results = calculate(numbers.a, numbers.b);

  console.log(results);
})();
