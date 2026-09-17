// src/app.js
import { add, subtract, multiply, div } from './utils/math.util.js';

const [, , operation, arg1, arg2] = process.argv;
const num1 = parseFloat(arg1);
const num2 = parseFloat(arg2);

const ops = { add, subtract, multiply, div };
const selectedOp = ops[operation?.toLowerCase()];

if (selectedOp && !isNaN(num1) && !isNaN(num2)) {
  console.log(`Result: ${selectedOp(num1, num2)}`);
} else {
  console.log('Usage: node src/app.js <add|sub|mul|div> <num1> <num2>');
}