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
            console.log('Conexión establecida correctamente.');
        }).catch((error) => {
            console.error('No se pudo conectar a la base de datos:', error);
        });
    }

    desconectar = () => {
        this.db.close().then(() => {
            console.log('Conexión cerrada correctamente.');
        }).catch((error) => {
            console.error('Error al cerrar la conexión:', error);
        });
    }

    async getDepartamentos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Departamento.findAll();
        } catch (error) {
            console.error('Error al obtener departamentos:', error);
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
            console.error('Error al obtener departamento por id:', error);
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
            console.error('Error al crear departamento:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async updateDepartamento(idDepart, body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Departamento.update(body, {
                where: {
                    id: idDepart
                }
            });
        } catch (error) {
            console.error('Error al actualizar departamento:', error);
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
            console.error('Error al eliminar departamento:', error);
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
            console.error('Error al obtener departamentos por jefe:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionDepartamento;