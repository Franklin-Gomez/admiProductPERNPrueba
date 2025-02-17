import { Response , Request , NextFunction } from "express"
import { validationResult} from "express-validator"

export const handlesInputsErrors = ( req : Request , res : Response , next : NextFunction ) => { 
    let errors = validationResult(req)

    if( !errors.isEmpty() ) {
        return res.status(400).json({errors : errors.array()})
    }

    // si no hay  error pasa al siguiente
    next()
}