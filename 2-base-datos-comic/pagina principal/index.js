import { comic } from './bd.js';

const listaEscenas = document.querySelector (".escenas-lista")
const personajesContainer= document.querySelector (".personajes-lista")
const infoComic= document.querySelector (".personajes-lista")
/* const capitulos= document.querySelector (".") */
const Comic= document.querySelector(".info-comic").innerHTML = `
    <b>Año:</b> ${comic.year}<br>
    <b>Título:</b> ${comic.nombreComic}<br>
    <b>Sinopsis:</b> ${comic.sinopsis}<br>
    <b>Géneros:</b> ${comic.genero.join(", ")}<br>
    <b>Autores:</b> ${comic.autores.join(", ")}
`;

comic.personajes.forEach(personaje => {
    const miCard= document.createElement("div")
    miCard.classList.add("personajes-item")
    console.log(personaje.nombre)
    miCard.innerHTML= `
    <a class= "personajesId" href="../pagina terciaria/personajes.html?id=${personaje.id}">
     <img class="personajes-imagen" src="${personaje.imagen}">
                <p class="personajes-nombre">${personaje.nombre}</p>
               </a> `

  personajesContainer.appendChild(miCard)
    console.log(personaje.nombre)
});

/* ///////////////////////////////////////////////////////////////////////////////// */


    comic.escenas.forEach( escena => {
    const miCard= document.createElement("div");
    miCard.classList.add("escenas-lista");
    console.log(escena.nombre);
    miCard.innerHTML= `
   <a class= "escenasId" href="../pagina secundaria/escenas.html?id=${escena.id}">
    <div class="escena-item">
                <img class="escena-imagen" src="${escena.image}">
                <p class="escena-nombre">${escena.nombre}</p>
            </div>
            </a>`
    listaEscenas.appendChild(miCard);
    console.log(escena.nombre)
});

/* ///////////////////////////////////////////////////////////////////////////////// */

