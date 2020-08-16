'use strict'
var Alumno = require('../models/alumno');

//post

function guardar_alumno(req,res){

    let alumno = new Alumno()
    alumno.nombre = req.body.nombre
    alumno.rut = req.body.rut
    alumno.save ((err,alumno) =>{
        if(err) res.status(400).send('Ya existe')
        
        res.status(200).send({alumno:alumno})
    })
}

function mostrar_alumno(req,res){

    Alumno.find({},(err,data) =>{
       if(err) res.status(404).send({message: 'No hay alumnos' })
       
       res.status(200).send({data})
    })
}

function editar_alumno(req,res){

    let idreq = req.params.id
    let update = req.body

    Alumno.findByIdAndUpdate(idreq, update, (err,alumnoupdate) => {

        if(err) res.status(500).send({message:'Error al editar alumno: ${err}'})

        res.status(200).send({ alumno:alumnoupdate })
    })

}

function eliminar_alumno(req,res){
    let idreq = req.params.id

    Alumno.findById({idreq},(err,eliminado) =>{

        if(err) res.status(500).send({message:'Error al eliminar el alumno'})

        eliminado.remove(err =>{
            if(err) res.status(500).send({message:'Error al eliminar el alumno'})

            res.status(200).send({message:'Eliminación exitosa'})
        })


    })
}
    
module.exports = {
    guardar_alumno,
    mostrar_alumno,
    editar_alumno,
    eliminar_alumno  
}