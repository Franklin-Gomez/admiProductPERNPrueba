import { db } from "./db"
import { exit } from 'node:process'
// limpiar db al hacer test


//exit - detiene la ejecucion de un codigo node.js

const clearDB = async () => { 

    try {
    
        await db.sync({force : true})
        console.log('datos eliminados correctamente')
        exit(0) // finalizo el programa Correctamente
    
    } catch (error) {

        console.log( error )
        exit(1) // finalizo el programa con errores
    }

}

// lo que manda a llamar la funcion 
if( process.argv[2] ===  '--clear') { 
    clearDB()
}