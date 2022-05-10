function agregarAutor(){
    let tablaAutor = document.getElementById("authorTable");
    tablaAutor.innerHTML += `<tr>
                                <td>
                                    <div class="d-flex px-2 py-1">
                                        <div>
                                        <img src="../assets/img/me.jpg" class="avatar avatar-sm me-3" alt="user1">
                                        </div>
                                        <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-sm">Johan Valle</h6>
                                        <p class="text-xs text-secondary mb-0">johanvalle@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">Administrator</p>
                                    <p class="text-xs text-secondary mb-0">The Boss</p>
                                </td>
                                <td class="align-middle text-center text-sm">
                                    <span class="badge badge-sm bg-gradient-success">Online</span>
                                </td>
                                <td class="align-middle text-center">
                                    <span class="text-secondary text-xs font-weight-bold">10/05/22</span>
                                </td>
                                <td class="align-middle">
                                <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    Edit
                                </a>
                                </td>
                            </tr>`;

    // Una vez teniendo el elemento table del dom, se pueden insertar filas y columnas de la siguiente forma.
    // tablaAutor.insertRows(-1) //-1 indica que se va a agregar una fila al final de la tabla.
    // tablaAutor.insertCell(n) // n es el numero de columna donde se quiere insertar el codigo html.
    // para escribir codigo utilizamos lo siguiente:
    // tablaAutor.innerHTML("Aqui va el codigo html");
}