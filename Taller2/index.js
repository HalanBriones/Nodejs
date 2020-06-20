'use strict'
const express = require('express') 
const bodyParser = require('body-parser')
const app = express()
var persona_routes = require('./routes/personaRoute');


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.get('/hola',(req,res)=>{
    res.status(200).send({mensaje:"Bienvenido"})
})



app.use('/api', persona_routes);


app.listen(3000,()=>{
    console.log("Funcionando en puerto 3000")
})