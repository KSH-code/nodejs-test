// test1: 4448.011ms
// test2: 5118.582ms
// test1: 3915.246ms
// test2: 4578.346ms
// test1: 3953.187ms
// test2: 4758.316ms
const moment = require('moment-timezone')
console.time('test1')
for (let i = 0; i < 1e6; i++) moment().tz('ASIA/SEOUL').toISOString()
console.timeEnd('test1')
console.time('test2')
for (let i = 0; i < 1e6; i++) moment.tz('ASIA/SEOUL').toISOString()
console.timeEnd('test2')
console.time('test1')
for (let i = 0; i < 1e6; i++) moment().tz('ASIA/SEOUL').toISOString()
console.timeEnd('test1')
console.time('test2')
for (let i = 0; i < 1e6; i++) moment.tz('ASIA/SEOUL').toISOString()
console.timeEnd('test2')
console.time('test1')
for (let i = 0; i < 1e6; i++) moment().tz('ASIA/SEOUL').toISOString()
console.timeEnd('test1')
console.time('test2')
for (let i = 0; i < 1e6; i++) moment.tz('ASIA/SEOUL').toISOString()
console.timeEnd('test2')