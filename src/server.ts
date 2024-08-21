// Configuracion del server
import express from 'express'
import router from './router'
import { db } from './config/db'
import cors , { CorOptions }from 'cors'

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

let corsOptions : CorOptions = { 
    origin : function ( origin , callback ) { 

        // de donde viene la peticion
        // callback permitir las conexiones

        if ( origin == process.env.FRONT_END_URL  ) { 

            callback( null , true)

        } else { 

          callback( new Error('error de Cors')) 

        }

    }
}


connectDB();

// instancia del servidor
const server = express()

// leer datos del formulario
server.use(express.json())

// use = acepta los http request , Cors = aceptar peticiones ,  routes = rutas de la api
server.use('/api/products' , cors( corsOptions)  , router)

export default server