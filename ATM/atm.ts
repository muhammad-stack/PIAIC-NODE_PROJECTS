#! /usr/bin/env node

import inquirer from "inquirer";

interface ansType {
  userId: string;
  userPin: number;
  accountType: string;
  transType: string;
  amount: number;
}

type User = {
  userId: string;
  userPin: number;
};

let user: User[] = [
  {
    userId: "muhammad",
    userPin: 6779,
  },
  {
    userId: "Umer",
    userPin: 5955,
  },
  {
    userId: "rafique",
    userPin: 9090,
  },
];

let balance: number = Math.floor(Math.random() * 1000000);
let answer1: ansType;
let answer2: ansType;

startLoop();

async function startLoop() {
  await getUserId();
  do {
    await getTransaction();
    var again = await inquirer.prompt([
      {
        type: "list",
        name: "restart",
        message: " Do you want to continue again ?",
        choices: ["Yes", "No"],
      },
    ]);
  } while (again.restart == "Yes");
}

async function getUserId() {
  answer1 = await inquirer.prompt([
    {
      type: "input",
      name: "userId",
      message: "Please enter your UserId :",
    },
    {
      type: "number",
      name: "userPin",
      message: "Please enter your user Pin",
    },
  ]);
  await checkUserId(answer1.userId, answer1.userPin);
}

async function checkUserId(userId: string, userPin: number) {
  let condition = false;
  for (let i = 0; i < user.length; i++) {
    if (userId === user[i].userId && userPin === user[i].userPin) {
      condition = true;
      break;
    }
  }
  if (!condition) {
    console.log(" Invalid UserId or UserPin . Try Again");
    await getUserId();
  }
}

async function getTransaction() {
  answer2 = await inquirer.prompt([
    {
      type: "list",
      name: "Account type",
      choices: ["Current", "Saving"],
    },
    {
      type: "list",
      name: "transType",
      message: "Please select your transaction type",
      choices: ["Fast Cash", "With Draw"],
    },
    {
      type: "list",
      name: "amount",
      choices: [1000, 5000, 10000, 15000, 20000, 25000],
      message: `Please select your Amount( Current balance is ${balance} :`,
      when(answer2) {
        return answer2.transType == "Fast Cash";
      },
    },
    {
      type: "number",
      name: "amount",
      message: `Please select your Amount( Current balance is ${balance} ):`,
      when(answer2) {
        return answer2.transType == "With Draw";
      },
    },
  ]);

  if (answer1.userId && answer1.userPin) {
    if (answer2.amount <= balance) {
      balance -= answer2.amount;
      console.log(` Your current balance is : ${balance}`);
    } else {
      console.log(`" Insufficient Balance" ${balance}`);
    }
  }
}
