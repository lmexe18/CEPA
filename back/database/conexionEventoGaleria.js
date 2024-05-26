'use strict';
const { Sequelize, where } = require('sequelize');
const models = require('../models/index');

class ConexionEventoGaleria {

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
        this.conectar();
    }

    conectar() {
        this.db.authenticate().then(() => {
        }).catch((error) => {
        });
    }

    desconectar() {
        process.on('SIGINT', () => {
            this.db.close()
                .then(() => {
                    process.exit(0);
                })
                .catch((error) => { 
                    process.exit(1);
                });
        });
    }

    async getEventoGalerias() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.EventoGaleria.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getEventoGaleriaPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.EventoGaleria.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postEventoGaleria(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.EventoGaleria.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteEventoGaleria(id) {
        this.conectar();
        let resultado;
        try {
            const galeria = await models.EventoGaleria.findByPk(id);
            if (!galeria) {
                throw new Error(`Galeria con ID ${id} no encontrado`);
            }
            resultado = await galeria.destroy();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getGaleriaDeEvento(id){
        this.conectar()
        let galeria = []
        try {
            galeria = await models.EventoGaleria.findAll({
                where: {
                    idEvento: id
                }
            })
        } catch (error){
        } finally {
            this.desconectar()
        }
        return galeria
    }
}

module.exports = ConexiontoEventoGaleria;