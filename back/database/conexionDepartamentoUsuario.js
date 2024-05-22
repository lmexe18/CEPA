require('dotenv').config();
const { Sequelize } = require('sequelize');
const models = require('../models/index.js');

class ConexionDepartamentoUsuario {
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

    async getDepartamentoUsuarios() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.DepartamentoUsuario.findAll();
        } catch (error) {
            console.error('Error al obtener departamentos_usuarios:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getDepartamentoUsuarioPorId(id) {
        this.conectar();
        let resultado;
        try {
            let departamentoUsuario = await models.DepartamentoUsuario.findByPk(id);
            if (!departamentoUsuario) {
                throw new Error('No se encontró el departamento_usuario con el id: ' + id);
            } else {
                resultado = departamentoUsuario;
            }
        } catch (error) {
            console.error('Error al obtener departamento_usuario por id:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postDepartamentoUsuario(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.DepartamentoUsuario.create(body);
        } catch (error) {
            console.error('Error al crear departamento_usuario:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteDepartamentoUsuario(id) {
        this.conectar();
        let resultado;
        try {
            let departamentoUsuario = await models.DepartamentoUsuario.findByPk(id);
            if (!departamentoUsuario) {
                throw new Error('No se encontró el departamento_usuario con el id: ' + id);
            } else {
                resultado = await departamentoUsuario.destroy();
            }
        } catch (error) {
            console.error('Error al eliminar departamento_usuario:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionDepartamentoUsuario;