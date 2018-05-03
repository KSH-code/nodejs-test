
const loadtest = require('loadtest')
loadtest.loadTest({
    url: 'http://localhost:7001/end1',
    concurrency: 1,
    maxSeconds: 1000,
    requestsPerSecond: 500,
})