'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var personaController = require('../controllers/personaController');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.post('/personas', personaController.guardar);
api.get('/personas', personaController.buscar);
api.get('/personabyid/:id', personaController.buscarid);
// Exportamos la configuración
module.exports = api;
