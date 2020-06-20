'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var persona_routes = require('./routes/personaRoute');
const mongoose = require('mongoose')




app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api', persona_routes);

mongoose.connect('mongodb+srv://olakase1998:olakase1998@cluster0-79txb.azure.mongodb.net/animales?retryWrites=true&w=majority', (err,res) => {

    app.listen(5000, () => {

        console.log("Esta corriendo en el puerto 5000")
    })
})


