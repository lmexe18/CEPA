require('dotenv').config();
const { Sequelize } = require('sequelize');
const { TipoEvento } = require('../models/index.js');

class ConexionTipoEvento {
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

    async getTiposEventos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await TipoEvento.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getTipoEventoPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await TipoEvento.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postTipoEvento(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await TipoEvento.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async putTipoEvento(id, body) {
        this.conectar();
        let resultado;
        try {
            let tipoEvento = await TipoEvento.findByPk(id);
            if (tipoEvento) {
                await tipoEvento.update(body);
                resultado = tipoEvento;
            } else {
                throw new Error('TipoEvento no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteTipoEvento(id) {
        this.conectar();
        let resultado;
        try {
            let tipoEvento = await TipoEvento.findByPk(id);
            if (tipoEvento) {
                await tipoEvento.destroy();
                resultado = { msg: 'TipoEvento eliminado' };
            } else {
                throw new Error('TipoEvento no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionTipoEvento;