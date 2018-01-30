// for: 54.168ms
// forEach: 315.161ms
// for in: 684.577ms
// for of: 352.776ms
console.time('for')
let a = [1, 2, 3, 4, 5]
for (let j = 0; j < 2000000; j++)
  for (let i = 0; i < a.length; i++) a[i]
console.timeEnd('for')
console.time('forEach')
for (let j = 0; j < 2000000; j++)
  a.forEach(a => a)
console.timeEnd('forEach')
console.time('for in')
for (let j = 0; j < 2000000; j++)
  for (let i in a) a[i]
console.timeEnd('for in')
console.time('for of')
for (let j = 0; j < 2000000; j++)
  for (let i of a) i
console.timeEnd('for of')
