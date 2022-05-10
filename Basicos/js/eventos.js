function generateUI(){
    let divPrincipal = document.getElementById("contenido");
    let boton1 = document.createElement("button");
    let boton2 = document.createElement("button");

    boton1.innerText = "Boton1";
    boton2.innerText = "Boton2";

    divPrincipal.appendChild(boton1);
    divPrincipal.appendChild(boton2);

    boton1.addEventListener("click", function(e){
        console.log("Boton1 was clicked");
    });

    boton2.addEventListener("click", e => {
        console.log("Boton2 was clicked");
    });

    boton2.addEventListener("click", clickGeneral);
}

function clickGeneral(){
    alert("Click General");
}