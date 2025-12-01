import { comic } from "../pagina principal/bd.js";
const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const personaje = comic.personajes.find(p => p.id == id);
const contenedor = document.querySelector(".comic3");
contenedor.innerHTML = `
 <p class="titulo-comic3">Personajes</p>
        <p class="texto-comic3">${personaje.nombre}</p>
        <div class="comic-contenido3">
            <img class="comic-imagen3" src="${personaje.imagen}">
        </div>
        <p class="info-comic3">${personaje.descripcion}</p>
`;