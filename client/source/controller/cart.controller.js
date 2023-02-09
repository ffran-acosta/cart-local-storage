const axios = require('axios')

module.exports = {

    products: async (req, res) => {
        try {
            const url = await axios.get(`http://localhost:7009/api/products`)
            const products = await url.data.data
            return res.render('index', {products})
        } catch (err) {
            console.log(err)
        }
    },

    cart: (req, res) => {
        return res.render('cart')
    }
}