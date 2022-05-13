// Todas las caracteristicas de un Animal relevantes para nuestro sistema
// se encapsulan en una clase que abstrae dichas caracteristicas.
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    consultaDetalles(){
        return (`El nombre del animal es ${this.nombre} y su tipo es ${this.tipo}`);
    }
}

class Mamifero extends Animal {
    constructor(nombre, tipo, especial) {
        super(nombre, tipo);
        this.especial = especial;
    }
    consultaDetalles(){
        return (`El nombre del animal es ${this.nombre}, su tipo es ${this.tipo} y el campo especial ${this.especial}`);
    }
}

function imprimeAnimal(animal){
    try{
        console.log(animal.consultaDetalles());
    }
    catch(ex){
        console.log("Se recibio un objeto que no es animal...");
    }
}

// Se instancia la clase Animal y se crea un objeto de tipo Animal.
let animal1 = new Animal("Perro", "Mamifero");
let animal2 = new Animal("Gato", "Mamifero");
let mamifero1 = new Mamifero("Ballena", "Mamifero", "Agua");

// console.log(animal1.consultaDetalles());
// console.log(animal2.consultaDetalles());
imprimeAnimal(animal1);
imprimeAnimal(animal2);
imprimeAnimal(mamifero1);
imprimeAnimal(10000);