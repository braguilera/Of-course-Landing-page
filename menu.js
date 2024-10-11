let abrir = document.querySelector("#boton_menu");
let menu = document.querySelector(".inicio__nav");
let cerrar = document.querySelector("#boton_salir");

abrir.addEventListener("click", abrirMenu);
cerrar.addEventListener("click", cerrarMenu);

function abrirMenu(){
    menu.classList.add("activo")
    cerrar.classList.add("activo")
}

function cerrarMenu(){
    menu.classList.remove("activo")
    cerrar.classList.remove("activo")
}