//menu hamburguesa
const enlaces = document.getElementsByClassName('enlaces')[0];
const hamburguesa = document.getElementsByClassName('hamburguesa')[0];
//const menuHamburguesa = document.getElementById('hamburguesa');
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
/*informacion modal*/
let dataBrought = info.slice(0, 99); // datos traidos y vamos a coger un parte de la información
let compilado = [];

/*for de las tarjetetas*/
for (let i = 0; i < dataBrought.length; i++) {
  compilado += `<button data-idpersonaje = "${dataBrought[i].id}" class= "individualCard" id = "${dataBrought[i].id}" ><img data-idpersonaje = "${dataBrought[i].id}" class="photoSola" src="${dataBrought[i].image}" alt=""><p>Name: ${dataBrought[i].name}</p></button>`
}

let printImage = document.getElementById('pruebaTarjeta');
printImage.innerHTML = compilado;

/*****************informacion de la modal**************/
//document.getElementById(`${dataBrought[i].id}`)
function clicTarjetasUn() {
  let todaslasTarjetas = document.querySelectorAll('.individualCard')
  for (let i = 0; i < todaslasTarjetas.length; i++) {
    todaslasTarjetas[i].addEventListener('click', function(evento){CallModal(evento)}); //forma de llamar la modal
  }
}
clicTarjetasUn();

function CallModal(evento) {
  /*let infoModal = [];
  for (let i = 0; i < dataBrought.length; i++) {
    infoModal += `<div class= "individualCard" id = "${dataBrought[i].id}" ><img class="photoSola" src="${dataBrought[i].image}" alt=""><p>Name: ${dataBrought[i].name}</p><p>Gender: ${dataBrought[i].gender}</p><p>Species: ${dataBrought[i].species}</p><p>Status: ${dataBrought[i].status}</p>
</div>`
    console.log(infoModal)
  }*/ 
  let idPersonaje = evento.target.dataset.idpersonaje

  let busqueda = dataBrought.find(personaje => personaje.id  === parseInt(idPersonaje))
  console.log(busqueda)
}

