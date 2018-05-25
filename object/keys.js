// keysa: 0.311ms
// keysb: 905.451ms
const a = {}
const b = {}
for (let i = 0; i < 1000; i++) {
  b[`${i}${i}`] = true
}
console.time('keysa')
for (let i = 0; i < 10000; i++) {
  Object.keys(a)
}
console.timeEnd('keysa')
console.time('keysb')
for (let i = 0; i < 10000; i++) {
  Object.keys(b)
}
console.timeEnd('keysb')