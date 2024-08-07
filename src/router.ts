import { Router } from "express"
import { getAllProducts , createProduct } from "./handlers/products"


const router = Router()

router.get('/' , getAllProducts )

router.post('/' , createProduct )


export default router
