require("dotenv").config();
const programArguments = require("./getArguments");
const assertValidity = require("./assertValidity");

(async () => {
  const numbers = await assertValidity(
    programArguments.first,
    programArguments.seccond
  );
  console.log(numbers);
})();
