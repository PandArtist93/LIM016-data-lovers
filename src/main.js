import { example } from './data.js';

import data from './data/ghibli/ghibli.js';


let btnImagenes = document.getElementsByClassName("portada");
let principalBtn = document.getElementById("btnHeaderPrincipal");
let pagina2 = document.getElementById("pagina2");
let principalPage = document.getElementById("principalPage");

//botones del catálogo
for (let i=0; i< btnImagenes.length; i++) {
    //Añades un evento a cada elemento
    btnImagenes[i].addEventListener("click",function() {
       //Aquí la función que se ejecutará cuando se dispare el evento
       principalPage.style.display = "none" ; //En este caso ocultaremos el contenido que se encuentra en "principalPage" al darle click al botón de imagen cliqueado
       pagina2.style.display = "block" ;//En este caso mostraremos la página2 al darle click al botón de imagen cliqueado
       
    });     
}

//botones del header
principalBtn.addEventListener("click", function(){
    pagina2.style.display = "none";
    principalPage.style.display = "block";    
});



console.log(example, data);
