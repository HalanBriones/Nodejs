'use strict'

var express = require('express')
var libroController = require('../controllers/libroController')
var api = express.Router()

api.post('/libro',libroController.guardar)
api.get('/libro',libroController.seleccion)
api.get('/libro-ano',libroController.seleccion_año_idioma)
api.get('/libro/:id',libroController.seleccionid)
api.delete('/libro/:id',libroController.eliminar)
api.put('/libro/:id',libroController.update)
module.exports = api
