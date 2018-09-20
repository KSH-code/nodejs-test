// start normal 1e5: 3.474ms
// start call 1e5: 1252.577ms
// start normal 1e5: 2.574ms
// start call 1e5: 1206.439ms
const f = require('./')
console.time('start normal 1e5')
for (let i = 0; i < 1e5; i++) f()
console.timeEnd('start normal 1e5')
console.time('start call 1e5')
for (let i = 0; i < 1e5; i++) require('./')
console.timeEnd('start call 1e5')
console.time('start normal 1e5')
for (let i = 0; i < 1e5; i++) f()
console.timeEnd('start normal 1e5')
console.time('start call 1e5')
for (let i = 0; i < 1e5; i++) require('./')
console.timeEnd('start call 1e5')
