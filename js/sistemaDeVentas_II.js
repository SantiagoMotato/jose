let users = [];
let passwords = [];

let user
let password

function validarEspacio(){
    if(!user || !password){
        return false
    }
    return true
}

function vaciarCampos(){

}

function guardar(){
    user = document.getElementById("user").value
    password = document.getElementById("pass").value

    let campos = validarEspacio()

    if(campos){
        if(JSON.parse(localStorage.getItem("users")) === null){
            users.push(user)
            localStorage.setItem("users",JSON.stringify(users))
        }else{
            users = JSON.parse(localStorage.getItem("users"))
            users.push(user)
            localStorage.setItem("users",JSON.stringify(users))
        }

        if(JSON.parse(localStorage.getItem("pass")) === null) {
            passwords.push(password)
            localStorage.setItem("pass",JSON.stringify(passwords))
        }else{
            passwords = JSON.parse(localStorage.getItem("pass"))
            passwords.push(password)
            localStorage.setItem("pass",JSON.stringify(passwords))
        }

        window.location = "sistemaDeVentas.html"
    }else{
        document.getElementById("error").innerHTML = "Debe rellenar los espacios"
    }
}