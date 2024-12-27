const express = require('express')
const app = express();
const cors = require('cors')
const { mongoDBConnect } = require('./config/db')
const { appRoutes } = require('./routes');

const PORT = 9090

app.use(cors())
app.use(express.json())

appRoutes(app)


const startServer = async () => {
    await mongoDBConnect()
    app.listen(PORT, () => {
        console.log(`Server connected to port ${PORT}`)
    })
}
startServer()

