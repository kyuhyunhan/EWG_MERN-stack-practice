const express = require('express')
require('dotenv').config()
const cors = require('cors')
const fetchRouter = require('./src/routes/fetch')

const app = express()
const port = process.env.PORT || 3001;

app.use(cors())
app.use('/', fetchRouter)

app.listen(port, function() {
    console.log(`Listening on port ${port}`)
})