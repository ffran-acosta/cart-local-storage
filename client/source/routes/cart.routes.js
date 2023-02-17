const {Router} = require('express');
const router = Router()

const controller = require('../controller/cart.controller');


//PRODUCT LIST
router.get('/products', controller.all)
//PRODUCT DETAIL
router.get('/products/detail/:id', controller.one)


//CART RESUME
router.get('/cart/resume', controller.cart)
//CART LOCALSTORAGE TO BACKEND
router.post('/cart/local-storage', controller.localstg)

module.exports = router