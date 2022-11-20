'use strict';
const startyear = prompt('Enter the starting year:');
const endyear = prompt('Enter the end year:');
const target = document.querySelector('#target8');

for (let year = startyear; year <= endyear; year++) {
  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    target.innerHTML += `<li>${year}</li>`;
  }
}