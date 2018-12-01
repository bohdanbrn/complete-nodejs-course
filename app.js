const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

console.log(_.isString(true));
console.log(_.isString("Text"));

let testArr = [1, "Text", 1, 2, 3, 1, 2, 5, 6, 7];
let filteredArr = _.uniq(testArr);

console.log(filteredArr);

// console.log('Result: ', notes.sumNumb(9, -2));
