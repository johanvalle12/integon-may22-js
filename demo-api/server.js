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
    console.log("Conectado a la BD");
    alumnos = db.collection("alumnos");
    autores = db.collection("autores");
    usuarios = db.collection("usuarios");
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

app.get("/autores", (request,response) => {
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