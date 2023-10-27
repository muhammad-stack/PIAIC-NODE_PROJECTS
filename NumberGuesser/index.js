#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let generatedNumber = Math.round(Math.random() * 10);
for (let i = 0; i < 3; i++) {
    const answers = await inquirer.prompt([
        {
            name: "Userguess",
            type: "number",
            message: chalk.redBright("Enter your guess"),
            validate: (Userguess) => {
                if (isNaN(Userguess)) {
                    return "Please Enter a Number";
                }
                else if (Userguess > 10) {
                    return "Please Enter a number below the range of 10";
                }
                else {
                    return true;
                }
            }
        },
    ]);
    let { Userguess } = answers;
    if (Userguess === generatedNumber) {
        console.log(chalk.blue("HURRAY!!! What a great guess"));
        break;
    }
    else {
        console.log(chalk.bgBlackBright("Try Again"));
    }
}
