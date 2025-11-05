const mone = document.querySelectorAll(".monedi")
const contador = document.querySelector(".contador")
const sonidoMoneda = document.querySelector("#sonido-moneda");
const sonidoEstrella = document.querySelector("#sonido-estrella");
const sonidoCaja = document.querySelector("#sonido-caja");
const sonidoVoz = document.querySelector("#sonido-voz")
const perso = document.querySelector(".perso");
const prince = document.querySelector(".prince");

console.log(mone)
console.log(contador)
let sumaDeContador = 0


perso.addEventListener("click", () => {

  perso.classList.add("salto");
  perso.addEventListener("animationend", () => {
    perso.classList.remove("salto");

    sonidoVoz.pause();
    sonidoVoz.currentTime = 0;
    sonidoVoz.play();
  }, { once: true });
});



prince.addEventListener("click", () => {
  prince.classList.add("salto");
  prince.addEventListener("animationend", () => {
    prince.classList.remove("salto");
  }, { once: true });
});

mone.forEach(moned => {
  /*  console.log("elemento: ", moned) */
  moned.addEventListener("click", () => {
    moned.classList.add("saltar")

    sumaDeContador++

    contador.textContent = `SCORE ${sumaDeContador}`

    sonidoMoneda.pause();
    sonidoMoneda.currentTime = 0;
    sonidoMoneda.play();
  })

  moned.addEventListener("animationend", () => {
    moned.style.display = "none"
  }, { once: true })
})  /*  ejecute una vez y no vuelva a aparecer mas */


/////////////////////////////////////////////////////////////


const estrellas = document.querySelectorAll(".estrella");
const contador2 = document.querySelector(".contador2");
let score2 = 0;

estrellas.forEach(star => {
  star.addEventListener("click", () => {
    star.classList.add("saltar");
    score2++;
    contador2.textContent = `SCORE ${score2}`;

    sonidoEstrella.pause();
    sonidoEstrella.currentTime = 0;
    sonidoEstrella.play();
  });



  star.addEventListener("animationend", () => {
    star.style.display = "none";
  }, { once: true });
});

const objetos = document.querySelectorAll(".caja");
const contador3 = document.querySelector(".contador3");
let score3 = 0;

objetos.forEach(obj => {
  obj.addEventListener("click", () => {
    obj.classList.add("saltar");
    score3++;
    contador3.textContent = `SCORE ${score3}`;

    sonidoCaja.pause();
    sonidoCaja.currentTime = 0;
    sonidoCaja.play();
  });



  obj.addEventListener("animationend", () => {
    obj.style.display = "none";
  }, { once: true });
});


////////////////////////////////////////////////////////////////////////////////////////////////////

/* Carrusel */

//1.Variables
const escenas = document.querySelectorAll(".escena")
const btnAnterior = document.querySelector(".btn-anterior")
const btnSiguiente = document.querySelector(".btn-siguiente")
const miniaturas = document.querySelectorAll(".miniatura")
let indice = 0

console.log(escenas)
console.log(btnAnterior)
console.log(btnSiguiente)
console.log(miniaturas)

//2.funciones
function mostrarEscena(i) {
  for (let j = 0; j < escenas.length; j++) {
    escenas[j].classList.remove('activa')
  }

  escenas[i].classList.add('activa')

  indice = i
}

mostrarEscena(2)

//funcion siguiente
btnSiguiente.addEventListener("click", () => {
  indice = indice - 1
  if (indice < 0) {
    indice = escenas.length - 1 //para ir a la ultima img
  }
  mostrarEscena(indice)

})

//funcion anterior
btnAnterior.addEventListener("click", () => {
  indice = indice + 1
  if (indice = escenas.length - 1) {
    indice = 0
  }
  mostrarEscena(indice)
})

//funcion miniatura
miniaturas.forEach((min, i) => {
  min.addEventListener("click", () => {
    mostrarEscena(i)

  })

})
//3.Eventos