'use strict'
 
var Libro = require('../models/libro');
 
// Post
function guardar(req, res){
    
    let libro = Libro()

    libro.nombre_libro = req.body.nombre_libro
    libro.autor = req.body.autor
    libro.ano_publicacion = req.body.ano_publicacion
    libro.idioma = req.body.idioma
    
    libro.save((err,libroguardado) => {

        if(err) res.status(400).send('Error al ingresar el libro a la BD')

        res.status(200).send({libro:libroguardado})

    })

}

//Get

function seleccion (req,res) {

    let libro = new Libro()
    
    libro.find({} , (err,libro) => {

        if(!libro) res.status(400).send('No hay libros')
        res.status(200).send({libro})
    })
}


 
// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
module.exports = {
    guardar,
    seleccion
};
