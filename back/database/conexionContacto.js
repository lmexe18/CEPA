require('dotenv').config();
const { Sequelize } = require('sequelize');
const models = require('../models/index.js');

class ConexionContacto {
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

    async getContactos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Contacto.findAll();
        } catch (error) {
            console.error('Error al obtener contactos:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getContactoPorId(id) {
        this.conectar();
        let resultado;
        try {
            let contacto = await models.Contacto.findByPk(id);
            if (!contacto) {
                throw new Error('No se encontró el contacto con el id: ' + id);
            } else {
                resultado = contacto;
            }
        } catch (error) {
            console.error('Error al obtener contacto por id:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postContacto(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Contacto.create(body);
        } catch (error) {
            console.error('Error al crear contacto:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async updateContacto(id, body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Contacto.update(body, {
                where: {
                    id
                }
            });
        } catch (error) {
            console.error('Error al actualizar contacto:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteContacto(id) {
        this.conectar();
        let resultado;
        try {
            let contacto = await models.Contacto.findByPk(id);
            if (!contacto) {
                throw new Error('No se encontró el contacto con el id: ' + id);
            } else {
                resultado = await contacto.destroy();
            }
        } catch (error) {
            console.error('Error al eliminar contacto:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionContacto;