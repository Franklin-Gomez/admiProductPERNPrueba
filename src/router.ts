import { Router } from "express"
import { getAllProducts } from "./handlers/products"


const router = Router()

router.get('/' , getAllProducts )

router.post('/' , ( req , res ) => { 
    res.send('hola mundo desde post')
})

router.put('/' , ( req , res ) => { 
    res.send('hola mundo desde put')
})

export default router
