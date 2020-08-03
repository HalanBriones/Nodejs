'use strict'

var Usuario = require('../models/usuario'); 
const libro = require('../models/libro');
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken');

function registrar(req,res){

    Usuario.findOne({correo: req.body.correo} ,(err,usuario)=>{

        if(!usuario){
            
            let usuario = new  Usuario()
    
            usuario.nombre = req.body.nombre
            usuario.apellido = req.body.apellido
            usuario.correo = req.body.correo
            usuario.clave = req.body.clave
        
            usuario.save((err,user) => {
                if(err) res.status(400).send('Error al registrar')    
            })

            res.status(200).send({ message: 'usuario registrado', usuario: usuario})
        }else{
            res.status(400).send({message: 'El usuario ya existe'})
        }
    })    

}

function mostrar_id (req,res){

    let idreq = req.params.id

    Usuario.findById(idreq,(err,usuario) => {
        if(err) return res.status(400).send({message:'Error en la peticion'})
        
        if(!usuario) return res.status(404).send({message: 'No hay usuario con ese id'})
    
        res.status(200).send({usuario})
    })
}

function eliminar(req,res){

    let idreq = req.params.id

    Usuario.findById(idreq,(err,usuario)=>{
        if(err) return res.status(500).send({ message: 'Error al eliminar el usuario'})

        usuario.remove(err  =>{
            if(err) return res.status(500).send({ message: 'Error al eliminar el usuario'})

            res.status(200).send({message: 'Eliminación exitosa'})
        })
    })
}

function login(req,res){

    let correo = req.body.correo
    let clave = req.body.clave
    
      Usuario.findOne({
        correo: correo
      }).exec((err, usuario) => {
        if (err || !usuario) return res.status(400).send({ message: 'El usuario no existe'})
    
        bcrypt.compare(clave, usuario.clave, function (err, result) {
          if (result) {
            var token = jwt.sign({usuario}, 'clavesecreta');
            return res.status(200).send({
              token: token
            }) 
          } else {
            return res.status(404).send({ message: 'La contraseña no es correcta'})
          }
        })
      })

}

module.exports = {
   registrar,
    mostrar_id,
    eliminar,
    login
}