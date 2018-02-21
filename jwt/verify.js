const jwt = require('jsonwebtoken')
try {
  jwt.verify('asdbasdb.asbasdbasdb.asdb', 'asdgsadgsadg')
} catch (err) {
  jwt.verify('asdbasdb.asbasdbasdb.asdb', 'asdgsadgsadg') // 여기서 throw
  console.error(err)
}