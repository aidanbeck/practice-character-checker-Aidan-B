const input = require('readline-sync');

let string = input.question("Please enter a string: ");
let index = input.questionInt("Please enter an index: ");

console.log(string[index]);