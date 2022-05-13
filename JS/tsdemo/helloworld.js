let arregloRegistro = [];
let mensaje = "Hola Mundo";
let dato = 5;
let encendido = false;
let otracadena = "";
let unavariable = 1;
let ejemplo1, ejemplo2, ejemplo3;
ejemplo1 = [10, "cadena1", true];
ejemplo2 = [20, "cadena2", false];
ejemplo3 = [30, "cadena3", true];
arregloRegistro.push(ejemplo1);
arregloRegistro.push(ejemplo2);
arregloRegistro.push(ejemplo3);
function imprimirRegistros(arreglo) {
    for (let registro of arregloRegistro) {
        console.log(registro);
    }
}
imprimirRegistros(arregloRegistro);
console.log(mensaje);
//# sourceMappingURL=helloworld.js.map