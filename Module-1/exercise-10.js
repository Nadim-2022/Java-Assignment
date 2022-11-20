'use strict';
let num = parseInt(prompt('Number of dice to roll:'));
let sumdice = parseInt(prompt('Sum of eye numbers:'));
let probability = 0;
let count = 0;
let times = 10000;
for (let i = 0; i <= times; i++) {
  let sum = 0;
  for (let e = 1; e <= num; e++) {
    let dice = (Math.floor(Math.random() * 6) + 1);
    sum += dice;
  }
  if (sum === sumdice) {
    count += 1;
  }
}
probability = (count / times) * 100;
document.querySelector(
    '#target10').innerHTML = (`The probability of getting ${sumdice} from ${num} dice roll is ${probability.toFixed(
    2)}%`);
