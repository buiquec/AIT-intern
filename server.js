const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const getAllProducts = require('./public/service/product-service.js')

const uri = 'mongodb://localhost:27017/AIT-intern'
const PORT = 9090

app.use(cors())
async function MongoDBConnect() {
    try {
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connected to Mongoose")
    } catch (error) {
        console.log(error)
    }
}

app.get('/products', getAllProducts)


const startServer = async () => {
    await MongoDBConnect()
    app.listen(PORT, () => {
        console.log(`Server connected to port ${PORT}`)
    })
}
startServer()

