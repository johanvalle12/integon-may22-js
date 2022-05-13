class Autor {
    private nombre:string;
    private correo:string;
    private foto: string;
    private departamento:string;
    private puesto:string;
    private fechaIngreso:string;
    private status:string;

    constructor(nombre:string, correo:string, foto:string, puesto:string, departamento:string, fechaIngreso:string, status:string){
        this.nombre = nombre;
        this.correo = correo;
        this.foto = foto;
        this.departamento = departamento;
        this.puesto = puesto;
        this.fechaIngreso = fechaIngreso;
        this.status = status;
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getCorreo(){
        return this.correo;
    }

    setCorreo(correo:string){
        this.correo = correo;
    }

    getFoto(){
        return this.foto;
    }

    setFoto(foto:string){
        this.foto = foto;
    }

    getDepartamento(){
        return this.departamento;
    }

    setDepartamento(departamento:string){
        this.departamento = departamento;
    }

    getPuesto(){
        return this.puesto;
    }

    setPuesto(puesto:string){
        this.puesto = puesto;
    }

    getFechaIngreso(){
        return this.fechaIngreso;
    }
    
    setFechaIngreso(fechaIngreso:string){
        this.fechaIngreso = fechaIngreso;
    }

    getStatus(){
        return this.status;
    }

    setStatus(status:string) {
        this.status = status;
    }
}