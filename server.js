const express = require('express')
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/api/products', (req, res) => {
    res.json(productList)
})

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id
    res.json(productList[id - 1])
})

app.listen(4080, () => {
    console.log('Backend running on port 4080')
})