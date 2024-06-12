'use strict';
const { Sequelize, where } = require('sequelize');
const models = require('../models/index');

class ConexionNoticiaGaleria {

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

    async getNoticiaGalerias() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.NoticiaGaleria.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getNoticiaGaleriaPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.NoticiaGaleria.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postNoticiaGaleria(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.NoticiaGaleria.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteNoticiaGaleria(id) {
        this.conectar();
        let resultado;
        try {
            const galeria = await models.NoticiaGaleria.findByPk(id);
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

    async getGaleriaDeNoticia(id){
        this.conectar();
        let galeria = [];
        try {
            galeria = await models.NoticiaGaleria.findAll({
                where: {
                    idNoticia: id
                }
            });
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return galeria;
    }
}

module.exports = ConexionNoticiaGaleria;