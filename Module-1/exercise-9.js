'use strict';
let num = parseInt(prompt('Enter a integer number: '));
let isPrime = false;
if (num > 1) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = true;
      break;
    }
  }
}
if (isPrime == false) {
  document.querySelector('#target9').innerHTML = `${num} is a prime number`;
} else {
  document.querySelector('#target9').innerHTML = `${num} is not a prime number`;
}