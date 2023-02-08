//EXPRESS
const express = require('express')
const server = express()

//CORS
const cors = require('cors')
server.use(cors())
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
//HOST
const {port, start} = require('./modules/server')
server.listen(port, start())

//ROUTES
server.use(require('./routes/api.routes'))