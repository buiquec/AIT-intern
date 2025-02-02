const Product = require('../model/product-schema.js')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "error" })
    }
}

module.exports = getAllProducts