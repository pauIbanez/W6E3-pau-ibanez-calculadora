const { Command } = require("commander");

const program = new Command();

program.option("-a, --first <number>");
program.option("-b, --seccond <number>");
program.parse();

module.exports = program.opts();
