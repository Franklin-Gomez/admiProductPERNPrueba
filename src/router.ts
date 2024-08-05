import { Router } from "express"

const router = Router()

router.get('/' , ( req , res ) => { 
    res.send('hola mundo x2')
})

router.post('/' , ( req , res ) => { 
    res.send('hola mundo desde post')
})

router.put('/' , ( req , res ) => { 
    res.send('hola mundo desde put')
})

export default router
