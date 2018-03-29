// start
// 1000 request: 888.602ms
// 1000 request: 826.904ms
// 1000 request: 790.191ms
// 1000 request: 13738.517ms
// 1000 request: 5745.081ms
// 1000 request: 546.932ms
// 1000 request: 625.575ms
// 1000 request: 5582.066ms
// 1000 request: 529.407ms
// 1000 request: 536.631ms
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
const http = require('http')
const options = {
    hostname: 'localhost',
    port: 7000
}
;(async function () {
    for (let j = 0; j < 1000; j++) {
        const pl = []
        for (let i = 0; i < 10; i++) {
            pl.push(new Promise((resolve, reject) => {
                const req = http.request(options, function (res) {
                    resolve()
                })
                req.end()
            }))
        }
        await Promise.all(pl)
    }
})()