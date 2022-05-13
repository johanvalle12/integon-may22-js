let numeros = [8,9,12,45];

let condiciones = [true, false, true, true, true, false];

numeros.push(84);

console.log(numeros);
console.log(numeros[0]);
console.log(numeros[numeros.length-1]);
console.log(numeros.length);

for(index=0;index<numeros.length;index++){
    console.log(numeros[index]);
}

numeros.forEach(function(x){
    console.log(x);
});

condiciones.forEach(function(x){
    console.log(x);
});

let personas = [];

personas.push({
    "nombre" : "Johan",
    "apellido" : "Valle"
});

personas.push({
    "nombre" : "Osvaldo",
    "apellido" : "Cardenas"
});

personas.push({
    "nombre" : "John",
    "apellido" : "Valley",
    "edad" : 1998
});

personas.push({
    "nombre" : "Triangulo",
    "base" : 123.456,
    "altura" : 987.654
});

personas.push(12);

personas.forEach(function(persona){
    console.log(persona);
});