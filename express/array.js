// end
// 1
// 2
// 3
// array 로 핸들러를 넣을 수 있고,
// array 안에 array 도 된다.
// 3 차원 배열도 된다.
const express = require('express')
const app = express()

app.get('/', [(req, res, next) => {
  next()
}, (req, res, next) => {
  next()
}, (req, res, next) => {
  console.log('end')
  res.status(200).end()
}])
app.get('/t', [[(req, res, next) => {
  console.log('1')
  next()
}, (req, res, next) => {
  console.log('2')
  next()
}], (req, res, next) => {
  console.log('3')
  res.status(200).end()
}])
app.get('/tt', [[[(req, res, next) => {
  console.log('1')
  next()
}, (req, res, next) => {
  console.log('2')
  next()
}]], (req, res, next) => {
  console.log('3')
  res.status(200).end()
}])

app.listen(7001)