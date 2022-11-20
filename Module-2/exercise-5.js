'Use strict';
const number = [];
const uniq = true;
const target = document.querySelector('#target5')
while(uniq){
  let userInput = parseInt(prompt('Enter the number: '));
  if (number.includes(userInput)){
    target.innerHTML = 'The number already exist !';
    break
  }
  else{
    number.push(userInput);
  }
}
console.log(number.sort(function(a,b){return a-b}))