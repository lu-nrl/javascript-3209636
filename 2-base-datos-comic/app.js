const infoComic = document.querySelector(".info-comic")
const listaCapi = document.querySelector(".lista-capitulos")

console.log(infoComic)
console.log(listaCapi)

//Modificar el contenido de info general del comic

infoComic.innerHTML = `
        <p> ${comic.year} </p>
        <h1>${ comic.nombreComic}</h1>
        <p> ${comic.sinopsis} </p>
        <p> <b> Genero: </b>  ${comic.genero.join (", ")}</p>
        <p><b> personajes: </b> ${comic.personajes.join (", ")}
`