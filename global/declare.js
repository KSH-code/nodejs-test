/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-06 04:59:52
 * @modify date 2017-08-06 04:59:52
 * @desc [global 변수를 선언하고 전역 변수로 받아와서 사용]
 */
console.time('alpha')
global.i = 0
var j = global.i

function Test() {
    j++
}
for (; j < 1000000000;)
    Test()
console.timeEnd('alpha')