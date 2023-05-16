function ValidarRespuestas(){
    
    var total = 6;
    var puntos = 0;

    var myForm = document.forms["quizForm"];
    var respuestas = ["respuesta-12", "respuesta-13", "respuesta-11", "respuesta-12", "respuesta-13", "respuesta-12"];

    for(var i=1; i <= total; i++){
        if(myForm["ans-" + i].value === null || myForm["ans-" + 1].value === ""){
            alert("Por favor, complete la pregunta "+i);
            return false;
        }else{
            if(myForm["ans-" + i].value === respuestas[i - 1]){
                puntos++;
            }
        }
    }
    
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>Obtuviste <span>'+ puntos +'</span> de <span>' +total+ 'puntos</span<</h3>';

   /*  var respuestasCorrectas = document.getElementById("respuestas-correctas");
    respuestasCorrectas.innerHTML = 'Respuestas correctas son '+respuestas+ '.' */
}

function MostrarRespuestas(){
    alert("ivbdi")
    var respuesta = ["respuesta-12", "respuesta-13", "respuesta-11", "respuesta-12", "respuesta-13", "respuesta-12"];
    var oracionSpan = document.getElementById('respuestas-correctas');
    oracionSpan.innerText = respuesta;
}

var respuestas = document.getElementById("respuestas-correctas");
respuestas.innerHTML = '<h3>Obtuviste <span>'+respuesta+'</span> de <span>' +oracionSpan+ 'puntos</span<</h3>';

//https://youtu.be/iu4b5_IxCoA

