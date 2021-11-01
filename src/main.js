import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

//botones del catálogo
let btnImagenes = document.getElementsByClassName("portada");

for (let i=0; i< btnImagenes.length; i++) {
    //Añades un evento a cada elemento
    btnImagenes[i].addEventListener("click",function() {
       //Aquí la función que se ejecutará cuando se dispare el evento
       document.getElementById("princialPage").style.display = "none" ; //En este caso ocultaremos el contenido que se encuentra en "principalPage" al darle click al botón de imagen cliqueado
       document.getElementById("pagina2").style.display = "block" ;//En este caso mostraremos la página2 al darle click al botón de imagen cliqueado
    });     
}

//botones del header

let principalBtn = document.getElementById("btnHeaderPrincipal");
principalBtn.addEventListener("click", function(){
    document.getElementById("pagina2").style.display = "none";
    document.getElementById("princialPage").style.display = "block";    
});

//
console.log(example, data);
