const obj1 = {
  a: 1,
  b: 2,
  c: {
    a: 2,
    b: 3
  }
}
const obj2 = {
  a: 1,
  b: 2,
  c: {
    a: 2,
    b: 3
  }
}

function changeToString() {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

function checkAllProperty(obj1, obj2) {
  let obj1Keys = 0
  let obj2Keys = 0
  for (let key in obj1) {
    obj1Keys++
    if (typeof obj1[key] === 'object') {
      if (checkAllProperty(obj1[key], obj2[key]) === false) return false
    } else if (obj2[key] !== obj1[key]) return false
  }
  for (let key in obj2) {
    obj2Keys++
  }
  return obj1Keys === obj2Keys
}

console.time('changeToString')
for(let i = 0; i < 10000000; i++) {
  if (changeToString() === false) console.error('changeToString')
}
console.timeEnd('changeToString')

console.time('checkAllProperty')
for(let i = 0; i < 10000000; i++) {
  if (checkAllProperty(obj1, obj2) === false) console.error('checkAllProperty')
}
console.timeEnd('checkAllProperty')
