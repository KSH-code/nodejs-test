const request = require('request')
async function a() {
  try {
    await new Promise(resolve => {
      request('hasdf', {}, () => {
        throw new Error()
      })
    })
  } catch (err) {
    console.error('err1', err)
  }
}
(async function () {
  try {
    await a()
  } catch (err) {
    console.error('errr', err)
  }
})()
setInterval(function () {
  //서버가꺼찌지않게
}, 100000)