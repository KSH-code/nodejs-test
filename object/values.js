const a = {}
const b = {}
for (let i = 0; i < 1000; i++) {
  b[`${i}${i}`] = true
}
console.time('use values for empty object')
for (let i = 0; i < 10000; i++) {
  Object.values(a)
}
console.timeEnd('use values for empty object')
console.time('use values')
for (let i = 0; i < 10000; i++) {
  Object.values(b).join('')
}
console.timeEnd('use values')
console.time('not use values')
for (let i = 0; i < 10000; i++) {
  let count = ''
  for (let key in b) {
    count += b[key]
  }
}
console.timeEnd('not use values')