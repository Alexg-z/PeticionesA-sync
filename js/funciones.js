//funcion cargar elemento por medio de un url
function cargarElemento(url, elemento) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send();
    elemento.innerHTML = req.responseText;
}

function cargarFormulario1() {
    cargarElemento("../formulario1.html", document.getElementById("content"));
    
}

function cargarFormulario2() {
    cargarElemento("../formulario2.html", document.getElementById("content"));

}
