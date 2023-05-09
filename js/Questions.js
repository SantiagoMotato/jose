function ValidarRespuestas(){
    
    var total = 3;
    var puntos = 0;

    var myForm = document.forms["quizForm"];
    var respuestas = ["respuesta-12", "respuesta-13", "respuesta-11"];

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
}

//https://youtu.be/iu4b5_IxCoA