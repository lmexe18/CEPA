require('dotenv').config();
const { Sequelize } = require('sequelize');
const models = require('../models/index.js');

class ConexionDepartamento {
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

    conectar = () => {
        this.db.authenticate().then(() => {
     
        }).catch((error) => {
           
        });
    }

    desconectar = () => {
        process.on('SIGINT', () => this.db.close());
    }

    async getDepartamentos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Departamento.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getDepartamentoPorId(id) {
        this.conectar();
        let resultado;
        try {
            let departamento = await models.Departamento.findByPk(id);
            if (!departamento) {
                throw new Error('No se encontró el departamento con el id: ' + id);
            } else {
                resultado = departamento;
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postDepartamento(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Departamento.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async updateDepartamento(id, body) {
        this.conectar();
        let resultado;
        try {
            let departamento = await models.Departamento.findByPk(id);
            if (!departamento) {
                throw new Error(`Departamento con ID ${id} no encontrado`);
            } else {
                resultado = await departamento.update(body);
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteDepartamento(id) {
        this.conectar();
        let resultado;
        try {
            let departamento = await models.Departamento.findByPk(id);
            if (!departamento) {
                throw new Error('No se encontró el departamento con el id: ' + id);
            } else {
                resultado = await departamento.destroy();
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getDepartamentosPorJefe(idJefeDepartamento) {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Departamento.findAll({
                where: {
                    idJefeDepartamento
                }
            });
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionDepartamento;