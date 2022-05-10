let cuentas = [];

cuentas.push({
    "email" : "johan@gmail.com",
    "password" : "123456"
});
cuentas.push({
    "email" : "johan2@gmail.com",
    "password" : "654321"
});
cuentas.push({
    "email" : "johan3@gmail.com",
    "password" : "123654"
});
cuentas.push({
    "email" : "johan4@gmail.com",
    "password" : "654123"
});

function verificarCredenciales(){
    let correo = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    //console.log(correo);
    //console.log(password);

    let index = cuentas.findIndex(c => c.email == correo);
    //console.log(index);
    if(index != -1)
    {
        if(cuentas[index].password == password){
            //console.log("Inicio de sesion correcto");
            let login = document.getElementById("login");
            login.hidden = true;
            let loggedIn = document.getElementById("loggedIn");
            loggedIn.hidden = false;
            loggedIn.innerHTML += `
                <div class="font-weight-bolder text-info text-gradient">
                    Bienvenido ${correo}
                </div>
                <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0" onclick="cerrarSesion()">Cerrar Sesion</button>
            `;
        }
        else
        {
            alert("Las credenciasles no son correctas.");
        }
    }
    else {
        alert("Las credenciasles no son correctas.");
    }
    
}
function cerrarSesion(){
    let login = document.getElementById("login");
    login.hidden = false;
    let loggedIn = document.getElementById("loggedIn");
    loggedIn.innerHTML = "";
    loggedIn.hidden=true;
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}