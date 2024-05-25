require('dotenv').config();
const { Sequelize } = require('sequelize');
const { Temario } = require('../models/index.js');

class ConexionTemario {
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

    async getTemarios() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await Temario.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getTemarioPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await Temario.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postTemario(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await Temario.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async putTemario(id, body) {
        this.conectar();
        let resultado;
        try {
            let temario = await Temario.findByPk(id);
            if (temario) {
                await temario.update(body);
                resultado = temario;
            } else {
                throw new Error('Temario no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteTemario(id) {
        this.conectar();
        let resultado;
        try {
            let temario = await Temario.findByPk(id);
            if (temario) {
                await temario.destroy();
                resultado = { msg: 'Temario eliminado' };
            } else {
                throw new Error('Temario no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionTemario;