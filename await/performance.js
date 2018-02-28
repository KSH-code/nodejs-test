// await: 2493.119ms
// not use await: 11.171ms
// await: 2474.651ms
// not use await: 11.048ms
(async function () {
  let a = 0
  for (let i = 0; i < 1e+7; i++) {
    await a++
  }
  console.time('await')
  for (let i = 0; i < 1e+7; i++) {
    await a++
  }
  console.timeEnd('await')
  a = 0
  console.time('not use await')
  for (let i = 0; i < 1e+7; i++) {
    a++
  }
  console.timeEnd('not use await')
  console.time('await')
  for (let i = 0; i < 1e+7; i++) {
    await a++
  }
  console.timeEnd('await')
  a = 0
  console.time('not use await')
  for (let i = 0; i < 1e+7; i++) {
    a++
  }
  console.timeEnd('not use await')
})()