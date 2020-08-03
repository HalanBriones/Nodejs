'use strict'

const mongoose = require('mongoose')
/* En ves de requerir solo bcrypt lo cambie por bcrypt-nodejs */
const bcrypt = require('bcrypt-nodejs'); 
const usuarioSchema = new mongoose.Schema({
    
        nombre:String,
        apellido:String,
        correo:{
            type:String,
            unique: true,
            required: true
        },
        clave:{
            type:String,
            required: true
        }        
})

usuarioSchema.pre('save', function (next) {
    const usuario = this;
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        next(err);
      }
      bcrypt.hash(usuario.clave, salt, null, (err, hash) => {
        if (err) {
          next(err)
        }
        usuario.clave = hash;
        next();
      })
    });
  })

module.exports =  mongoose.model('usuario',usuarioSchema)