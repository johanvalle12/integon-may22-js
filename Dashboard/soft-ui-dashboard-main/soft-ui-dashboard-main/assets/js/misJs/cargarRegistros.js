$(document).ready(function () {
    cargarAutores();
});

function cargarAutores(){
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: 'http://localhost:3005/autores',
        success: function (data) {
            //console.log(data.autores)
            var html = "";
            $.each(data.autores, function(index, autor) {
                // console.log(autor);
                html += `<tr>
                            <td>
                                <div class="d-flex px-2 py-1">
                                    <div>
                                    <img src="${autor.foto}" class="avatar avatar-sm me-3" alt="user1">
                                    </div>
                                    <div class="d-flex flex-column justify-content-center">
                                    <h6 class="mb-0 text-sm">${autor.nombre}</h6>
                                    <p class="text-xs text-secondary mb-0">${autor.correo}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p class="text-xs font-weight-bold mb-0">${autor.puesto}</p>
                                <p class="text-xs text-secondary mb-0">${autor.departamento}</p>
                            </td>`;
                if(autor.status.toLowerCase() == "online"){
                    html += `<td class="align-middle text-center text-sm">
                                <span class="badge badge-sm bg-gradient-success">${autor.status}</span>
                            </td>`;
                }
                else
                {
                    html += `<td class="align-middle text-center text-sm">
                                <span class="badge badge-sm bg-gradient-secondary">${autor.status}</span>
                            </td>`;
                }
                            

                html += `<td class="align-middle text-center">
                                <span class="text-secondary text-xs font-weight-bold">${autor.fechaIngreso}</span>
                            </td>
                            <td class="align-middle">
                            <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Edit
                            </a>
                            </td>
                        </tr>`;
            });
            $('#listaAutores').html(html);
        }
    });
}