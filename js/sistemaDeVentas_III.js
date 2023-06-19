function cargarDato(){

    let mesanje1 
    mesanje1 = localStorage.getItem("usuario")
    document.getElementById("nombreUsuario").innerHTML = mesanje1
}

cargarDato()