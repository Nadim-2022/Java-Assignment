'Use strict';
function creatList(name){
    let li = document.createElement('li');
    li.innerText = name;
    return li;
}
const listItem = document.querySelector('#target');
listItem.appendChild(creatList('First Item'))
listItem.appendChild(creatList('Second Item'))
listItem.appendChild(creatList('Third Item'))

document.getElementsByTagName('li')[1].classList.add('my-item')