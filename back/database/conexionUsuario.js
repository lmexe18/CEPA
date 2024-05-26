require('dotenv').config();
const bcrypt = require('bcrypt');
const { Sequelize, Op } = require('sequelize');
const { Usuario, RolUsuario, Rol } = require('../models/index.js');

class ConexionUsuario {
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

    async getUsuarios() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await Usuario.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getUsuarioPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await Usuario.findByPk(id);
            if (!resultado) {
                throw new Error('Usuario no encontrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postUsuario(body) {
        this.conectar();
        let resultado;
        try {
            const password = await bcrypt.hash(body.password, 10);
            const usuarioNuevo = new Usuario(body);
            usuarioNuevo.password = password;
            await usuarioNuevo.save();
            resultado = usuarioNuevo
        } catch (error) {
            if (error instanceof Sequelize.UniqueConstraintError) {
                throw new Error('El email ya está registrado');
            } else {
                throw new Error ('Error en el registro '+error)
            }
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteUsuario(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await Usuario.findByPk(id);
            if (!resultado) {
                throw new Error('Usuario no encontrado');
            }
            await resultado.destroy();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async putUsuario(id, body) {
        this.conectar();
        let resultado;
        try {
            const usuario = await Usuario.findByPk(id);
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }
            resultado = await usuario.update(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async checkLogin(email) {
        this.conectar();
        let userEncontrado;
        try {
            userEncontrado = await Usuario.findOne({
                where: { email }
            });
            if (!userEncontrado) {
                throw new Error('Email no registrado');
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return userEncontrado;
    }

    async getRolUsuarioPorId(idU) {
        this.conectar();
        let resultado;
        try {
            resultado = await Usuario.findOne({
                attributes: ['id', 'nombre', 'email', 'createdAt', 'updatedAt'],
                where: { id: { [Op.eq]: idU } },
                include: [
                    {
                        model: RolUsuario,
                        as: 'roles usuario',
                        include: [
                            {
                                model: Rol,
                                as: 'rol',
                                attributes: ['nombre'],
                            },
                        ],
                        attributes: ['id'],
                    },
                ],
            });
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionUsuario