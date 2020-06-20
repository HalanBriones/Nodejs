'use strict'
 
// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Persona = require('../models/persona');
 
// Creamos un método en el controlador, en este caso una accion de pruebas
function guardar(req, res){
 
    // Devolvemos una respuesta en JSON
//let = variable local // crear una variable tipo persona
    persona.nombre = req.body.nombre
    persona.apellido = req.body.apellido
    persona.edad = req.body.edad
    persona.rut = req.body.rut

    persona.save((err,personastore) => {

        if(err) res.status(500).send('Error base de datos> ${err}')

        res.status(200).send({ persona : personastore })

    })
}

function buscar (req,res){

    //params -> viene en la ruta sin nombre de parametro 
    //query -> viene con nombre de parametro en forma de get 

    let nombrereq = req.query.nombre
    let rutreq = req.query.rut
    console.log(rutreq);

    Persona.find({nombre: nombrereq, rut: rutreq}, (err, persona) => {

        if(!persona) return res.status(404).send({message: 'Error persona no existe'})

        res.status(200).send({ persona })

    })
}

function buscarid (req,res){

    let idpersona = req.params.id
    Persona.findById(idpersona, (err,persona) => {

        if(err) return res.status(500).send({message: 'error al realizar la peticion' })

        if(!persona) return res.status(404).send({message:'No se encuentra la persona'})

        res.status(200).send({persona})
    })
}
// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
module.exports = {
    guardar,
    buscar,
    buscarid
};
