// async function 은 promise type 이 되서 반환된다.
// promise function 안에서 throw 할 시 .catch 로 밖에 못 잡는다.
const express = require('express')
const app = express()

app.get('/', () => {
  throw '1'
})
app.get('/a', () => {
  a().then(() => {
    console.log('then')
  }, (err) => {
    throw err
  }).catch(err => {
    throw err
  })
  async function a () {
    throw '2'
  }
})
app.use((err, req, res, next) => {
  console.log(err)
})
app.all('/', (err) => {
  console.log(err)
})
app.all('/a', (err) => {
  console.log(err)
})

app.listen(7001)