// function agregarAutor(){
//     let tablaAutor = document.getElementById("listaAutores");
//     tablaAutor.innerHTML += `<tr>
//                                 <td>
//                                     <div class="d-flex px-2 py-1">
//                                         <div>
//                                         <img src="../assets/img/me.jpg" class="avatar avatar-sm me-3" alt="user1">
//                                         </div>
//                                         <div class="d-flex flex-column justify-content-center">
//                                         <h6 class="mb-0 text-sm">Johan Valle</h6>
//                                         <p class="text-xs text-secondary mb-0">johanvalle@gmail.com</p>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     <p class="text-xs font-weight-bold mb-0">Administrator</p>
//                                     <p class="text-xs text-secondary mb-0">The Boss</p>
//                                 </td>
//                                 <td class="align-middle text-center text-sm">
//                                     <span class="badge badge-sm bg-gradient-success">Online</span>
//                                 </td>
//                                 <td class="align-middle text-center">
//                                     <span class="text-secondary text-xs font-weight-bold">10/05/22</span>
//                                 </td>
//                                 <td class="align-middle">
//                                 <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
//                                     Edit
//                                 </a>
//                                 </td>
//                             </tr>`;
//     // Una vez teniendo el elemento table del dom, se pueden insertar filas y columnas de la siguiente forma.
//     // tablaAutor.insertRows(-1) //-1 indica que se va a agregar una fila al final de la tabla.
//     // tablaAutor.insertCell(n) // n es el numero de columna donde se quiere insertar el codigo html.
//     // para escribir codigo utilizamos lo siguiente:
//     // tablaAutor.innerHTML("Aqui va el codigo html");
// }

// let authors = [];
// authors.push(new Autor("John Michael", "john@creative-tim.com", "../assets/img/team-2.jpg", "Manager", "Organization", "23/04/18", "online"));
// authors.push(new Autor("Alexa Liras", "alexa@creative-tim.com", "../assets/img/team-3.jpg", "Programator", "Developer", "11/01/19", "offline"));
// authors.push(new Autor("Laurent Perrier", "laurent@creative-tim.com", "../assets/img/team-4.jpg", "Executive", "Projects", "19/09/17", "online"));
// authors.push(new Autor("Michael Levi", "michael@creative-tim.com", "../assets/img/team-3.jpg", "Programator", "Developer", "24/12/08", "online"));
// authors.push(new Autor("Richard Gran", "richard@creative-tim.com", "../assets/img/team-2.jpg", "Manager", "Executive", "04/10/21", "offline"));
// authors.push(new Autor("Miriam Eric", "miriam@creative-tim.com", "../assets/img/team-4.jpg", "Programator", "Developer", "14/09/20", "offline"));
// authors.push(new Autor("Johan Valle", "johan@creative-tim.com", "../assets/img/me.jpg", "Programator", "Developer", "10/05/2022", "online"));

// let listaAutores = document.getElementById("listaAutores");
// listaAutores.innerHTML = "";
// for(i = 0; i < authors.length; i++){
//     listaAutores.innerHTML += `<tr>
//                                     <td>
//                                         <div class="d-flex px-2 py-1">
//                                             <div>
//                                             <img src="${authors[i].foto}" class="avatar avatar-sm me-3" alt="user1">
//                                             </div>
//                                             <div class="d-flex flex-column justify-content-center">
//                                             <h6 class="mb-0 text-sm">${authors[i].nombre}</h6>
//                                             <p class="text-xs text-secondary mb-0">${authors[i].correo}</p>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <p class="text-xs font-weight-bold mb-0">${authors[i].puesto}</p>
//                                         <p class="text-xs text-secondary mb-0">${authors[i].departamento}</p>
//                                     </td>
//                                     <td class="align-middle text-center text-sm">
//                                         <span class="badge badge-sm bg-gradient-success">${authors[i].status}</span>
//                                     </td>
//                                     <td class="align-middle text-center">
//                                         <span class="text-secondary text-xs font-weight-bold">${authors[i].fechaIngreso}</span>
//                                     </td>
//                                     <td class="align-middle">
//                                     <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
//                                         Edit
//                                     </a>
//                                     </td>
//                                 </tr>`;
// }

function agregarAutor(){
    if($('#txtNombre').val() == "" || $('#txtCorreo').val() == "" || $('#txtFoto').val() == "" ||
    $('#txtDepartamento').val() == "" || $('#txtPuesto').val() == "" || $('#txtFechaIngreso').val() == "" || $('#txtStatus').val() == "")
        return alert("Hay campos vacios en el formulario.");
    $.ajax({
        method: 'POST',
        dataType: 'json',
        contentType: "application/json",
        url: 'http://localhost:3005/autores',
        data: JSON.stringify({
            nombre: $('#txtNombre').val(),
            correo: $('#txtCorreo').val(),
            foto: $('#txtFoto').val(),
            departamento: $('#txtDepartamento').val(),
            puesto: $('#txtPuesto').val(),
            fechaIngreso: $('#txtFechaIngreso').val(),
            status: $('#txtStatus').val()
        }),
        success: function(data){
            console.log(data);
            $('#txtNombre').val('')
            $('#txtCorreo').val('')
            $('#txtFoto').val('')
            $('#txtDepartamento').val('')
            $('#txtPuesto').val('')
            $('#txtFechaIngreso').val('')
            $('#txtStatus').val('')
            $('#formularioAutor').hide();
            cargarAutores();
        }
    });
}

function mostrarFormularioAutor(){
    //let formulario = document.getElementById("formularioAutor");
    //formulario.style.display = "block";
    $('#formularioAutor').show();
}