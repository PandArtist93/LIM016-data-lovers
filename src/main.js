/* import { conditionalExpression } from '@babel/types'; */

import { directorFilter } from './data.js';
import { moviesFilter } from './data.js';
import { producerFilter } from './data.js';
import { yearFilter } from './data.js';
/* import { orderAz } from './data.js'; */
import data from './data/ghibli/ghibli.js';

const films = data.films;

// ---------------------modal------------------------
let modal = document.getElementById("modal");
let modalC = document.getElementById("modalCont");
let cerrar = document.getElementById("close");

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
 
//---------------------rendereizar contenido ------------------------
//renderizar catálogos
function renderMovies(films, htmlLocation) {

    /* Recibira un arreglo de datos de peliculas y devolvera
    las portadas de cada pelicula

    input: arreglo de peliculas, ubicacion de renderizado
    output: no retorna (renderiza en pantalla)
    */
    let filmDivs = "";
    films.forEach( (film) => {
        filmDivs +=`
        <div class="portada" id="${film.id}">
            <button>
                <img src="${film.poster}">                
            </button>
            <div class="textoImg">${film.title}</div>
        </div>`
        htmlLocation.innerHTML = filmDivs; 
    });
    let btnPortadas = document.getElementsByClassName("portada");
    return btnPortadas;
}

//renderizar contenido del modal al seleccioar personajes
function renderCharacter(character){
    let modalData =`
        <div class="fondoImg">
            <div class="imagen-carnet" id="imagen-carnet">          
                <img src="${character.img}"/>
            </div>
        </div> 
        <div class="seccionDatos">
            <div class="contenido-texto" id="contenido-texto">
                <p>Name: ${character.name}</p><br>
                <p>Gender: ${character.gender}</p><br>
                <p>Age: ${character.age}</p><br>
                <p>Eye color: ${character.eye_color}</p><br>
                <p>Hair color: ${character.hair_color}</p><br>
                <p>Specie: ${character.specie}</p>        
            </div>
            <div class="codigoQR">
                <img src="./imagenes/codigoQR.PNG">
            </div>
        </div>
    `
    let modalDataContainer = document.getElementById("modalData");
    modalDataContainer.innerHTML = modalData;
}

//renderizar contenido del modal al seleccioar locaciones
function renderLocation(location){
    let modalData =`
        <div class="fondoImg">
            <div class="imagen-carnet" id="imagen-carnet">          
                <img src="${location.img}"/>
            </div>
        </div> 
        <div class="seccionDatos">
            <div class="contenido-texto" id="contenido-texto">
                <p>Name: ${location.name}</p><br>
                <p>Climate: ${location.climate}</p><br>
                <p>Terrain: ${location.terrain}</p><br>
                <p>Surface water: ${location.surface_water}</p><br>    
            </div>
            <div class="codigoQR">
                <img src="./imagenes/codigoQR.PNG">
            </div>
        </div>
    `
    let modalDataContainer = document.getElementById("modalData");
    modalDataContainer.innerHTML = modalData;
}

//renderizar contenido del modal al seleccioar vehículos
function renderVehicle(vehicle){    
    let modalData =`
        <div class="fondoImg">
            <div class="imagen-carnet" id="imagen-carnet">          
                <img src="${vehicle.img}"/>
            </div>
        </div> 
        <div class="seccionDatos">
            <div class="contenido-texto" id="contenido-texto">
                <p>Name: ${vehicle.name}</p><br>
                <p>description: ${vehicle.description}</p><br>
                <p>vehicle class: ${vehicle.vehicle_class}</p><br>
                <p>length: ${vehicle.length}</p><br>    
                <p>pilot name:${vehicle.pilot.name}</p><br> 
            </div>
            <div class="codigoQR">
                <img src="./imagenes/codigoQR.PNG">
            </div>
        </div>
    `
    let modalDataContainer = document.getElementById("modalData");
    modalDataContainer.innerHTML = modalData;
}

//renderizar información detallada de la película en la 2da vista
function renderMovieDetail(movie) {
    let locations;
    let characters;
    let vehicles;
    
    let contenidoPage = document.getElementById("contenidoPage");
    let contenidoPagePersonajes = document.getElementById("contenidoPagePersonajes");
    let contenidoPageLocaciones = document.getElementById("contenidoPageLocaciones");
    let contenidoPageVehiculos = document.getElementById("contenidoPageVehiculos");

    contenidoPagePersonajes.innerHTML = "";
    contenidoPageLocaciones.innerHTML = "";
    contenidoPageVehiculos.innerHTML = "";

    // generar lo datos basicos de la película selecionada
    let contentMovie =`
        <div class="contentImagPage2" id="textPage6"><img src="${movie.poster}"></div>
        <div class="contentMovie">
            <div class="contentPage2" id="textpage2">${movie.title}</div>
            <div class="contentPage2" id="textpage3">${movie.description} </div>
            <div class="contentPage2" id="textpage4">Director: ${movie.director}</div>
            <div class="contentPage2" id="textpage5">Productor:  ${movie.producer}</div>
            <div class="contentPage2" id="textpage7">Fecha de lanzamiento: ${movie.release_date} </div>
            <div class="contentPage2" id="textpage8">Puntaje: ${movie.rt_score}/100</div>
        </div>
    `
    contenidoPage.innerHTML = contentMovie;

    // crear el catalogo de personajes
    for(let j = 0; j < movie.people.length; j++) {
        contenidoPagePersonajes.appendChild(createCharacter(movie.people[j]));           
    }  
     // crear el catalogo de locaciones
    if (movie.locations.length !== 0){
        for(let k = 0; k < movie.locations.length; k++) {
            contenidoPageLocaciones.appendChild(createLocation(movie.locations[k]));             
        } 
    }
    else{
        contenidoPageLocaciones.innerHTML = "En esta película no es destacan locaciones específicas";
    }
     
     // crear el catalogo de vehículos
    if (movie.vehicles.length == 0){
        contenidoPageVehiculos.innerHTML = "En esta película no es destacan vehículos específicos";
    }
    else{
        for(let l = 0; l < movie.vehicles.length ; l++){
            contenidoPageVehiculos.appendChild(createVehicle(movie.vehicles[l]));
        }
    }
    characters = document.getElementsByClassName("subDataCharacter");
    locations = document.getElementsByClassName("subDataLocation");
    vehicles = document.getElementsByClassName("subDataVehicle");
    
    addCharacterCallback(characters, movie.people);
    addLocationCallback(locations, movie.locations);
    addVehicleCallback(vehicles, movie.vehicles);
}

//apertura la 2da vista y llama a la función que rendereiza el contenido de la pelicula seleccionada 
function addMovieCallbacks(btnMovies){
    let pagina2 =  document.getElementById("pagina2");
    let principalPage = document.getElementById("principalPage");    
    for(let i=0; i < btnMovies.length; i++){
        btnMovies[i].addEventListener("click", function() {            
            /* console.log(btnMovies[i].id); */ // encontramos el id de la pelicula seleccionada
            let movie = films.filter( (film) => {
                return film.id === btnMovies[i].id                
;           });
            principalPage.style.display = "none" ; 
            pagina2.style.display = "block" ;
            renderMovieDetail(movie[0]);
        });
    }
}

//apertura la vista del modal y llama a la función para rendereizar el contenido del personaje seleccionado 
function addCharacterCallback(characterDivs, characters) {
    for (let i = 0; i < characterDivs.length; i++){

        characterDivs[i].addEventListener("click", function(){
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modalClose");
            let characterData = characters.filter((character) => {
                return character.id === characterDivs[i].id
            });
            renderCharacter(characterData[0]);
        });
    }
}

//apertura la vista del modal y llama a la función para renderizar el contenido del la locación seleccionado 
function addLocationCallback(locationDivs, locations) {
    for (let i = 0; i < locationDivs.length; i++){

        locationDivs[i].addEventListener("click", function(){
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modalClose");
            let locationData = locations.filter((location) => {
                return location.id === locationDivs[i].id
            });
            renderLocation(locationData[0]);
        });
    }
}

//apertura la vista del modal y llama a la función para renderizar el contenido del vehículo seleccionado 
function addVehicleCallback(vehicleDivs, vehicles) {
    for (let i = 0; i < vehicleDivs.length; i++){

        vehicleDivs[i].addEventListener("click", function(){
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modalClose");
            let vehicleData = vehicles.filter((vehicle) => {
                return vehicle.id === vehicleDivs[i].id
            });            
            renderVehicle(vehicleData[0]);
        });
    }
}

//crea los div en función de cada personajes 
function createCharacter(character) {
    let nuevoElemento = document.createElement('div');
    nuevoElemento.id = character.id;
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = character.img;
    nuevoElemento.textContent += `${character.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData", "subDataCharacter");

    return nuevoElemento;
}

//crea los div en función de cada locación 
function createLocation(location) {
    let nuevoElemento = document.createElement('div');
    nuevoElemento.id = location.id; 
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = location.img;
    nuevoElemento.textContent += `${location.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData", "subDataLocation");
    
    return nuevoElemento;
}

//crea los div en función de cada vehículo 
function createVehicle(vehicle) {
    let nuevoElemento = document.createElement('div'); 
    nuevoElemento.id = vehicle.id; 
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = vehicle.img;
    nuevoElemento.textContent += `${vehicle.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData", "subDataVehicle");
    
    return nuevoElemento;
}

// ---------------------------------boton inicio del menu principal--------------
let principalBtn = document.getElementById("btnHeaderPrincipal");
let pagina2 = document.getElementById("pagina2");
let principalPage = document.getElementById("principalPage");
principalBtn.addEventListener("click", function(){    
    pagina2.style.display = "none";
    pagina3.style.display = "none";
    pagina4.style.display = "none";
    principalPage.style.display = "block";  
    location.reload();    
});

// ---------------------------------boton peliculas del menu principal---------------
function renderMovieDropdown() {
    let listaOcultaSegundaria = document.getElementById("listaOcultaSegundaria");
    let liElement = "";
    for(let i=0; i < films.length; i++){
        liElement += `<li><a id="${films[i].id}">${films[i].title}</a></li>`
    }
    listaOcultaSegundaria.innerHTML = liElement;
    addMoviesFilterCallback();
}

function addMoviesFilterCallback(){
    let movies = document.getElementById("listaOcultaSegundaria").children;
    for(let i=0; i < movies.length; i++){
        movies[i].firstChild.addEventListener("click", function(e){
            principalPage.style.display = "none";
            pagina2.style.display = "block";
            renderMovieDetail((moviesFilter(films, e.target.id)[0]));
        });
    }
}

/* function moviesFilter(movieId){
    let filteredMovies = films.filter((film) => {
        return film.id === movieId ;
    });
    return filteredMovies
} */

//----------------------------------boton nosotros del menu principal------------
let pagina4 = document.getElementById("pagina4");
let nosotrosBtn = document.getElementById("btnHeaderNosotros");
nosotrosBtn.addEventListener("click", function(){    
    pagina4.style.display = "block";
    pagina3.style.display = "none";
    pagina2.style.display = "none";
    principalPage.style.display = "none";      
});

//----------------------------------boton gráficas del menu principal------------
let pagina3 = document.getElementById("pagina3");
let graficasBtn = document.getElementById("btnGraficas");
graficasBtn.addEventListener("click", function(){    
    pagina3.style.display = "block";
    pagina4.style.display = "none";
    pagina2.style.display = "none";
    principalPage.style.display = "none";      
});

//----------------------------------render principal-------------------------------
function render(films) {
    let boxPoster = document.getElementById("boxPoster");
    let btnPortadasDivs = renderMovies(films, boxPoster); 
    addMovieCallbacks(btnPortadasDivs);  
}


renderDirectorDropdown();
renderProducerDropdown();
renderYearDropdown();
render(films);
renderMovieDropdown();

// -------------------------------filters-----------------------------------------

// ----------genera el dorpdown de directores-----------
function renderDirectorDropdown() {
    let listDirector = document.getElementById("listDirector");    
    let uniqueDirectors = films.map(x => x.director).filter(
        (director, index, directors) => directors.indexOf(director) === index
    );
    let liElement = "";
    for(let i=0; i < uniqueDirectors.length; i++){
        liElement += `<li><a id="${uniqueDirectors[i]}">${uniqueDirectors[i]}</a></li>`
    }
    listDirector.innerHTML = liElement;
    addDirectorFilterCallback();
}

//filtra en función del director seleccionado 
function addDirectorFilterCallback(){
    let directors = document.getElementById("listDirector").children;    
    for(let i=0; i < directors.length; i++){
        directors[i].firstChild.addEventListener("click", function(e){            
            render(directorFilter(films, e.target.id));
        });
    }
}

/* function directorFilter(director) {    
    let filteredMovies = films.filter((film) => {
        return film.director ===  director;
    })
    return filteredMovies
}*/

// ---------------generar dropdows productores------------
function renderProducerDropdown() {
    let listProducer = document.getElementById("listProducer");
    let uniqueProducers = films.map(x => x.producer).filter(
        (producer, index, producers) => producers.indexOf(producer) === index
    );
    let liElement = "";
    for(let i=0; i < uniqueProducers.length; i++){
        liElement += `<li><a id="${uniqueProducers[i]}">${uniqueProducers[i]}</a></li>`
    }
    listProducer.innerHTML = liElement;
    addProducerFilterCallback();
}

//filtra en función del productor seleccionado 
function addProducerFilterCallback(){
    let producers = document.getElementById("listProducer").children;
    for(let i=0; i < producers.length; i++){
        producers[i].firstChild.addEventListener("click", function(e){
            render(producerFilter(films, e.target.id));
        });
    }
}

/* function producerFilter(producer) {
    let filteredMovies = films.filter((film) => {
        return film.producer ===  producer;
    });
    return filteredMovies
} */


// ---------------generar dropdows por Año------------
function renderYearDropdown() {
    let listYear = document.getElementById("listYear");
    let uniqueYears = films.map(x => x.release_date).filter(
        (year, index, years) => years.indexOf(year) === index
    );
    let liElement = "";
    for(let i=0; i < uniqueYears.length; i++){
        liElement += `<li><a id="${uniqueYears[i]}">${uniqueYears[i]}</a></li>`
    }
    listYear.innerHTML = liElement;
    addYearFilterCallback();
}

function addYearFilterCallback(){
    let years = document.getElementById("listYear").children;
    for(let i=0; i <  years.length; i++){
        years[i].firstChild.addEventListener("click", function(e){
            render(yearFilter(films, e.target.id));
        });
    }
}

/* function yearFilter(release_date){
    let filteredYears = films.filter((film) => {
        return film.release_date === release_date;
    });
    return filteredYears
} */

// -------------------------------orderns-----------------------------------------
// ----------orden de a--z -----------

let a_z = document.getElementById("a_z");
/* a_z.addEventListener("click", orderAz(films)); */
a_z.addEventListener("click", function(){       
    
    let peliculasOrdenadasPorTitulo = films.sort((a,b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    render (peliculasOrdenadasPorTitulo);
        
});   

// ----------orden de z--a -----------
let z_a = document.getElementById("z_a");
z_a.addEventListener("click", function(){
    
    let peliculasOrdenadasPorTitulo = films.sort((a,b) => {
        if (a.title > b.title) {
            return -1;
        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    });
    render (peliculasOrdenadasPorTitulo);

});

// ----------orden por fecha de lanzamiento (mas antigua)-----------
let yearAsc = document.getElementById("yearAsc");
yearAsc.addEventListener("click", function(){
  
    let peliculasOrdenadasPorYear = films.sort((a,b) => {
        if (a.release_date < b.release_date) {
            return -1;
        }
        if (a.release_date > b.release_date) {
            return 1;
        }
        return 0;
    });

    render (peliculasOrdenadasPorYear);  

});

// ----------orden por fecha de lanzamiento (mas nueva)-----------
let yearDesc = document.getElementById("yearDesc");
yearDesc.addEventListener("click", function(){
  
    let peliculasOrdenadasPorYear = films.sort((a,b) => {
        if (a.release_date > b.release_date) {
            return -1;
        }
        if (a.release_date < b.release_date) {
            return 1;
        }
        return 0;
    });

    render (peliculasOrdenadasPorYear);  

});

// ----------orden por calificación (mayor puntaje)-----------
let mayorToMenor = document.getElementById("mayorToMenor");
mayorToMenor.addEventListener("click", function(){
    
    let peliculasOrdenadasPorcalificacion = films.sort((a,b) => {
        if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
            return -1;
        }
        if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
            return 1;
        } 
        return 0;
    });

    render (peliculasOrdenadasPorcalificacion);
});

// ----------orden por calificación (menor puntaje)-----------
let menorToMayor = document.getElementById("menorToMayor");
menorToMayor.addEventListener("click", function(){
    
    let peliculasOrdenadasPorcalificacion = films.sort((a,b) => {
        if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
            return -1;
        }
        if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
            return 1;
        } 
        return 0;
    });
    
    render (peliculasOrdenadasPorcalificacion);
});

// ---------------------------creando div para el boton de top scroll-----------------------------
let buttomScrollTop = document.getElementById("buttomScrollTop")

let creationButtomScrollTop="";
creationButtomScrollTop +=`<button id="btnScrollTop" class="btnScrollTop"><i class="fas fa-arrow-circle-up"></i></button>`     

buttomScrollTop.innerHTML=creationButtomScrollTop;

// -------------------------- boton de top scroll--------------------------------------------------

let btnScrollTop = document.getElementById("btnScrollTop");
document.addEventListener("scroll", handleScroll);
function handleScroll() {     // do something on scroll
  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var GOLDEN_RATIO = 0.7;
  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {    
    btnScrollTop.style.display = "block";   //show button
  } else {    
    btnScrollTop.style.display = "none";    //hide button
  }
}

btnScrollTop.addEventListener("click", function() {      
    window.scrollTo({
            top: 0,
            behavior: "auto"
    })
});

//------------------------barra de busqueda-------------------------------
/* let cardFilter =document.getElementById("cardFilter");
let posterContainer = films.id; 
console.log(posterContainer); */
/* searchFilters(cardFilter, posterContainer); */


//------------------------
