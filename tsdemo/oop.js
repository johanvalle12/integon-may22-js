class Empleado {
    constructor(nombre, telefono) {
        this.Nombre = nombre;
        this.Telefono = telefono;
    }
    getNombre() {
        return `El nombre del empleado es: ${this.Nombre}`;
    }
    setNombre(nombre) {
        this.Nombre = nombre;
    }
    getTelefono() {
        return this.Telefono;
    }
    setTelefono(telefono) {
        this.Telefono = telefono;
    }
}
class Manager extends Empleado {
    constructor(nombre, telefono, noEmpleadosACargo) {
        super(nombre, telefono);
        this.noEmpleadosACargo = noEmpleadosACargo;
    }
    getNoEmpleadosACargo() {
        return this.noEmpleadosACargo;
    }
    setNoEmpleadosACargo(numero) {
        this.noEmpleadosACargo = numero;
    }
}
let empleado1 = new Empleado("Johan Valle", "6461234567");
console.log(empleado1.getNombre());
console.log(empleado1.getTelefono());
let manager1 = new Manager("Osvaldo Cardenas", "6469876543", 24);
console.log(manager1);
//# sourceMappingURL=oop.js.map