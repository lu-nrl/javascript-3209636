document.querySelector(".info-comic").innerHTML = `
    <b>Año:</b> ${comic.year}<br>
    <b>Título:</b> ${comic.nombreComic}<br>
    <b>Sinopsis:</b> ${comic.sinopsis}<br>
    <b>Géneros:</b> ${comic.genero.join(", ")}<br>
    <b>Autores:</b> ${comic.autores.join(", ")}
`;