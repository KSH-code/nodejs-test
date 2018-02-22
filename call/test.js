function f1 () {
  for (let i = 0; i < 1e+10; i++);
  console.log('f1 end')
}
f1.call(this)
console.log('end')