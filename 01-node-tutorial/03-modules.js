// CommonJS - every file is module by default
// Modules - encapsulated code - only share minimum

const names = require("./04-names");

// default export - no need of {} as the name is same
const sayHi = require("./05-utils");
// console.log(names);

const data = require("./06-alternative-flavor");
console.log(data);

// Function invoking while importing
require("./07-mind-grenade");

sayHi("Barun");
sayHi(names.john);
sayHi(names.peter);
