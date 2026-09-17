//importing from math.util.js and taking cli inputs from user and running via node cmd

import { add, subtract, multiply, div } from './utils/math.util.js';

const args = process.argv.slice(2);
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

switch (operation) {
  case 'add':
    console.log(`Result: ${add(num1, num2)}`);
    break;
  case 'subtract':
    console.log(`Result: ${subtract(num1, num2)}`);
    break;
  case 'multiply':
    console.log(`Result: ${multiply(num1, num2)}`);
    break;
  case 'divide':
    console.log(`Result: ${div(num1, num2)}`);
    break;
  default:
    console.log('Invalid operation. Please use add, subtract, multiply, or divide.');
}
