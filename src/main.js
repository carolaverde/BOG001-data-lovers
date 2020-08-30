/* eslint-disable no-undef */

  

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
let compilado;
let printImage = document.getElementById('pruebaTarjeta');


/*for de las tarjetas*/
function pintarTarjetas(datosPersonajes) {
  printImage.innerHTML = " ";
  compilado = "";
  for (let i = 0; i < datosPersonajes.length; i++) {
    compilado += `<button data-idpersonaje = "${datosPersonajes[i].id}" class= "individualCard" id = "${datosPersonajes[i].id}" ><img data-idpersonaje = "${datosPersonajes[i].id}" class="photoSola" src="${datosPersonajes[i].image}" alt=""><p>Name: ${datosPersonajes[i].name}</p></button>`
  }
  
 
  printImage.innerHTML = compilado;
}
 window.onload = pintarTarjetas(getData);



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
  //console.log(image)
  let name = busqueda.name
  //console.log(name)
  let gender = busqueda.gender
  //console.log(gender)
  let specie = busqueda.species
  //console.log(specie)
  let statuscharacther = busqueda.status
  //console.log(statuscharacther)


  let modal_mensaje = `<div class="modal"> <div class = "imagenModal"><img src = "${image}" ></div>
                      <div class = "textoModal"><p>Name: "${name}"</p>
                      <p>Gender: "${gender}" </p>
                      <p>Specie: "${specie}" </p>
                      <p>Status: "${statuscharacther}"</p></div>
                      <div class="modal_cerrar"><span class="close" id="close">x</span>
                      </div>`

  modal.innerHTML = modal_mensaje //revisar

}
/* document.getElementsByClassName("modal_cerrar")[0].addEventListener("click", function () {
   document.getElementsByClassName("fondo_transparente")[0].style.display = "none";
 })*/


/*document.getElementsByClassName("individualCard").addEventListener("click", function(){
  document.getElementsByClassName("modal")[0].style.display="block"
  return false
})*/



//CLICK FILTRAR
//hacer clic al boton
//traer datos que vamos a usar
//recorrer los datos para  saber cual es men
//filtrar datos
//guardar  los datos obtenidos 
//pintar las tarjetas  de datos filtrados 

//pintar filtro hombres

document.getElementById("filterMen").addEventListener("click", function () {
  
      let resultadosFilterM = getData.filter(elemento => elemento.gender === "Male")
      //console.log(resultadosFilterM)
          
      pintarTarjetas(resultadosFilterM)
    }
)

//pintar filtro mujeres
document.getElementById("filterWomen").addEventListener("click", function () {
  
  let resultadosFilterW = getData.filter(elemento => elemento.gender === "Female")
  //console.log(resultadosFilterW )
      
  pintarTarjetas(resultadosFilterW )
}
)

//ordenar alfabeticamente A-Z
//hacer clic al boton
//traer datos a usar
//recorrer los datos
//order datos de AZ
//guardar datos obtenidos
//pintar datos ordenados


document.getElementById("organizeAZ").addEventListener("click", function(){
  let  ordenAZ = getData.sort(function (a,b){
    if(a.name > b.name){
      return 1;
    }
  if (a.name < b.name){
    return -1;
  }
  return 0;
  }


  )
  //console.log(ordenAZ);

  pintarTarjetas(ordenAZ);
})

//ordenar alfabeticamente Z-A
document.getElementById("organizeZA").addEventListener("click", function(){
  let  ordenZA = getData.sort(function (a,b){
    if(a.name < b.name){
      return 1;
    }
  if (a.name > b.name){
    return -1;
  }
  return 0;
  }


  )
 
  pintarTarjetas(ordenZA);
})

/*********************cambiando imagen filtro hombre******************************/
//clic cambio img
//hacer click en filtermen
//traer el id del espacio de la imagen
//funcion para cambio por otra

let img = document.getElementById("img-personaje");
let changefilterimg= document.getElementById("filterMen");


function cambiarColor() {
  let todas = document.querySelectorAll('.individualCard');
  let color = '#3650a3'
  for(let i = 0; i < todas.length; i++) 
  todas[i].style.backgroundColor = color;
 
}   
/*function cambiarsombrar() {
  let todas = document.querySelectorAll('.individualCard');
  for(let i = 0; i < todas.length; i++) 
  todas[i].style.boxShadow = 'black';
 
}*/

changefilterimg.addEventListener("click", function(){
  img.src = "img/personajesMasculinos.jpg";
  img.style.boxShadow = "8px 8px 4px #3650a3";
  document.body.style.backgroundColor = "#fbb615";
  cambiarColor()
  //cambiarsombrar()
  
  }
)
/*********************cambiando imagen filtro mujer******************************/
let changeimgWomen = document.getElementById("filterWomen");

function cambiarColorW() {
  let todas = document.querySelectorAll('.individualCard');
  let color = '#98F4F4'
  for(let i = 0; i < todas.length; i++) 
  todas[i].style.backgroundColor = color;
 
}  

changeimgWomen.addEventListener("click", function(){
  img.src = "img/femeninos.jpg";
  img.style.boxShadow = "8px 8px 4px #98F4F4";
  document.body.style.backgroundColor = "#E065DA";
  cambiarColorW()
  //cambiarsombrar()
  
  }
)
   
/*********************cambiando imagen ordenar AZ******************************/
let changeorganizeAZ = document.getElementById("organizeAZ");

function cambiarColorW2() {
  let todas = document.querySelectorAll('.individualCard');
  let color = '#2ECC71 ';
  for(let i = 0; i < todas.length; i++) 
  todas[i].style.backgroundColor = color;
 
}  

changeorganizeAZ.addEventListener("click", function(){
  img.src = "img/season.jpg";
  img.style.boxShadow = "8px 8px 4px #2ECC71 ";
  document.body.style.backgroundColor = "#EBD350";
  cambiarColorW2()
  //cambiarsombrar()
  
  }
)
 
/*********************cambiando imagen ordenar ZA******************************/
let changeorganizeZA = document.getElementById("organizeZA");

function cambiarColor3() {
  let todas = document.querySelectorAll('.individualCard');
  let color = '#C9F7FF ';
  for(let i = 0; i < todas.length; i++) 
  todas[i].style.backgroundColor = color;
 
}  

changeorganizeZA.addEventListener("click", function(){
  img.src = "img/ordenaz.jpg";
  img.style.boxShadow = "8px 8px 4px #C9F7FF ";
  document.body.style.backgroundColor = "#0088BC";
  cambiarColor3()
  //cambiarsombrar()
  
  }
)
 

  
 
 



