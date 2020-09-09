var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");




var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


var fondo = {
    url: "tile.png",
    cargaOK: false
};


var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

/*
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
*/



function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarVaca() {
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdo() {
    cerdo.cargaOK = true;
    dibujar();
}
/*
function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}
*/


function dibujar() {
    if (fondo.cargaOK) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK) {
        var cantidad = aleatorio(5, 25)
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(vaca.imagen, x, y);
        }

    }

    if (cerdo.cargaOK) {
        var cantidad = 1;
        for (var v = 0; v < cantidad; v++) {
            var xCerdo = 250;
            var yCerdo = 250;
            papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
        }

    }


}

function whichButton(event) {


    if (event.keyCode == teclas.UP) {
        yCerdo = yCerdo - 5;
        dibujar();
    }
    if (event.keyCode == teclas.DOWN) {
        yCerdo = yCerdo + 5;
        dibujar();
    }
    if (event.keyCode == teclas.LEFT) {
        xCerdo = xCerdo - 5;
        dibujar();
    }
    if (event.keyCode == teclas.RIGHT) {
        xCerdo = xCerdo + 5;
        dibujar();
    }
}

    /*if(pollo.cargaOK)
    {
        var cantidad = aleatorio(5, 25)
        for(var v=0; v < cantidad; v++)
        {   
            var x = aleatorio(0, 420);
            var y = aleatorio(0, 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }*/

    /*
    function dibujarVaca() {
        papel.drawImage(vaca, 10, 10);
    }
    function dibujarCerdo() {
        papel.drawImage(cerdo, 10, 300);
    }
    function dibujarPollo() {
        papel.drawImage(pollo, 300, 150);
    }
    */
    function aleatorio(min, maxi) {
        var resultado;
        resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
        return resultado;
    }