const loadtest = require('loadtest')
loadtest.loadTest({
    url: 'http://localhost:3000',
    maxSeconds: 20,
    requestsPerSecond: 500,
    concurrency: 50
}, function () {
    console.dir(arguments)
})