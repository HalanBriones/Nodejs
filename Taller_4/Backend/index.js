'use strict'
const { use } = require("./routes/routes");
const express = require('express')

const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
app.use(cors())
app.options('*', cors())

var routes = require('./routes/routes');

const mongoose = require('mongoose')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',routes)

mongoose.connect('mongodb+srv://olakase1998:olakase1998@cluster0-79txb.azure.mongodb.net/animales?retryWrites=true&w=majority',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },(err) =>{

    if(err) console.log(err)
    app.listen(5000,()=>{
    
        console.log('Funcionando en puerto 5000')
        
    })

    
})


