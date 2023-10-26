#!/usr/bin/env node

import inquirer from "inquirer";
(async function startLoop() {
  do {
    await getSentence();
    var again = await inquirer.prompt([
      {
        type: "list",
        name: "loop",
        choices: ["Yes", "No"],
        message: " Do you want to continue",
      },
    ]);
  } while (again.loop == "Yes");
})();

async function getSentence() {
  const Answer: {
    sentence: string;
  } = await inquirer.prompt([
    {
      type: "input",
      name: "sentence",
      message: "Please write your sentence of you wanna count the words",
    },
  ]);
  console.log(
    ` Word count in your sentence is ${wordCount(Answer.sentence.trim())}`
  );
}

function wordCount(sent: string): number {
  if (sent.length > 0) {
    const words = sent.split(" ");
    console.log(words);
    return words.length;
  } else {
    return 0;
  }
}
