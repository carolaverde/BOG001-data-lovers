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
  let infoArray = datos.slice(0, 99) //slice se usa para cortar un pedazo del array
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
  