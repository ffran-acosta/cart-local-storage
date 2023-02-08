module.exports = {
    test: async (req, res) => {
        let data = {nombre: 'Rocky', apellido: 'Balboa'}
        return res.status(200).json({
            data: data,
            status: 200
        })
    },
}