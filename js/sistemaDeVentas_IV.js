let ventasTotalesSamsung = localStorage.getItem("ventaTotalSam")
let ventasTotalesMotorola = localStorage.getItem("ventaTotalMoto")
let ventasTotalesHuawei = localStorage.getItem("ventaTotalHua")

let cantidadTotalSamsumg = localStorage.getItem("cantidadTotalSamsung")
let cantidadTotalMotorola = localStorage.getItem("cantidadTotalMotorola")
let cantidadTotalHuawei = localStorage.getItem("cantidadTotalHuawei")

let cantidadVendidos = localStorage.getItem("cantidadTotalvendidos")
let cantidadTotalVenta = localStorage.getItem("cantidadTotalVenta")

let masVendido = localStorage.getItem("masVendido")

let ventasSamsung = JSON.parse(localStorage.getItem("ventasSamsung"))
let ventasMotorola = JSON.parse(localStorage.getItem("ventasMotorola"))
let ventasHuawei = JSON.parse(localStorage.getItem("ventasHuawei"))

if (localStorage.getItem("sesion") === null) {
    let sesion = false
    localStorage.setItem("sesion",sesion)
}

let sesion = localStorage.getItem("sesion")

if(sesion == 'false'){
    window.location="index.html"
}

function salir(){
    sesion = false
    localStorage.setItem("sesion", sesion)
    window.location = "sistemaDeVentas.html"
}

if (localStorage.getItem("sesion") === null) {
    let sesion = false
    localStorage.setItem("sesion",sesion)
}

document.getElementById("ventasTotalesSamsung").innerHTML = ventasTotalesSamsung
document.getElementById("ventasTotalesMotorola").innerHTML = ventasTotalesMotorola
document.getElementById("ventasTotalesHuawei").innerHTML = ventasTotalesHuawei

document.getElementById("cantidadTotalVendidosSamsung").innerHTML = cantidadTotalSamsumg
document.getElementById("cantidadTotalVendidosMotorola").innerHTML = cantidadTotalMotorola
document.getElementById("cantidadTotalVendidosHuawei").innerHTML = cantidadTotalHuawei

document.getElementById("cantidadTotalVendidos").innerHTML = cantidadVendidos
document.getElementById("cantidadTotalVenta").innerHTML = cantidadTotalVenta

document.getElementById("masVendido").innerHTML = masVendido

document.querySelector(".totalVentas").innerHTML = cantidadTotalVenta

function rellenarLista(){
    for (let i = 0; i < ventasMotorola.length; i++) {
        let totalVenta = (ventasSamsung[i][1]+ventasMotorola[i][1]+ventasHuawei[i][1])
        let div = document.createElement('div');
        div.setAttribute("class","ventas")
        div.innerHTML= "<p class='ventaNum'>"+(i+1)+"</p><p class='equipoS'>"+ventasSamsung[i][0]+"</p><p class='valorS'>"+ventasSamsung[i][1]+"</p><p class='equipoM'>"+ventasMotorola[i][0]+"</p><p class='valorM'>"+ventasMotorola[i][1]+"</p><p class='equipoH'>"+ventasHuawei[i][0]+"</p><p class='valorH'>"+ventasHuawei[i][1]+"</p><p class='totalventa'>"+totalVenta+"</p>";
        let contenedor = document.getElementById("lista");
        contenedor.appendChild(div);
    }
}

rellenarLista();

function regresar(){
    window.location = "sistemaDeVentas_III.html"
}