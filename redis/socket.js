const redis = require('async-redis')
const client = redis.createClient()
;(async function () {
    for (let i = 0; i < 1e100; i++) await client.keys('*')
})()