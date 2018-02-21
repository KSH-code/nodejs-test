// lodash: 8153.583ms
// easily-js: 8070.439ms
// js: 8156.082ms
// lodash: 8481.140ms
// easily-js: 8105.278ms
// js: 7967.971ms
// lodash: 8127.254ms
// easily-js: 8088.232ms
// js: 7958.146ms
const _ = require('lodash')
for (let z = 0; z < 10; z++) {
  console.time('lodash')

  for (let i = 0; i < 10000; i++) {
    _.fill(Array(100000), 'abab')
  }

  console.timeEnd('lodash')

  console.time('easily-js')

  for (let i = 0; i < 10000; i++) {
    const val = 'abab'
    const arr = []
    arr.length = 100000
    for (let j = 0; j < 100000; j++) {
      arr[j] = val
    }
  }

  console.timeEnd('easily-js')
  console.time('js')

  for (let i = 0; i < 10000; i++) {
    const arr = Array(100000)
    const val = 'abab'
    arr.fill(val)
  }

  console.timeEnd('js')
}