import { Request , Response } from "express"

// get all products
export const getAllProducts = async ( req : Request , res : Response ) => { 
    res.send('hola mundo x2')   
}


// get product byId
export const getProductById = ( req : Request , res : Response ) => { 
    res.send('hola mundo x2')   
}


// create producto
export const createProduct = ( req : Request , res : Response ) => { 
    res.send('hola mundo x2')   
}

// update only availability
export const updateAvailability = ( req : Request , res : Response ) => { 
    res.send('hola mundo x2')   
}

// delete Product
export const deleteProduct = ( req : Request , res : Response ) => { 
    res.send('hola mundo x2')   
}

