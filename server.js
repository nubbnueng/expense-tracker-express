const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({
    path: './config/config.env'
})

// routers
const transactions = require('./routes/transactions')
const ping = require('./routes/ping')

const app = express()

// bind routes
app.use('/ping', ping)
app.use('/api/v1/transactions', transactions)


const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold)
);
