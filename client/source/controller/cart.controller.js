const axios = require('axios')

let lsCart
let productsForCart

module.exports = {
    //FOR PRODUCT CRUD
    
    all: async (req, res) => {
        try {
            const url = await axios.get(process.env.URL_SERVER_PRODUCTS || `http://localhost:7009/api/products`)
            const products = await url.data.data
            productsForCart = await products
            return res.render('index', {products})
        } catch (err) {
            console.log(err)
        }
    },

    one: async (req, res) => {
        try {
            const url = await axios.get(process.env.URL_SERVER_PRODUCTS || `http://localhost:7009/api/products`)
            const product = await url.data.data.find(x => x.id == req.params.id)
            return res.render('detail', { product })
        } catch (err) {
            console.log(err)
        }
    },

    create: (req, res) => {
        return res.render('create')
    },

    save: (req, res) => {
        return res.redirect('/products')
    },
    edit: (req, res) => {
        res.render('edit')
    },
    update: (req, res) => {

    },
    remove: (req, res) => {

    },


    //FOR CART RESUME
    localstg: async (req, res) => {
        let data = await req.body
        lsCart = data
    },
    cart: async (req, res) => {
        return await res.render('cart', {lsCart, productsForCart})
    }
}