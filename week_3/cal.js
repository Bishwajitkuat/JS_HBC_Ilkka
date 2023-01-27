"use strict";

const allowedOps = "+-x/";

if (process.argv.length !== 5) {
  console.log("Not enough data");
} else {
  let [, , num1, op, num2] = process.argv;
  if (!allowedOps.includes(op)) {
    console.log("Wrong operand! use +, -, x or /");
  } else {
    num1 = +num1;
    num2 = +num2;
    let result = 0;
    if (op === "+") result = num1 + num2;
    else if (op === "-") result = num1 - num2;
    else if (op === "x") result = num1 * num2;
    else if (op === "/") result = num1 / num2;
    console.log(`${num1} ${op} ${num2} = ${result}`);
  }
}
