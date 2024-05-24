'use strict';

const { Sequelize } = require('sequelize');
const models = require('../models/index.js');

class ConexionHorario {
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

    async getHorarios() {
        this.conectar();
        let resultado
        try {
            resultado = await models.Horario.findAll({
                include: [,
                    { model: models.Aula, as: 'aula' },
                    { model: models.Asignatura, as: 'asignatura'},
                    { model: models.Curso, as: 'curso'},
                ]
            });     
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getHorariosDeAula(id) {
        this.conectar();
        let resultado
        try {
            resultado = await models.Horario.findAll({
                where: { idAula: id },
                include: [,
                    { model: models.Aula, as: 'aula' },
                    { model: models.Asignatura, as: 'asignatura'},
                    { model: models.Curso, as: 'curso'},
                ],
            });
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getHorarioPorId(id) {
        this.conectar()
        let resultado
        try {
            let horario = await models.Horario.findByPk(id);
            if (!resultado) {
                throw new Error('No se encontró el horario');
            } else {
                resultado = horario
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postHorario(body) {
        this.conectar();
        let resultado
        try {
            resultado = await models.Horario.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado
    }

    /*async getReservaPorIdAulaOfDay(id, day, month, year) {
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
    }*/

    async getHorarioDeCurso (id){
        this.conectar();
        let resultado
        try {
            let horario = await models.Horario.findAll({
                where:{
                    idCurso:id
                },
                include: [,
                    { model: models.Aula, as: 'aula' },
                    { model: models.Asignatura, as: 'asignatura'},
                    { model: models.Curso, as: 'curso'},
                ]
            })
            if (!horario){
                throw new Error('No se encontraron horarios para el aula')
            } else {
                resultado = horario
            }
        } catch(err){
        } finally{
            this.desconectar();
        }
        return resultado
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

module.exports = ConexionHorario;