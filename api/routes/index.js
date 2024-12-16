const productRoter = require('./product')

const appRoutes = (app) => {
    app.use('/products', productRoter)
}

module.exports = {
    appRoutes
}