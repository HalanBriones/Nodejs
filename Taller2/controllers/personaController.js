'use strict'
 
// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
//var Persona = require('../models/persona');
 
// Creamos un método en el controlador, en este caso una accion de pruebas
function guardar(req, res){

    //valido los datos que ingresan

    let rut = req.body.rut
    let nombre = req.body.nombre
    let apellido = req.body.apellido
    let direccion = req.body.direccion
    let comuna = req.body.comuna
    let ciudad = req.body.ciudad
    let pais = req.body.pais
    let fecha_n = req.body.fecha_n

    if(rut == null){ 
        res.status(400).send("no ingreso el rut")
    }else{
        if(nombre == null){
            res.status(400).send("no ingreso el nombre")
        }else{
            if(apellido == null){
                res.status(400).send("no ingreso el apellido")
            }else{
                if(comuna == null){
                    res.status(404).send("no ingreso la comuna")
                }else{
                    if(ciudad==null){
                        res.status(404).send("no ingreso la ciudad")
                    }else{
                        if(pais == null){
                            res.status(404).send("no ingreso el pais")
                        }else{
                            if(fecha_n == null){
                                res.status(404).send("no ingreso fecha de nacimiento")
                            }
                        }
                    }
                }
            }
        }
    }

    
    // Devolvemos una respuesta en JSON
    res.status(200).send({persona:req.body});
}
 
// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero
module.exports = {
    guardar
};
