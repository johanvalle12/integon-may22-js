function AccesoApi() {
    console.log("Llamando a mi BD");
    const url = "http://localhost:3005/alumnos";

    let xhttp = new XMLHttpRequest(); // Se crea el objeto
    xhttp.open('GET', url);


    xhttp.setRequestHeader('Accept', 'application/json');
    
    // Se delega el evento onreadystatechange.
    xhttp.onreadystatechange = function() {
        if(this.readyState == 1) {
            console.log("Opened...");
        }
        if(this.readyState == 3) {
            console.log("Loading...");
        }
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.response);
            listarAlumnos(data);
        }
        if(this.readystate == 4 && this.status == 404) {
            console.log("No se pudo obtener la informacion de los alumnos.");
        }
    }
    xhttp.send();
}

AccesoApi();

function listarAlumnos(data) {
    console.log(JSON.stringify(data));
    let listaAlumnos = document.getElementById("ListaAlumnos");
    for(index = 0; index < data.alumnos.length; index ++) {
        listaAlumnos.innerHTML += `<li>
                                        ${data.alumnos[index].nombre} ${data.alumnos[index].apellido}
                                    </li>`;
    }
}

