'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var personaController = require('../controllers/personaController');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo post para el método de personas
api.post('/personas', personaController.guardar);
 
// Exportamos la configuración
module.exports = api;
