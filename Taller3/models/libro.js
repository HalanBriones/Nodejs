'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const libroSchema = Schema(
    {
        nombre_libro:String,
        autor:String,
        ano_publicacion:Number,
        idioma:{type:String, enum:['Espanol','Ingles']}
    }
)

module.exports =   mongoose.model('libro',libroSchema)