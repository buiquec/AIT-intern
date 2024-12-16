const express = require('express')
const app = express();
const cors = require('cors')
const getAllProducts = require('./service/product-service.js')
const { mongoDBConnect } = require('./config/db.js');
const { appRoutes } = require('./routes/index.js');

const PORT = 9090

// MIDLLEWARE
app.use(cors())

// APP ROUTES
appRoutes(app)


const startServer = async () => {

    await mongoDBConnect()

    app.listen(PORT, () => {
        console.log(`Server connected to port ${PORT}`)
    })
}
startServer()

