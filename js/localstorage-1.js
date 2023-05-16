function guardar(){
    let valorp1
    valorp1 = document.getElementById("p1").value
    
    //guardar localmente
    localStorage.setItem("p1",valorp1)
    //enviar al archivo respuesta.html   
    window.location="localstorage-2.html"

    let valorp2
    valorp2 = document.getElementById("p2").value
    localStorage.setItem("p2",valorp2)
    window.location="localstorage-2.html"

    let valorp3
    valorp3 = document.getElementById("p3").value
    localStorage.setItem("p3",valorp3)
    window.location="localstorage-2.html"
}