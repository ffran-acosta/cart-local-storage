const port = process.env.PORT || 7009
const start = () => { console.log(`Starting server => http://localhost:${port}`)}

module.exports = {port, start}