//funcion cargar elemento por medio de un url
function cargar_elemento(url, id_elemento) {
    var request = new xmlHttpRequest();
    request.open('GET', url, false);
    request.send();
    id_elemento.innerHTML = request.responseText;

}

function cargaFormulario1(){
    cargar_elemento("/formulario1.html", document.getElementById("contenidoDinamico"));

}

function cargaFormulario2(){
    cargar_elemento("../formulario2.html", document.getElementById("contenidoDinamico"));

}

