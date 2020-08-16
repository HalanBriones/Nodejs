'use strict'

var express = require('express')
var usuarioController = require('../controllers/usuarioController')
var libroController = require('../controllers/libroController')
var alumnoController = require('../controllers/alumnoController')
var libro_alumnoController = require('../controllers/libro_alumnoController')
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
api.post('/alumnos',alumnoController.guardar_alumno)
api.get('/alumnos',alumnoController.mostrar_alumno)
api.put('/alumnos/:id',alumnoController.editar_alumno)
api.delete('/alumnos/:id',alumnoController.eliminar_alumno)

//libro_persona
api.post('/prestamo',libro_alumnoController.guardarLibro_persona)
api.get('/prestamo',libro_alumnoController.listar)


module.exports = api