#! usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to cli number guessing game ");
  
const rendomNumber = Math.floor(Math.random()* 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter Your Number(number limit from 1 to 5):",
    },
]);

if(answer.userGuessedNumber ===rendomNumber){
    console.log("congragulation ! you guess a correct number.");

}
else{
    console.log("sorry ! you guess a wrong number.");
}