const express = require('express');
const app = express();
const port = 3000;//Puerto en el que escuchara el servidor

//Ruta de ejemplo
app.get('/',(req,res)=>{
    res.send('Hola. mundo');
});

//Iniciar el servidor
app.listen(port,()=>{
    console.log(`Servidor escuchando el puerto ${port}`);
});