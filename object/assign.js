const _ = require('lodash')
const { assign } = require('easily-js')
for (let i = 0; i < 10; i++) {
  console.time('lodash')
  for (let j = 0; j < 10000000; j++) {
    _.defaults({ a: 1 }, { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2 } } } } } })
  }
  console.timeEnd('lodash')
  console.time('Object.assign')
  for (let j = 0; j < 10000000; j++) {
    Object.assign({ a: 1 }, { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2 } } } } } })
  }
  console.timeEnd('Object.assign')
  console.time('easily-js')
  for (let j = 0; j < 10000000; j++) {
    test({ a: 1 }, { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2, c: { a: false, b: 2 } } } } } })
  }
  console.timeEnd('easily-js')
}