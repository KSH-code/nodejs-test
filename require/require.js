/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-05 02:18:18
 * @modify date 2018-03-28
 * @desc [not declare require]
 */
console.time('require')
for (i = 0; i < 1000; i++) {
    for (j = 0; j < 1000; j++) {
        require('./app')(i, j).repeat()
    }
}
console.timeEnd('require')