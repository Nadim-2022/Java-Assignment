'Use strict';
const numArry = [];

for (let i = 0; i !== 5; i++) {
  const userInput = prompt('Enter a number:');
  numArry.push(userInput);
}
for (let i = numArry.length - 1; i >= 0; i--) {
  console.log(numArry[i]);
}
