const {Router} = require('express');
const router = Router()

const controller = require('../controller/cart.controller');

//CREATE PRODUCT
router.get('/products/create', controller.create)
router.post('/products/save', controller.save)
//PRODUCT LIST
router.get('/products', controller.all)
//PRODUCT DETAIL
router.get('/products/detail/:id', controller.one)
//EDIT PRODUCT
router.get('/products/edit/:id', controller.edit)
router.put("/products/update/:id", controller.update);
//DELETE PRODUCT
router.delete('/products/delete/:id', controller.remove)


//CART RESUME
router.get('/cart/resume', controller.cart)
//CART LOCALSTORAGE TO BACKEND
router.post('/cart/local-storage', controller.localstg)

module.exports = router