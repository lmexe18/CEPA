require('dotenv').config()
const bcrypt = require('bcrypt');
const {
    Sequelize,
    sequelize,
    Op,
    where
} = require('sequelize');
const models = require('../models/index.js');

class ConexionNoticia {
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
        process.on('SIGINT', () => this.close())
    }

    getNoticias = async () => {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Noticia.findAll({order:[['createdAt','DESC']]});
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    getNoticiaPorId = async (id) => {
        this.conectar();
        let resultado = [];
        try {
            resultado = await models.Noticia.findByPk(id);
            if (!resultado) {
                throw new Error('error');
            }     
        } catch (error) {
        } finally {
            this.desconectar()
        }
        return resultado;
    }

    getNoticiasPorTipo = async (n) => {
        this.conectar();
        let resultado = [];
        try {
            let resultados = await models.Noticia.findAll({
                    where: {
                        idTipoNoticia: n,
                        publicada:true
                    }, order:[['updatedAt','DESC']]
                }
            );
            if (!resultado) {
                throw new Error('error');
            } else {
                resultado = resultados;
            }  
        } catch (error) {
        } finally {
            this.desconectar()
        }
        return resultado;
    }
    
    postNoticia = async (body) => {
        this.conectar();
        let resultado
        try {
            const noticia = new models.Noticia(body);
            await noticia.save();
            resultado = noticia
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado
       
    }

    deleteNoticia = async (id) => {
        this.conectar();
        try { 
            let noticia = await models.Noticia.findByPk(id);
            if (!noticia) {
                throw error;
            } else {
                await noticia.destroy();
            }
        } catch (error) {
        } finally {
            this.desconectar()
        }
    }
}

module.exports = ConexionNoticia;