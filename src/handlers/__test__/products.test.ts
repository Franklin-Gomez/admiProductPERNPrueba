import server from "../../server"
import request from "supertest"


describe('create products' , () => { 
    it('create correct product' , async () => { 
        const product = await request(server).post('/api/products/').send({
            name : "xbox one X",
            price : 200,
            availability : true
        })

        expect(product.status).toBe(200)
        expect(product.header['content-type']).toMatch(/json/)
        expect(product.body).toHaveProperty('id')

    })

    it('create wrong product' , async () => { 
        const product = await  request(server).post('/api/products/').send({})

        expect(product.status).toBe(400)
        expect(product.body).toHaveProperty('errors')
        expect(product.body.errors[0].msg).toMatch('El nombre no puede ir vacio')
    })
})


describe('test products endpoints' , () => { 
    
    it('get all products /' ,  async () => { 
        const products = await request(server).get('/api/products/')

        expect(products.status).toBe(200)
        expect(products.headers['content-type']).toMatch(/json/)
        expect( products.body.data[0]).toHaveProperty('name')

        expect(products.status).not.toBe(404)
        
    })

})

describe( 'get selected product ', () => { 
    it('get the correct products /:id' , async () => { 
        const products = await request(server).get('/api/products/1')
    
        expect(products.status).toBe(200)
        expect(products.headers['content-type']).toMatch(/json/)
        expect(products.body.data).toHaveProperty('id')
        expect(products.body.data.price).toBeGreaterThan( 0 )
       
    })

    it('get the wrong products /:id' , async () => { 
        const products = await request(server).get('/api/products/2000')

        expect(products.status).toBe(400)
        expect(products.body).toHaveProperty('error')
        
    })

    it('id is string and wrong', async () => { 
        const products = await request(server).get('/api/products/hola')

        expect(products.body.errors).toHaveLength(1)
        expect(products.body.errors[0].msg).toMatch('seleccion no valida')
        expect(products.body.errors[0]).toHaveProperty('msg')

    }) 
})


