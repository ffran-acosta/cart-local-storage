//EXPRESS
const express = require('express');
const app = express();
const {join} = require('path')

//HOST
const {port, start} = (require('./modules/server'))
app.listen(port, start())

//EJS
app.set('views', join(__dirname, './views'))
app.set('view engine', 'ejs')

//STATIC
const statics = require('./modules/static')
app.use(statics(join(__dirname, '../public')))

//CORS
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use(require('./routes/cart.routes'))
