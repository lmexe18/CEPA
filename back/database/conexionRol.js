require('dotenv').config()
import bcrypt from 'bcrypt';
import { Sequelize, sequelize, Op, where } from 'sequelize';
import { Rol } from '../models/index.js';

class ConexionRol{
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

    getRoles = async () => {
        this.conectar()
        let resultado = [];
        try{
            resultado = await Rol.findAll();          
        }catch(error){
        }finally{
            this.desconectar();
        }
        return resultado;
    }

    getRolPorId = async (id) => {
        this.conectar()
        let resultado 
        try{
            resultado = await Rol.findByPk(id);
        } catch(error){
        } finally {
            this.desconectar()
        }
        return resultado
    }

    postRol = async (body) => {
        this.conectar();
        let resultado
        try {
            const task = new Rol(body);
            await task.save();
            if (task){
                resultado = task
            } else {
                throw new Error ('Error al subir el rol')
            }
        } catch (error) {
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    putRol = async (id,body) => {
        this.conectar()
        let resultado
        try{
            let task = await Rol.findByPk(id);
            await task.update(body)
            if (task){
                resultado = task
            } else {
                throw new Error ('Error al actualizar el rol')
            }
        }catch(error){
        }finally{
            this.desconectar()
        }
        return resultado
    }

    deleteRol = async (id) => {
        this.conectar()
        try{
            let rol = await Rol.findByPk(id);
            if (!rol) {
                throw new Error('No se han encontrado registros')
            } else {
                await rol.destroy();
            }
        }catch(error){
        }finally{
            this.desconectar()
        }
    }
   
}

export default ConexionRol;