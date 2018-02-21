// 비슷
console.time('[]')
for (let i = 0; i < 100; i++) {
  const arr = []
  arr.length = 10000000
}
console.timeEnd('[]')
console.time('Array()')
for (let i = 0; i < 100; i++) {
  Array(10000000)
}
console.timeEnd('Array()')
console.time('new Array()')
for (let i = 0; i < 100; i++) {
  new Array(10000000)
}
console.timeEnd('new Array()')