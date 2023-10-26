#!/usr/bin/env node

import inquirer from "inquirer";

let conversion = {
  GBP: {
    PKR: 351.18,
    USD: 1.22,
    AUD: 1.89,
    EUR: 1.16,
    GBP: 1.0,
  },
  USD: {
    EUR: 0.94,
    PKR: 286.8,
    USD: 1.0,
    AUD: 1.54,
    GBP: 0.82,
  },
  PKR: {
    EUR: 0.0033,
    GBP: 0.0028,
    PKR: 1.0,
    AUD: 0.0054,
    USD: 0.0035,
  },
  AUD: {
    USD: 0.65,
    GBP: 0.53,
    PKR: 186.38,
    EUR: 0.61,
    AUD: 1.0,
  },
  EUR: {
    GBP: 0.87,
    AUD: 1.63,
    PKR: 304.35,
    USD: 1.06,
    EUR: 1.0,
  },
};

(async function startloop() {
  let again;
  do {
    await ConvertAmount();
    again = await inquirer.prompt([
      {
        name: "cont",
        type: "list",
        choices: ["Yes", "No"],
        message: " Do you want to continue again",
      },
    ]);
  } while (again.cont === "Yes");
})();

async function ConvertAmount() {
  const answer: {
    from: "EUR" | "GBP" | "AUD" | "PKR" | "USD";
    to: "EUR" | "GBP" | "AUD" | "PKR" | "USD";
    amount: number;
  } = await inquirer.prompt([
    {
      name: "from",
      type: "list",
      choices: ["EUR", "GBP", "AUD", "PKR", "USD"],
      message: "Please select currency from :",
    },
    {
      name: "to",
      type: "list",
      choices: ["EUR", "GBP", "AUD", "PKR", "USD"],
      message: " Please select currency to : ",
    },
    {
      name: "amount",
      type: "number",
      message: " Please select amount you want to convert",
    },
  ]);
  const { from, to, amount } = answer;

  if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(
      ` The converted amount of ${amount} ${from} in ${to} is ${result}`
    );
  } else {
    console.log(" Invalid Input ");
  }
}
