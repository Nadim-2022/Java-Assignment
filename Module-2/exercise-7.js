'Use strict';
let dice;
const target = document.querySelector('#target7');

function rollDice(sides) {
  return dice = Math.floor(Math.random() * sides) + 1;
}
const sideNum = parseInt(prompt('Enter the number of sides:'))
const nums = [];
while (dice !== sideNum) {
  let d = rollDice(sideNum);
  nums.push(d);

}
for (let num of nums) {
  target.innerHTML += `<ul>${num}</ul>`;
}