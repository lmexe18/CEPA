require('dotenv').config();
const { Sequelize } = require('sequelize');
const models = require('../models/index.js');

class ConexionCurso {
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

    async getCursos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Curso.findAll();
        } catch (error) {
            console.error('Error al obtener cursos:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getCursoPorId(id) {
        this.conectar();
        let resultado;
        try {
            let curso = await models.Curso.findByPk(id);
            if (!curso) {
                throw new Error('No se encontró el curso con el id: ' + id);
            } else {
                resultado = curso;
            }
        } catch (error) {
            console.error('Error al obtener curso por id:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getCursosPorTutor(tutorId) {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Curso.findAll({
                where: {
                    idTutor: tutorId
                }
            });
        } catch (error) {
            console.error('Error al obtener cursos por tutor:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getCursosPorTurno(turnoId) {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Curso.findAll({
                where: {
                    idTurno: turnoId
                }
            });
        } catch (error) {
            console.error('Error al obtener cursos por turno:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getCursosPorTipoCurso(tipoCursoId) {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Curso.findAll({
                where: {
                    idTipoCurso : tipoCursoId
                }
            });
        } catch (error) {
            console.error('Error al obtener cursos por tipo de curso:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postCurso(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.Curso.create(body);
        } catch (error) {
            console.error('Error al crear curso:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async updateCurso(id, body) {
        this.conectar();
        let resultado;
        try {
            let curso = await models.AsignaturaProfeCurso.findByPk(id);
            if (!asignaturaProfeCurso) {
                throw new Error(`Curso con ID ${id} no encontrado`);
            } else {
                resultado = await curso.update(body);
            }
        } catch (error) {
            console.error('Error al actualizar curso:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteCurso(id) {
        this.conectar();
        let resultado;
        try {
            let curso = await models.Curso.findByPk(id);
            if (!curso) {
                throw new Error('No se encontró el curso con el id: ' + id);
            } else {
                resultado = await curso.destroy();
            }
        } catch (error) {
            console.error('Error al eliminar curso:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionCurso;