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
    const h6 = document.createElement('h6')
    h6.innerHTML = 'Genres: ';
    const span = document.createElement('span')
    const genres = data[danda]['show']['genres']
    const separetor = genres.join(' | ')
    span.textContent = separetor;

    h6.appendChild(span)
    article.appendChild(h6)


  }

}
