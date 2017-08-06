/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-06 04:51:22
 * @modify date 2017-08-06 04:51:22
 * @desc [global 변수를 사용 안할 시 성능]
 */
console.time('alpha')
var i = 0

function Test() {
    i++
}
for (; i < 1000000000;)
    Test()
console.timeEnd('alpha')