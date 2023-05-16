function cargarDato(){
    let r1
         //recuperando el dato de localstorage
         r1=localStorage.getItem("p1")   
         //enviarlo a la vista
        document.getElementById("res").innerHTML = r1  

        let r2
        r2=localStorage.getItem("p2")   
       document.getElementById("res2").innerHTML = r2

       let r3
       r3=localStorage.getItem("p3")   
      document.getElementById("res3").innerHTML = r3
}
    //llamar a la funcion para que se ejecute apenas redirecciona a respuesta.hml
    cargarDato()