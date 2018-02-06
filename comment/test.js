function a(obj) {
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
  obj.a = 1
  delete obj.a
}function b(obj) {
  obj.a = 1
  delete obj.a
}
const obj = {}
let aTime = Date.now()
for (let z = 0; z < 10; z++) {
  for (let i = 0; i < 10000000; i++)
    a(obj)
}
aTime = -(aTime - Date.now())
let bTime = Date.now()
for (let z = 0; z < 10; z++) {
  for (let i = 0; i < 10000000; i++)
    b(obj)
}
bTime = -(bTime - Date.now())
console.log(aTime)
console.log(bTime)