let valor1 = Math.floor(Math.random()*10);

let valor2 = Math.floor(Math.random()*10);

let captcha = document.getElementById("captcha");

captcha.innerHTML = valor1 + "+" + valor2;

let valor3 = document.getElementById("respuesta");

let final = document.getElementById("resultado");

let refreshflase = document.getElementById("respuesta");

function enviar(event){
    if ((valor1 + valor2) == valor3.value) {
        final.innerHTML = "El captcha es correcto";
        event.preventDefault();
    } else {
        final.innerHTML = "El captcha es incorrecto";
        event.preventDefault();
        refreshflase.value=" ";
        valor1 = Math.floor(Math.random()*10);   
        valor2 = Math.floor(Math.random()*10);
        captcha.innerHTML = valor1 + "+" + valor2;
    }
}
