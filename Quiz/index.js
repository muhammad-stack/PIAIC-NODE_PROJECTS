#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const apiLink = "https://opentdb.com/api.php?amount=7&category=19&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res.results;
};
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    //  For User Name
    let name = await inquirer.prompt([{
            name: "WholeName",
            type: "input",
            message: "Please Enter Your Name"
        }]);
    for (let i = 0; i <= 6; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            type: "list",
            name: 'quiz',
            message: data[i].question,
            choices: answers.map((val) => val)
        });
        if (ans.quiz === data[i].correct_answer) {
            ++score;
            console.log(chalk.blue.bold("Correct"));
        }
        else {
            console.log(` Correct Answer is ${data[i].correct_answer}`);
        }
    }
    console.log(`Dear ${chalk.bold.blueBright(name.WholeName)}, Your score is ${chalk.bold.red.underline(score)} out of ${chalk.green.bold.underline('7')} `);
};
startQuiz();
