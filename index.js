const express = require('express')
const app = express();
const cors = require('cors');
const path = require('path')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(express.static(__dirname + '/client/build'))
// /home
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})
app.get('/dashboard', (req, res) => {
    res.sendFile(__dirname + '/public/views/dashboard.html')
})

app.listen(4040, () => {
    console.log('====================================');
    console.log('CLient server running on port 4040');
    console.log('====================================');
})