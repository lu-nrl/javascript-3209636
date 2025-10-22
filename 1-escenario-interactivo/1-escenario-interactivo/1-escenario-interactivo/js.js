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