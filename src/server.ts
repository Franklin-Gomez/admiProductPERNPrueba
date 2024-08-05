// Configuracion del server
import express from 'express'
import router from './router'

// instancia del servidor
const server = express()

server.use('/api/products' , router)

export default server