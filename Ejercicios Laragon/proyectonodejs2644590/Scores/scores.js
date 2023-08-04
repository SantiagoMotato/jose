function calcular(){
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let nota3 = document.getElementById("nota3").value
    let mensaje = document.getElementById("mensaje")

    let suma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);

    console.log(suma)

    let promedio = suma/3;
    

    if(promedio >= 3.5){
        message = "Approved!";
    }else{
        message = "Failed!";
    }

    mensaje.innerHTML = `Your average is ${promedio}<br> ${message}`

}