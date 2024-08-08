import { Request , Response } from "express"
import Prueba from "../models/Products.models"
import { param } from "express-validator"
import { where } from "sequelize"

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

// update producto
export const updateProduct = async( req : Request , res : Response) => { 
    try {
        
        // producto que queremos actualizar
        const product = await Prueba.findByPk( req.params.id )

        if( !product ) { 
            return res.status(400).json({error : 'Producto Invalido'})
        }
        
        // nueva informacion
        const newProduct = req.body

        // actualizando el registro de la db con la nueva informacion
        await product.update( newProduct )

        // devolvemos el producto actualizado
        res.status(200).json({ data : product })

    } catch (error) {

        console.log( error )

    }
}

// update only availability
export const updateAvailability = async ( req : Request , res : Response ) => { 
    
    try {
        
        // seleccionamos el elemento
        const product = await Prueba.findByPk( req.params.id )

        // cambiamos la propiedadad
        product.availability = !product.dataValues.availability

        // guardamos esta instancia en la database
        await product.save()

        // devolvemos
        res.status(200).json( product )

    } catch (error) {

        console.log( error )

    }
}

// delete Product
export const deleteProduct = ( req : Request , res : Response ) => { 
    res.send('hola mundo x2')   
}

