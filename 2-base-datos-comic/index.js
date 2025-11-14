const Princi = document.querySelector(".principal")
const Marca = document.querySelector(".texto-marca")
const Comic = document.querySelector(".comic")

console.log(Princi)
console.log(Marca)
console.log(Comic)

Marca.innerHTML = `
        <p> ${comic.year} </p>
        <h1>${ comic.nombreComic}</h1>
        <p> ${comic.sinopsis} </p>
        <p> <b> Genero: </b>  ${comic.genero.join (", ")}</p>
        <p><b> personajes: </b> ${comic.personajes.join (", ")}
`