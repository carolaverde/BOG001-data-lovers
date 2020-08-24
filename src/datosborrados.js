/*function pintarTarjetas(Personajes) {
    for (const personaje of Personajes) {*/
      //console.log(personaje.name);
      //const nombreP = document.createElement('h1');
      //nombreP.textContent = rickandmorty.name;
      //nombreP.appendChild(charactersZone);
  
      //insertando imagen y nombre individual
      //console.log(personaje.image);
     /*pruebaTarjeta.insertAdjacentHTML('afterend',
       `<button class ='individualPersonajes' id = ${personaje.id}>
      <img class = 'photoSola' src = "${personaje.image}">
     <p class = 'name'>${personaje.name}</p>
    </button>`); //template string
  
  
      //insertando boton a cada imagen
      /*let buttonImage = document.createElement("input");
      buttonImage.type = "button";
      document.body.appendChild(buttonImage);
  
      document.getElementById('individualPersonajes').appendChild(buttonImage);*/
  
    
  
  /*let infoArray = datos.slice(0, 99) //slice se usa para cortar un pedazo del array
  console.log(infoArray)
  //for (x=0; x< ; x++);
  let compilado = [];
  
  function clicCard() {
  
    for (let i = 0; i < infoArray.length; i++) {
      compilado += infoArray[i].name + `${infoArray[i].name}` ; //se llama la variable vacia para que se agregue la info que se necesita                        
    }
  
    console.log(compilado);
  
    //let bringingCard = document.getElementsByClassName('individualPersonajes') //let trayendoTarjeta
    //console.log(tabringingCard);
    //charactersZone.addEventListener('click',(evento) => windowModal(evento))
  
  }
  
  
  function windowModal(idPersonaje) {
    console.log(idPersonaje)
  };
  
  clicCard();
  pintarTarjetas(datos);
  
  //window modal
  *//*
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
}


let infoModal = [];
for (let i = 0; i < getData.length; i++) {
  infoModal += `<div class= "individualCard" id = "${getData[i].id}" ><img class="photoSola" src="${getData[i].image}" alt=""><p>Name: ${getData[i].name}</p><p>Gender: ${getData[i].gender}</p><p>Species: ${getData[i].species}</p><p>Status: ${getData[i].status}</p>
</div>`
  console.log(infoModal)};





/



/*****************informacion de la modal**************/



  

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

 
/*function pintarTarjetas(datosPersonajes) {
  for (let i = 0; i < datosPersonajes.length; i++) {
  compilado += `<button data-idpersonaje = "${datosPersonajes[i].id}" class= "individualCard" id = "${datosPersonajes[i].id}" ><img data-idpersonaje = "${datosPersonajes[i].id}" class="photoSola" src="${datosPersonajes[i].image}" alt=""><p>Name: ${datosPersonajes[i].name}</p></button>`
}
let printImage = document.getElementById('pruebaTarjeta');
printImage.innerHTML = compilado;
}

pintarTarjetas(getData);
/*let botonFiltrow = document.getElementById("filterWomen").addEventListener("click", function () {
  let filtrandoW= getData.filter(item =>{
    return (item.gender === "Female");
  })
  console.log(filtrandoW)



/*let botonAZ = document.getElementById("organizeAZ").addEventListener("click", function(){
  getData.sort(function(a, b) {
    return a - b;
  });
  console.log(botonAZ);*/


/*let botonZA = document.getElementById("organizeZA").addEventListener("click", function(){
  getData.sort(function(a, b) {
    return a - b;
  });
  console.log(botonZA)
})*/