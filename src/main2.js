
import data from './data/ghibli/ghibli.js';

const films = data.films;

// modal handlers
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
    this.console.log(e.target); // esto nos indica que estamos seleccionando por medio de la consola
    if (e.target == modalC){
        modal.classList.toggle("modalClose");       
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },900);
    }    
});


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

function renderCharacter(character){
    console.log(character);

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
                <p>Surface_water: ${location.surface_water}</p><br>    
            </div>
            <div class="codigoQR">
                <img src="./imagenes/codigoQR.PNG">
            </div>
        </div>
    `
    let modalDataContainer = document.getElementById("modalData");
    modalDataContainer.innerHTML = modalData;
}

function renderMovieDetail(movie) {

    let locations;
    let characters;
    let vehicles;
    
    let contenidoPage = document.getElementById("contenidoPage");
    let contenidoPagePersonajes = document.getElementById("contenidoPagePersonajes");
    let contenidoPageLocaciones = document.getElementById("contenidoPageLocaciones");
    let contenidoPageVehiculos = document.getElementById("contenidoPageVehiculos");

    // generar lo daros basicos de la película selecionada
    let contentMovie =`
        <div class="contentImagPage2" id="textPage6"><img src="${movie.poster}"></div>
        <div class="contentMovie">
            <div class="contentPage2" id="textpage2">Título:${movie.title}</div>
            <div class="contentPage2" id="textpage3">Sinopsis: ${movie.description} </div>
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
            contenidoPageVehiculos.appendChild(createVehicles(movie.vehicles[l]));
        }
    }
    characters = document.getElementsByClassName("subDataCharacter");
    vehicles = document.getElementsByClassName("subDataVehicle");
    locations = document.getElementsByClassName("subDataLocation");

    addCharacterCallback(characters, movie.people);
    addLocationCallback(locations, movie.locations);
    //addVehicleCallback(vehicles);
}


function addMovieCallbacks(btnMovies){
    let pagina2 =  document.getElementById("pagina2");
    let principalPage = document.getElementById("principalPage");

    for(let i=0; i < btnMovies.length; i++){
        btnMovies[i].addEventListener("click", function() {            
            /* console.log(btnMovies[i].id); */ // encontramos el id de la pelicula seleccionada
            let movie = films.filter( (film) => {
                return film.id === btnMovies[i].id
            });
            principalPage.style.display = "none" ; 
            pagina2.style.display = "block" ;
            renderMovieDetail(movie[0]);
        });
    }
}

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
function createVehicles(vehicle) {
    let nuevoElemento = document.createElement('div'); 
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = vehicle.img;
    nuevoElemento.textContent += `${vehicle.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData", "subDataVehicle");
    
    return nuevoElemento;
}


// boton inicio dle menu principal
let principalBtn = document.getElementById("btnHeaderPrincipal");
principalBtn.addEventListener("click", function(){    
    pagina2.style.display = "none";
    principalPage.style.display = "block";  
    location.reload();    
});


function render(films) {
    let boxPoster = document.getElementById("boxPoster");
    let btnPortadasDivs = renderMovies(films, boxPoster); 
    addMovieCallbacks(btnPortadasDivs);  
}

renderDirectorDropdown();
render(films);


// filters

function renderDirectorDropdown() {
    let listDirector = document.getElementById("listDirector");
    // let directors = [... new Set(films.map(x => x.director))];
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

function addDirectorFilterCallback(){
    let directors = document.getElementById("listDirector").children;
    //let boxPoster = document.getElementById("boxPoster");
    for(let i=0; i < directors.length; i++){
        directors[i].firstChild.addEventListener("click", function(e){
            console.log(directorFilter(e.target.id));
            //renderMovies(directorFilter(e.target.id), boxPoster);
            render(directorFilter(e.target.id));
        });
    }
}

function directorFilter(director) {
    console.log(director);
    let filteredMovies = films.filter((film) => {
        return film.director ===  director;
    })
    return filteredMovies
}





