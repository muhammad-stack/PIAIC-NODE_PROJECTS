#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
let ans1;
let ans2;
let ans3;
(async function startloop() {
    while (loop) {
        await displayMenuItem();
    }
})();
async function displayMenuItem() {
    ans1 = await inquirer.prompt([
        {
            type: "list",
            name: "menuOpt",
            choices: ["Add ToDo Item", "Delete ToDo Item", "Exit"],
            message: "Please select menu Item",
        },
    ]);
    switch (ans1.menuOpt) {
        case "Add ToDo Item": {
            await addToDo();
            break;
        }
        case "Delete ToDo Item": {
            await deleteToDo();
            break;
        }
        default: {
            loop = false;
            console.log("Exit Program");
            break;
        }
    }
}
async function addToDo() {
    ans2 = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter What to do ?",
        },
    ]);
    todos.push(ans2.todo);
    console.log(todos);
}
async function deleteToDo() {
    if (todos.length > 0) {
        ans3 = await inquirer.prompt([
            {
                type: "list",
                name: "menuOpt",
                message: "Please select which todo you want to delete",
                choices: todos,
            },
        ]);
        let i = 0;
        do {
            if (todos[i] === ans3.menuOpt) {
                todos.splice(i, 1);
                break;
            }
            i++;
        } while (i < todos.length);
        console.log(todos);
    }
    else {
        console.log("None Item Left");
    }
}
