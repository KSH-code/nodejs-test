// promise.all: 4448.118ms
// await: 4147.248ms
// promise.all: 4153.584ms
// await: 4147.728ms
function promise () {
  return new Promise(resolve => {
    for (let i = 0; i < 1e+9; i++);
    resolve(true)
  })
}
;(async function() {
  for (let j = 0; j < 2; j++) {
    console.time('promise.all')
    const all = []
    for (let i = 0; i < 10; i++) {
      all.push(promise())
    }
    await Promise.all(all)
    console.timeEnd('promise.all')
    console.time('await')
    for (let i = 0; i < 10; i++) {
      await promise()
    }
    console.timeEnd('await')
  }
})()
