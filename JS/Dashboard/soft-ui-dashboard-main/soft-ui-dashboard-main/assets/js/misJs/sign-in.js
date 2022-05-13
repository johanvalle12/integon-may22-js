// let cuentas = [];

// cuentas.push({
//     "email" : "johan@gmail.com",
//     "password" : "123456"
// });
// cuentas.push({
//     "email" : "johan2@gmail.com",
//     "password" : "654321"
// });
// cuentas.push({
//     "email" : "johan3@gmail.com",
//     "password" : "123654"
// });
// cuentas.push({
//     "email" : "johan4@gmail.com",
//     "password" : "654123"
// });

async function cargarUsuarios(){
    let url = "http://localhost:3005/usuarios";
    let usuarios = await fetch(url);
    let usuarios2 = await usuarios.json();
    // let usuarios = await fetch(url)
    //                 .then((response) => {
    //                     return response.json();
    //                 }).then((data) => {
    //                     usuarios2 = data.usuarios;
    //                     return data.usuarios;
    //                 }).catch(function(error){
    //                     console.log("El servidor no esta disponible");
    //                 });
    return usuarios2;
    
}

async function verificarCredenciales(){
    let correo = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(correo == "" || password == "")
        return alert("Favor de llenar las credenciales.");

    let users = await cargarUsuarios();
    let usuarios = users.usuarios;
    //console.log(users.usuarios);
    let index = usuarios.findIndex(u => u.correo.toLowerCase() == correo.toLowerCase());
    console.log(index);
    if(index != -1)
    {
        if(usuarios[index].password == password){
            //console.log("Inicio de sesion correcto");
            // let login = document.getElementById("login");
            // login.hidden = true;
            // let loggedIn = document.getElementById("loggedIn");
            // loggedIn.hidden = false;
            // loggedIn.innerHTML += `
            //     <div class="font-weight-bolder text-info text-gradient">
            //         Bienvenido ${correo}
            //     </div>
            //     <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0" onclick="cerrarSesion()">Cerrar Sesion</button>
            // `;
            // Haciendo lo mismo de arriba pero con jquery;
            $('#login').prop('hidden',true);
            $('#loggedIn').prop('hidden',false);
            $('#loggedIn').html(`
                <div class="font-weight-bolder text-info text-gradient">
                    Bienvenido ${correo}
                </div>
                <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0" onclick="cerrarSesion()">Cerrar Sesion</button>
            `);
        }
        else
        {
            alert("Las credenciales no son correctas.");
        }
    }
    else {
        alert("Las credenciales no son correctas2.");
    }
    
}
function cerrarSesion(){
    // let login = document.getElementById("login");
    // login.hidden = false;
    // let loggedIn = document.getElementById("loggedIn");
    // loggedIn.innerHTML = "";
    // loggedIn.hidden=true;
    // document.getElementById("email").value = "";
    // document.getElementById("password").value = "";
    // Lo mismo que lo de arriba pero con JQuery
    $('#login').prop('hidden',false);
    $('#loggedIn').html('');
    $('#loggedIn').prop('hidden',true);
    $("#email").val('');
    $("#password").val('');
}