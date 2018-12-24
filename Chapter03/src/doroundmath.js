/* @flow */
"use strict";

const RM = require("./roundmath.js");
const { multR, divR } = require("./roundmath.js");

console.log(RM.addR(12.348, 4.221)); // 16.57
console.log(multR(22.9, 12.4)); // 283.96
console.log(divR(22, 7)); // 3.14

// console.log(RM.changeSign(0.07)); // error; RM.changeSign is not a function
