const port = process.env.PORT || 7010
const start = () => { console.log(`Server starting => http://localhost:${port}/products`)}

module.exports = {port, start}