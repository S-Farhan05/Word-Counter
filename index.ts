#!/usr/bin/env node
import inquirer from 'inquirer'
let answer = await inquirer.prompt({
    name : "Sentence",
    type : "input",
    message :"Enter a sentence to find how many words it contains :"
})

const wordCount = answer.Sentence.trim().split(" ");
console.log(`Your sentence contain ${wordCount.length} words`);

