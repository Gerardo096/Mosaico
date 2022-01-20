//Iniciamos con el evento window load
crearEvento(window, "load", start);


var tablacolores;
var colorPulsado = "color1";

var estadoPincel = false;
var clasesColores;



//empezamos a crear la tabla y a cambiar la clase seleccionado mediante eventos click, donde sacaram
function start() {
    crearTabla();

    tablacolores = document.getElementById("paleta");
    tdColores = tablacolores.getElementsByTagName("td");
    for (let i = 0; i < tdColores.length; i++) {
        tdColores[i].addEventListener("click", function() {

            for (let y = 0; y < tdColores.length; y++) {
                clasesColores = tdColores[y].classList;
                clasesColores.remove("seleccionado");
            }
            clasesColores = tdColores[i].classList;
            clasesColores.add("seleccionado");
            colorPulsado = clasesColores[0];

        });
    }



}


//función que crea una tabla mediante DOM, asignandole un estilo igualmente con DOM
function crearTabla() {

    var contenedor = document.getElementById("zonadibujo");

    var tabla = document.createElement('table');

    contenedor.appendChild(tabla);

    tabla.setAttribute('border', 1, "solid");

    for (var x = 0; x < 30; x++) {

        var fila = tabla.insertRow(x);

        for (var i = 0; i < 30; i++) {

            var cuadrado = fila.insertCell(i);

            cuadrado.style.border = " 1, solid, black"

            cuadrado.style.width = "11px";

            cuadrado.style.height = "11px";

            cuadrado.className = "color6";
            cuadrado.addEventListener("click", function() {
                this.className = colorPulsado;

                if (!estadoPincel) {
                    document.getElementById("pincel").innerText = "El pincel está activado"
                    estadoPincel = true;


                } else {
                    document.getElementById("pincel").innerText = "El pincel está desactivado"
                    estadoPincel = false;

                }
            });
            cuadrado.addEventListener("mouseover", function() {

                if (estadoPincel) {
                    this.className = colorPulsado;

                }
            });
        }
    }

}
//función que se usa para crear eventos
function crearEvento(elemento, evento, mifuncion) {
    elemento.addEventListener(evento, mifuncion, false);
}

//función usada para sacar las ids de los elementos
function idElemento(elemento) {
    return document.getElementById(elemento);
}

function classElemento(elemento) {
    return document.getElementsByClassName(elemento);
}