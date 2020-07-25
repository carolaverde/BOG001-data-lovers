//import { example } from './data.js';	
//console.log( example );

import data from './data/rickandmorty/rickandmorty.js';
const datos = data.results
console.log(datos);





//se va a pintar los personajes en el html de personajes

const pruebaTarjeta = document.getElementById('pruebaTarjeta');
const charactersZone = document.getElementById('charactersZone');
console.log(charactersZone)
//charactersZone.innerHTML= datos;
//ciclo for of podemos recorrer cualquier tipo de coleccion
for(const rickandmorty of datos)
{ 
  console.log(rickandmorty.name);
  //const nombreP = document.createElement('h1');
  //nombreP.textContent = rickandmorty.name;
  //nombreP.appendChild(charactersZone);
  

  console.log(rickandmorty.image);
  pruebaTarjeta.insertAdjacentHTML('afterend',
  `<div class ='individualPersonajes'>
    <img class = 'photoSola' src = "${rickandmorty.image}">
    <p class = 'name'>${rickandmorty.name}</p>
  </div>`);//template string
  
 };

 

