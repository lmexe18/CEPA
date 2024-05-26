require('dotenv').config();
const bcrypt = require('bcrypt');
const { Sequelize, Op } = require('sequelize');
const { Rol } = require('../models/index.js');

class ConexionRol {
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

    getRoles = async () => {
        this.conectar();
        let resultado = [];
        try {
            resultado = await Rol.findAll();
        } catch (error) {
            console.error('Error al obtener roles:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    getRolPorId = async (id) => {
        this.conectar();
        let resultado;
        try {
            resultado = await Rol.findByPk(id);
        } catch (error) {
            console.error('Error al obtener rol por id:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    postRol = async (body) => {
        this.conectar();
        let resultado;
        try {
            const task = await Rol.create(body);
            if (task) {
                resultado = task;
            } else {
                throw new Error('Error al subir el rol');
            }
        } catch (error) {
            console.error('Error al crear rol:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    putRol = async (id, body) => {
        this.conectar();
        let resultado;
        try {
            let task = await Rol.findByPk(id);
            if (task) {
                await task.update(body);
                resultado = task;
            } else {
                throw new Error('Error al actualizar el rol');
            }
        } catch (error) {
            console.error('Error al actualizar rol:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    deleteRol = async (id) => {
        this.conectar();
        let resultado;
        try {
            let rol = await Rol.findByPk(id);
            if (!rol) {
                throw new Error('No se han encontrado registros');
            } else {
                resultado = await rol.destroy();
            }
        } catch (error) {
            console.error('Error al eliminar rol:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionRol;