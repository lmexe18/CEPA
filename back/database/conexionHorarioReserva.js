'use strict';

const { Sequelize } = require('sequelize');
const models = require('../models/index.js');

class ConexionAulaHorario {
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

    async conectar() {
        try {
            await this.db.authenticate();
        } catch (error) {
            throw error;
        }
    }

    desconectar() {
        process.on('SIGINT', () => this.db.close());
    }

    async getAllHorarios() {
        try {
            this.conectar();
            const resultado = await models.AulaHorario.findAll({
                include: [
                    { model: models.AulaFranja, as: 'franja' },
                    { model: models.AulaEspecial, as: 'aula' }
                ]
            });
            return resultado;
        } catch (error) {
            throw error;
        } finally {
            this.desconectar();
        }
    }

    async getAllHorariosOfAula(id) {
        try {
            this.conectar();
            const resultado = await models.AulaHorario.findAll({
                where: { idAula: id },
                include: [
                    { model: models.AulaFranja, as: 'franja' },
                    { model: models.AulaEspecial, as: 'aula' }
                ],
                order: [[{ model: models.AulaFranja, as: 'franja' }, 'orden', 'ASC']]
            });
            return resultado;
        } catch (error) {
            throw error;
        } finally {
            this.desconectar();
        }
    }

    async getHorarioById(id) {
        try {
            this.conectar();
            const resultado = await models.AulaHorario.findByPk(id);
            if (!resultado) {
                throw new Error('No se encontró el horario');
            }
            return resultado;
        } catch (error) {
            throw error;
        } finally {
            this.desconectar();
        }
    }

    async insertHorario(body) {
        try {
            this.conectar();
            const task = await models.AulaHorario.create(body);
            return task.id;
        } catch (error) {
            throw error;
        } finally {
            this.desconectar();
        }
    }

    async getReservaByIdAulaOfDay(id, day, month, year) {
        try {
            this.conectar();
            const fecha = new Date(year, month - 1, day);
            const horarios = await models.AulaHorario.findAll({
                include: [{ model: models.RangoHorario, as: 'rango horario' }],
                where: { idAula: id }
            });
            const idHorarios = horarios.map(horario => horario.id);
            const reservas = await models.AulaReserva.findAll({
                where: { idHorario: idHorarios, fecha: fecha }
            });
            for (const horario of horarios) {
                const reservasDelHorario = reservas.filter(reserva => reserva.idHorario == horario.id);
                horario.dataValues.reservado = reservasDelHorario.length > 0 ? reservasDelHorario[0] : null;
            }
            return horarios;
        } catch (error) {
            throw error;
        } finally {
            this.desconectar();
        }
    }

    async updateHorario(id, body) {
        try {
            this.conectar();
            const task = await models.AulaHorario.findByPk(id);
            await task.update(body);
        } catch (error) {
            throw error;
        } finally {
            this.desconectar();
        }
    }

    async deleteHorario(id) {
        this.conectar();
        let resultado
        try {
            const horario = await models.AulaHorario.findByPk(id);
            if (!resultado) {
                throw new Error('No se encontró el horario');
            }
            resultado = await horario.destroy();
            return resultado;
        } catch (error) {
            throw error;
        } finally {
            this.desconectar();
        }
    }
}

module.exports = ConexionAulaHorario;