'use strict'
var Alumno = require('../models/alumno');

//post

function guardar_alumno(req,res){

    let alumno = new Alumno()

    alumno.nombre = req.body.nombre
    let rutreq = req.body.rut
    alumno.rut = rutreq
    Alumno.find({rutreq}, (err,alumno1) => {
        if(alumno1){
            return res.status(200).send({message: 'El alumno ya existe'})
        }else{ 
            alumno.save ((err,alumno) =>{
                if(err) res.status(400).send('Error al guardar el alumno')
        
                res.status(200).send({alumno:alumno})
            })
        }
        
    })
}
module.exports = {
    guardar_alumno
}