const pool = require('../data/db.client')

module.exports = {
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
}