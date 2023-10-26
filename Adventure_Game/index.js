#! usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreasebySkeleton() {
        let fuel = this.fuel - 50;
        this.fuel = fuel;
    }
    fuelDecreasebyNobita() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelDecreasebyAngry() {
        let fuel = this.fuel - 75;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecreasebyPlayer1() {
        let fuel = this.fuel - 50;
        this.fuel = fuel;
    }
    fuelDecreasebyPlayer2() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelDecreasebyPlayer3() {
        let fuel = this.fuel - 75;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([{
        type: "input",
        name: "Name",
        message: "Please Enter Your Name"
    }]);
let opponent = await inquirer.prompt([{
        name: "selection",
        type: "list",
        message: " Please Select Your Opponent",
        choices: ["Skeleton", "Angry Man", "Nobita"]
    }]);
let player1 = new Player(player.Name);
let opponent1 = new Opponent(opponent.selection);
do {
    if (opponent1.name === "Skeleton") {
        let ask = await inquirer.prompt({
            name: "Mode",
            type: "list",
            message: " Please Select Your Mode",
            choices: [" Attack ", " Run For Your Life  ", " Medication "]
        });
        if (ask.Mode === " Medication ") {
            player1.fuelIncrease();
            console.log(chalk.bold.underline.whiteBright(` Fuel increased to : ${player1.fuel}`));
        }
        if (ask.Mode === " Run For Your Life  ") {
            console.log(chalk.red.bold.italic(` You loose ! Better Luck Next Time `));
            process.exit();
        }
        if (ask.Mode === " Attack ") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDecreasebySkeleton();
                console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(` You loose ! Better Luck Next Time `));
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.fuelDecreasebyPlayer1();
                console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.bold.italic.green(" You Wins !"));
                    process.exit();
                }
            }
        }
    }
    if (opponent1.name === "Angry Man") {
        let ask = await inquirer.prompt({
            name: "Mode",
            type: "list",
            message: " Please Select Your Mode",
            choices: [" Attack ", " Run For Your Life  ", " Medication "]
        });
        if (ask.Mode === " Medication ") {
            player1.fuelIncrease();
            console.log(chalk.bold.underline.whiteBright(` Fuel increased to : ${player1.fuel}`));
        }
        if (ask.Mode === " Run For Your Life  ") {
            console.log(chalk.red.bold.italic(` You loose ! Better Luck Next Time `));
            process.exit();
        }
        if (ask.Mode === " Attack ") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDecreasebyAngry();
                console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(` You loose ! Better Luck Next Time `));
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.fuelDecreasebyPlayer2();
                console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.bold.italic.green(" You Wins !"));
                    process.exit();
                }
            }
        }
    }
    if (opponent1.name === "Nobita") {
        let ask = await inquirer.prompt({
            name: "Mode",
            type: "list",
            message: " Please Select Your Mode",
            choices: [" Attack ", " Run For Your Life  ", " Medication "]
        });
        if (ask.Mode === " Medication ") {
            player1.fuelIncrease();
            console.log(chalk.bold.underline.whiteBright(` Fuel increased to : ${player1.fuel}`));
        }
        if (ask.Mode === " Run For Your Life  ") {
            console.log(chalk.red.bold.italic(` You loose ! Better Luck Next Time `));
            process.exit();
        }
        if (ask.Mode === " Attack ") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.fuelDecreasebyNobita();
                console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if (player1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(` You loose ! Better Luck Next Time `));
                    process.exit();
                }
            }
            if (num <= 0) {
                opponent1.fuelDecreasebyPlayer3();
                console.log(chalk.bold.red(`${player1.name} fuel is ${player1.fuel}`));
                console.log(chalk.bold.red(`${opponent1.name} fuel is ${opponent1.fuel}`));
                if (opponent1.fuel <= 0) {
                    console.log(chalk.bold.italic.green(" You Wins !"));
                    process.exit();
                }
            }
        }
    }
} while (true);
