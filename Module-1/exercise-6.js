'use strict';
const answer = confirm('Should I calculate the square root?');
if (answer == true) {
  let number = prompt('Enter the number:');
  if (number < 0) {
    document.querySelector(
        '#target6').innerHTML = 'The square root of a negative number is not defined.';
  } else {
    let root = Math.sqrt(number);
    document.querySelector('#target6').innerHTML = root;
  }

} else {
  document.querySelector('#target6').innerHTML = 'The square root is not calculated.';
}