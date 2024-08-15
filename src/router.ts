import { Router } from "express"
import { getAllProducts , createProduct, getProductById, updateProduct, updateAvailability, deleteProduct } from "./handlers/products"
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

// update todo el producto
router.put('/:id' , 
    
    param('id').isInt().withMessage('seleccion no valida'),

    body('name')
        .notEmpty().withMessage('Debes incluir un nombre'),
    
    body('price')
        .isNumeric().withMessage('Debe ser un numero')
        .notEmpty().withMessage('Debes incluir un precio')
        .custom( value => value > 0).withMessage('precio no valido'),

    body('avalability')
        .isBoolean().withMessage('no es booleano'),

    //errores
    handlesInputsErrors,
    
updateProduct)

// update availability 
router.patch('/:id' , 
    
    param('id').isInt().withMessage('id no valido'),

    handlesInputsErrors,

updateAvailability)

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

// delete products
router.delete('/:id' , 
    
    param('id').isInt().withMessage('Id no valido'),

    handlesInputsErrors,

deleteProduct )


export default router
