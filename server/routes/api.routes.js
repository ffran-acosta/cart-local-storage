const {Router} = require('express');
const router = Router()

const controller = require('../controller/cart.controller')

router.get('/api/products', controller.products)

module.exports = router