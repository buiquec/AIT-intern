const getAllProducts = require('../service/product-service')

const router = require("express").Router();

// GET ALL
router.get('/', getAllProducts)

// GET BY ID
router.get('/:id', (req, res) => {

})

// POST
router.post('/', (req, res) => {

})

// UPDATE
router.put('/:id', (req, res) => {

})

// DELETE
router.delete('/:id', (req, res) => {

})




module.exports = router
