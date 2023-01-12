//Conectar html con js
const inputTexto = document.querySelector("#textoEntrada")
const btnEncriptar = document.querySelector("#btnEncriptar") 
const btnDesencriptar = document.querySelector("#btnDesencriptar")
const parrafoResultado = document.querySelector("#resultado")
const finalCard = document.querySelector("#finalCard")
const inicialCard = document.querySelector("#inicialCard")
const btnCopiar = document.querySelector("#btnCopiar") 

let resultado

//Conectando funcion con su respectivo btn
btnEncriptar.addEventListener("click", encriptar)
btnDesencriptar.addEventListener("click", desencriptar)
btnCopiar.addEventListener("click", copiarTexto)

//Lógica de encriptar y desencriptar
function encriptar(){
    let texto = inputTexto.value
    if (validarTexto(texto) == false) {
        parrafoResultado.innerHTML = texto.replace(/e/g,"enter").replace(/i/g, "imes").replace(/a/g,"ai").replace(/o/g, "ober").replace(/u/g, "ufat")
    desplegarResultado()
    }
} 
function desencriptar(){
    let texto = inputTexto.value
    if (validarTexto(texto) == false) {
        parrafoResultado.innerHTML = texto.replace(/enter/g,"e").replace(/imes/g, "i").replace(/ai/g,"a").replace(/ober/g, "o").replace(/ufat/g, "u")
    desplegarResultado()
    }
}
function desplegarResultado(){
    inicialCard.classList.add("inactive")
    inicialCard.classList.remove("respuestaBox")
    finalCard.classList.remove("inactive")
    finalCard.classList.add("respuestaBox")
}
function validarTexto(textocualquiera){
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g
    let mayusculas = /[A-Z]/g
    let vacio=""
    if(textocualquiera.match(mayusculas)||textocualquiera.match(caracteres)){
        alert("No se permiten caracteres especiales, ni mayusculas")
        return true
    }else if(textocualquiera==vacio){
       alert("Ingrese un mensaje para encriptar")
        return true
   }else {
        return false
    }
}
function copiarTexto() {
    let textoCopiado = document.querySelector("#resultado").innerText
    navigator.clipboard.writeText(textoCopiado)
    document.querySelector("#textoEntrada").value=""
}
