const cluster = require('cluster')
const express = require('express')
if (cluster.isMaster) {
    const cpuCount = require('os').cpus().length
    console.log(cpuCount)
    for (var i = 0; i < cpuCount; i++) cluster.fork()
} else {
    const app = express()
    app.get('/', function (req, res) {
        for (let i = 0; i < 1e8; i++) Math.pow(2, 1000)
        res.end('Hello World')
    })
    app.listen(3000)
}