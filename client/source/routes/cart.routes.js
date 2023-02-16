const {Router} = require('express');
const router = Router()

const controller = require('../controller/cart.controller');

router.get('/products', controller.products)
router.get('/cart/resume', controller.cart)
router.post('/cart/local-storage', controller.test)

module.exports = router