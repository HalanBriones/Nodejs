'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const alumnoSchema = Schema(
    {
        nombre:String,
        rut:{
            type: String,
            unique:true,
            required:true,
        }
        }

)

module.exports =   mongoose.model('alumno',alumnoSchema)