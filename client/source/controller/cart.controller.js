const axios = require('axios')

let lsCart
let productsForCart

module.exports = {
    
    products: async (req, res) => {
        try {
            const url = await axios.get(`https://cart-local-storage-production.up.railway.app/api/railway/products`)
            const products = await url.data.data
            productsForCart = await products
            return res.render('index', {products})
        } catch (err) {
            console.log(err)
        }
    },

    test: async (req, res) => {
        let data = await req.body
        lsCart = data
    },

    cart: async (req, res) => {
        return await res.render('cart', {lsCart, productsForCart})
    }
}