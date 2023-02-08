const {Router} = require('express');
const router = Router()

const controller = require('../controller/cart.controller');

router.get('/', controller.test)

module.exports = router