'Use strict';
const dogNames = [];
const target = document.querySelector('#target3');
for (let i = 0; i < 6; i++) {
  const userInput = prompt('Enter the dog name:');
  dogNames.push(userInput);
  dogNames.sort();
}
for (let dogName of dogNames) {
  target.innerHTML += `<ul>${dogName}</ul>`;
}