const {response,request} = require('express');
const Conexion = require('../database/conexionUsuario');
const bcrypt = require('bcrypt');
const {generarJWT} = require('../helpers/generate_jwt')
const ConexionRol=require('../database/conexionRolUsuario')

const login =  (req, res = response) => {
    const {email, password} = req.body;
    try{
        const conx = new Conexion();
        u = conx.checkLogin(email)    
            .then( usu => {
                bcrypt.compare(password, usu.password, (err, result) => {
                    if (result) {
                        conx.getRolUsuarioPorId(usu.id)
                        .then(roles=>{
                            let r=[]
                            for(let i=0;i<roles.rolesAsignados.length;i++){
                                r.push(roles.rolesAsignados[i].rol.nombre)
                            }
                            const token = generarJWT(usu.id,r,usu.nombre)
                            res.status(200).json({token});
                
                        })
                    } else {
                        res.status(500).json({
                            'msg':'La contraseña no es válida.'
                        });
                    }
                 })
                 ;
            })
            .catch( err => {
                res.status(500).json({
                    'msg':'Login incorrecto.',
                    'error':err
                });
            });
    }
    catch(error){
        res.status(500).json({
            'msg':'Error en el servidor.',
            'error':error
        });
    }
    
}

const register =  (req, res = response) => {
    try{
        const conx = new Conexion();
        conx.postUsuario(req.body)    
        .then( usu => {
            let data={
                idUsuario: usu,
                idRol: 4
            }
                const conxRol=new ConexionRol()
                a=conxRol.postRolUsuario(data)
                .then(a=>{
                    const token = generarJWT(usu,['Usuario'],req.body.nombre)
                    res.status(200).json({
                        msg:'Registro correcto',
                        token
                    });
                })
                .catch(err=>{
                    res.status(400).json({
                        msg:'Usuario registrado sin rol',
                        error:err
                    })
                })
            })
            .catch( err => {
                res.status(500).json({
                    'msg':'Error en el servidor.',
                    'msg':err
                });
            });
    }
    catch(error){ 
        res.status(500).json({
            'msg':'Error en el servidor.',
            'error':error
        });
    }
    
}

module.exports = {
  login,
  register
}