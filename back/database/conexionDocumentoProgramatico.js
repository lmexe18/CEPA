require('dotenv').config();
const { Sequelize } = require('sequelize');
const models = require('../models/index.js');

class ConexionDocumentoProgramatico {
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

    async getDocumentosProgramaticos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.DocumentoProgramatico.findAll();
        } catch (error) {
            console.error('Error al obtener documentos programáticos:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getDocumentoProgramaticoPorId(id) {
        this.conectar();
        let resultado;
        try {
            let documentoProgramatico = await models.DocumentoProgramatico.findByPk(id);
            if (!documentoProgramatico) {
                throw new Error('No se encontró el documento programático con el id: ' + id);
            } else {
                resultado = documentoProgramatico;
            }
        } catch (error) {
            console.error('Error al obtener documento programático por id:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postDocumentoProgramatico(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.DocumentoProgramatico.create(body);
        } catch (error) {
            console.error('Error al crear documento programático:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async updateDocumentoProgramatico(idDoc, body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.DocumentoProgramatico.update(body, {
                where: {
                    id: idDoc
                }
            });
        } catch (error) {
            console.error('Error al actualizar departamento:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteDocumentoProgramatico(id) {
        this.conectar();
        let resultado;
        try {
            let documentoProgramatico = await models.DocumentoProgramatico.findByPk(id);
            if (!documentoProgramatico) {
                throw new Error('No se encontró el documento programático con el id: ' + id);
            } else {
                resultado = await documentoProgramatico.destroy();
            }
        } catch (error) {
            console.error('Error al eliminar documento programático:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionDocumentoProgramatico;