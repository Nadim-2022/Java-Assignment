'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector('#target');

function creat(array) {
  let li = document.createElement('li');
  li.innerHTML = array;
  return li;
}

for (let name of names) {
  target.appendChild(creat(name));
}
//Or this code only.
/*
for (let name of names) {
  target.innerHTML += `<li>${name}</li>`;
}
 */