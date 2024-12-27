const router = require("express").Router();
const { 
    getAllProducts, 
    getProductById, 
    updateProductById 
} = require('../service/product-service')


// GET ALL
router.get('/', getAllProducts)

// GET BY ID
router.get('/:id', getProductById)

// POST
router.post('/', (req, res) => {

})

// UPDATE
router.put('/:id', updateProductById)

// DELETE
router.delete('/:id', (req, res) => {

})


module.exports = router
