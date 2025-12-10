import { comic } from "../bd.js";
const param = new URLSearchParams(window.location.search);
const id = param.get("id");
const personaje = comic.personajes.find(p => p.id == id);
const contenedor = document.querySelector(".comic3");

contenedor.innerHTML = `
    
        <div class="comic-contenido3">
            <img class="comic-imagen3" src="../${personaje.imagen}">
        </div>
        
         <div class ="principal">
           <p class="texto-comic3">${personaje.nombre}</p>
           <p class="info-comic3">${personaje.descripcion}</p>
         </div>
        
`;

const btnVolver = document.querySelector(".btn-volver");

btnVolver.addEventListener('click', () => {
    window.history.back();
});


