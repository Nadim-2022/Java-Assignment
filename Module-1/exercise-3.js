'use strict';
let x = parseInt(prompt('Enter integer number 1'));
let y = parseInt(prompt('Enter integer number 2'));
let z = parseInt(prompt('Enter integer number 3'));
let sum = x + y + z;
let mult = x * y * z;
let avg = sum / 3;
document.querySelector('#target3').innerHTML = `Sum = ${sum}\nProduct = ${mult}\nAvarage = ${avg}` ;