const { use } = require("./routes/libroRoute");

'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var libro_routes = require('./routes/libroRoute')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',libro_routes)

mongoose.connect('mongodb+srv://olakase1998:olakase1998@cluster0-79txb.azure.mongodb.net/animales?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },(err) =>{

    if(err) console.log(err)
    app.listen(5000,()=>{
    
        console.log('Funcionando en puerto 5000')
        
    })

    
})

