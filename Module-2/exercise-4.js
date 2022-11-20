'Use strict';
const number = [];
let userInput = parseInt(prompt('Enter the Number:'));

while(userInput !== 0){
  number.push(userInput);
  userInput = parseInt(prompt('Enter the Number:'));
}
number.sort(function(a,b){return b-a});
console.log(number);