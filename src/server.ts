// Configuracion del server
import express from 'express'

// instancia del servidor
const server = express()

server.get('/' , ( req , res ) => { 
    res.send('hola mundo x2')
})


server.listen( 4000 , () => { 
    console.log('Desde el puerto 4000')
} )