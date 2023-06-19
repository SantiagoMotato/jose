function ingresar(){
    let usuario1 = document.getElementById("usuario").value

    localStorage.setItem("usuario", usuario1)
    window.location="sistemaDeVentas_III.html"
}