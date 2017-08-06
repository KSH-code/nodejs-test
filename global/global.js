/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-06 04:51:45
 * @modify date 2017-08-06 04:51:45
 * @desc [global 변수를 사용할 시 성능]
 */
console.time('alpha')
global.i = 0

function Test() {
    global.i++
}
for (; global.i < 1000000000;)
    Test()
console.timeEnd('alpha')