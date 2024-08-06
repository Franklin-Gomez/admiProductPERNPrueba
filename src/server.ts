// Configuracion del server
import express from 'express'
import router from './router'
import { db } from './config/db'

// conectar a db
export const connectDB = async () => { 
    try {
        await db.authenticate();
        db.sync() // sincronizacion los modelos en automatico
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        console.log( 'conexion errronea')
    }
}

connectDB();

// instancia del servidor
const server = express()

server.use('/api/products' , router)

export default server