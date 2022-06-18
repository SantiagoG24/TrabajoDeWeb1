let navegador=document.querySelector(".Navigation");
let menu =document.querySelector("#BotonMenu");
menu.addEventListener('click',menu_desplegable);
function menu_desplegable(event){
    navegador.classList.toggle("visible");
};

async function cargar(){
    let container = document.querySelector("#escritura");
    container.innerHTML = "<h1>Loading...</h1>";
    try{
        let response = await fetch(url);
        if (response.ok){
            let t = await response.text();
            container.innerhtml = t;
        }else{
            container.innerhtml = "<h1>Error - Failed URL!</h1>";
        }
    }catch(error){
        container.innerHTML = "<h1>Connection error</h1>";
    }
}

let btnH = document.querySelector("#btn-home");

btnH.addEventListener('click',function (){
    cargar("home.html");
});

cargar("home.html");








