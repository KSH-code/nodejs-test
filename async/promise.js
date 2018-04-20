// asyncFunction: 2380.319ms
// promiseFunction: 2862.054ms
// asyncFunction: 2359.487ms
// promiseFunction: 2865.626ms
async function asyncFunction () {
    return true
}
function promiseFunction () {
    return new Promise(resolve => resolve(true))
}
(async function () {
    for (let i = 0; i < 1e5; i++) await asyncFunction()
    for (let i = 0; i < 1e5; i++) await promiseFunction()
    console.time('asyncFunction')
    for (let i = 0; i < 1e7; i++) await asyncFunction()
    console.timeEnd('asyncFunction')
    console.time('promiseFunction')
    for (let i = 0; i < 1e7; i++) await promiseFunction()
    console.timeEnd('promiseFunction')
    console.time('asyncFunction')
    for (let i = 0; i < 1e7; i++) await asyncFunction()
    console.timeEnd('asyncFunction')
    console.time('promiseFunction')
    for (let i = 0; i < 1e7; i++) await promiseFunction()
    console.timeEnd('promiseFunction')
})()