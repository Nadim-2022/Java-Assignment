'use strict';
const year = prompt('Enter the year:');
if (year % 100 == 0 && year % 400 == 0) {
  document.querySelector('#target5').innerHTML = 'This is a leap year';
} else if (year % 4 == 0) {
  document.querySelector('#target5').innerHTML = 'This is a leap Year';
} else {
  document.querySelector('#target5').innerHTML = 'This is not a leap year';
}