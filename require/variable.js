/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-05 02:18:46
 * @modify date 2017-08-05 02:18:46
 * @desc [declare variable]
 */
var app = require('./app')()
console.time('alpha')
for (i = 0; i < 1000; i++) {
    for (j = 0; j < 1000; j++) {
        app.repeat(i, j)
    }
}
console.timeEnd('alpha')