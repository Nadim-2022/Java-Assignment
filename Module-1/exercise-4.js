'use strict';
const name = prompt('Enter your name: ');
let number = (Math.floor(Math.random() * 3) + 1); //Returns a random integer from 1 to 4
if (number == 1) {
  document.querySelector('#target4').innerHTML = (name + ' you are Gryffindor');
} else if (number == 2) {
  document.querySelector('#target4').innerHTML = (name + ' you are Slytherin');
} else if (number == 3) {
  document.querySelector('#target4').innerHTML = (name + ' you are Hufflepuff');
} else {
  document.querySelector('#target4').innerHTML = (name + ' you are Ravenclaw');
}