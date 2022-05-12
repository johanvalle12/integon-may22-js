class Empleado {
    public Nombre:string;
    
    private Telefono:string;

    constructor(nombre:string, telefono:string) {
        this.Nombre = nombre;
        this.Telefono = telefono;
    }

    getNombre() {
        return `El nombre del empleado es: ${this.Nombre}`
    }
    
    setNombre(nombre:string) {
        this.Nombre = nombre;
    }
    
    getTelefono() {
        return this.Telefono;
    }
    
    setTelefono(telefono:string) {
        this.Telefono = telefono;
    }
}

class Manager extends Empleado {
    private noEmpleadosACargo:number;

    constructor(nombre:string, telefono:string, noEmpleadosACargo:number){
        super(nombre, telefono);
        this.noEmpleadosACargo = noEmpleadosACargo;
    }

    getNoEmpleadosACargo() {
        return this.noEmpleadosACargo;
    }
    
    setNoEmpleadosACargo(numero:number) {
        this.noEmpleadosACargo = numero;
    }
}

let empleado1= new Empleado("Johan Valle", "6461234567");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());

let manager1 = new Manager("Osvaldo Cardenas", "6469876543", 24);
console.log(manager1);