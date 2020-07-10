'use strict'

var Libro = require('../models/libro')

//post

function guardar(req,res){

    let libro = new Libro()

    libro.nombre_libro = req.body.nombre_libro
    libro.autor = req.body.autor
    libro.ano_publicacion = req.body.ano_publicacion
    libro.idioma = req.body.idioma

    libro.save ((err,libroguardado) =>{
        if(err) res.status(400).send('Error al guardar libro en la BD')

        res.status(200).send({libro:libroguardado})   
    })
}

//get 

function seleccion(req,res){

    Libro.find({}, (err,libro) => {
        if(!libro) res.status(400).send({message:'No hay libros'})

        res.status(500).send({libro})
    })
}
    //params -> viene en la ruta sin nombre de parametro 
    //query -> viene con nombre de parametro en forma de get 
function seleccion_año_idioma (req,res){
    let añoreq = req.query.ano_publicacion
    let idiomareq  = req.query.idioma
    Libro.find({ano_publicacion:añoreq,idioma:idiomareq}, (err,libro) =>{
        if(!libro) res.status(404).send({message:'No se encuetran libros con estas caracteristicas'})
        res.status(500).send({libro})
    })
}

function seleccionid (req,res){

    let idlibro = req.params.id

    Libro.findById(idlibro, (err,libro) => {
        if(err) return res.status(500).send({message:'Error en la petición'})
        
        if(!libro) return res.status(404).send({message:'No se encuentra el libro'})

        res.status(200).send({libro})
    })
}

//delete

function eliminar (req,res){

    let idreq = req.params.id

    Libro.findById(idreq,(err,libroeliminado) =>{
        if(err) res.status(500).send({message:'Error al borrar el libro:${err}'})

        libroeliminado.remove(err =>{
            if(err) res.status(500).send({message:'Error al borrar el libro:${err}'})

            res.status(200).send({message:'Eliminacion exitosa'})
        })
    })


}

//put

function update(req,res) {
    
    let idreq = req.params.id

    let update = req.body

    Libro.findByIdAndUpdate(idreq, update, (err,libroupdate) => {

        if(err) res.status(500).send({message:'Error al actualizar libro: ${err}'})

        res.status(200).send({ libro:libroupdate })
    })

}

module.exports = {
    guardar,
    seleccion,
    seleccion_año_idioma,
    seleccionid,
    eliminar,
    update
}