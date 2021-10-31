import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

let btnImagenes = document.getElementsByClassName("portada");

for (var i=0; i< btnImagenes.length; i++) {
    //Añades un evento a cada elemento
    btnImagenes[i].addEventListener("click",function() {
       //Aquí la función que se ejecutará cuando se dispare el evento
       document.getElementById("main").style.display = "none" ; //En este caso ocultaremos el main al darle click al botón de imagen cliqueado
       document.getElementById("pagina2").style.display = "block" ;//En este caso mostraremos la página2 al darle click al botón de imagen cliqueado
    });     
}

console.log(example, data);
