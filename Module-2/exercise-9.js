'Use strict';

function even(array) {
  let arr = [];
  for (let arrays of array) {
    if (arrays % 2 == 0) {
      arr.push(arrays);
    }
  }
  return arr;
}

const me = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`original array: ${me}`);
console.log(`Even array ${even(me)}`);

