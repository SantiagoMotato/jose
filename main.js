function verFicha(){
    
   let nomp,lineap,cantidad,valor,vt,facturaVenta,cuentaCobro,lectorCodigo,inventario
 
   nomp = document.getElementById("nombre").value

   lineap = document.getElementById("linea").value

   cantidad = document.getElementById("cantidad").value

   valor =  document.getElementById("valor").value

   facturaVenta = document.getElementById("impresora").value

   vt = cantidad * valor

   cuentaCobro = document.getElementById("cobro").value

   lectorCodigo = document.getElementById("lector").value

   inventario = document.getElementById("inventario").value



document.getElementById("cantidadpro").innerHTML = "<h2>Cantidad de productos: "+cantidad+"</h2>"
document.getElementById("total").innerHTML = "<h2>Valor total de los equipos: "+vt+"</h2>"
document.getElementById("nombrep").innerHTML = "<h2>Nombre del producto: "+nomp+"</h2>"
document.getElementById("lineapro").innerHTML = "<h2>Linea de produccion: "+lineap+"</h2>"
document.getElementById("marcaImpresora").innerHTML = "<h2>Nombre de la impresora: "+facturaVenta+"</h2>"
document.getElementById("cuentCobro").innerHTML = "<h2>Cuenta de cobro: "+cuentaCobro+"</h2>"
document.getElementById("lectorCodigo").innerHTML = "<h2>Lector de codigo: "+lectorCodigo+"</h2>"
document.getElementById("inventarioPro").innerHTML = "<h2>Nombre del computador/es: "+inventario+"</h2>"


}