/**
 * @author [KSH-Code]
 * @email [tjdgnsqn133@gmail.com]
 * @create date 2017-08-06 03:23:22
 * @modify date 2017-08-06 03:23:22
 * @desc [Promise를 사용 안했을 시]
 */
console.time('alpha')
var pool = require('./mysql')()
for (let i = 0; i < 1000; i++)
    for (let j = 0; j < 100; j++) {
        pool.getConnection((e, con) => {
            con.query('select * from `users`', (e, rs) => {
                if (i === 999 && j === 99)
                    console.timeEnd('alpha')
            })
            con.release()
        })
    }