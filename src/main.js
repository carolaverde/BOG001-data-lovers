//menu hamburguesa
const enlaces = document.getElementsByClassName('enlaces')[0];
const hamburguesa = document.getElementsByClassName('hamburguesa')[0];
const menuHamburguesa = document.getElementById('hamburguesa');
let open = false;

const toggleMenu = () => {
  enlaces.classList.toggle('enlaces2');
  enlaces.style.transition = 'transform 0.5s ease-in-out'
}

/*window.addEventListener('click', function(){
  toggleMenu();
})*/
//con este evento estamos diciendo cuando el usuario tiene abierto el menu hamburguesa
hamburguesa.addEventListener('click', function () {
  toggleMenu();
  if (document.querySelector('.enlaces.enlaces2')) {
    open = true;
  } else {
    open = false;
  }
})

window.addEventListener('resize', function () {
  if (screen.width > 800) {
    toggleMenu();
    enlaces.style.transition = 'none';
    open = false;
  }
})


//import { example } from './data.js';	
//console.log( example );

import data from './data/rickandmorty/rickandmorty.js';
import rickandmorty from './data/rickandmorty/rickandmorty.js';
const info = data.results
//console.log(info);
//se va a pintar los personajes en el html de personajes

const pruebaTarjeta = document.getElementById('pruebaTarjeta');
const charactersZone = document.getElementById('charactersZone');
//console.log(charactersZone)

//charactersZone.innerHTML= datos;
//ciclo for of podemos recorrer cualquier tipo de array

let dataBrought = info.slice(0,99);   // datos traidos y vamos a coger un parte de la información
console.log(dataBrought)
let compilado = [];

for(let i = 0; i < dataBrought.length; i++){
compilado += `<img class="photoSola" src="${dataBrought[i].image}" alt=""><p>Mi nombre es ${dataBrought[i].name}</p>`
console.log(compilado)
}



let printImage = document.getElementById('pruebaTarjeta');
printImage.innerHTML=compilado;


