function verificarFormulario(nombre, edad, ingreso){
    if(nombre == "" || !isNaN(parseInt(nombre)))
        return alert("Ingrese el nombre");
    if(edad == "")
        return alert("Ingrese la edad");
    if(ingreso == "")
        return alert("Ingrese el ingreso");
    
    let registro = {
        "nombre" : nombre,
        "edad" : edad,
        "ingreso" : ingreso
    };

    return registro;
}