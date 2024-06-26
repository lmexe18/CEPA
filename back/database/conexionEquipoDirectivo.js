require('dotenv').config();
const { Sequelize } = require('sequelize');
const models = require('../models/index.js');

class ConexionEquipoDirectivo {
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
        this.db.close().then(() => {
        }).catch((error) => {
        });
    }

    async getEquiposDirectivos() {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.EquipoDirectivo.findAll();
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async getEquipoDirectivoPorId(id) {
        this.conectar();
        let resultado;
        try {
            let equipoDirectivo = await models.EquipoDirectivo.findByPk(id);
            if (!equipoDirectivo) {
                throw new Error('No se encontró el equipo directivo con el id: ' + id);
            } else {
                resultado = equipoDirectivo;
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async postEquipoDirectivo(body) {
        this.conectar();
        let resultado;
        try {
            resultado = await models.EquipoDirectivo.create(body);
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async updateEquipoDirectivo(id, body) {
        this.conectar();
        let resultado;
        try {
            let equipo = await models.EquipoDirectivo.findByPk(id);
            if (!equipo) {
                throw new Error(`Equipo con ID ${id} no encontrado`);
            } else {
                resultado = await equipo.update(body);
            }
        } catch (error) {
            console.error('Error al actualizar equipo directivo:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    async deleteEquipoDirectivo(id) {
        this.conectar();
        let resultado;
        try {
            let equipoDirectivo = await models.EquipoDirectivo.findByPk(id);
            if (!equipoDirectivo) {
                throw new Error('No se encontró el equipo directivo con el id: ' + id);
            } else {
                resultado = await equipoDirectivo.destroy();
            }
        } catch (error) {
            console.error('Error al eliminar equipo directivo:', error);
        } finally {
            this.desconectar();
        }
        return resultado;
    }
}

module.exports = ConexionEquipoDirectivo;