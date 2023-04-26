const express = require('express')
const bodyParser = require('body-parser')
const route = require('../Nodemongo/route')
const app = express()

app.use('/',route)


app.listen(process.env.PORT || 3000 , function () {
    console.log(`The server is running on port ${process.env.PORT || 3000}`)
})