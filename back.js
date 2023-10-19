function interruptor(){
    var elemento = document.getElementById("lampada");
    var corpo = document.getElementById("corpo");
    var paragrafo = document.getElementById("interruptor");

    if (elemento.src.match("off")){
        elemento.src = "img/lampada_on-removebg-preview.png";
        corpo.style.backgroundColor = "yellow"
        paragrafo.style.color = "black"

    }else{
        elemento.src = "img/lampada_off-removebg-preview.png";
        corpo.style.backgroundColor = "black";
        paragrafo.style.color = "white"
}
}
