'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.querySelector('#target');

for (const student in students) {
  const li = document.createElement('option');
  li.value = students[student]['id'];
  li.innerHTML = students[student]['name'];
  target.appendChild(li);

}
