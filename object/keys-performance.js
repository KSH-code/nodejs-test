// Object.keys.forEach: 945.407ms
// for in: 1075.691ms
// Object.keys.forEach: 943.036ms
// for in: 1132.383ms
// Object.keys.forEach: 1006.285ms
// for in: 1105.153ms
// Object.keys.forEach: 1024.584ms
// for in: 1121.574ms
const b = {}
for (let z = 0; z < 10; z++) {
  for (let i = 0; i < 1000; i++) {
    b[`${i}${i}`] = true
  }
  console.time('Object.keys.forEach')
  for (let i = 0; i < 10000; i++) {
    Object.keys(b).forEach(v => v)
  }
  console.timeEnd('Object.keys.forEach')
  console.time('for in')
  for (let i = 0; i < 10000; i++) {
    for (const key in b);
  }
  console.timeEnd('for in')
}