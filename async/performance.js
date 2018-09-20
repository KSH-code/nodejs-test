// start 1e7 normal function: 19.208ms
// start 1e7 async function: 2204.621ms
// start 1e7 normal function: 10.368ms
// start 1e7 async function: 2239.562ms
(async function () {
  console.time('start 1e7 normal function')
  for (let i = 0; i < 1e7; i++) a()
  console.timeEnd('start 1e7 normal function')
  console.time('start 1e7 async function')
  for (let i = 0; i < 1e7; i++) await b()
  console.timeEnd('start 1e7 async function')
  console.time('start 1e7 normal function')
  for (let i = 0; i < 1e7; i++) a()
  console.timeEnd('start 1e7 normal function')
  console.time('start 1e7 async function')
  for (let i = 0; i < 1e7; i++) await b()
  console.timeEnd('start 1e7 async function')
})()
function a() {

}
async function b() {

}