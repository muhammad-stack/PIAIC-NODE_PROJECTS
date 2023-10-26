#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
let generatedNumber = Math.round(Math.random() * 10);
for (let i = 0; i < 3; i++) {
  const answers = await inquirer.prompt([
    {
      name: "Userguess",
      type: "number",
      message: chalk.redBright("Enter your guess"),
    },
  ]);

  let { Userguess } = answers;
  if (Userguess === generatedNumber) {
    console.log(chalk.blue("HURRAY!!! What a great guess"));
    break;
  } else {
    console.log(chalk.bgBlackBright("Try Again"));
  }
}
