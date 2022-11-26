'use strict';
const button = document.getElementById('start');
const option = document.getElementById('operation');
const kuta = document.querySelector('#result');
button.addEventListener('click', options)


function options() {
    let x = parseInt(document.getElementById("num1").value);
    let y = parseInt(document.getElementById("num2").value);
    if (option.value === 'add'){
        let result = x + y;
       kuta.innerHTML = result;
    }
    if (option.value === 'sub'){
        let result = x - y;
        kuta.innerHTML = result;
    }
    if (option.value === 'multi'){
        let result = x * y;
        kuta.innerHTML = result;
    }
    if (option.value === 'div'){
        let result = x / y;
       kuta.innerHTML = result;
    }
}