import { comic } from "../bd.js";
const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const escenas = comic.escenas.find(p => p.id == id);
const contenedor = document.querySelector(".comic2");
contenedor.innerHTML = `
 <p class="titulo-comic2">Escenas</p>
        <p class="texto-comic2">${escenas.nombre}</p>
        <div class="comic-contenido2">
            <img class="comic-imagen2" src="${escenas.video}">
        </div>
`;
const btnVolver = document.querySelector(".btn-volver");

btnVolver.addEventListener('click', () => {
    window.history.back();
});