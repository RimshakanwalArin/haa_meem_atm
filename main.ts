#! /usr/bin/env node
 
 import inquirer from "inquirer";

let myBalance = 10000; // dollars
let myPin = 2856; // Consider using a string for PIN for consistent handling

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin number",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select an option",
      type: "list",
      choices: ["Withdraw", "Check balance"],
    },
  ]);

  if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        type: "number",
        name: "amount",
        message: "Enter the withdrawal amount",
      },
    ]);

    if (amountAns.amount <= myBalance) {
      myBalance -= amountAns.amount;
      console.log(`Withdrawal successful. Your remaining balance is: $ ${myBalance}`);
    } else {
      console.log("Insufficient funds!");
    }
  } else if (operationAns.operation === "Check balance") {
    console.log(`Your balance is: $ ${myBalance}`);
  }
} else {
  console.log("Incorrect pin number");
}
