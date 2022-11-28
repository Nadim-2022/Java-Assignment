/*
fetch('https://api.tvmaze.com/search/shows?q=girls')
  .then((response) => response.json())
  .then((data) => console.log(data));

 */

const api_url = 'https://api.tvmaze.com/search/shows?q=girls'
async function getIss(){
  const response = await fetch(api_url)
  const data = await response.json();
  for ( const da of data){
    document.querySelector('p').innerHTML = data[da]
  }
}
getIss()