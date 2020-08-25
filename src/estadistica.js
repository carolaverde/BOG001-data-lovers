import data from './data/rickandmorty/rickandmorty.js';
/*import rickandmorty from './data/rickandmorty/rickandmorty.js';*/

const info = data.results
let getData = info.slice(0, 99); // datos traidos y vamos a coger un parte de la información
//console.log(getData)
    
    /***********************estadistica mujeres y hombres***********************/  
 let estadisman = 0;
 let estadiswomen = 0;
 
  
 const totalhombres = document.getElementById("totalhombres");
 
 totalhombres.addEventListener("click",function(){
 
    for(let i = 0; i < getData.length; i++){
        if(getData[i].gender === "Male"){
          estadisman++;
        }
      }   
     totalhombres.innerHTML= estadisman;
     console.log(estadisman)
      
    })
    /************estadistica mujeres********************/
    const totalmujeres = document.getElementById("totalmujeres");
 
    totalmujeres.addEventListener("click",function(){
    
       for(let i = 0; i < getData.length; i++){
           if(getData[i].gender === "Female"){
            estadiswomen ++;
           }
         }   
         totalmujeres.innerHTML= estadiswomen ;
        console.log(estadiswomen )
         
       })

       /************estadistica Alive********************/
       let alive = 0
       const totalAlive = document.getElementById("totalAlive");
       
       totalAlive.addEventListener("click",function(){
    
        for(let i = 0; i < getData.length; i++){
            if(getData[i].status === "Alive"){
             alive ++;
            }
          }   
          totalAlive.innerHTML= alive;
         console.log(alive )
          
        })

        /************estadistica Dead********************/
        let dead = 0
       const totalDead = document.getElementById("totalDead");
       
       totalDead.addEventListener("click",function(){
    
        for(let i = 0; i < getData.length; i++){
            if(getData[i].status === "Dead"){
             dead ++;
            }
          }   
          totalDead.innerHTML= dead;
         console.log(dead)
          
        })

        /************estadistica Dead********************/
        let unknown= 0
       const totalUnknown = document.getElementById("totalUnknown");
       
       totalUnknown.addEventListener("click",function(){
    
        for(let i = 0; i < getData.length; i++){
            if(getData[i].status === "Unknown"){
                unknown++;
            
          }   
        }
          totalUnknown.innerHTML= unknown;
         console.log(unknown)
          
        })