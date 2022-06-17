// formulario

let valor1 = Math.floor(Math.random()*10);

let valor2 = Math.floor(Math.random()*10);

let captcha = document.getElementById("captcha");

captcha.innerHTML = valor1 + "+" + valor2;

let final = document.getElementById("resultado");

let betnx3 = document.querySelector("#buttonx3");

let refreshflase = document.getElementById("respuesta");

let btn = document.querySelector("#buttom");

btn.addEventListener('click', enviar);

function enviar(event){
    event.preventDefault();
    let nombre = document.querySelector('#nombre').value;
    let mail = document.querySelector('#mail').value;
    let hora = document.querySelector('#horario').value;
    if ((nombre != "") && (mail != "") && (hora != "")) { 
        if (validarcaptcha()) {
            final.innerHTML = "El captcha es correcto";
            agregarcliente(nombre,mail,hora);
        } else {
            final.innerHTML = "El captcha es incorrecto";
        }
    } else{
        final.innerHTML = "Dejo algun campo sin rellenar";
    }
}
    
betnx3.addEventListener('click',agregarx3);

function agregarx3(event){
    event.preventDefault();
    let nombre = document.querySelector('#nombre').value;
    let mail = document.querySelector('#mail').value;
    let hora = document.querySelector('#horario').value;
    if ((nombre != "") && (mail != "") && (hora != "")) {    
        if (validarcaptcha()){
            final.innerHTML = "El captcha es correcto";
            for (let index = 0; index < 3; index++) {
                agregarcliente(nombre,mail,hora++);
            }
        }else{
            final.innerHTML = "El captcha es incorrecto";
        }
    } else{
        final.innerHTML = "Dejo algun campo sin rellenar";
    }
}

function validarcaptcha(){
    let valor3 = document.getElementById("respuesta");
    if ((valor1 + valor2) == valor3.value){
        valor1 = Math.floor(Math.random()*10);
        valor2 = Math.floor(Math.random()*10);
        captcha.innerHTML = valor1 + "+" + valor2;
        return true;
    }
    valor1 = Math.floor(Math.random()*10);
    valor2 = Math.floor(Math.random()*10);
    captcha.innerHTML = valor1 + "+" + valor2;
    valor3.value = "";
    return false;
}



// tabla

let cliente = [
]

function agregarcliente(nombre,mail,hora){
    while(hora>24){
        hora-=24;
    }
    let clientenuevo = {
        name: nombre,
        mail:mail,
        hour:hora
    }
    cliente.push(clientenuevo);
    imprimir();
}

function imprimir(){
    let inscripto = document.querySelector('#lista');
    inscripto.innerHTML = '';
    for (const orden of cliente) {
        inscripto.innerHTML += "<tr>" + "<td>" + orden.name + "</td>" + "<td>" + orden.mail + "</td>" + "<td>" + orden.hour + "</td>" + "</tr>";
    }
}