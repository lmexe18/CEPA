'use strict';
const { Sequelize } = require('sequelize');
const models = require('../models/index');

class ConexionAsignaturaProfeCurso {

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
            console.log('Conexión establecida correctamente.');
        }).catch((error) => {
            console.error('No se ha podido conectar a la base de datos:', error);
        });
    }

    desconectar() {
        process.on('SIGINT', () => {
            this.db.close()
                .then(() => {
                    console.log('Conexión cerrada correctamente.');
                    process.exit(0);
                })
                .catch((error) => {
                    console.error('Error al cerrar la conexión:', error);
                    process.exit(1);
                });
        });
    }

    async getAsignaturasProfesCursos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.AsignaturaProfeCurso.findAll();
        } catch (error) {
            console.error('Error al obtener las asignaturas, profesores y cursos:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getAsignaturaProfeCursoPorId(id) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.AsignaturaProfeCurso.findByPk(id);
        } catch (error) {
            console.error('Error al obtener la asignatura, profesor y curso por ID:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getInfoDeCurso(cursoId) {
        this.conectar()
        let resultado
        try {
            resultado = await models.AsignaturaProfeCurso.findAll({ where: { idCurso: cursoId } })
        } catch (error) {
            console.error('Error al obtener las asignaturas de un curso:', error)
        } finally {
            this.desconectar()
        }
        return resultado

    }

    async getInfoDeProfesor(usuarioId) {
        this.conectar()
        let resultado
        try {
            resultado = await models.AsignaturaProfeCurso.findAll({ where: { idUsuario: usuarioId } })
        } catch (error) {
            console.error('Error al obtener los cursos de un profesor:', error)
        } finally {
            this.desconectar()
        }
        return resultado
    }

    async getInfoDeAsignatura(asignaturaId) {
        this.conectar()
        let resultado
        try {
            resultado = await models.AsignaturaProfeCurso.findAll({ where: { idAsignatura: asignaturaId } })
        } catch (error) {
            console.error('Error al obtener los cursos de una asignatura:', error)
        } finally {
            this.desconectar()
        }
        return resultado
    }


    async postAsignaturaProfeCurso(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.AsignaturaProfeCurso.create(body);
        } catch (error) {
            console.error('Error al crear la asignatura, profesor y curso:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async updateAsignaturaProfeCurso(id, body) {
        this.conectar();
        let resultado;
        try {
            let asignaturaProfeCurso = await models.AsignaturaProfeCurso.findByPk(id);
            if (!asignaturaProfeCurso) {
                throw new Error(`Asignatura, profesor y curso con ID ${id} no encontrado`);
            } else {
                resultado = await asignaturaProfeCurso.update(body);
            }
        } catch (error) {
            console.error('Error al actualizar la asignatura, profesor y curso:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteAsignaturaProfeCurso(id) {
        this.conectar();
        let resultado;
        try {
            const asignaturaProfeCurso = await models.AsignaturaProfeCurso.findByPk(id);
            if (!asignaturaProfeCurso) {
                throw new Error(`Asignatura, profesor y curso con ID ${id} no ha sido encontrado`);
            }
            resultado = await asignaturaProfeCurso.destroy();
        } catch (error) {
            console.error('Error al eliminar la asignatura, profesor y curso:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionAsignaturaProfeCurso;
