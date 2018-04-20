// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
// [ 0, 2, 3, 4 ]
// [ 0, 2, 3, 4 ]
// [ 0, 2, 3, 4 ]
// [ 1, 2, 3 ]
// [ 1000, 2, 3, 1 ]
const a = [1, 2, 3]
let b = a
console.log(a)
console.log(b)
a.push(4)
a[0] = 0
console.log(a)
console.log(b)
b = [1, 2, 3]
console.log(a)
console.log(b)
function c (x) {
    x[0] = 1000
    x.push(1)
}
c(b)
console.log(b)