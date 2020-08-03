'use strict'

var express = require('express')
var usuarioController = require('../controllers/usuarioController')
var api = express.Router()

api.post('/registrar',usuarioController.registrar)
api.get('/mostrar/:id',usuarioController.mostrar_id)
api.delete('/eliminar/:id',usuarioController.eliminar)
api.post('/login',usuarioController.login)

module.exports = api
