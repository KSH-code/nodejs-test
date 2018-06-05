// lodash: 995.376ms
// my-function: 23.746ms
// lodash: 2032.068ms
// my-function: 1827.195ms

const _ = require('lodash')
function hasDuplicates1(a) {
  return _.uniq(a).length !== a.length;
}
function hasDuplicates2(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) return true;
    }
  }
  return false;
}

var a = [];
for (let i = 0; i < 1e2; i++) a.push(`${i}`)
for (let i = 0; i < 1e2; i++) a.push(`${i}`)

console.time('lodash')
for (let i = 0; i < 1e5; i++) hasDuplicates1(a)
console.timeEnd('lodash')
console.time('my-function')
for (let i = 0; i < 1e5; i++) hasDuplicates2(a)
console.timeEnd('my-function')
var b = [];
for (let i = 0; i < 1e2; i++) b.push(`${i}`)

console.time('lodash')
for (let i = 0; i < 1e5; i++) hasDuplicates1(b)
console.timeEnd('lodash')
console.time('my-function')
for (let i = 0; i < 1e5; i++) hasDuplicates2(b)
console.timeEnd('my-function')