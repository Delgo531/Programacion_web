let btnsumar = document.getElementById("sumar"); 

function sumatoria(){

    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let mostrarResultado = document.getElementById("mostrarResultado");

    let resultado = numero1 + numero2;

    mostrarResultado.innerHTML= "<p>El resultado es:" +resultado+ "</p>";
}
btnsumar.addEventListener("click",sumatoria);