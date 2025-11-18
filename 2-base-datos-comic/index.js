const listaEscenas = document.querySelector (".escenas")

const Comic= document.querySelector(".info-comic").innerHTML = `
    <b>Año:</b> ${comic.year}<br>
    <b>Título:</b> ${comic.nombreComic}<br>
    <b>Sinopsis:</b> ${comic.sinopsis}<br>
    <b>Géneros:</b> ${comic.genero.join(", ")}<br>
    <b>Autores:</b> ${comic.autores.join(", ")}
`;

/* console.log(comic.escenas) */

comic.escenas.forEach(escenas => {
    const miCard= document.createElement("div")
    miCard.classList.add("tarjeta-cap")
    console.log(escenas.nombre)
    innerHTML= `
    <img src= "${escenas.imagen}" />
    <p> ${escenas.nombre}`

    infoComic.appendchild(miCard)
    console.log(escenas.nombre)
});