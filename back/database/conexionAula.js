require('dotenv').config()
const bcrypt = require('bcrypt')
const { model } = require('mongoose')
const {
    Sequelize,
    sequelize,
    Op,
    where
} = require('sequelize')
const { asistenciaExiste } = require('../middlewares/asistenciasMid.js')
const models = require('../models/index.js')

class ConexionAula {
    constructor() {
        this.db = new Sequelize(process.env.DB_DEV, process.env.DB_USER, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
        })
    }

    conectar = () => {
        this.db.authenticate().then(() => {
        }).catch((error) => {
        })
    }
    desconectar = () => {
        process.on('SIGINT', () => conn.close())
    }

    async getAulas (){
        this.conectar()
        let resultado = []
        try {
            resultado = await models.Aula.findAll()  
        } catch (error) {
        } finally {
            this.desconectar()
        }
        return resultado
    }

    async getAulaPorId (id){
        this.conectar()
        let resultado 
        try {
            let aula = await models.Aula.findByPk(id)
            if (!aula){
                throw new Error('No se encontró el aula con el id: ' + id)
            } else {
                resultado = aula
            }
        } catch (error) {
        }
        finally {
            this.desconectar()
        }
        return resultado
    }

    async getAulaPorNombre (nombreAula){
        this.conectar()
        let resultado
        try {
            let aula = await models.Aula.findOne({
                where: { 
                    nombre: nombreAula 
                }
            })
            if (!aula) {
                throw new Error('No se encontró el aula con el nombre: ' + nombreAula)
            } else {
                resultado = aula
            }
            return resultado
        } catch (error) {
        } finally {
            this.desconectar()
        }
        return resultado
    }

    async postAula (body){
        this.conectar()
        let resultado 
        try {
            resultado = await models.Aula.create(body)
        } catch (error) {
        } finally {
            this.desconectar()
        }
        return resultado
    }

    async updateAula (idAula, body){
        this.conectar();
        let resultado;
        try {
            resultado = await models.Aula.update(body,{
                where:{
                    id:idAula
                }
            })
        } catch (error) {
        } finally {
            this.desconectar()
        }
        return resultado
    }
    
    async deleteAula(id) {
        this.conectar()
        let resultado
        try {
            this.conectar();
            let aula = await models.AulaEspecial.findByPk(id);
            if (!aula) {
                throw new Error('No se encontró el aula con el id: ' + id)
            } else {
                resultado = await aula.destroy()
            }
        } catch (error) {
        } finally {
            this.desconectar()
        }
    }

}

module.exports = ConexionAulaEspecial