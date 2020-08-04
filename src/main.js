/* eslint-disable no-undef */
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
let getData = info.slice(0, 99); // datos traidos y vamos a coger un parte de la información
let compilado = [];

/*for de las tarjetetas*/
for (let i = 0; i < getData.length; i++) {
  compilado += `<button data-idpersonaje = "${getData[i].id}" class= "individualCard" id = "${getData[i].id}" ><img data-idpersonaje = "${getData[i].id}" class="photoSola" src="${getData[i].image}" alt=""><p>Name: ${getData[i].name}</p></button>`
}

let printImage = document.getElementById('pruebaTarjeta');
printImage.innerHTML = compilado;

/*****************informacion de la modal**************/
function clicTarjetasUn() {
  let todaslasTarjetas = document.querySelectorAll('.individualCard')
  for (let i = 0; i < todaslasTarjetas.length; i++) {
    todaslasTarjetas[i].addEventListener('click', function (evento) {
      CallModal(evento)
    }); //forma de llamar la modal
  }
}
clicTarjetasUn();

function CallModal(evento) {
  let idPersonaje = evento.target.dataset.idpersonaje

  let busqueda = getData.find(personaje => personaje.id === parseInt(idPersonaje))


  let image = busqueda.image
  console.log(image)
  let name = busqueda.name
  console.log(name)
  let gender = busqueda.gender
  console.log(gender)
  let specie = busqueda.species
  console.log(specie)
  let statuscharacther = busqueda.status
  console.log(statuscharacther)


  let modal_mensaje = `<div class="modal"> <div class = "imagenModal"><img src = "${image}" ></div><div class = "textoModal"><p>Name: "${name}"</p> <p>Gender: "${gender}" </p> <p>Specie: "${specie}" </p> <p>Status: "${statuscharacther}"</p></div> <div class="modal_cerrar">
  <span>x</span></div></div> `
  pruebaTarjeta.innerHTML = modal_mensaje


  document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function () {
    document.getElementsByClassName("fondo_transparente")[0].style.display = "none";
  })
}

/*document.getElementsByClassName("individualCard").addEventListener("click", function(){
  document.getElementsByClassName("modal")[0].style.display="block"
  return false
})*/

let botonFiltroM = document.getElementById("filterMen").addEventListener("click", function () {
  let filtrandoM= getData.filter(item =>{
    return (item.gender === "Male");
  })
  console.log("filterM")
})

let botonFiltrow = document.getElementById("filterWomen").addEventListener("click", function () {
  let filtrandoW= getData.filter(item =>{
    return (item.gender === "Female");
  })
  console.log("filtrandoW")
})


let botonAZ = document.getElementById("organizeAZ").addEventListener("click", function(){
  getData.sort(function(a, b) {
    return a - b;
  });
  console.log("botonAZ");
})

let botonZA = document.getElementById("organizeZA").addEventListener("click", function(){
  getData.sort(function(a, b) {
    return a - b;
  });
  console.log("botonZA");
})