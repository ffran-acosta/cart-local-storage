const {Router} = require('express');
const router = Router()

const controller = require('../controller/cart.controller')

router.get('/api/test', controller.test)

module.exports = router