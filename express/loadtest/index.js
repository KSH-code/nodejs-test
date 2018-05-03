
const express = require('express')
const http = require('http')
const app = express()
app.use((req, res, next) => {
    req.setTimeout(0, () => {
        console.log('f')
    })
    next()
})
app.get('/end1', (req, res) => {
    res.end()
})
app.get('/json1', (req, res) => {
    res.json()
})
app.get('/end2', (req, res) => {
    res.set("Connection", "close")
    res.end()
})
app.get('/json2', (req, res) => {
    res.set("Connection", "close")
    res.json()
})
http.createServer(app).listen(7001)