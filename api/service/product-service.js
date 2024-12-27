const Product = require('../model/product-schema')

//GET ALL 
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: "error" })
    }
}
//GET BY ID
const getProductById = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.find({ productId: id })
        if (product) {
            return res.status(200).json(product)
        }
        return res.status(404).json({ message: "Not found" })
    } catch (error) {
        res.status(500).json({ message: "error" })
    }
}
//UPDATE BY ID
const updateProductById = async (req, res) => {
    try {
        const id = req.params.id
        const updatedData = req.body
        //const {productName, productPrice, productImage, productType} = updatedData
        const updatedProduct = await Product.findOneAndUpdate(
            { productId: id, },
            updatedData,
            { new: true, runValidators: true , upsert: false}
        )
        if (updatedProduct) {
            return res.status(200).json(updatedProduct)
        }
        return res.status(404).json({ message: "Not found" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "error" })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    updateProductById
}
