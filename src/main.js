//import { example } from './data.js';	
//console.log( example );

import data from './data/rickandmorty/rickandmorty.js';
const datos = Object.values(data.results);

console.log(datos)




for(const rickandmorty of (datos))
{ console.log(rickandmorty.name)
  console.log (rickandmorty.splash)};

const nombres = datos.map(dato => dato.name); //map va a dato por dato y ejecuta una funcion//
console.log(nombres);


//filtrar
const species = datos.filter(dato => dato.species); //map va a dato por dato y ejecuta una funcion//
console.log(species);


// se debe pintar en la pagina de personajes
//console.log(window.location.personajes.html)
//if  (window.location.pathname === "/src/Personajes.html") { 

/*function popUp(e) {

  const indicator = e.target.dataset.personajes;

  

  let information = [];


  information += `  <img src="${personajes[indicator].image} "><p> Name: ${personajes[indicator].name}
      </p> <p> Gender: ${personajes[indicator].gender} </p> <p> Species: ${personajes[indicator].species} </p>
      <p> Origin: ${personajes[indicator].origin.name} </p> `


  let characterCards = document.getElementById("pruebaTarjeta");
  characterCards.innerHTML = information;

};


let names = [];
for (let i = 0; i < personajes.length; i++) {
  names += `<button class= "personajes1"  id="${personajes[i].id}-${i}"> <img class= "image" data-personajes="${i}" src="${personajes[i].image} ">
  <br> <p data-personajes="${i}" class= "nombres" > Name: ${personajes[i].name} </p>  </button>`
};

let  characterButtons = document.getElementById("charactersZone");



characterButtons.innerHTML = names;

for (let i = 0; i < personajes.length; i++) {
  const boton = document.getElementById(`${personajes[i].id}-${i}`);
  boton.addEventListener("click", popUp);

};
// esta } es cierre de if de la ventana
};

//PARA PAGINA MUNDOS 

if  (window.location.pathname === "/src/Mundo.html") {

// Para conseguir el nombre de los mundos 


let world = [];
for (let  i = 0; i < personajes.length; i++) {
// saber si en world ya existe ese nombre del planeta . poner en el HTML 
let  nombreplaneta = `<button> <p> World name: ${personajes[i].origin.name} </p>`

 if ( !world.includes(nombreplaneta)) {world.push(nombreplaneta)} 
 

};
 
 console.log(world)

 let  worldButtons = document.getElementById("worldZone");
worldButtons.innerHTML = world;
// esta } es cierre de if de la ventana
}; 

//PARA PAGINA DE TEMPORADAS

if  (window.location.pathname === "/src/Temporada.html") {

 // Para conseguir los Capitulos 

let chapters = [];

for (let  i = 0; i < personajes.length; i++) {
// saber si en world ya existe ese nombre del capitulos 
let nombrecapitulos = `<button> <p> World name: ${personajes[i].episode}</p>`

 if ( !chapters.includes(nombrecapitulos)) {chapters.push(nombrecapitulos)} 

};

let  seasonButtons = document.getElementById("seasonZone");
seasonButtons.innerHTML = chapters;
 
 console.log(chapters)
 // esta } es cierre de if de la ventana
}; */