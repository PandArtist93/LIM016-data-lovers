// import { conditionalExpression } from '@babel/types';
/* import { example } from './data.js'; */

import data from './data/ghibli/ghibli.js';

//interacción con el DOM
let btnImagenes = document.getElementsByClassName("portada");
let principalBtn = document.getElementById("btnHeaderPrincipal");
let pagina2 =  document.getElementById("pagina2");
let principalPage = document.getElementById("principalPage");
let contenidoPagePersonajes = document.getElementById("contenidoPagePersonajes");
let contenidoPageLocaciones = document.getElementById("contenidoPageLocaciones");
let contenidoPageVehiculos = document.getElementById("contenidoPageVehiculos");
let contenidoPage = document.getElementById("contenidoPage");

let dataPeliculas = data.films;
// let tituloPeliculas = dataPeliculas.map(x => x.title);
// let descriptionPelicula = dataPeliculas.map(x => x.description);
// let directorPelicula = dataPeliculas.map(x => x.director);
// let producerPelicula = dataPeliculas.map(x => x.producer);
// let poster = dataPeliculas.map(x => x.poster);
// let release_date = dataPeliculas.map(x => x.release_date);
// let rt_score = dataPeliculas.map(x => x.rt_score);
// let personajesPelicula = dataPeliculas.map(x => x.people);
// let locacionesPelicula = dataPeliculas.map(x => x.locations);
// let vehiculosPelicula = dataPeliculas.map(x => x.vehicles);

//--------------------------------------------------
// genera las portadas de los catálogos dinamicamente en la vista principal
function renderCatalogo(dataArray, htmlLocation){    
    let list='';
    let i = 1;
    dataArray.forEach( (obj) => {
        list +=`
        <div class="portada">
            <button id= "btnPortada${[i]}">
            <img src="${obj.poster}" alt="">                
            </button>
            <div class="textoImg" id= "">${obj.title}</div>
        </div>`
        htmlLocation.innerHTML = list;
        i++; 

    });
}

// crea los div en función de cada caracter 
function createDetalles(character) {
    let nuevoElemento = document.createElement('div'); 
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = character.img;
    nuevoElemento.textContent += `${character.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData");
    
    return nuevoElemento;
}

// -----------creando funcion para Vehiculos y locaciones----------------
function catalogoLocacionesOVehiculos(caracteristica, contenidoPage,stringDeContenido) {
    if (caracteristica.length !== 0){
        for(let k = 0; k < caracteristica.length; k++) {
            contenidoPage.appendChild(createDetalles(caracteristica[k]));                      
        } 
    }
    else{
        contenidoPage.innerHTML = `En esta película no se destacan ${stringDeContenido} en específico`;
    }
}  
// ----------fin de creando funcion para Vehiculos y locaciones--------------

let boxPoster = document.getElementById("boxPoster");
renderCatalogo(dataPeliculas, boxPoster);

// ordenado alfabético ascendente
let a_z = document.getElementById("a_z");
a_z.addEventListener("click",() => {
    // let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";
    
    let peliculasOrdenadasPorTitulo = dataPeliculas.sort((a,b) => {
        if (a.title < b.title) { return -1;}
        if (a.title > b.title) { return 1;}
        return 0;
    }) 

    renderCatalogo (peliculasOrdenadasPorTitulo, boxPosterFilter);
    
    for (let j=0; j< btnImagenes.length; j++) {
    
        btnImagenes[j].addEventListener("click",function() {
            principalPage.style.display = "none" ; 
            pagina2.style.display = "block" ;
            // console.log(btnImagenes.length);
            let i=j-20
            generaDatosPeliculaElegida (peliculasOrdenadasPorTitulo,i); 
        })
    }
    
}); 


// ordenado alfabético descendente
let z_a = document.getElementById("z_a");9
z_a.addEventListener("click", () => {
    
    // let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorTitulo = dataPeliculas.sort((a,b) => {
        if (a.title > b.title) {return -1;}
        if (a.title < b.title) {return 1;}
        return 0;
    });   
    renderCatalogo (peliculasOrdenadasPorTitulo, boxPosterFilter);    
});

// ordenado cronológico ascendente
let yearAsc = document.getElementById("yearAsc");
yearAsc.addEventListener("click",() => {
    /* console.log(release_date.sort()) */
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorYear = dataPeliculas.sort((a,b) => {
        if (a.release_date < b.release_date) {return -1;}
        if (a.release_date > b.release_date) {return 1;}
        return 0;
    });
    renderCatalogo (peliculasOrdenadasPorYear, boxPosterFilter);  
});

// ordenado cronológico descendente
let yearDesc = document.getElementById("yearDesc");
yearDesc.addEventListener("click", () => {
    /* console.log(tituloPeliculas.reverse()) */
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorYear = dataPeliculas.sort((a,b) => {
        if (a.release_date > b.release_date) { return -1;}
        if (a.release_date < b.release_date) {return 1;}
        return 0;
    });
    renderCatalogo (peliculasOrdenadasPorYear, boxPosterFilter);
});

//ordenado por calificación de Mayor a menor

let mayorToMenor = document.getElementById("mayorToMenor");
mayorToMenor.addEventListener("click", () => {
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorcalificacion = dataPeliculas.sort((a,b) => {
        if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
            return -1;
        }
        if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
            return 1;
        }
        return 0;
    });
    renderCatalogo (peliculasOrdenadasPorcalificacion, boxPosterFilter);
   
});



//ordenado por calificación de menor a Mayor
let menorToMayor = document.getElementById("menorToMayor");
menorToMayor.addEventListener("click", () => {
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorcalificacion = dataPeliculas.sort((a,b) => {
        if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
            return -1;
        }
        if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
            return 1;
        }
        return 0;
    });   
    renderCatalogo (peliculasOrdenadasPorcalificacion, boxPosterFilter);
});

principalBtn.addEventListener("click", function(){    
    pagina2.style.display = "none";
    principalPage.style.display = "block";    
    location.reload();
});

//crea que catálogo con las imagenes de "personajes", "locaciones" y "vehículos"
/* console.log(btnImagenes); */
 
// --------------funcion genera los datos de la pelicula elegida----------
function generaDatosPeliculaElegida (arrayElegido,i) {

    let personajesPelicula = arrayElegido.map(x => x.people);
    let locacionesPelicula = arrayElegido.map(x => x.locations);
    let vehiculosPelicula = arrayElegido.map(x => x.vehicles);
    let tituloPeliculas = arrayElegido.map(x => x.title);
    let descriptionPelicula = arrayElegido.map(x => x.description);
    let directorPelicula = arrayElegido.map(x => x.director);
    let producerPelicula = arrayElegido.map(x => x.producer);
    let poster =arrayElegido.map(x => x.poster);
    let release_date = arrayElegido.map(x => x.release_date);
    let rt_score = arrayElegido.map(x => x.rt_score);
    let characters = personajesPelicula[i];
    let locations = locacionesPelicula[i];
    let vehicles = vehiculosPelicula[i];

    let text="";

    text +=
        `<div class="contentImagPage2" id="textPage6"><img src ="${poster[i]}"></div>
          <div class="contentMovie">
            <div class="contentPage2" id="textPage2">${tituloPeliculas[i]}</div>
            <div class="contentPage2" id="textPage3">Sinopsis: ${descriptionPelicula[i]}</div>
            <div class="contentPage2" id="textPage4">Director: ${directorPelicula[i]}</div>
            <div class="contentPage2" id="textPage5">Productor: ${producerPelicula[i]}</div>
            <div class="contentPage2" id="textPage7">Fecha de lanzamiento: ${release_date[i]}</div>
            <div class="contentPage2" id="textPage8">Puntaje: ${rt_score[i]}/100</div>
          </div>`     
    contenidoPage.innerHTML = text;
    i++; 

    catalogoLocacionesOVehiculos(locations,contenidoPageLocaciones,"locaciones");
    catalogoLocacionesOVehiculos(vehicles,contenidoPageVehiculos,"vehiculos");   
    
    for(let j = 0; j < characters.length; j++) {
        contenidoPagePersonajes.appendChild(createDetalles(characters[j])); 
    }  
    
}

// -------------fin de funcion genera los datos de la pelicula elegida------


for (let i=0; i< btnImagenes.length; i++) {
    
    btnImagenes[i].addEventListener("click",function() {
        // let characters = personajesPelicula[i];
        // let locations = locacionesPelicula[i];
        // let vehicles = vehiculosPelicula[i];
        // ocultar la primera vista y despliega la segunda
        principalPage.style.display = "none" ; 
        pagina2.style.display = "block" ;
        generaDatosPeliculaElegida (dataPeliculas,i);

        let imgDetalles = document.getElementsByClassName("contenedorSubData");
        abrirModal(imgDetalles);
    }) 
}

//--------------------------------------------------
/* function crearVista2 () {
    
    for (let i=0; i< btnImagenes.length; i++) {
        btnImagenes[i].addEventListener("click",function() {
            principalPage.style.display = "none" ; 
            pagina2.style.display = "block" ;
            // generar lo daros basicos de la película selecionada
            textPage6.innerHTML = '<img src ='+ poster[i]+'>';
            textPage2.innerHTML = "Título: " + tituloPeliculas[i];
            textPage3.innerHTML = "Sinopsis: " + descriptionPelicula[i];
            textPage4.innerHTML = "Director: " + directorPelicula[i];
            textPage5.innerHTML = "Productor: " + producerPelicula[i];
            textPage7.innerHTML = "Fecha de lanzamiento: " + release_date[i];
            textPage8.innerHTML = "Puntaje: " + rt_score[i] + "/100"; 
        });   
    }    
} */

// reacción y funcionalidad del modal
let cerrar = document.getElementById("close");
let modal = document.getElementById("modal");
let modalC = document.getElementById("modalCont");
/* let abrir = document.getElementById("cta"); */
/* abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modalClose");
}); */

function abrirModal(imgDetalles) {
    for (let i = 0; i < imgDetalles.length; i++){
        let imgSelect = imgDetalles[i];
        imgSelect.addEventListener("click", function(e){
            e.preventDefault();
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modalClose");
        });
    }
}

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modalClose");
  
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },900);
});

window.addEventListener("click", function(e){
    /* this.console.log(e.target); */ // esto nos indica que estamos seleccionando por medio de la consola
    if (e.target == modalC){
        modal.classList.toggle("modalClose");       
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },900);
    }
});

/* console.log(example, data); */

// let select_alfabetico = document.getElementById("select_alfabetico");
// ---------------------------creando boton de top scroll------------------
let buttomScrollTop = document.getElementById("buttomScrollTop")

let creationButtomScrollTop="";
creationButtomScrollTop +=`<button id="btnScrollTop" class="btnScrollTop"><i class="fas fa-arrow-circle-up"></i>status</button>`     

buttomScrollTop.innerHTML=creationButtomScrollTop;

// --------------------------

let btnScrollTop = document.getElementById("btnScrollTop");

document.addEventListener("scroll", handleScroll);

function handleScroll() {
  // do something on scroll

  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  var GOLDEN_RATIO = 0.7;


  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    btnScrollTop.style.display = "block";
  } else {
    //hide button
    btnScrollTop.style.display = "none";
  }
}

btnScrollTop.addEventListener("click", function() {
    // window.scrollTo({
    //         top: 0;
    //         behavior: "smooth";
    //   });
      
    setTimeout(function(){
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    },0);
});


// function scrollToTop() {
    // top: 0,
    // behavior: "smooth" 
// }











