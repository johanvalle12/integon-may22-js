type Registro = [number, string, boolean];
let arregloRegistro:Array<Registro> = [];

let mensaje:string = "Hola Mundo";
let dato:number = 5;
let encendido:boolean = false;
let otracadena:string = "";
let unavariable:number = 1;
let ejemplo1:Registro, ejemplo2:Registro, ejemplo3:Registro;

ejemplo1 = [10, "cadena1", true];
ejemplo2 = [20, "cadena2", false];
ejemplo3 = [30, "cadena3", true];

arregloRegistro.push(ejemplo1);
arregloRegistro.push(ejemplo2);
arregloRegistro.push(ejemplo3);

function imprimirRegistros(arreglo:Array<Registro>):void {
    for (let registro of arregloRegistro){
        console.log(registro);
    }
}

imprimirRegistros(arregloRegistro);

console.log(mensaje);

// let encabezado = document.createElement("h1");
// encabezado.textContent = mensaje;
// document.body.appendChild(encabezado);