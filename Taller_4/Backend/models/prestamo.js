'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const prestamoSchema = Schema (
    {
        libro : {type: Schema.ObjectId, ref: 'libro'},
        alumnos : {type: Schema.ObjectId, ref: 'alumnos'},
        fecha_inicio : {type: Date},
        fecha_programacion : {type: Date},
        fecha_devolucion : {type: Date}
    }    
)

module.exports = mongoose.model('prestamo',prestamoSchema)