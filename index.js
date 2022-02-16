const { Command } = require("commander");
// require("debug")("calculator");

const program = new Command();

program.option("-a, --first <number>");
program.option("-b, --seccond <number>");
program.parse();
