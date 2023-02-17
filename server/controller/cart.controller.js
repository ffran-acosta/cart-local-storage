const pool = require('../data/db.client')
const pooldb = require('../data/dbTestRailway')

module.exports = {
    //LOCAL DB
    products: async (req, res) => {
        try {
            const test = await pool.query('select * from products')
            return res.status(200).json({
                data: test.rows,
                status: 200
            })
        } catch (err) {
            console.log(err)
        }
    },
    //RAILWAT DB
    all: async (req, res) => {
        try {
            const test = await pooldb.query('select * from products')
            return res.status(200).json({
                data: test.rows,
                status: 200
            })
        } catch (err) {
            console.log(err)
        }
    },
}