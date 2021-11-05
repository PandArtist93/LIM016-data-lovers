// import { conditionalExpression } from '@babel/types';
import { example } from './data.js';

import data from './data/ghibli/ghibli.js';


let btnImagenes = document.getElementsByClassName("portada");
let principalBtn = document.getElementById("btnHeaderPrincipal");
let pagina2 =  document.getElementById("pagina2");
let principalPage = document.getElementById("principalPage");
let textPage2 = document.getElementById("textPage2");
let textPage3 = document.getElementById("textPage3");
let textPage4 = document.getElementById("textPage4");
let textPage5 = document.getElementById("textPage5");
let textPage6 = document.getElementById("textPage6");
let textPage7 = document.getElementById("textPage7");
let textPage8 = document.getElementById("textPage8");


let dataPeliculas = data.films;

let tituloPeliculas = dataPeliculas.map(x => x.title);
let descriptionPelicula = dataPeliculas.map(x => x.description);
let directorPelicula = dataPeliculas.map(x => x.director);
let producerPelicula = dataPeliculas.map(x => x.producer);
let poster = dataPeliculas.map(x => x.poster);
let release_date = dataPeliculas.map(x => x.release_date);
let rt_score = dataPeliculas.map(x => x.rt_score);

for (let i=0; i< btnImagenes.length; i++) {
    //Añades un evento a cada elemento
    btnImagenes[i].addEventListener("click",function() {
       //Aquí la función que se ejecutará cuando se dispare el evento
       principalPage.style.display = "none" ; //En este caso ocultaremos el contenido que se encuentra en "principalPage" al darle click al botón de imagen cliqueado
       pagina2.style.display = "block" ;//En este caso mostraremos la página2 al darle click al botón de imagen cliqueado
       textPage6.innerHTML = '<img src ='+ poster[i]+'>';
       textPage2.innerHTML = "Título: " + tituloPeliculas[i];
       textPage3.innerHTML = "Sinopsis: " + descriptionPelicula[i];
       textPage4.innerHTML = "Director: " + directorPelicula[i];
       textPage5.innerHTML = "Productor: " + producerPelicula[i];
       textPage7.innerHTML = "Fecha de lanzamiento: " + release_date[i];
       textPage8.innerHTML = "Puntaje: " + rt_score[i] + "/100";


    });    
   
}

// let list=''//declaramos una variable que recopila el perfil de cada personaje
    // peliculasData.forEach( (obj) => {
    //     list += `<div class="card">
    //     <div class="front">
    //     <img src=${obj.image}></img>
    //     <h2>${obj.name}</h2>
    //     </div>
    //     <div class="info">
    //     <ul>
    //     <li>Estado: ${obj.status}</li>
    //     <li>Especie: ${obj.species}</li>
    //     <li>Genero: ${obj.gender}</li>
    //     <li>Origen: ${ob(j.origin.name}</li>
    //     <li>Locacion: ${obj.location.name}</li>
    //     </ul>
    //     </div>
    //     </div>`       
         
    // })


// let list='';
// let i = 0;
// dataPeliculas.forEach( (obj) => {
//         list += `
//         <div class="portada_prueba ${[i]}">
//             <button id= "btnPortada ${[i]}">
//             <img src=" ${obj.poster}" alt="">                
//             </button>
//             <div class="textoImg" id= "">${obj.title}</div>
//         </div>`
//         document.getElementById("contenidoPagePersonajes").innerHTML=list;
//         i++;

// });

let list='';
let i = 1;

dataPeliculas.forEach( (obj) => {
        list +=`
        <div class="portada">
            <button id= "btnPortada${[i]}">
            <img src="${obj.poster}" alt="">                
            </button>
            <div class="textoImg" id= "">${obj.title}</div>
        </div>`
        document.getElementById("grid1").innerHTML = list;
        i++;
});

for (let i=0; i< btnImagenes.length; i++) {
    //Añades un evento a cada elemento
    btnImagenes[i].addEventListener("click",function() {
       //Aquí la función que se ejecutará cuando se dispare el evento
       principalPage.style.display = "none" ; //En este caso ocultaremos el contenido que se encuentra en "principalPage" al darle click al botón de imagen cliqueado
       pagina2.style.display = "block" ;//En este caso mostraremos la página2 al darle click al botón de imagen cliqueado
       textPage6.innerHTML = '<img src ='+ poster[i]+'>';
       textPage2.innerHTML = "Título: " + tituloPeliculas[i];
       textPage3.innerHTML = "Sinopsis: " + descriptionPelicula[i];
       textPage4.innerHTML = "Director: " + directorPelicula[i];
       textPage5.innerHTML = "Productor: " + producerPelicula[i];
       textPage7.innerHTML = "Fecha de lanzamiento: " + release_date[i];
       textPage8.innerHTML = "Puntaje: " + rt_score[i] + "/100";
    });    
   
}

//botones del header
principalBtn.addEventListener("click", function(){
    
    pagina2.style.display = "none";
    principalPage.style.display = "block";    
});
    
console.log(example, data);


