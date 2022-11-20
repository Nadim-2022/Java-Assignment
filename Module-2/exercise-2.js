'Use strict';
const userInput = prompt('Enter the number of participants:')
const names = []
const target = document.querySelector('#target2');
for (let i = 0; i<userInput; i++) {
  let nameInput = prompt('Enter the name:');
  names.push(nameInput);
}
for( let name of names){
  target.innerHTML += `<ol>${name}</ol>`;
}
/*
for (let i = 0; i < names.length; i++){
  target.innerHTML += `<ol>${names[i]}</ol>`;
}
*/