
function cargarDato(){
    let r1
         //recuperando el dato de localstorage
         r1=localStorage.getItem("p1")   
         //enviarlo a la vista
        document.getElementById("respuesta").innerHTML = r1  
}
    //llamar a la funcion para que se ejecute apenas redirecciona a respuesta.hml
    cargarDato()

    