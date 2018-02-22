function f1 () {
  for (let i = 0; i < 1e+9; i++);
  console.log('f1 end')
  return true
}
console.log(f1.call(this))
console.log('end')