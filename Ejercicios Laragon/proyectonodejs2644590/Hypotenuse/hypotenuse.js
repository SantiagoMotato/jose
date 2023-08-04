function calcular(){

    let lado1 = document.getElementById("lado1").value
    let lado2 = document.getElementById("lado2").value

    let hipotenusa = Math.sqrt(lado1**2 + lado2**2);

    document.getElementById("mensaje").innerHTML = `Hypotenuse is ${hipotenusa}`
}


        