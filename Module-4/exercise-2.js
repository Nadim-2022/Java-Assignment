'use strict';
fetch('https://api.tvmaze.com/search/shows?q=girls').
    then(response => response.json()).
    then(data => showinfo(data));
const target = document.querySelector('#pictures');
const body = document.querySelector('body')
const section = document.createElement('section');
body.appendChild(section)
const article = document.createElement('article');
section.appendChild(article)

function showinfo(data) {
  for (const danda in data) {
    console.log(data[danda]);
    const h1 = document.createElement('h1')
    h1.innerHTML =data[danda]['show']['name'];
    article.appendChild(h1)
    const ab = document.createElement('a');
    article.appendChild(ab);
    const attr = document.createAttribute('href');
    attr.value = data[danda]['show']['url'];
    const atr  = document.querySelector('a')
    atr.setAttributeNode(attr);
    /*const bal = document.createAttribute('target');
    bal.value = '_blank';
    document.querySelector('a').setAttributeNode(bal);
    document.querySelector('a').innerHTML = data[danda]['show']['url'];
    /*const img = document.createElement('img');
    img.src = data[0]['show']['image']['medium'];
    img.alt = 'This is a image';
    document.getElementById('target2').appendChild(img);
    document.getElementById('target3').innerHTML = data[0]['show']['summary'];

     */
  }

}
