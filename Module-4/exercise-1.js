'use strict';

/*
fetch('https://api.tvmaze.com/search/shows?q=girls')
  .then((response) => response.json())
  .then((data) => console.log(data));

 */
/*
const api_url = 'https://api.tvmaze.com/search/shows?q=girls'
async function getIss(){
  const response = await fetch(api_url)
  const data = await response.json();
  console.log(data)

}
getIss()


 */
fetch('https://api.tvmaze.com/search/shows?q=girls').
    then(response => response.json()).
    then(data => showinfo(data));
const p = document.getElementById('target1');

function showinfo(data) {
  console.log(data);
  document.getElementById('target').innerHTML = data[0]['show']['name'];
  const ab = document.createElement('a');
  p.appendChild(ab);
  const attr = document.createAttribute('href');
  attr.value = data[0]['show']['url'];
  document.querySelector('a').setAttributeNode(attr);
  const bal = document.createAttribute('target')
  bal.value = '_blank'
  document.querySelector('a').setAttributeNode(bal)
  document.querySelector('a').innerHTML = data[0]['show']['url'];
  const img = document.createElement('img');
  img.src = data[0]['show']['image']['medium'];
  img.alt = 'This is a image'
  document.getElementById('target2').appendChild(img)
  document.getElementById('target3').innerHTML = data[0]['show']['summary'];
}


