//menu hamburguesa
const enlaces = document.getElementsByClassName('enlaces')[0];
const hamburguesa = document.getElementsByClassName('hamburguesa')[0];
const menuHamburguesa = document.getElementById('hamburguesa');
let open = false;

const toggleMenu = () =>{
  enlaces.classList.toggle('enlaces2');
  enlaces.style.transition = 'transform 0.5s ease-in-out'
}

/*window.addEventListener('click', function(){
  toggleMenu();
})*/
//con este evento estamos diciendo cuando el usuario tiene abierto el menu hamburguesa
hamburguesa.addEventListener('click', function(){
  toggleMenu();
  if(document.querySelector('.enlaces.enlaces2')){
    open = true;
  }else{
      open = false;   
  }
})
window.addEventListener('click',function(e){
  console.log(e.target)
  if(open){
    if(e.target !== menuHamburguesa){
      toggleMenu();
      open = false;
    }
  }
})

window.addEventListener('resize', function(){
  if(screen.width>800){
    toggleMenu();
    enlaces.style.transition = 'none';
    open = false;
  }
  })

//import { example } from './data.js';	
//console.log( example );

import data from './data/rickandmorty/rickandmorty.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';
const datos = data.results
//console.log(datos);
//se va a pintar los personajes en el html de personajes

const pruebaTarjeta = document.getElementById('pruebaTarjeta');
const charactersZone = document.getElementById('charactersZone');
//console.log(charactersZone)

//charactersZone.innerHTML= datos;
//ciclo for of podemos recorrer cualquier tipo de coleccion

function pintarTarjetas(Personajes) {
  for (const personaje of Personajes) {
    //console.log(personaje.name);
    //const nombreP = document.createElement('h1');
    //nombreP.textContent = rickandmorty.name;
    //nombreP.appendChild(charactersZone);

    //insertando imagen y nombre individual
    //console.log(personaje.image);
    pruebaTarjeta.insertAdjacentHTML('afterend',
      `<button class ='individualPersonajes' id = ${personaje.id}>
    <img class = 'photoSola' src = "${personaje.image}">
    <p class = 'name'>${personaje.name}</p>
  </button>`); //template string


    //insertando boton a cada imagen
    /*let buttonImage = document.createElement("input");
    buttonImage.type = "button";
    document.body.appendChild(buttonImage);

    document.getElementById('individualPersonajes').appendChild(buttonImage);*/

  }
}
function clicCard(){
  let tabringingCard = document.getElementsByClassName('individualPersonajes') //let trayendoTarjeta
//console.log(tabringingCard);
charactersZone.addEventListener('click',(evento) => windowModal(evento))

}

function windowModal(idPersonaje){
  console.log(idPersonaje)
};

clicCard();
pintarTarjetas(datos);

//window modal