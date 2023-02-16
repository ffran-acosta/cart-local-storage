const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'containers-us-west-49.railway.app',
    database: 'railway',
    password: '2Nw9rRVwa7J5GWy10uHM',
    port: 7381
})

module.exports = pool