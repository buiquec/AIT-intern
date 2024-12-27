const productRouter = require('./product')

const appRoutes = (app) => {
    app.use('/products', productRouter)
}

module.exports = {
    appRoutes
}