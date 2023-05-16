function guardar(){
    let valorp1
    valorp1 = document.getElementById("p1").value
    
    //guardar localmente
    localStorage.setItem("p1",valorp1)
    //enviar al archivo respuesta.html   
    window.location="respuesta.html"
}



