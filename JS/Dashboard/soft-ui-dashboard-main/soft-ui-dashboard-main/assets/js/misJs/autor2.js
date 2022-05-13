var Autor = /** @class */ (function () {
    function Autor(nombre, correo, foto, puesto, departamento, fechaIngreso, status) {
        this.nombre = nombre;
        this.correo = correo;
        this.foto = foto;
        this.departamento = departamento;
        this.puesto = puesto;
        this.fechaIngreso = fechaIngreso;
        this.status = status;
    }
    Autor.prototype.getNombre = function () {
        return this.nombre;
    };
    Autor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Autor.prototype.getCorreo = function () {
        return this.correo;
    };
    Autor.prototype.setCorreo = function (correo) {
        this.correo = correo;
    };
    Autor.prototype.getFoto = function () {
        return this.foto;
    };
    Autor.prototype.setFoto = function (foto) {
        this.foto = foto;
    };
    Autor.prototype.getDepartamento = function () {
        return this.departamento;
    };
    Autor.prototype.setDepartamento = function (departamento) {
        this.departamento = departamento;
    };
    Autor.prototype.getPuesto = function () {
        return this.puesto;
    };
    Autor.prototype.setPuesto = function (puesto) {
        this.puesto = puesto;
    };
    Autor.prototype.getFechaIngreso = function () {
        return this.fechaIngreso;
    };
    Autor.prototype.setFechaIngreso = function (fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    };
    Autor.prototype.getStatus = function () {
        return this.status;
    };
    Autor.prototype.setStatus = function (status) {
        this.status = status;
    };
    return Autor;
}());
