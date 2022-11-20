'Use strict';
let dice;
const target = document.querySelector('#target6');

function rollDice() {
  return dice = Math.floor(Math.random() * 6) + 1;
}

const nums = [];
while (dice !== 6) {
  let d = rollDice();
  nums.push(d);

}
for (let num of nums) {
  target.innerHTML += `<ul>${num}</ul>`;
}