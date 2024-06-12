require('dotenv').config();
const { Sequelize } = require('sequelize');
const { TipoCurso } = require('../models/index.js');

class ConexionTipoCurso {
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

    async getTiposCursos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await TipoCurso.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getTipoCursoPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await TipoCurso.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postTipoCurso(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await TipoCurso.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async putTipoCurso(id, body) {
        this.conectar();
        let resultado;
        try {
            let tipoCurso = await TipoCurso.findByPk(id);
            if (tipoCurso) {
                await tipoCurso.update(body);
                resultado = tipoCurso;
            } else {
                throw new Error('TipoCurso no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteTipoCurso(id) {
        this.conectar();
        let resultado;
        try {
            let tipoCurso = await TipoCurso.findByPk(id);
            if (tipoCurso) {
                await tipoCurso.destroy();
                resultado = { msg: 'TipoCurso eliminado' };
            } else {
                throw new Error('TipoCurso no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionTipoCurso;