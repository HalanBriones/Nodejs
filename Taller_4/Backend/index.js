//const { use } = require("./routes/libroRoute");
const { use } = require("./routes/usuarioRoute");
'use strict'

const express = require('express')

const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
app.use(cors())
app.options('*', cors())
//var libro_routes = require('./routes/libroRoute')
var usuario_routes = require('./routes/usuarioRoute')
const mongoose = require('mongoose')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//app.use('/api',libro_routes)
app.use('/api',usuario_routes)

mongoose.connect('mongodb+srv://olakase1998:olakase1998@cluster0-79txb.azure.mongodb.net/animales?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },(err) =>{

    if(err) console.log(err)
    app.listen(5000,()=>{
    
        console.log('Funcionando en puerto 5000')
        
    })

    
})


