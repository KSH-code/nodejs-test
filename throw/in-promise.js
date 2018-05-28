async function a() {
  try {
    await new Promise(resolve => {
      try {
        process.nextTick(function () {
          throw new Error('InternalError: 이미지를 변환중에 에러가 발생하였습니다.')
        })
      } catch (err) {
        console.error('err', err)
      }
    })
  } catch (err) {
    console.error('err1', err)
  }
}
(async function () {
  try {
    await a()
  } catch (err) {
    console.log('error')
    console.log('error')
    console.error(err)
  }
})()
setInterval(function () {
  //서버가꺼찌지않게
}, 100000)