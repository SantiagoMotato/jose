function verPoblacion(){

    let edad = document.getElementById("edad").value
    let mensaje = document.getElementById("mensaje")

    if (edad <= 0){
        mensaje.innerHTML = "Please, input a valid data."
    }else if(edad <= 12){
        mensaje.innerHTML = "You're a child";
    }else if(edad <= 21){
        mensaje.innerHTML =  "You're a teenager";
    }else if(edad <= 31){
        mensaje.innerHTML =  "You're a young person";
    }else if(edad <= 60){
        mensaje.innerHTML =  "You're an adult";
    }else{
        mensaje.innerHTML =  "You're an older adult";
    }  
    
} 
     