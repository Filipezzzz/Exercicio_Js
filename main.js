const numA = document.querySelector(".numa");
const numB = document.querySelector(".numb");
const botao = document.querySelector("button");
const form = document.getElementById("formulario")
const conta = numA.value > numB.value





form.addEventListener("submit", function(e){
    e.preventDefault();

    if (numA.value > numB.value) {
        alert("Escolha um número maior")
    } else {
        alert("parabens")
    }

})