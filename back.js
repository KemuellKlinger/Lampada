function atraso (callback){
    setTimeout(callback, 1000);
}
function print(){
    console.log("Deu certo!")
}

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
console.log(corpo)
}


// function mudar(){
//     var corpo = document.getElementById("corpo").value;
//     var verde = "linear-gradient(to right, #30AFDB, #30DBD1, #30AFDB )";
//     if ((){
//         corpo.style.backgroundImage = "linear-gradient(to right, #30AFDB, #30DBD1, #32CD32);";
//     }else{
//         corpo.style.backgroundImage = "linear-gradient(to right, #99DBC1, #30DBD1, #30AFDB);"
//     }
// 
