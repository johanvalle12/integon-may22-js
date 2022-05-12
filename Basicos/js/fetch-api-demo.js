//const fetch = require('node-fetch');

function demoFetchAPI(){
    let url = "http://localhost:3005/autores";

    fetch(url)
        .then((response) => {
            return response.json();
        }).then((data) => {
            let autores = data.autores;
            console.log(autores.length);
            autores.forEach(element => {
                console.log(element.nombre);
            });
        }).catch(function(error){
            console.log("El servidor no esta disponible");
        });

}

demoFetchAPI();