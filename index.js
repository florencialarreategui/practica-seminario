let aumentar = 100;
let imgBomba = document.getElementById("bomba");
const explosion = 160;
const imgExplosion=document.getElementById("explosion");

function ajustarTamaño(nuevoTamaño) {
    imgBomba.style.width = nuevoTamaño + "px";
}

function TeclaFlechaArriba() {
    aumentar+=10;
    if (aumentar > explosion) {
        imgBomba.style.display="none";
        imgExplosion.style.display="flex";
    ajustarTamaño(explosion);
    } else {
        ajustarTamaño(aumentar);
    }
}



function TeclaFlechaAbajo() {
    aumentar-=10;
    if (aumentar < 50) { 
        aumentar = 50;
    }
    ajustarTamaño(aumentar);
}



document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            TeclaFlechaIzquierda();
            break;
        case 38:
            TeclaFlechaArriba();
            break;
        case 39:
            TeclaFlechaDerecha();
            break;
        case 40:
            TeclaFlechaAbajo();
        break;
    }
});