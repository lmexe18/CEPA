require('dotenv').config();
const { Sequelize } = require('sequelize');
const { Turno } = require('../models/index.js');

class ConexionTurno {
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

    conectar() {
        this.db.authenticate().then(() => {
        }).catch((error) => {
        });
    }

    desconectar() {
        process.on('SIGINT', () => {
            this.db.close().then(() => {
                process.exit(0);
            }).catch((error) => {
                process.exit(1);
            });
        });
    }

    async getTurnos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await Turno.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getTurnoPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await Turno.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postTurno(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await Turno.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async putTurno(id, body) {
        this.conectar();
        let resultado;
        try {
            let turno = await Turno.findByPk(id);
            if (turno) {
                await turno.update(body);
                resultado = turno;
            } else {
                throw new Error('Turno no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteTurno(id) {
        this.conectar();
        let resultado;
        try {
            let turno = await Turno.findByPk(id);
            if (turno) {
                await turno.destroy();
                resultado = { msg: 'Turno eliminado' };
            } else {
                throw new Error('Turno no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionTurno;