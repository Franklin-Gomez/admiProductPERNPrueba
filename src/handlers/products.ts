import { Request , Response } from "express"
import Prueba from "../models/Products.models"
import { param } from "express-validator"

// get all products
export const getAllProducts = async ( req : Request , res : Response ) => {

    try {
        
        const result = await Prueba.findAll({
            attributes: { exclude : ['createdAt' , 'updatedAt']}
        })

        res.json({ data : result })   

    } catch (error) {

        console.log( error )

    }

}

// get product byId
export const getProductById = async ( req : Request , res : Response ) => { 
    try {

        const product = await Prueba.findByPk( req.params.id )
        
        if( !product ) { 
            return res.status(400).json({ error : "Producto no Encontrado" })
        }

        res.json({ data : product })
       
    } catch (error) {
        console.log( error )
    } 
}


// create producto
export const createProduct =  async ( req : Request , res : Response ) => { 
    
    // fusionando modelo con los datos
    const product = new Prueba( req.body)

    // guardando la informacion en la database
    const productSaved = await product.save()

    // respuesta que mandamos al Client o FronEnt
    res.json( productSaved )
}

// update only availability
export const updateAvailability = ( req : Request , res : Response ) => { 
    res.send('hola mundo x2')   
}

// delete Product
export const deleteProduct = ( req : Request , res : Response ) => { 
    res.send('hola mundo x2')   
}

