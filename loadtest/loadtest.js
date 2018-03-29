// start
// 1000 request: 1418.051ms
// 1000 request: 1002.275ms
// 1000 request: 999.159ms
// 1000 request: 999.796ms
// 1000 request: 998.768ms
// 1000 request: 1001.313ms
// 1000 request: 998.728ms
// 1000 request: 999.926ms
// 1000 request: 998.841ms
const app = require('express')()
let i = 0
app.get('/', (req, res) => {
    if (i === 0) {
        console.log('start')
        console.time('1000 request')
    }
    i++
    if (i % 1000 === 0) {
        console.timeEnd('1000 request')
        console.time('1000 request')
    }
    res.status(200).end()
})
app.listen(7000)
const loadtest = require('loadtest')
loadtest.loadTest({
    url: 'http://localhost:7000',
    concurrency: 10,
    maxSeconds: 10,
    requestsPerSecond: 1000,
})