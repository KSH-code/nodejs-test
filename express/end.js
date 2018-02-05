// json 보내고 end 가능 에러 x
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ a: 1 }).end()
})

app.listen(7001)
