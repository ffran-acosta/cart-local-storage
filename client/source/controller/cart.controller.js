const axios = require('axios')
let lsCart
let productsForCart

module.exports = {

    products: async (req, res) => {
        try {
            const url = await axios.get(`http://localhost:7009/api/products`)
            const products = await url.data.data
            productsForCart = products
            return res.render('index', {products})
        } catch (err) {
            console.log(err)
        }
    },

    localStorage: async (req, res) => {
        try {
            let data = await req.body
            lsCart = data
        } catch (err) {
            console.log(err)
        }
    },

    cart: (req, res) => {
        return res.render('cart', {lsCart, productsForCart})
    }
}