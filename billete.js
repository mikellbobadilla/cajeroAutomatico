var b = document.getElementById("botoncito");
b.addEventListener("click", reparto); //evento de boton
var r = document.getElementById("resultado"); //id de la etiqueta billetes a entregar
var lado = document.getElementById("en_caja"); //cantidad de dinero en cajero

class Billete {
    constructor(v, c) {;
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;

        this.imagen.src = billetes[this.valor];
    }
    mostrar() {

    }
}

var caja = []; //billetes que tiene el cajero
var entregado = []; //billetes que va a entregar
var papeles;
var dinero = 0;
var div = 0;
var billetes = []; //src de los billetes

billetes[5] = "billete_de_5.jpg";
billetes[10] = "billete_de_10.jpg";
billetes[20] = "billete_de_20.jpg";
billetes[50] = "billete_de_50.jpg";
billetes[100] = "billete_de_100.jpg";
console.log(caja);

//agrega billetes al array
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 10));

onBox(); // es la funcion que hay en total de dinero que hay en el cajero

//cantidad de dinero en el cajero
function onBox() {

}


// dinero a entregar
function reparto() {

    var t = document.getElementById("texto");
    dinero = parseInt(t.value);
    //inicia el ciclo de billetes a entregar
    for (var b of caja) {

        if (dinero > 0) {
            div = Math.floor(dinero / b.valor);
            if (div > b.cantidad) {
                papeles = b.cantidad;
            } else {
                papeles = div;
            }
            entregado.push(new Billete(b.valor, papeles));
            dinero = dinero - (b.valor * papeles);
        }


    }

    for (let c of caja) {

        var v = c.cantidad * c.valor;
        lado.innerHTML += "<br>hay  $" + v + " dolares en  billetes de $" + c.valor;
    }



    //muestra en pantalla los billetes entregados
    if (dinero > 0) {
        r.innerHTML = "i'm Sorry, i can't give u this money :(";
    } else {
        for (var e of entregado) {
            if (e.cantidad > 0) {
                r.innerHTML += e.cantidad + " Billetes de ";
                r.appendChild(e.imagen);
                r.innerHTML += "<br>"
            }
        }
    }
}