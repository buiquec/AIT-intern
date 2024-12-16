const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productId: { type: Number },
    productName: { type: String, required: true},
    image: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, required: true}
})

const Product = mongoose.model('products', productSchema)

module.exports = Product;