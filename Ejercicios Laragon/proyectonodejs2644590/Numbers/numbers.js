function identificarNumero(){
    let numero = document.getElementById("numero").value;
    if (numero < 0){
        document.getElementById("mensaje").innerHTML="El numero es Negativo"
    }else if (numero == 0){
        document.getElementById("mensaje").innerHTML="El numero es 0, Neutro"
    }else{
        document.getElementById("mensaje").innerHTML="El numero es Positivo"
    }
}