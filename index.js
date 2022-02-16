require("dotenv").config();
const programArguments = require("./getArguments");
const assertValidity = require("./assertValidity");

assertValidity(programArguments.first, programArguments.seccond);

console.log("reached");
