const {Router} = require('express');
const router = Router()

const controller = require('../controller/cart.controller')

router.get('/api/products', controller.products)

router.get('/api/railway/products', controller.all)

module.exports = router