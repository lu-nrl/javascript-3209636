const listaEscenas = document.querySelector (".escenas-lista")
const personajes= document.querySelector (".personajes-lista")
const Comic= document.querySelector(".info-comic").innerHTML = `
    <b>Año:</b> ${comic.year}<br>
    <b>Título:</b> ${comic.nombreComic}<br>
    <b>Sinopsis:</b> ${comic.sinopsis}<br>
    <b>Géneros:</b> ${comic.genero.join(", ")}<br>
    <b>Autores:</b> ${comic.autores.join(", ")}
`;
const infoComic= document.querySelector (".personajes-lista")

personajes.innerHTML = `
<div class="personajes-item">
         <img class="personajes-imagen" src="${comic.personajes.imagen}">
                <p class="personajes-nombre">Sr.León</p>
            </div>
`
comic.personajes.forEach(personajes => {
    const miCard= document.createElement("div")
    miCard.classList.add("tarjeta-cap")
    console.log(personajes.nombre)
    innerHTML= `
    <img src= "${personajes.imagen}">
    <p> ${personajes.nombre}`

    infoComic.appendchild(miCard)
    console.log(personajes.nombre)
});



/* 
///////////////////////////////////////////////////////////////////////////////// */

listaEscenas.innerHTML = `
<div class="personajes-item">
         <img class="personajes-imagen" src="${comic.escenas.imagen}">
                <p class="personajes-nombre">Sr.León</p>
            </div>

`
    comic.escenas.forEach(escenas => {
    const miCard= document.createElement("div")
    miCard.classList.add("tarjeta-cap")
    console.log(escenas.nombre)
    innerHTML= `
    <img src= "${escenas.imagen}" />
    <p> ${escenas.nombre}`

    .appendchild(miCard)
    console.log(escenas.nombre)
});
