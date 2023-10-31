import { faker } from "@faker-js/faker";
import chalk from "chalk";
import inquirer from "inquirer";
class Customer {
    Fname;
    Lname;
    age;
    MobNum;
    gender;
    AccountNo;
    constructor(Fname, Lname, age, MobNum, gender, AccountNo) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
        this.MobNum = MobNum;
        this.gender = gender;
        this.AccountNo = AccountNo;
    }
}
class Bank {
    customers = [];
    accounts = [];
    addCustomer(customer) {
        this.customers.push(customer);
    }
    addAccountNum(num) {
        this.accounts.push(num);
    }
    transaction(accobj) {
        let NewAccount = this.accounts.filter(acc => acc.accountNo !== accobj.accountNo);
        this.accounts = [...NewAccount, accobj];
    }
}
let myBank = new Bank();
for (let i = 1; i <= 3; i++) {
    let number = parseInt(faker.phone.number());
    let FName = faker.person.firstName("male");
    let LName = faker.person.lastName("male");
    let cus = new Customer(FName, LName, 15 + i, number, "male", 1900 * i);
    myBank.addCustomer(cus);
    myBank.addAccountNum({ accountNo: cus.AccountNo, balance: 40000 * i });
}
async function BankServices(bank) {
    let services = await inquirer.prompt({
        name: "Services",
        type: "list",
        message: "Please select the service you want to avail",
        choices: ["Cash WithDraw", "View Balance", "Cash Deposit"],
    });
    if (services.Services == "Cash WithDraw") {
        let res = await inquirer.prompt({
            name: "Num",
            type: "input",
            message: "Please Enter Your Account Number",
            validate: (input) => {
                if (isNaN(input)) {
                    return `Please Enter Your Account ${chalk.red.bold.visible("Number")}`;
                }
                else {
                    return true;
                }
            }
        });
        let account = myBank.accounts.find((account) => account.accountNo == res.Num);
        if (!account) {
            console.log(chalk.red.overline.bold(" Invalid Account Number"));
        }
        if (account) {
            let ans = await inquirer.prompt({
                name: "Answer",
                type: "number",
                message: "Please Enter Money You want to With Draw",
            });
            let newBalance = account.balance - ans.Answer;
            bank.transaction({ accountNo: account.accountNo, balance: newBalance });
            console.log(newBalance);
        }
    }
    if (services.Services == "Cash Deposit") {
        let res = await inquirer.prompt({
            name: "Num",
            type: "input",
            message: "Please Enter Your Account Number",
            validate: (input) => {
                if (isNaN(input)) {
                    return `Please Enter Your Account ${chalk.red.bold.visible("Number")}`;
                }
                else {
                    return true;
                }
            }
        });
        let account = myBank.accounts.find((account) => account.accountNo == res.Num);
        if (!account) {
            console.log(chalk.red.overline.bold(" Invalid Account Number"));
        }
        if (account) {
            let ans = await inquirer.prompt({
                name: "Answer",
                type: "number",
                message: "Please Enter Money You want to Deposit",
            });
            let newBalance = account.balance + ans.Answer;
            bank.transaction({ accountNo: account.accountNo, balance: newBalance });
            console.log(newBalance);
        }
    }
    if (services.Services == "View Balance") {
        let res = await inquirer.prompt({
            name: "Num",
            type: "input",
            message: "Please Enter Your Account Number",
            validate: (input) => {
                if (isNaN(input)) {
                    return `Please Enter Your Account ${chalk.red.bold.visible("Number")}`;
                }
                else {
                    return true;
                }
            },
        });
        let account = myBank.accounts.find((account) => account.accountNo == res.Num);
        if (!account) {
            console.log(chalk.red.overline.bold(" Invalid Account Number"));
        }
        if (account) {
            let name = myBank.customers.find((name) => name.AccountNo == account?.accountNo);
            console.log(` Dear ${chalk.green.bold(name?.Fname)} ${chalk.green.bold(name?.Lname)}
                    Your account balance is ${chalk.blueBright.bold("$", account.balance)}`);
        }
    }
}
BankServices(myBank);
