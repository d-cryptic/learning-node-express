// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (for macOS)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// package-lock.json - file that stores info about dependencies
// it is created automatically by npm
// It stores info about dependencies that we use and also the dependencies that our main dependencies use
// Suppose any dependency that our dependencies use have a bug or changes or any problem arises, we can use this file to fix it
// package.json stores dependencies that we use, package-lock.json stores dependencies that our dependencies use

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
