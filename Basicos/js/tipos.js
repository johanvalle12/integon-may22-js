//'use strict' // Se utiliza para indicar que no se pueden utilizar variables sin antecederles la palabra "var" o "let" como en el caso de prueba.
var variable = "Johan Osvaldo Valle Cardenas";
console.log(variable);
console.log(typeof(variable));
console.log(`El nombre del usuario es: ${variable} segun el`);

variable = 100.23;
console.log(variable);
console.log(typeof(variable));

variable = false;
console.log(variable);
console.log(typeof(variable));

variable = {
    "nombre" : "Johan",
    "ciudad" : "Ensenada",
    "profesion" : "Computologo"
};
console.log(variable);
console.log(typeof(variable));

variable = function(a, b) {
    if(a > b ) 
        return a;
    else 
        return b;
}
console.log(variable);
console.log(variable(1,2));
console.log(typeof(variable));

variable = new Date();
console.log(variable);
console.log(typeof(variable));

prueba = 24;
console.log(prueba);

let dato1 = 100;
let dato2 = 200;
let dato3 = 50;

if(dato2 > dato1 && dato2 > dato3)
    console.log("Se cumple la condicion");