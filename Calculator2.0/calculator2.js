#! /usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./sum.js";
import { diff } from "./diff.js";
import showBanner from "node-banner";
import gradient from "gradient-string";
let answers = [
    {
        name: "num1",
        type: "number",
        message: gradient.instagram("Enter your first Number"),
        validate: (input) => {
            // VALIDATE FUNCTON
            if (isNaN(input)) {
                return " Please enter a numeric value :";
            }
            return true;
        },
    },
    {
        name: "num2",
        type: "number",
        message: gradient.instagram("Enter your second Number"),
        validate: (input) => {
            // VALIDATE FUNCTON
            if (isNaN(input)) {
                return "Please enter a numeric value";
            }
            return true;
        },
    },
    {
        name: "operation",
        type: "list",
        message: gradient.rainbow("Choose operation you want to perform"),
        choices: ["+", "-", "*", "/"],
    },
];
let answer = [
    {
        name: "again",
        type: "confirm",
        message: gradient.pastel("Do you wnat to continue again"),
    },
];
(async () => {
    await showBanner("CALCULATOR", "This calculator can perform basic maths operations", "gray", "blue");
})();
async function calculation() {
    console.log(gradient.rainbow(`      _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`));
    let condition = true;
    while (condition) {
        let { num1, num2, operation } = await inquirer.prompt(answers);
        if (operation === "+") {
            console.log(" The sum 0f two numbers are :" + sum(num1, num2));
        }
        else if (operation === "-") {
            console.log("The difference of two numbers are :" + diff(num1, num2));
        }
        else if (operation === "*") {
            console.log("The multiplication of two numbers are " + num1 * num2);
        }
        else if (operation === "/") {
            console.log("The division of two numbers are " + num1 / num2);
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
setTimeout(() => {
    calculation();
}, 500);
