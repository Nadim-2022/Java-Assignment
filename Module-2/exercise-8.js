'Use strict';

const target = document.querySelector('#target8');
let result = ``;

function concat(array) {
  for (let arrays of array) {
    target.innerHTML += arrays;
  }
}

const arraybal = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
concat(arraybal);

