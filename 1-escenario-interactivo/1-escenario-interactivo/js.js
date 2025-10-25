const mone = document.querySelectorAll(".monedi")
const contador = document.querySelector(".contador")

console.log(mone)
console.log(contador)
let sumaDeContador = 0


mone.forEach(moned => {
    /*  console.log("elemento: ", moned) */
    moned.addEventListener("click", () => {
    moned.classList.add("saltar")
        
    sumaDeContador++
    
    contador.textContent = `SCORE ${sumaDeContador}`

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
  });

  obj.addEventListener("animationend", () => {
    obj.style.display = "none";
  }, { once: true });
});