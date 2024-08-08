import { Request , Response } from "express"
import Prueba from "../models/Products.models"

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

