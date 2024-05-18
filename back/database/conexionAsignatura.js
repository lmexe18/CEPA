'use strict';
const { Sequelize } = require('sequelize');
const models = require('../models/index');

class ConexionAsignatura {

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

    async getAsignaturas() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Asignatura.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getAsignaturaPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Asignatura.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postAsignatura(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Asignatura.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async updateAsignatura(id, body) {
        this.conectar();
        let resultado;
        try {
            let asignatura = await models.Asignatura.findByPk(id);
            if (!asignatura) {
                throw new Error(`Asignatura con ID ${id} no encontrada`);
            } else {
                resultado = await asignatura.update(body);
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteAsignatura(id) {
        this.conectar();
        let resultado;
        try {
            const asignatura = await models.Asignatura.findByPk(id);
            if (!asignatura) {
                throw new Error(`Asignatura con ID ${id} no ha sido encontrada`);
            }
            resultado = await asignatura.destroy();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionAsignatura;
