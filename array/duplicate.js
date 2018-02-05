// lodash: 389.901ms
// set: 370.254ms
// lodash: 1977.201ms
// set: 1844.545ms
// lodash: 2789.772ms
// set: 2562.229ms
// custom: 718.097ms
const _ = require('lodash')
const arr = []
for (let i = 0; i < 100000; i++) arr.push(0)
console.time('lodash')
for (let i = 0; i < 100; i++) {
  let tempArr = arr.slice()
  _.uniq(arr)
}
console.timeEnd('lodash')
console.time('set')
for (let i = 0; i < 100; i++) {
  let tempArr = arr.slice()
  new Set(arr).entries()
}
console.timeEnd('set')
for (let i = 0; i < 100000; i++) arr.push(i)
console.time('lodash')
for (let i = 0; i < 100; i++) {
  let tempArr = arr.slice()
  _.uniq(arr)
}
console.timeEnd('lodash')
console.time('set')
for (let i = 0; i < 100; i++) {
  let tempArr = arr.slice()
  new Set(arr).entries()
}
console.timeEnd('set')
for (let i = 0; i < 100000; i++) arr.push(0)
console.time('lodash')
for (let i = 0; i < 100; i++) {
  let tempArr = arr.slice()
  _.uniq(tempArr)
}
console.timeEnd('lodash')
console.time('set')
for (let i = 0; i < 100; i++) {
  let tempArr = arr.slice()
  new Set(tempArr).entries()
}
console.timeEnd('set')
console.time('custom')
for (let i = 0; i < 100; i++) {
  let tempObject = {}
  const tempArr = []
  for (let j = 0; j < arr.length; j++) {
    const value = arr[j]
    if (!tempObject[value]) {
      tempArr.push(value)
      tempObject[value] = true
    }
  }
}
console.timeEnd('custom')