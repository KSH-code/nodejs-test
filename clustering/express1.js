const express = require('express')
const app = express()
app.get('/', function (req, res) {
    for (let i = 0; i < 1e8; i++) Math.pow(2, 1000)
    res.end('Hello World')
})
app.listen(3000)
