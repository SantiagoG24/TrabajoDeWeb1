let navegador = document.querySelector(".Navigation");
let menu = document.querySelector("#BotonMenu");
menu.addEventListener('click', menu_desplegable);
function menu_desplegable(event) {
    navegador.classList.toggle("visible");
};

async function cargar(url) {
    let container = document.querySelector("#escritura");
    container.innerHTML = "<h1>Loading...</h1>";
    try {
        let response = await fetch(url);
        if (response.ok) {
            let t = await response.text();
            container.innerHTML = t;
            if (url == "computadoras.html") {
                documentoCargado();
                actualizarApi();
            }
        } else {
            container.innerHTML = "<h1>Error - Failed URL!</h1>";
        }
    } catch (error) {
        container.innerHTML = "<h1>Connection error</h1>";
    }
}

document.querySelector("#btn-home").addEventListener('click', function () {
    cargar("home.html");
});

document.querySelector("#btn-comida").addEventListener('click', function () {
    cargar("comida.html");
});

document.querySelector("#btn-computadoras").addEventListener('click', function () {
    cargar("computadoras.html");
});

cargar("home.html");