'use strict';



fetch('https://api.tvmaze.com/search/shows?q=girls').
    then(response => response.json()).
    then(data => showinfo(data)).
    catch(error => console.log(error));

const main = document.querySelector('main');
const section = document.createElement('section');
main.appendChild(section);
const article = document.createElement('article');
section.appendChild(article);



function showinfo(data) {
  for (const danda in data) {
    console.log(data[danda]);
    const h1 = document.createElement('h1');
    h1.innerHTML = data[danda]['show']['name'];
    article.appendChild(h1);
    const h6 = document.createElement('h6');
    h6.innerHTML = 'Genres: ';
    const span = document.createElement('span');
    const genres = data[danda]['show']['genres'];
    const separetor = genres.join(' | ');
    span.textContent = separetor;
    h6.appendChild(span);
    article.appendChild(h6);
    const ab = document.createElement('a');
    article.appendChild(ab);
    const attr = document.createAttribute('href');
    attr.value = data[danda]['show']['url'];
    ab.setAttributeNode(attr);
    const bal = document.createAttribute('target');
    bal.value = '_blank';
    ab.setAttributeNode(bal);
    ab.innerHTML = data[danda]['show']['url'];
    const img = document.createElement('img');
    img.src = data[danda]['show']['image']['medium'];
    img.alt = 'This is a image';
    img.addEventListener('error', function(event) {
      event.target.src = 'https://via.placeholder.com/100x200?text=text+here';
      event.onerror = null;
    });
    article.appendChild(img);
    const p = document.createElement('p');
    p.innerHTML = data[danda]['show']['summary'];
    article.appendChild(p);

  }

}


