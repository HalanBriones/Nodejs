'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var libro_routes = require('./routes/libroRoute');
const mongoose = require('mongoose')


app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/api', libro_routes);

mongoose.connect('mongodb+srv://olakase1998:olakase1998@cluster0-79txb.azure.mongodb.net/animales?retryWrites=true&w=majority', (err,res) => {
    app.listen(5000,()=>{
        console.log("Funcionando en puerto 5000")
    })
})    