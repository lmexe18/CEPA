require('dotenv').config();
const { Sequelize } = require('sequelize');
const { TipoAula } = require('../models/index.js');

class ConexionTipoAula {
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

    async getTiposAulas() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await TipoAula.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getTipoAulaPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await TipoAula.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postTipoAula(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await TipoAula.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async putTipoAula(id, body) {
        this.conectar();
        let resultado;
        try {
            let tipoAula = await TipoAula.findByPk(id);
            if (tipoAula) {
                await tipoAula.update(body);
                resultado = tipoAula;
            } else {
                throw new Error('TipoAula no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteTipoAula(id) {
        this.conectar();
        let resultado;
        try {
            let tipoAula = await TipoAula.findByPk(id);
            if (tipoAula) {
                await tipoAula.destroy();
                resultado = { msg: 'TipoAula eliminado' };
            } else {
                throw new Error('TipoAula no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionTipoAula;