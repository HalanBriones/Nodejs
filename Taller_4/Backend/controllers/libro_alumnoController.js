'use strict'

var prestamo = require('../models/prestamo')


function guardarLibro_persona(req,res){

    let libroPersona = new prestamo();

    libroPersona.libro = req.body.libro
    libroPersona.alumnos = req.body.alumnos
    libroPersona.fecha_inicio = req.body.fecha_inicio
    libroPersona.fecha_programacion = req.body.fecha_programacion
    libroPersona.fecha_devolucion = req.body.fecha_devolucion

    libroPersona.save((err,prestamo) => {
        if(err) res.status(500).send({err})
        res.status(200).send({prestamo})
    })
}

function listar(req,res){

    prestamo.find()
        .populate('alumnos')
        .populate('libro')
        .exec((err,librosalumnos) =>{

            if(err) res.status(500).send({message:'no hay registrado prestamos'})
            res.status(200).send({librosalumnos})
        })    
}

module.exports = {
    guardarLibro_persona,
    listar
}