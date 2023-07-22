function validarUsuario(){
    let usuarioIngresado = document.getElementById("user").value
    let passwordIngresada = document.getElementById("pass").value

    let users = JSON.parse(localStorage.getItem("users"))
    let passwords = JSON.parse(localStorage.getItem("pass"))

    let usuarioActivo

    if (localStorage.getItem("sesion") === null) {
        let sesion = false
        localStorage.setItem("sesion",sesion)
    }

    if ((JSON.parse(localStorage.getItem("users")) !== null) && JSON.parse(localStorage.getItem("pass") !== null)){
        let sesion
        for (let i = 0; i < users.length; i++) {
            if ((usuarioIngresado == users[i]) && (passwordIngresada == passwords[i])){
                sesion = true;
                usuarioActivo = usuarioIngresado
                localStorage.setItem("usuarioActivo",usuarioActivo)
                localStorage.setItem("sesion", sesion)
                break
            }
        }
        if (sesion){
            window.location="sistemaDeVentas_III.html";
        }else{
            document.getElementById("error").innerHTML = "Datos digitados no válidos. Por favor, verifiquelos o quizás no esté registrado. Intente nuevamente."
        }
    }else{
        document.getElementById("error").innerHTML = "Datos digitados no válidos. Por favor, verifiquelos o quizás no esté registrado. Intente nuevamente."
    }
}