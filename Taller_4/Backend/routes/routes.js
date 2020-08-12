'use strict'

var express = require('express')
var usuarioController = require('../controllers/usuarioController')
var libroController = require('../controllers/libroController')
var alumnoController = require('../controllers/alumnoController')
var api = express.Router()

//usuario
api.post('/registrar',usuarioController.registrar)
api.get('/mostrar/:id',usuarioController.mostrar_id)
api.delete('/eliminar/:id',usuarioController.eliminar)
api.post('/login',usuarioController.login)

//libros
api.post('/libro',libroController.guardar)
api.get('/libro',libroController.seleccion)
api.get('/libro-ano',libroController.seleccion_año_idioma)
api.get('/libro/:id',libroController.seleccionid)
api.delete('/libro/:id',libroController.eliminar)
api.put('/libro/:id',libroController.update)

//alumno

api.post('/alumno',alumnoController.guardar_alumno)

module.exports = api