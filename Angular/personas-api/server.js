const {response, request} = require("express");
const express = require("express"); // Requerimos el modulo de express
const mongo = require("mongodb").MongoClient;

const app = express(); // Se define una app de express
app.use(express.json()); // Middleware
const url = "mongodb://localhost:27017";

 const cors = require('cors');
const { ObjectId } = require("mongodb");
    app.use(cors({
        origin: '*'
    }));

let db 
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err, client) => {
    if(err){
        console.log(err);
        return;
    }
    db = client.db("cursojavascript");
    db2 = client.db("angulardb");
    db3 = client.db("adminprodb");
    console.log("Conectado a la BD");
    alumnos = db.collection("alumnos");
    autores = db.collection("autores");
    usuarios = db.collection("usuarios");
    personas = db2.collection("personas");
    vuelos = db2.collection("vuelos");
    usersAdminPro = db3.collection("users");
});


app.get("/demo", (request,response) => {
    console.log("Se ejecuto la ruta demo...");
    response.status(200).json({ok:true});
});

app.get("/alumnos", (request,response) => {
    console.log("Se ejecuto la ruta alumnos...");
    alumnos.find().toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumnos:items});
    })
});

app.get("/users-adminpro", (request,response) => {
    console.log("Se ejecuto la ruta users-adminpro...");
    usersAdminPro.find().toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({usuarios:items});
    })
});

app.get("/users-adminpro/:email/:password", (request,response) => {
    console.log("Se ejecuto la ruta user-adminpro...");
    usersAdminPro.findOne({email:request.params.email, password:request.params.password}, function(err, usuario) {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        if(usuario != null)
            response.status(200).json(true);
        else{
            response.status(200).json(false);git 
        }
    });
});

app.post("/users-adminpro", (request,response) => {
    usersAdminPro.insertOne({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password
    }, (err, result) =>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({usuario:result});
    });
    console.log("Se agrego un usuario a adminprodb.");
});

app.get("/personas", (request,response) => {
    console.log("Se ejecuto la ruta personas...");
    personas.find().toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({personas:items});
    })
});

app.get("/personas/:id", (request,response) => {
    console.log("Se ejecuto la ruta persona...");
    let personaId = request.params.id;
    personas.findOne({id:"alumnoId"}, function(err, alumno) {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumno:alumno});
    });
});

app.get("/vuelos", (request,response) => {
    console.log("Se ejecuto la ruta vuelos...");
    vuelos.find().toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({vuelos:items});
    })
});

app.post("/vuelos", (request,response) => {
    vuelos.insertOne({
        numeroVuelo: request.body.numeroVuelo,
        fecha: request.body.fecha,
        horario: request.body.horario,
        origen: request.body.origen,
        destino: request.body.destino
    }, (err, result) =>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({vuelo:result});
    });
    console.log("Se agrego un vuelo.");
});

app.get("/autores/:puesto", (request,response) => {
    console.log("Se ejecuto la ruta autores con filtro...");
    let filtro = "";
    if(request.params.puesto != "All")
        filtro = request.params.puesto;
    autores.find({puesto:filtro}).toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({autores:items});
    })
});

app.get("/autores/", (request,response) => {
    console.log("Se ejecuto la ruta autores...");
    autores.find().toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({autores:items});
    })
});


// let ObjectId = require('mongodb').ObjectId;
app.get("/alumnos/:id", (request,response) => {
    console.log("Se ejecuto la ruta alumno...");
    let alumnoId = request.params.id;
    alumnos.findOne({_id:ObjectId(alumnoId)}, function(err, alumno) {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumno:alumno});
    });
    // alumnos.find().toArray((err,items) => {
    //     if(err){
    //         console.log(err);
    //         response.status(500).json({err:err});
    //         return;
    //     }
    //     response.status(200).json({alumno:items[alumnoId]});
    // });
});

app.post("/alumnos", (request,response) => {
    alumnos.insertOne({
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        ciudad: request.body.ciudad
    }, (err, result) =>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({ok:true});
    });
    console.log("Se agrego un alumno.");
});

app.post("/autores", (request,response) => {
    autores.insertOne({
        nombre: request.body.nombre,
        correo: request.body.correo,
        foto: request.body.foto,
        departamento: request.body.departamento,
        puesto: request.body.puesto,
        fechaIngreso: request.body.fechaIngreso,
        status: request.body.status
    }, (err, result) =>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({ok:true});
    });
    console.log("Se agrego un autor.");
});

app.get("/usuarios", (request,response) => {
    console.log("Se ejecuto la ruta usuarios...");
    usuarios.find().toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({usuarios:items});
    })
});

app.post("/usuarios", (request,response) => {
    usuarios.insertOne({
        correo: request.body.correo,
        password: request.body.password,
    }, (err, result) =>{
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({ok:true});
    });
    console.log("Se agrego un usuario.");
});

app.listen(3005, () => {
    console.log("Escuchando en el puerto 3005...");
});