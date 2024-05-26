'use strict';

const { Sequelize } = require('sequelize');
const models = require('../models/index');

class ConexionReserva {
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

    async getReservas() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Reserva.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getReservaPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Reserva.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getReservasPorProfesor(id) {
        this.conectar();
        let resultado = []
        try {
            resultado = await models.Reserva.findAll({
                where: { idProfesor: id }
            });
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getReservasPorTurno(id) {
        this.conectar();
        let resultado = []
        try {
            resultado = await models.Reserva.findAll({
                where: { idTurno: id }
            });
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getReservasPorFecha(f) {
        this.conectar();
        let resultado = []
        try {
            resultado = await models.Reserva.findAll({
                where: { 
                    fecha: f
                }
            });
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postReserva(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Reserva.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteReserva(id) {
        this.conectar();
        let resultado;
        try {
            const reserva = await models.Reserva.findByPk(id);
            if (!reserva) {
                throw new Error(`Reserva con ID ${id} no encontrada`);
            }
            resultado = await reserva.destroy();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionReserva;