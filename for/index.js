// 데이터가 적을 경우
// for: 54.168ms
// forEach: 315.161ms
// for in: 684.577ms
// for of: 352.776ms
// 데이터가 많을 경우
// for: 39.999ms
// forEach: 213.934ms
// for in: 2546.049ms
// for of: 750.529ms
let a = []
for (let i = 0; i < 100000; i++) a.push(i)
console.time('for')
for (let j = 0; j < 100; j++)
  for (let i = 0; i < a.length; i++) a[i]
console.timeEnd('for')
console.time('forEach')
for (let j = 0; j < 100; j++)
  a.forEach(a => a)
console.timeEnd('forEach')
console.time('for in')
for (let j = 0; j < 100; j++)
  for (let i in a) a[i]
console.timeEnd('for in')
console.time('for of')
for (let j = 0; j < 100; j++)
  for (let i of a) i
console.timeEnd('for of')
