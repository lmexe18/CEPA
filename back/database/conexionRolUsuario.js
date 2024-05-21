require('dotenv').config()
const bcrypt = require('bcrypt');
const {
    Sequelize,
    sequelize,
    Op,
    where
} = require('sequelize');
const models = require('../models/index.js');

class ConexionRolUsuario {
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
        process.on('SIGINT', () => conn.close())
    }

    getRolesUsuarios = async () => {
        let resultado = [];
        try {
            this.conectar();
            resultado = await models.rolAsignados.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    getRolUsuarioPorId = async (id) => {
        let resultado
        try {
            this.conectar();
            resultado = await models.rolAsignados.findByPk(id)
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    getRolesDeUsuario = async (usuarioId) => {
        let resultado = [];
        try {
            this.conectar();
            resultado = await models.Rol.findAll({
                where: {
                    idUsuario: usuarioId
                }
            });
            if (!resultado) {
                throw new Error('error');
            }

        } catch (error) {
        }
        finally {
            this.desconectar()
        }
        return resultado;
    }


    postRolUsuario = async (body) => {
        let resultado;
        this.conectar();
        try {
            const rolAsig = new models.Rol(body);
            await rolAsig.save();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    deleteRolUsuario = async (id) => {
        let resultado;
        try {
            this.conectar();
            resultado = await models.Rol.findByPk(id);
            await resultado.destroy();
        } catch (error) {
        } finally {
            this.desconectar()
        }
    }
}

module.exports = ConexionRolUsuario;