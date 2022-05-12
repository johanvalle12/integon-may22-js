function AccesoApi() {
    console.log("Llamando a SWAPI");
    const url = "https:/swapi.dev/api/planets/60";

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
            console.log(JSON.stringify(data));
            console.log(data.name);
            console.log(data.rotation_period);
        }
        if(this.readystate == 4 && this.status == 404) {
            console.log("Ese planeta no existe");
        }
    }
    xhttp.send();
}

AccesoApi();
