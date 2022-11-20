'use strict';
const dicenumber = prompt('Number of dice to roll: ');
let dice = 0;
let i = 0;
while (i < dicenumber) {
  let diceroll = Math.floor((Math.random() * 6) + 1);
  dice = dice + diceroll;
  i++;
}
document.querySelector('#target7').innerHTML = `Sum of the dice roll: ${dice}`;