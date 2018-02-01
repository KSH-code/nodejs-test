const a = {}
const b = {}
for (let i = 0; i < 1000; i++) {
  b[`${i}${i}`] = true
}
console.time('valuesa')
for (let i = 0; i < 10000; i++) {
  Object.values(a)
}
console.timeEnd('valuesa')
console.time('valuesb')
for (let i = 0; i < 10000; i++) {
  Object.values(b)
}
console.timeEnd('valuesb')