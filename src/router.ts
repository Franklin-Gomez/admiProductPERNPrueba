import { Router } from "express"
import { getAllProducts , createProduct } from "./handlers/products"
import { body } from "express-validator"
import { handlesInputsErrors } from "./middleware/handleInputsErrors"

const router = Router()

router.get('/' ,  getAllProducts )

router.post('/' , 

    // validation
    body('name')
        .notEmpty().withMessage('El nombre no puede ir vacio'),

    // errores
    handlesInputsErrors,
    
createProduct )


export default router
