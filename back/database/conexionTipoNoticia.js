require('dotenv').config();
const { Sequelize } = require('sequelize');
const { TipoNoticia } = require('../models/index.js');

class ConexionTipoNoticia {
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

    async getTiposNoticias() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await TipoNoticia.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getTipoNoticiaPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await TipoNoticia.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postTipoNoticia(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await TipoNoticia.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async putTipoNoticia(id, body) {
        this.conectar();
        let resultado;
        try {
            let tipoNoticia = await TipoNoticia.findByPk(id);
            if (tipoNoticia) {
                await tipoNoticia.update(body);
                resultado = tipoNoticia;
            } else {
                throw new Error('TipoNoticia no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteTipoNoticia(id) {
        this.conectar();
        let resultado;
        try {
            let tipoNoticia = await TipoNoticia.findByPk(id);
            if (tipoNoticia) {
                await tipoNoticia.destroy();
                resultado = { msg: 'TipoNoticia eliminado' };
            } else {
                throw new Error('TipoNoticia no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionTipoNoticia;