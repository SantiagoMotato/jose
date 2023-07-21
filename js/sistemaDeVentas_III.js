if (localStorage.getItem("sesion") === null) {
    let sesion = false
    localStorage.setItem("sesion",sesion)
}

let sesion = localStorage.getItem("sesion")

if(sesion == 'false'){
    window.location="sistemaDeVentas.html"
}

function salir(){
    sesion = false
    localStorage.setItem("sesion", sesion)
    window.location = "sistemaDeVentas.html"
}

let usuarioActivo = localStorage.getItem("usuarioActivo")
document.getElementById("nameUser").innerHTML = usuarioActivo

function vender(){
    let ventasTesla = [];
    let ventasIphone = [];
    let ventasSamsung = [];
    let valorTes = parseFloat(document.getElementById("pTesla").innerText)
    let valorIph = parseFloat(document.getElementById("pIphone").innerText)
    let valorSam = parseFloat(document.getElementById("pSam").innerText)

    let canTesla = parseFloat(document.querySelector("#tesla").value)
    console.log(canTesla);
    let canIphone = parseFloat(document.getElementById("iphone").value)
    let canSamsung = parseFloat(document.getElementById("samsung").value)

    let cantidadTotalTesla = 0
    let cantidadTotalIphone = 0
    let cantidadTotalSamsung= 0

    let ventaTotalTesla = 0
    let ventaTotalIphone = 0
    let ventaTotalSamsung = 0

    if (!canTesla) {
        canTesla = 0
    }

    if (!canIphone) {
        canIphone = 0
    }

    if (!canSamsung) {
        canSamsung = 0
    }

    let ventaTesla = valorTes*canTesla
    let ventaIphone = valorIph*canIphone
    let ventaSamsung = valorSam*canSamsung

    if (canTesla > 10) {
        ventaTesla = (valorTes*canTesla)*0.95
    }

    if (canIphone > 10) {
        ventaIphone = (valorIph*canIphone)*0.95
    }

    if (canSamsung > 10) {
        ventaSamsung = (valorSam*canSamsung)*0.95
    }

    if (canTesla > 0) {
        document.getElementById("ventaTesla").innerHTML = "Se han vendido "+canTesla+" celulares Samsung por un valor de $"+ventaTesla 
    }

    if (canIphone > 0) {
        document.getElementById("ventaIphone").innerHTML = "Se han vendido "+canIphone+" celulares Motorola por un valor de $"+ventaIphone
    }

    if (canSamsung > 0) {
        document.getElementById("ventaSamsung").innerHTML = "Se han vendido "+canSamsung+" celulares Huawei por un valor de $"+ventaSamsung
    }

    if (JSON.parse(localStorage.getItem("ventasTesla")) === null) {
        ventasTesla.push([canTesla,ventaTesla])
        localStorage.setItem("ventasTesla",JSON.stringify(ventasTesla))
    }else{
        ventasTesla = JSON.parse(localStorage.getItem("ventasTesla"))
        ventasTesla.push([canTesla,ventaTesla])
        localStorage.setItem("ventasTesla",JSON.stringify(ventasTesla))
    }

    if (JSON.parse(localStorage.getItem("ventasIphone")) === null) {
        ventasIphone.push([canIphone,ventaIphone])
        localStorage.setItem("ventasIphone",JSON.stringify(ventasIphone))
    }else{
        ventasIphone = JSON.parse(localStorage.getItem("ventasIphone"))
        ventasIphone.push([canIphone,ventaIphone])
        localStorage.setItem("ventasIphone",JSON.stringify(ventasIphone))
    }

    if (JSON.parse(localStorage.getItem("ventasSamsung")) === null) {
        ventasSamsung.push([canSamsung,ventaSamsung])
        localStorage.setItem("ventasSamsung",JSON.stringify(ventasSamsung))
    }else{
        ventasSamsung = JSON.parse(localStorage.getItem("ventasSamsung"))
        ventasSamsung.push([canSamsung,ventaSamsung])
        localStorage.setItem("ventasSamsung",JSON.stringify(ventasSamsung))
    }

    for (let i = 0; i < ventasTesla.length; i++) {
        cantidadTotalTesla += ventasTesla[i][0];;
    }

    for (let i = 0; i < ventasIphone.length; i++) {
        cantidadTotalIphone += ventasIphone[i][0];
    }

    for (let i = 0; i < ventasSamsung.length; i++) {
        cantidadTotalSamsung += ventasSamsung[i][0];
    }



    for (let i = 0; i < ventasTesla.length; i++) {
        ventaTotalTesla += ventasTesla[i][1];;
    }

    for (let i = 0; i < ventasIphone.length; i++) {
        ventaTotalIphone += ventasIphone[i][1];
    }

    for (let i = 0; i < ventasSamsung.length; i++) {
        ventaTotalSamsung += ventasSamsung[i][1];
    }

    localStorage.setItem("cantidadTotalTesla", cantidadTotalTesla)
    localStorage.setItem("cantidadTotalIphone", cantidadTotalIphone)
    localStorage.setItem("cantidadTotalSamsung",cantidadTotalSamsung)

    localStorage.setItem("ventaTotalTesla", ventaTotalTesla)
    localStorage.setItem("ventaTotalIphone",ventaTotalIphone)
    localStorage.setItem("ventaTotalSamsung",ventaTotalSamsung)

    let cantidadTotalvendidos = cantidadTotalSamsung + cantidadTotalIphone + cantidadTotalTesla
    let cantidadTotalVenta = ventaTotalSamsung + ventaTotalTesla + ventaTotalIphone

    localStorage.setItem("cantidadTotalvendidos", cantidadTotalvendidos)
    localStorage.setItem("cantidadTotalVenta",cantidadTotalVenta)

    let masVendido

    if(((cantidadTotalTesla == cantidadTotalIphone)&&(cantidadTotalTesla>cantidadTotalSamsung)) || ((cantidadTotalTesla == cantidadTotalSamsung)&&(cantidadTotalTesla>cantidadTotalIphone)) || ((cantidadTotalIphone == cantidadTotalSamsung)&&(cantidadTotalIphone>cantidadTotalTesla))){
        masVendido = "Hay varias referencias con ventas iguales"
    }else if (cantidadTotalTesla > cantidadTotalIphone) {
        if (cantidadTotalTesla > cantidadTotalSamsung) {
            masVendido = "Tesla"
        }else{
            masVendido = "Samsung"
        }
        
    }else if (cantidadTotalIphone > cantidadTotalSamsung) {
        masVendido = "Iphone"
    }else{
        masVendido = "Samsung"
    }

    localStorage.setItem("masVendido",masVendido)

    limpiarInput()
}

function informar(){
    window.location = "sistemaDeventas_IV.html"
}

function limpiarInput(){
    document.querySelector("#tesla").value = null
    document.getElementById("iphone").value = 
    document.getElementById("samsung").value = null 
}