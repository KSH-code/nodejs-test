console.time('Object.prototype.toString')
for (let i = 0; i < 1e+7; i++) {
  Object.prototype.toString.call('')
  Object.prototype.toString.call(0)
  Object.prototype.toString.call(false)
  Object.prototype.toString.call([])
  Object.prototype.toString.call({})
  Object.prototype.toString.call(function () {})
}
console.timeEnd('Object.prototype.toString')
console.time('typeof')
for (let i = 0; i < 1e+7; i++) {
  const str = typeof ''
  const num = typeof 0
  const bool = typeof false
  const arr = typeof []
  const obj = typeof {}
  const func = typeof function () {}
  if (str === 'object' && typeof ''.length === 'number');
  if (num === 'object' && typeof {}.length === 'number');
  if (bool === 'object' && typeof {}.length === 'number');
  if (arr === 'object' && typeof {}.length === 'number');
  if (obj === 'object' && typeof {}.length === 'number');
  if (func === 'object' && typeof {}.length === 'number');
}
console.timeEnd('typeof')
console.time('Object.prototype.toString')
for (let i = 0; i < 1e+8; i++) {
  Object.prototype.toString.call('')
  Object.prototype.toString.call(0)
  Object.prototype.toString.call(false)
  Object.prototype.toString.call([])
  Object.prototype.toString.call({})
  Object.prototype.toString.call(function () {})
}
console.timeEnd('Object.prototype.toString')
console.time('typeof')
for (let i = 0; i < 1e+8; i++) {
  const str = typeof ''
  const num = typeof 0
  const bool = typeof false
  const arr = typeof []
  const obj = typeof {}
  const func = typeof function () {}
  if (str === 'object' && typeof ''.length === 'number');
  if (num === 'object' && typeof {}.length === 'number');
  if (bool === 'object' && typeof {}.length === 'number');
  if (arr === 'object' && typeof {}.length === 'number');
  if (obj === 'object' && typeof {}.length === 'number');
  if (func === 'object' && typeof {}.length === 'number');
}
console.timeEnd('typeof')