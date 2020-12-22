let num1 = prompt("Please provide a number.");
let num2 = prompt("Please provide a number.");

let result = num1 / num2;
console.log(result);

let num3 = prompt("Please provide a number.");

if (num3 % 3 == 0 && num3 % 5 == 0) {
    console.log("FizzBuzz");
} else if (num3 % 3 == 0) {
    console.log("Fizz");
} else if (num3 % 5 == 0) {
    console.log("Buzz");
}
const newNum = Math.floor(Math.random() * 10) + 1;
const guess = prompt("Guess a number between 1 and 10");
if (newNum === guess) {
    console.log("Correct!");
} else {
    console.log("Incorrect.");
}