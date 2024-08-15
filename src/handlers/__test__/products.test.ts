import server from "../../server"
import request from "supertest"

describe('test products endpoints' , () => { 
    
    it('get all products /' ,  async () => { 
        const products = await request(server).get('/api/products/')

        expect(products.status).toBe(200)
        expect(products.headers['content-type']).toMatch(/json/)
        expect( products.body.data[0]).toHaveProperty('name')

        expect(products.status).not.toBe(404)
        
    })

})