'use strict';
const { Sequelize } = require('sequelize');
const alumnoCurso = require('../models/alumnoCurso');
const models = require('../models/index');

class ConexionAsistencia {

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
        this.conectar();
    }

    conectar() {
        this.db.authenticate().then(() => {

        }).catch((error) => {

        });
    }

    desconectar() {
        process.on('SIGINT', () => {
            this.db.close()
                .then(() => {
                    process.exit(0);
                })
                .catch((error) => {

                    process.exit(1);
                });
        });
    }

    async getAlumnosCursos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.AlumnoCurso.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getAlumnoCursoPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.AlumnoCurso.findByPk(id);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getAlumnosDeCurso(cursoId) {
        this.conectar();
        let usuarios = [];
        try {
            usuarios = await models.AlumnoCurso.findAll({
                where: {
                    idCurso: cursoId
                },
                include: [{
                    model: models.Curso,
                    as: 'cursos'
                }]
            });
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return usuarios;
    }

    async getCursosDeAlumno(usuarioId) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.AlumnoCurso.findAll({
                where: {
                    idUsuario: usuarioId
                },
                include: [{
                    model: models.Usuario,
                    as: 'usuario'
                }]
            });
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postAlumnoCurso(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.AlumnoCurso.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async updateAlumnoCurso(id, body) {
        this.conectar();
        let resultado;
        try {
            alumnoCurso = await models.AlumnoCurso.findByPk(id)
            if (!alumnoCurso){
                throw new Error (`Alumno curso con ID ${id} no encontrado`)
            } else {
                resultado = await alumnoCurso.update(body);
            }
        } catch (error){
        } finally {
            this.desconectar()
        }
        return resultado
    }

    async deleteAlumnoCurso(id) {
        this.conectar();
        let resultado;
        try {
            const alumnoCurso = await models.AlumnoCurso.findByPk(id);
            if (!alumnoCurso) {
                throw new Error(`El alumno curso con ID ${id} no ha sido encontrado`);
            }
            resultado = await AlumnoCurso.destroy();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionAsistencia;