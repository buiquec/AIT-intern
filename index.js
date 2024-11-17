const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(express.static(path.join(__dirname, '/frontend')))
app.use(express.static('frontend'))
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/frontend/views/index.html')
})

app.get('/products/:id', (req, res) => {
    res.sendFile(__dirname + '/frontend/views/detail.html')
})

app.get('/cart', (req, res) => {
    res.sendFile(__dirname + '/frontend/views/cart.html')
})

app.listen(4040, () => {
    console.log('====================================');
    console.log('CLient server running on port 4040');
    console.log('====================================');
})