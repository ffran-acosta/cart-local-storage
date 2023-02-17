const {Router} = require('express');
const router = Router()

const controller = require('../controller/cart.controller')

//LOCAL DB
router.get('/api/products', controller.products)
//RAILWAT DB
router.get('/api/railway/products', controller.all)

module.exports = router