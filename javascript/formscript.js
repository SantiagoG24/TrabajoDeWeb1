const url = 'https://62b60cf56999cce2e8fe5e2a.mockapi.io/api/v1/Horarios';
let valor1 = Math.floor(Math.random() * 10);//genero los numeros random

let valor2 = Math.floor(Math.random() * 10);

function documentoCargado() {
    let captcha = document.getElementById("captcha");
    captcha.innerHTML = valor1 + "+" + valor2;
    let betnx3 = document.querySelector("#buttonx3");
    let btn = document.querySelector("#buttom");
    btn.addEventListener('click', enviar);
    betnx3.addEventListener('click', agregarx3);
    let msg =document.querySelector("#msg");


}

function enviar(event) {
    event.preventDefault();
    let final = document.getElementById("resultado");
    let nombre = document.querySelector('#nombre').value;
    let mail = document.querySelector('#mail').value;
    let hora = document.querySelector('#horario').value;
        if (validarcaptcha()) {
            final.innerHTML = "El captcha es correcto";
            agregarcliente(nombre, mail, hora);
        } else {
            msg=final.innerHTML = "El captcha es incorrecto";
        }
}
function agregarx3(event) {
    event.preventDefault();
    let final = document.getElementById("resultado");
    let nombre = document.querySelector('#nombre').value;
    let mail = document.querySelector('#mail').value;
    let hora = document.querySelector('#horario').value;
        if (validarcaptcha()) {
            final.innerHTML = "El captcha es correcto";
            for (let index = 0; index < 3; index++) {
                agregarcliente(nombre, mail, hora++);
            }
        } else {
            final.innerHTML = "El captcha es incorrecto";
        }
}

function validarcaptcha() {
    let valor3 = document.getElementById("respuesta");
    if ((valor1 + valor2) == valor3.value) {
        valor1 = Math.floor(Math.random() * 10);
        valor2 = Math.floor(Math.random() * 10);
        captcha.innerHTML = valor1 + "+" + valor2;
        return true;
    }
    valor1 = Math.floor(Math.random() * 10);
    valor2 = Math.floor(Math.random() * 10);
    captcha.innerHTML = valor1 + "+" + valor2;
    valor3.value = "";
    return false;
}



// tabla

let cliente = [
]

async function agregarcliente(nombre, mail, hora) {
    let clientenuevo = {
        "Nombre": nombre,
        "Mail": mail,
        "Hora": hora.value
    }
    console.log(clientenuevo);
    try {
        let res= await fetch(url,{
            "method":"POST",
            "headers":{"Content-type":"application/json"},
            "body":JSON.stringify(clientenuevo)
        });
        if(res.status===201){
            msg.innerHTML="Creado!";
        }   
    } catch (error) {
        console.log(error)
    }
    // cliente.push(clientenuevo);
    // imprimir();
}

function imprimir() {
    let inscripto = document.querySelector('#lista');
    inscripto.innerHTML = '';
    for (const orden of cliente) {
        inscripto.innerHTML += "<tr>" + "<td>" + orden.name + "</td>" + "<td>" + orden.mail + "</td>" + "<td>" + orden.hour + "</td>" + "</tr>";
    }
}
async function actualizarApi() {
    try {
        let res = await fetch(url);
        let json = await res.json();
        let inscripto = document.querySelector('#lista');
        inscripto.innerHTML = '';
        for (const Horarios of json) {
            let nombre = Horarios.Nombre;
            let mail = Horarios.Mail;
            let Hora = Horarios.Hora;
            let Id = Horarios.id;
            inscripto.innerHTML += "<tr >" + "<td class='fila_tabla'>" + Horarios.Nombre + "</td>" + "<td class='fila_tabla'>" + Horarios.Mail + "</td>" + "<td class='fila_tabla'>" + Horarios.Hora + "</td>" + "<td class='fila_tabla'><button class='borrar'style='padding: 5px' id=" + Id + ">"+"<i class='bi-trash'></i>"+"</button></td>" + "<td class='fila_tabla'><button class='editar' id=" + Id +">"+"<i class='bi bi-pencil'></i>" +"</button></td>" + "</tr>";
        }
        let btn_borrar = document.querySelectorAll(".borrar");
        for (let i=0 ;i< btn_borrar.length;i++){
            btn_borrar[i].addEventListener("click",function(e){
                borrar(this.id);
            });
        }
        let btn_editar = document.querySelectorAll(".editar");
        for (let i=0 ; i< btn_editar.length ;i++){
            btn_editar[i].addEventListener("click",function(e){
                editar(this.id);
            });
        }
    } catch (error) {
        console.log(error);
    }
}
async function borrar(id) {
    let url_id = `${url}/${id}`;
    try {
        let res = await fetch(url_id, {
            "method": "DELETE"
        });
        if (res.status === 200) {
            document.querySelector("#msg").innerHTML = "Se ha eliminado su reservacion "
        }
    actualizarApi();
    } catch (error) {
        console.log(error);
    }
}
async function editar(id) {
    let nombre = document.querySelector('#nombre').value;
    let mail = document.querySelector('#mail').value;
    let hora = document.querySelector('#horario').value;
    let url_id = `${url}/${id}`;
    let editar = {
        "Nombre": nombre,
        "Mail": mail,
        "Hora": hora
    }
    try {
        let res = await fetch(url_id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editar)
        });
        if (res.status === 200) {
            document.querySelector("#msg").innerHTML = "Su cambio se agrego"
        }
    } catch (error) {
        console.log(error);
    }
}