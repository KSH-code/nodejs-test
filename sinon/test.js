// test
// 1
// 1
const sinon = require('sinon')
const test = {
    print (obj) {
        console.log(obj)
    }
}
test.print('test')
const value = sinon.fake.returns(1)
sinon.replace(test, 'print', value)
console.log(test.print('test'))
console.log(test.print('test'))