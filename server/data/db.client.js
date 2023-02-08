const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cart-02-23',
    password: 'postgres',
    port: 5432
})

module.exports = pool