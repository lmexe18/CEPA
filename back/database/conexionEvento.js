'use strict';

const { Sequelize } = require('sequelize');
const models = require('../models/index');

class ConexionEvento {

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
        });
    }

    conectar = () => {
        this.db.authenticate().then(() => {
     
        }).catch((error) => {
           
        });
    }

    desconectar = () => {
        process.on('SIGINT', () => this.db.close());
    }

    async getEventos(){
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Evento.findAll();
        } catch (error) {
            
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getEventosVisibles(){
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Evento.findAll({
                where: {
                    visibilidad: true
                }
            });
        } catch (error) {
            console.error('Error al obtener eventos: ', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }
    

    async getEventoPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Evento.findByPk(id);
        } catch (error) {

        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postEvento(body) {
        this.conectar();
        let resultado;
        try {
            const evento =  new models.Evento(body);
            await evento.save()
            resultado=evento.id
            return resultado;
        } catch (error) {
         
        } finally {
            this.desconectar();
        }
    }

    async updateEvento (id, body){
        this.conectar();
        let resultado;
        try {
            const evento = await models.Evento.findByPk(id);
            if (!evento) {
                throw new Error(`Evento con ID ${id} no encontrado`);
            }
            resultado = await evento.update(body);
        } catch (error) {
          
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteEvento(id){
        this.conectar();
        let resultado;
        try {
            const evento = await models.Evento.findByPk(id);
            if (!evento) {
                throw new Error(`Evento con ID ${id} no encontrado`);
            }
            resultado = await evento.destroy();
        } catch (error) {
            
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async plusMgEvento(id){
        this.conectar();
        let resultado;
        try {
            const evento = await models.Evento.findByPk(id);
            if (!evento) {
                throw new Error(`Evento con ID ${id} no encontrado`);
            } else {
                evento.mg = evento.mg + 1;
                resultado = await evento.save();
            }
        } catch (error) {
           
        } finally {
            this.desconectar();
        }
        return resultado;
    }
    
    async getNumAsistentesEvento(id){
        this.conectar();
        let resultado;
        try {
            const evento = await models.Evento.findByPk(id); 
            resultado = evento.numAsistentes
        } catch (error) {
    
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteAsistenteEvento(id){
        this.conectar()
        let resultado
        try {
            const evento = await models.Evento.findByPk(id)
            evento.numAsistentes = evento.numAsistentes - 1
            resultado = await evento.save()
        } catch (error) {

        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async putAsistenteEvento(id){
        this.conectar()
        let resultado
        try {
            const evento = await models.Evento.findByPk(id)
            evento.numAsistentes = evento.numAsistentes + 1
            resultado = await evento.save()
        } catch (error) {
      
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getEventoPorTipo(idTipo){
        this.conectar()
        let resultado
        try {
            const evento = await models.Evento.findAll(
                {
                    where: {
                        tipo: idTipo
                    }
                }
            )
            resultado = evento
        } catch (error) { 
        } finally{
            this.desconectar()
        }
        return resultado;
    }
}

module.exports = ConexionEvento;
