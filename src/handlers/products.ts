import { Request , Response } from "express"
import Prueba from "../models/Products.models"
import { check, validationResult } from "express-validator"

// get all products
export const getAllProducts = async ( req : Request , res : Response ) => {

    res.send('hola mundo x2')   
}


// get product byId
export const getProductById = ( req : Request , res : Response ) => { 
    res.send('hola mundo x2')   
}


// create producto
export const createProduct =  async ( req : Request , res : Response ) => { 
    
    // validation
    await check('name')
        .notEmpty().withMessage('El nombre no puede ir vacio')
        .run(req)

    let errors = validationResult(req)

    if( !errors.isEmpty() ) {
        return res.status(400).json({errors : errors.array()})
    }

    //console.log( req.body)
    const product = new Prueba( req.body)
    const productSaved = await product.save()

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

