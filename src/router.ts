import { Router } from "express"
import { getAllProducts , createProduct, getProductById } from "./handlers/products"
import { body , param} from "express-validator"
import { handlesInputsErrors } from "./middleware/handleInputsErrors"


const router = Router()

// all los productos
router.get('/' ,  getAllProducts )

// solo el producto seleccionado
router.get('/:id' , 

    // validation
    param('id').isInt().withMessage('seleccion no valida'),
    
    // errores
    handlesInputsErrors,

getProductById)

// crear el producto
router.post('/' , 

    // validation
    body('name')
        .notEmpty().withMessage('El nombre no puede ir vacio'),

    body('price')
        .notEmpty().withMessage('El precio no puede ir Vacio')
        .isNumeric().withMessage('Debe ser un Numero')
        .custom( value => value > 0).withMessage('precio no valido'),

    // errores
    handlesInputsErrors,
    
createProduct )


export default router
